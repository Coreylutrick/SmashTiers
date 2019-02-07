using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SmashTiers.Models
{
    public class Character
    {
        public int Id { get; set; }
        public string CharacterName { get; set; }
        public int Weight { get; set; }
        public int Speed { get; set; }
        public int MoveSetDamageId { get; set; }
        public int MoveSetFrameDataId { get; set; }
        public int TournamentStandingId { get; set; }
        public bool IsFavorite { get; set; }
        public string Picture { get; set; }
    }
}
