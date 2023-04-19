using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using CMP_API.Models;
namespace CMP_API.Controllers
{
    [RoutePrefix("Api/BasicDetails")]
    public class AddBasicDetailsController : ApiController
    {
        CMPEntities DB = new CMPEntities();

        [Route("Show")]
        [HttpGet]
        public object Showdata()
        {
            var a = DB.FetchCourseMaster();
            return a;
        }

        [Route("Add")]
        [HttpPost]
        public object Add(addBasicDetails sd)
        {
            var a = DB.InsertCourseMaster(sd.Title, sd.CategoryId, sd.SubCategoryId, sd.PartnerId, sd.Overview, sd.Benefits, sd.MetaTitle, sd.Metakeywords, sd.MetaDescription, sd.UserId, sd.Trending);
            return a;
        }

        [Route("Status")]
        [HttpPost]
        public object Status(addBasicDetails sd)
        {
            var a = DB.spUpdateCourseMasterStatus(sd.CourseId, sd.Trending);
            return a;
        }

        [Route("Update")]
        [HttpPut]
        public object Update(addBasicDetails sd)
        {
            var a = DB.UpdateCourseMaster(sd.CourseId,sd.Title, sd.CategoryId, sd.SubCategoryId, sd.PartnerId, sd.Overview, sd.Benefits, sd.MetaTitle, sd.Metakeywords, sd.MetaDescription, sd.UserId, sd.Trending);
            return a;
        }
    }

}