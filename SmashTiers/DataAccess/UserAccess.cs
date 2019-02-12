using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Dapper;
using Microsoft.Extensions.Configuration;
using SmashTiers.Models;
using System.Data.SqlClient;

namespace SmashTiers.DataAccess
{
    public class UserAccess
    {
        private string connectionString;

        public UserAccess(IConfiguration config)
        {
            connectionString = config.GetSection("ConnectionString").Value;
        }

        public bool AddUser(User user)
        {
            using (var connection = new SqlConnection(connectionString))
            {
                connection.Open();

                var result = connection.Execute(@"INSERT INTO [User] (FirstName,LastName,IsActive,FirebaseId)
                                                    VALUES (@FirstName,@LastName,@IsActive,@FireBaseId);", user);

                return result == 1;
            }
        }

    }
}
