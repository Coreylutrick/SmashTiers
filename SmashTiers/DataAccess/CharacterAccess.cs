using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Data.SqlClient;
using Microsoft.Extensions.Configuration;
using Dapper;
using SmashTiers.Models;

namespace SmashTiers.DataAccess
{
    public class CharacterAccess
    {
        private string connectionString;

        public CharacterAccess(IConfiguration config)
        {
            connectionString = config.GetSection("ConnectionString").Value;
        }

        public IEnumerable<Character> GetAllCharacters()
        {
            using (var connection = new SqlConnection(connectionString))
            {
                connection.Open();

                var result = connection.Query<Character>(@"select c.Picture
                                                            from Character as c");
                return result;
            }
        }

        public IEnumerable<SingleCharacter> GetCharacterById(int id)
        {
            using (var connection = new SqlConnection(connectionString))
            {
                connection.Open();

                var result = connection.Query<SingleCharacter>(@"select *
                                                            from Character as c
                                                            join  MoveSetDamageData as msd
                                                            on c.Id = msd.CharacterId
                                                            join MoveSetFrameData as msf
                                                            on msd.CharacterId = msf.CharacterId
                                                            where c.Id = @id", new { id });

                return result;
            }
        }
    }
}
