using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using CMP_API.Models;
namespace CMP_API.Controllers
{
    [RoutePrefix("Api/Category")]
    public class AddcategoryController : ApiController
    {
        CMPEntities DB = new CMPEntities();

        [Route("Show")]
        [HttpGet]
        public object Showdata()
        {
            var a = DB.sp_Fetchcategorylist();
            return a;
        }

        [Route("Add")]
        [HttpPost]
        public object Add(Addcategorymodel sd)
        {
            var a = DB.Sp_Create_Category(sd.CategoryName, sd.CategoryDes, sd.CreatedDate, sd.UpdatedUser, sd.UpdateDate, sd.Status, sd.IsActive);
            return a;
        }

        [Route("Update")]
        [HttpPut]
        public object Update(Addcategorymodel sd)
        {
            var a = DB.Sp_Update_Category(sd.CategoryId, sd.CategoryName, sd.CategoryDes, sd.UpdatedUser, sd.UpdateDate, sd.Status = 2);
            return a;
        }

        [Route("Status")]
        [HttpPost]
        public object Status(Addcategorymodel sd)
        {
            var a = DB.spUpdateCategoryStatus(sd.CategoryId , sd.Status);
            return a;
        }

    }
}