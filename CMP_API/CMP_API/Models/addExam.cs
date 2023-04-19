using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace CMP_API.Models
{
    public class addExam
    {
        public int ExamID { get; set; }
        public int CourseID { get; set; }
        public string Location { get; set; } = string.Empty;

        public int CountryID { get; set; }

        public DateTime Examdate { get; set; }

        public int UserID { get; set; } = 5;

        public decimal Amount { get; set; }

        public DateTime LastUpdtDate { get; set; }
    }
}