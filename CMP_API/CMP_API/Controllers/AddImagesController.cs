using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using CMP_API.Models;
namespace CMP_API.Controllers
{
    [RoutePrefix("Api/Images")]
    public class AddImagesController : ApiController
    {
        CMPEntities DB = new CMPEntities();

        [Route("Show")]
        [HttpGet]
        public object Showdata()
        {
            var a = DB.FetchAllImages();
            return a;
        }

        [Route("Add")]
        [HttpPost]
        public object Add(addImages sd)
        {
            var a = DB.AddCourseImages(sd.CourseID, sd.ImagePath, sd.IsDefault, sd.CreatedUser);
            return a;
        }

        [Route("Delete")]
        [HttpPost]
        public object Delete(addImages sd)
        {
            var a = DB.DeleteCourseImages(sd.CourseImageId);
            return a;
        }

    }
}