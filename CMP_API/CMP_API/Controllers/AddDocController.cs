using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using CMP_API.Models;
namespace CMP_API.Controllers
{
    [RoutePrefix("Api/Documents")]
    public class AddDocController : ApiController
    {
        CMPEntities DB = new CMPEntities();

        [Route("Show")]
        [HttpGet]
        public object Showdata()
        {
            var a = DB.FetchAllDocs();
            return a;
        }

        [Route("Add")]
        [HttpPost]
        public object Add(addDocuments sd)
        {
            var a = DB.InsertDocument(sd.CourseID, sd.Path, sd.UserID);
            return a;
        }

        [Route("Delete")]
        [HttpPost]
        public object Delete(addDocuments sd)
        {
            var a = DB.DeleteDocument(sd.DocumentID);
            return a;
        }

    }
}