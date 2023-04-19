using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace CMP_API.Models
{
    public class addImages
    {
        public int CourseImageId { get; set; }
        public int CourseID { get; set; } = 1279;

        public string ImagePath { get; set; } = string.Empty;

        public byte IsDefault { get; set; } = 1;

        public int CreatedUser { get; set; } = 15;
    }
}