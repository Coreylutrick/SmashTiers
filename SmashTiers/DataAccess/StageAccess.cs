﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Data.SqlClient;
using Microsoft.Extensions.Configuration;
using Dapper;
using SmashTiers.Models;

namespace SmashTiers.DataAccess
{
    public class StageAccess
    {
        private string connectionString;

        public StageAccess(IConfiguration config)
        {
            connectionString = config.GetSection("ConnectionString").Value;
        }

        public IEnumerable<StageSplash> GetAllStages()
        {
            using (var connection = new SqlConnection(connectionString))
            {
                connection.Open();

                var result = connection.Query<StageSplash>(@"select s.Picture, s.Id
                                                        from Stages as s");

                return result;
            }
        }

        public IEnumerable<Stage> GetStageById(int id)
        {
            using (var connection = new SqlConnection(connectionString))
            {
                connection.Open();

                var result = connection.Query<Stage>(@"select *
                                                        from Stages as s
                                                        where s.Id = @id", new { id });
                return result;
            }
        }

        public IEnumerable<Stage> GetStageByLeastPlatforms()
        {
            using (var connection = new SqlConnection(connectionString))
            {
                connection.Open();

                var result = connection.Query<Stage>(@"select *
                                                        from Stages
                                                        ORDER BY Platforms");

                return result;
            }
        }

        public IEnumerable<Stage> GetStageByMostPlatforms()
        {
            using (var connection = new SqlConnection(connectionString))
            {
                connection.Open();

                var result = connection.Query<Stage>(@"select *
                                                        from Stages
                                                        ORDER BY Platforms DESC");

                return result;
            }
        }

        public IEnumerable<Stage> GetTournamentLegalStage()
        {
            using (var connection = new SqlConnection(connectionString))
            {
                connection.Open();

                var result = connection.Query<Stage>(@"select *
                                                        from Stages
                                                        where TournamentLegal = 1");

                return result;
            }
        }

        public IEnumerable<Stage> GetTournamentNotLegalStage()
        {
            using (var connection = new SqlConnection(connectionString))
            {
                connection.Open();

                var result = connection.Query<Stage>(@"select *
                                                        from Stages
                                                        where TournamentLegal = 0");

                return result;
            }
        }

    }
}
