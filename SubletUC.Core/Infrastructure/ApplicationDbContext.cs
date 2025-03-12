// using Microsoft.EntityFrameworkCore;
// using SubletUC.Core.Models;
// using SubletUC.Core.Models.Account;
// using SubletUC.Server.Models;


// namespace SubletUC.Core.Infrastructure
// {
//     public class SubletUCContext(DbContextOptions options) : (options)
//     {
//         public DbSet<ApplicationUser> Users  { get; set; }

//         public DbSet<Listing> Listings { get; set; }
//         protected void OnModelCreating(ModelBuilder builder)
//         {
//             base.OnModelCreating(builder);
//             const string priceDecimalType = "decimal(18,2)";
//             const string tablePrefix = "App";

            
//             builder.Entity<ApplicationRole>()
//                 .HasMany(r => r.Claims)
//                 .WithOne()
//                 .HasForeignKey(c => c.RoleId)
//                 .IsRequired()
//                 .OnDelete(DeleteBehavior.Cascade);
//         }

//         // public override int SaveChanges()
//         // {
//         //     AddAuditInfo();
//         //     return base.SaveChanges();
//         // }

//         // public override int SaveChanges(bool acceptAllChangesOnSuccess)
//         // {
//         //     AddAuditInfo();
//         //     return base.SaveChanges(acceptAllChangesOnSuccess);
//         // }

//         // public override Task<int> SaveChangesAsync(CancellationToken cancellationToken = default)
//         // {
//         //     AddAuditInfo();
//         //     return base.SaveChangesAsync(cancellationToken);
//         // }

//         // public override Task<int> SaveChangesAsync(bool acceptAllChangesOnSuccess,
//         //     CancellationToken cancellationToken = default)
//         // {
//         //     AddAuditInfo();
//         //     return base.SaveChangesAsync(acceptAllChangesOnSuccess, cancellationToken);
//         // }

//         // private void AddAuditInfo()
//         // {
//         //     var currentUserId = userIdAccessor.GetCurrentUserId();

//         //     var modifiedEntries = ChangeTracker.Entries()
//         //         .Where(x => x.Entity is IAuditableEntity &&
//         //                    (x.State == EntityState.Added || x.State == EntityState.Modified));

//         //     foreach (var entry in modifiedEntries)
//         //     {
//         //         var entity = (IAuditableEntity)entry.Entity;
//         //         var now = DateTime.UtcNow;

//         //         if (entry.State == EntityState.Added)
//         //         {
//         //             entity.CreatedDate = now;
//         //             entity.CreatedBy = currentUserId;
//         //         }
//         //         else
//         //         {
//         //             base.Entry(entity).Property(x => x.CreatedBy).IsModified = false;
//         //             base.Entry(entity).Property(x => x.CreatedDate).IsModified = false;
//         //         }

//         //         entity.UpdatedDate = now;
//         //         entity.UpdatedBy = currentUserId;
//         //     }
//         // }
//     }
// }


using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
namespace SubletUC.Data.Classes;

using SubletUC.Core.Models;
using SubletUC.Core.Models.Account;
using SubletUC.Server.Models;

public class SubletUCContext : DbContext
{
    private int? userId;

    public void setUserId(int? value)
    {
        userId = value;
    }
    public SubletUCContext(DbContextOptions<SubletUCContext> options) : base(options) { }
    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        // Configure Listing and Roommate relationship
        modelBuilder.Entity<Listing>()
            .HasMany(l => l.Roommates)
            .WithOne(r => r.Listing)
            .HasForeignKey(r => r.ListingId)
            .OnDelete(DeleteBehavior.Cascade);
        // Store Roommate Gender as an integer
        modelBuilder.Entity<Roommate>()
            .Property(r => r.Gender)
            .HasConversion<int>(); // Store enums as integers
        // Store User Role as an integer
        modelBuilder.Entity<ApplicationUser>()
            .Property(u => u.Roles)
            .HasConversion<int>(); // Store enums as integers
    }
    // Define DbSet properties for your entities
    public DbSet<Listing> Listings { get; set; }
    public DbSet<Roommate> Roommates { get; set; }
    public DbSet<ApplicationUser> Users { get; set; }

    private void SetChangeData()
        {
            this.ChangeTracker.DetectChanges();

            var added = this.ChangeTracker.Entries()
                .Where(x => x.State == EntityState.Added)
                .Select(x => x.Entity)
                .ToArray();

            // foreach (var entity in added)
            // {
            //     if (entity is IAuditableEntity)
            //     {
            //         var hist = entity as IAuditableEntity;
            //         hist.CreatedAt = SystemClock.Instance.GetCurrentInstant();
            //         hist.CreatorId = userId;
            //     }
            // }

            var modified = this.ChangeTracker.Entries()
                .Where(x => x.State == EntityState.Modified)
                .Select(x => x.Entity)
                .ToArray();

            // foreach (var entity in modified)
            // {
            //     if (entity is History)
            //     {
            //         var hist = entity as History;

            //         if (hist.Deleted)
            //         {
            //             hist.DeletedAt = SystemClock.Instance.GetCurrentInstant();
            //             hist.DeletedById = userId;
            //         }
            //     }
            // }
        }

        public override int SaveChanges()
        {
            SetChangeData();

            return base.SaveChanges();
        }
}
