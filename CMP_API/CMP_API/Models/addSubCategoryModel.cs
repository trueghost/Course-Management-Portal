using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace CMP_API.Models
{
    public class addSubCategoryModel
    {
        public int  CategoryId { get; set; }

        public int SubCategoryId { get; set; }
        public string SubCategoryName { get; set; } = string.Empty;

        public DateTime CreatedDate { get; set; } = DateTime.Now;

        public int UpdatedUser { get; set; } = 1;

        public byte Status { get; set; } = 2;

        public DateTime UpdateDate { get; set; } = DateTime.Now;

        public bool Active { get; set; } = true;
    }
}