using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using CMP_API.Models;
namespace CMP_API.Controllers
{
    [RoutePrefix("Api/Exam")]
    public class AddExamController : ApiController
    {
        CMPEntities DB = new CMPEntities();

        [Route("Show")]
        [HttpGet]
        public object Showdata()
        {
            var a = DB.FetchAllExamDetails();
            return a;
        }

        [Route("Add")]
        [HttpPost]
        public object Add(addExam sd)
        {
            var a = DB.InsertExam(sd.CourseID, sd.CountryID, sd.Location, sd.Examdate, sd.Amount, sd.UserID);
            return a;
        }

        [Route("Update")]
        [HttpPut]
        public object Update(addExam sd)
        {
            var a = DB.Sp_Update_Exam(sd.ExamID, sd.CourseID, sd.CountryID, sd.Location, sd.Examdate, sd.Amount, sd.UserID , sd.LastUpdtDate );
            return a;
        }

        [Route("Delete")]
        [HttpPost]
        public object Delete(addExam sd)
        {
            var a = DB.DeleteExam(sd.ExamID);
            return a;
        }

    }
}