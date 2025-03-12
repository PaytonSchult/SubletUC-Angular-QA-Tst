using Microsoft.AspNetCore.Identity;

namespace SubletUC.Core.Models.Account
{
    public class ApplicationUser : IdentityUser, IAuditableEntity
    {
        public string? FullName { get; set; }
        public bool IsActive { get; set; }
        public bool IsLockedOut => LockoutEnabled && LockoutEnd >= DateTimeOffset.UtcNow;
        public string? CreatedBy { get; set; }
        public string? UpdatedBy { get; set; }
        public DateTime CreatedDate { get; set; }
        public DateTime UpdatedDate { get; set; }
        public ICollection<IdentityUserRole<string>> Roles { get; } = [];
    }
}
