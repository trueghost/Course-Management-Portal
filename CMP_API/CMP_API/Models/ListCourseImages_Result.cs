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
    
    public partial class ListCourseImages_Result
    {
        public int CourseImageId { get; set; }
        public int CourseID { get; set; }
        public string ImagePath { get; set; }
        public Nullable<byte> IsDefault { get; set; }
        public Nullable<int> CreatedUser { get; set; }
        public Nullable<System.DateTime> CreatedDateTime { get; set; }
    }
}
