using SubletUC.Server.Models.Enums;
using System.Reflection;

namespace SubletUC.Server.Models
{
    public class Roommate
    {
        public int RoommateId { get; set; }
        public int? Year { get; set; }
        public Gender Gender { get; set; }
        public int ListingId { get; set; }
        public Listing? Listing { get; set; }
    }
}
