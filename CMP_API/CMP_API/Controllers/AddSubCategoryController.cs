using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using CMP_API.Models;
namespace CMP_API.Controllers
{
    [RoutePrefix("Api/SubCategory")]
    public class AddSubCategoryController : ApiController
    {
        CMPEntities DB = new CMPEntities();

        [Route("Show")]
        [HttpGet]
        public object Showdata()
        {
            var a = DB.spFetchAllSubCategory();
            return a;
        }

        [Route("Add")]
        [HttpPost]
        public object Add(addSubCategoryModel sd)
        {
            var a = DB.Sp_Create_SubCategory(sd.SubCategoryName, sd.CategoryId, sd.CreatedDate, sd.UpdatedUser, sd.UpdateDate, sd.Active);
            return a;
        }

        [Route("Update")]
        [HttpPut]
        public object Update(addSubCategoryModel sd)
        {
            var a = DB.Sp_Update_SubCategory(sd.SubCategoryId, sd.SubCategoryName, sd.CategoryId, sd.UpdatedUser, sd.UpdateDate);
            return a;
        }

        [Route("Status")]
        [HttpPost]
        public object Status(addSubCategoryModel sd)
        {
            var a = DB.spUpdateSubCategoryStatus(sd.SubCategoryId, sd.Status);
            return a;
        }


    }
}