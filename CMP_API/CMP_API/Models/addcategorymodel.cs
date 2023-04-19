using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace CMP_API.Models
{
    public class Addcategorymodel
    {
        public int CategoryId { get; set; }
        public string CategoryName {get; set;} = string.Empty;

        public string CategoryDes { get; set; } = "Related";

        public DateTime CreatedDate { get; set; } = DateTime.Now;

        public int UpdatedUser { get; set; } = 1;

        public DateTime UpdateDate { get; set; } = DateTime.Now;

        public byte Status { get; set; }

        public bool IsActive { get; set; } = true;

    }
}