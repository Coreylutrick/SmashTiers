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
    }
}
