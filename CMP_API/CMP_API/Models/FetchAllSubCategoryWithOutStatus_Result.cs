//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace CMP_API.Models
{
    using System;
    
    public partial class FetchAllSubCategoryWithOutStatus_Result
    {
        public int SubCategoryID { get; set; }
        public string SubCategoryName { get; set; }
        public string CategoryName { get; set; }
        public Nullable<int> CategoryID { get; set; }
        public string Description { get; set; }
        public Nullable<System.DateTime> CreatedDatetime { get; set; }
        public Nullable<int> LastUpdatedUser { get; set; }
        public Nullable<System.DateTime> LastUpdatedDatetime { get; set; }
        public Nullable<byte> Status { get; set; }
    }
}
