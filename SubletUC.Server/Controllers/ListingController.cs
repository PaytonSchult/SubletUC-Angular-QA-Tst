using Microsoft.AspNetCore.Mvc;
using SubletUC.Server.Models;

namespace SubletUC.Server.Controllers
{
    [Route("api/[controler")]
    public class ListingController : ControllerBase
    {
        private readonly SubletUCContext _context;
       public ListingController(SubletUCContext context)
        {
            _context = context;
        }
    }
}
