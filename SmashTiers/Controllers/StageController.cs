﻿using System;
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
    public class StageController : ControllerBase
    {
        private readonly StageAccess _storage;

        public StageController(IConfiguration config)
        {
            _storage = new StageAccess(config);
        }

        [HttpGet]
        public IActionResult GetStages()
        {
            return Ok(_storage.GetAllStages());
        }

        [HttpGet("{id}")]
        public IActionResult GetStageByID(int id)
        {
            return Ok(_storage.GetStageById(id));
        }
    }
}