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
    
    public partial class FetchCourseDetailsBasedOnCourseID_Result
    {
        public int CourseID { get; set; }
        public string Title { get; set; }
        public Nullable<int> CategoryID { get; set; }
        public string CategoryName { get; set; }
        public Nullable<int> SubcategoryID { get; set; }
        public string SubCategoryName { get; set; }
        public Nullable<int> PartnerID { get; set; }
        public string Overview { get; set; }
        public string Benefits { get; set; }
        public string Metatitle { get; set; }
        public string Metakeywords { get; set; }
        public string Metadescription { get; set; }
        public string Uniquename { get; set; }
        public Nullable<System.DateTime> Createddate { get; set; }
        public Nullable<System.DateTime> Createddatetime { get; set; }
        public Nullable<int> CreatedUser { get; set; }
        public Nullable<System.DateTime> Lastupdateddate { get; set; }
        public Nullable<System.DateTime> Lastupdateddatetime { get; set; }
        public Nullable<int> Lastupdateduser { get; set; }
        public Nullable<byte> Trending { get; set; }
        public Nullable<byte> ShowOnline { get; set; }
    }
}