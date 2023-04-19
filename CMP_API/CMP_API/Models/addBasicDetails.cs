using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace CMP_API.Models
{
    public class addBasicDetails
    {
        public int CourseId { get; set; }
        public string Title { get; set; } = string.Empty;

        public int CategoryId { get; set; }

        public int SubCategoryId { get; set; }

        public int PartnerId { get; set; } = 5;

        public string Overview { get; set; } = string.Empty;

        public string Benefits { get; set; } = "Great";

        public string MetaTitle { get; set; } = string.Empty;

        public string Metakeywords { get; set; } = string.Empty;

        public string MetaDescription { get; set; } = string.Empty;

        public int UserId { get; set; } = 69;

        public byte Trending { get; set; }

        public byte Online { get; set; }

    }
}