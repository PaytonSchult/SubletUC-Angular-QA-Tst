using Microsoft.EntityFrameworkCore;

namespace SubletUC.Server.Models
{
    public partial class SubletUCContext : DbContext
    {
        public SubletUCContext() { }

        public SubletUCContext(DbContextOptions<SubletUCContext> options) : base(options)
        {

        }

        public virtual DbSet<Listing> Listings { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            // Configure the Listing entity
            modelBuilder.Entity<Listing>(entity =>
            {
                // Set the primary key
                entity.HasKey(e => e.ListingId);

                // Configure properties
                entity.Property(e => e.ListingId)
                      .ValueGeneratedOnAdd(); // Assuming ListingId is auto-generated

                entity.Property(e => e.Address)
                      .HasMaxLength(255); // Set a maximum length for the Address

                entity.Property(e => e.Rent)
                      .HasColumnType("decimal(18, 2)"); // Set precision and scale for Rent

                entity.Property(e => e.Availability)
                      .HasMaxLength(100); // Set a maximum length for Availability

                entity.Property(e => e.Description)
                      .HasMaxLength(1000); // Set a maximum length for Description

                entity.Property(e => e.AverageUtilities)
                      .HasColumnType("decimal(18, 2)"); // Set precision and scale for AverageUtilities

                entity.Property(e => e.DistanceFromCampus)
                      .HasColumnType("decimal(18, 2)"); // Set precision and scale for DistanceFromCampus

                entity.Property(e => e.Notes)
                      .HasMaxLength(1000); // Set a maximum length for Notes

                // Configure the Photo property to be stored as a varbinary in the database
                entity.Property(e => e.Photo)
                      .HasColumnType("varbinary(max)");

                // Configure the relationship with Roommates
                entity.HasMany(e => e.Roommates)
                      .WithOne() // Assuming Roommate has a navigation property back to Listing
                      .HasForeignKey("ListingId") // Assuming Roommate has a foreign key to Listing
                      .OnDelete(DeleteBehavior.Cascade); // Cascade delete if Listing is deleted

                // Configure indexes (optional)
                entity.HasIndex(e => e.Address); // Index on Address
                entity.HasIndex(e => e.Rent); // Index on Rent
                entity.HasIndex(e => e.DistanceFromCampus); // Index on DistanceFromCampus

                // Configure default values (optional)
                entity.Property(e => e.UtilitiesIncludedInRent)
                      .HasDefaultValue(false); // Default value for UtilitiesIncludedInRent

                entity.Property(e => e.SharedRoom)
                      .HasDefaultValue(false); // Default value for SharedRoom

                entity.Property(e => e.CatsAndDogsAllowed)
                      .HasDefaultValue(false); // Default value for CatsAndDogsAllowed

                entity.Property(e => e.WasherDryer)
                      .HasDefaultValue(false); // Default value for WasherDryer

                entity.Property(e => e.OffStreetParking)
                      .HasDefaultValue(false); // Default value for OffStreetParking

                entity.Property(e => e.Driveway)
                      .HasDefaultValue(false); // Default value for Driveway

                entity.Property(e => e.Deleted)
                      .HasDefaultValue(false); // Default value for Deleted
            });

            // Call the partial method for any additional configurations
            OnModelCreatingPartial(modelBuilder);
        }
        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
