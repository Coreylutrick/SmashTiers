using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SmashTiers.Models;
using SmashTiers.DataAccess;
using Microsoft.Extensions.Configuration;

namespace SmashTiers.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly UserAccess _storage;

        public UserController(IConfiguration config)
        {
            _storage = new UserAccess(config);
        }

        [HttpPost("addUser")]
        public IActionResult AddNewUser(User user)
        {
            return Ok(_storage.AddUser(user));
        }

    }
}