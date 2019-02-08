using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using SmashTiers.DataAccess;
using SmashTiers.Models;

namespace SmashTiers.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CharacterController : ControllerBase
    {
        private readonly CharacterAccess _storage;

        public CharacterController(IConfiguration config)
        {
            _storage = new CharacterAccess(config);
        }

        [HttpGet]
        public IActionResult GetCharacters()
        {
            return Ok(_storage.GetAllCharacters());
        }

        [HttpGet("{id}")]
        public IActionResult GetCharacterById(int id)
        {
            return Ok(_storage.GetCharacterById(id));
        }

        [HttpGet("heaviest")]
        public IActionResult GetCharacterByHeaviest()
        {
            return Ok(_storage.SortByHeaviest());
        }
    }
}