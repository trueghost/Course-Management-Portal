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
    using System.Collections.Generic;
    
    public partial class TrainingSchedule
    {
        public int TrainingID { get; set; }
        public Nullable<int> CourseID { get; set; }
        public Nullable<int> CountryID { get; set; }
        public string Location { get; set; }
        public Nullable<System.DateTime> StartDate { get; set; }
        public Nullable<System.DateTime> Enddate { get; set; }
        public string Duration { get; set; }
        public Nullable<decimal> Amount { get; set; }
        public Nullable<System.DateTime> CreatedDatetime { get; set; }
        public Nullable<int> LastUpdateduser { get; set; }
        public Nullable<System.DateTime> LastUpdatedDatetime { get; set; }
    }
}
