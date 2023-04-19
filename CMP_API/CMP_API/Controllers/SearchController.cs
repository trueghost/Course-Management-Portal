using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using CMP_API.Models;
namespace CMP_API.Controllers
{
    [RoutePrefix("Api/Searchdata")]
    public class SearchController : ApiController
    {
        CMPEntities DB = new CMPEntities();
        [Route("showdata")]
        [HttpGet]
        public object showdata()
        {
            var a = DB.FetchCourseMaster();
            return a;
        }

        [Route("search")]
        [HttpPost]
        public object search(Search sd)
        {
            var a = DB.spSearchCourse(sd.Title, sd.CategoryID, sd.SubcategoryID);
            return a;
        }

        [Route("Update")]
        [HttpPut]
        public object Update(addBasicDetails sd)
        {
            var a = DB.UpdateCourseMaster(sd.CourseId, sd.Title, sd.CategoryId, sd.SubCategoryId, sd.PartnerId, sd.Overview, sd.Benefits, sd.MetaTitle, sd.Metakeywords, sd.MetaDescription, sd.UserId, sd.Trending);
            return a;
        }

        [Route("Status")]
        [HttpPost]
        public object Status(addBasicDetails sd)
        {
            var a = DB.spUpdateCourseMasterStatus(sd.CourseId, sd.Trending);
            return a;
        }

        [Route("Online")]
        [HttpPost]
        public object Online(addBasicDetails sd)
        {
            var a = DB.spUpdateCourseOnlineStatus(sd.CourseId, sd.Online);
            return a;
        }
    }
}