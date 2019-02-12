using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SmashTiers.DataAccess;
using Microsoft.Extensions.Configuration;

namespace SmashTiers.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TierListController : ControllerBase
    {
        private readonly TierListAccess _storage;

        public TierListController(IConfiguration config)
        {
            _storage = new TierListAccess(config);
        }

        [HttpGet("{id}")]
        public IActionResult GetTierlist(int id)
        {
            return Ok(_storage.GetTierListById(id));
        }
    }
}