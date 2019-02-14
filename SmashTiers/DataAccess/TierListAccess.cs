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
    public class TierListAccess
    {
        private string connectionString;

        public TierListAccess(IConfiguration config)
        {
            connectionString = config.GetSection("ConnectionString").Value;
        }

        public IEnumerable<TierList> GetTierListById(int id)
        {
            using (var connection = new SqlConnection(connectionString))
            {
                connection.Open();

                var result = connection.Query<TierList>(@"select * from TierList as TL
                                                            join Tier as T
                                                            on TL.Id = T.TierListId
                                                            where TL.Id = @id", new { id });

                return result;
            }
        }

        public IEnumerable<TierListMini> GetAllTierListsMini()
        {
            using (var connection = new SqlConnection(connectionString))
            {
                connection.Open();

                var results = connection.Query<TierListMini>(@"select * from TierList");

                return results;
            }
        }

        public bool AddTier(Tier tier)
        {
            using (var connection = new SqlConnection(connectionString))
            {
                connection.Open();

                var results = connection.Execute(@"INSERT INTO Tier (TierListId, Title2, CharacterImage) Values(@TierListId, @Title2, @CharacterImage)", tier);

                return results == 1;
            }
        }

        public bool AddTierList(TierListMini tierList)
        {
            using (var connection = new SqlConnection(connectionString))
            {
                connection.Open();

                var result = connection.Execute(@"INSERT INTO TierList (Title, Uid) Values(@Title, @Uid)", tierList);

                return result == 1;
            }
        }

    }
}
