using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SmashTiers.Models
{
    public class Stage
    {
        public int Id { get; set; }
        public string StageName { get; set; }
        public int Platforms { get; set; }
        public int BlastZoneTop { get; set; }
        public bool TournamentLegal { get; set; }
        public string Picture { get; set; }
        public int BlastZoneBottom { get; set; }
        public int BlastZoneRight { get; set; }
        public int BlastZoneLeft { get; set; }
    }
}
