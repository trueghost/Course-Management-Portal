using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace CMP_API.Models
{
    public class Search
    {
        public string Title { get; set; }

        public int CategoryID { get; set; }

        public int SubcategoryID { get; set; }

        public int PageNumber { get; set; }

        public int PageSize { get; set; }
    }
}