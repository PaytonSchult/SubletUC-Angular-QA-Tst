using Microsoft.AspNetCore.Mvc;
using SubletUC.Server.Models;

namespace SubletUC.Server.Controllers
{
    [Route("api/[controller]")]
    public class ListingController : ControllerBase
    {
        private readonly SubletUCContext _context;
       public ListingController(SubletUCContext context)
        {
            _context = context;
        }

        public ICollection<Listing> GetListings() 
        {
            return _context.Listings
                .Where(x => !x.Deleted)
                .ToList();
        }

        public Listing GetListingById(int listingId)
        {
            return _context.Listings.Where(x => x.ListingId == listingId).FirstOrDefault() ?? new Listing();
        }

        public void CreateOrUpdateListing(Listing listing)
        {
            if (listing.ListingId == 0)
            {
                _context.Add(listing);
            }
            else 
            {
                var listingToChange = _context.Listings.Where(x => x.ListingId == listing.ListingId).FirstOrDefault();
                listingToChange = listing;
            }
            _context.SaveChanges();
        }

        public void  DeleteListing(int listingId)
        {
            var listingToChange = _context.Listings.Where(x => x.ListingId == listingId).FirstOrDefault();
            if (listingToChange == null) return;
            listingToChange.Deleted = true;
            _context.SaveChanges();
        }
    }
}
