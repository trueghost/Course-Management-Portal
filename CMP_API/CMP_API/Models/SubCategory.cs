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
    
    public partial class SubCategory
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public SubCategory()
        {
            this.CourseMasters = new HashSet<CourseMaster>();
        }
    
        public int SubCategoryID { get; set; }
        public string SubCategoryName { get; set; }
        public Nullable<int> CategoryID { get; set; }
        public string Description { get; set; }
        public Nullable<System.DateTime> CreatedDatetime { get; set; }
        public Nullable<int> LastUpdatedUser { get; set; }
        public Nullable<System.DateTime> LastUpdatedDatetime { get; set; }
        public Nullable<byte> Status { get; set; }
        public Nullable<bool> Is_Active { get; set; }
    
        public virtual Category Category { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<CourseMaster> CourseMasters { get; set; }
    }
}
