using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace CMP_API.Models
{
    public class addDocuments
    {
        public int DocumentID { get; set; }
        
        public int CourseID { get; set; } = 1279;

        public string Path { get; set; } = string.Empty;

        public int UserID { get; set; } = 15;
    }
}