using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SmashTiers.Models
{
    public class User
    {
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public bool IsActive { get; set; }
        public string FirebaseId { get; set; }
    }
}
