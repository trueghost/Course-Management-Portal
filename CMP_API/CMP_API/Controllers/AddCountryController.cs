using System.Net;
using System.Net.Http;
using System.Web.Http;
using CMP_API.Models;
namespace CMP_API.Controllers
{
    [RoutePrefix("Api/Country")]
    public class AddCountryController : ApiController
    {
        CMPEntities DB = new CMPEntities();

        [Route("Show")]
        [HttpGet]
        public object Showdata()
        {
            var a = DB.spSelectAllCountry();
            return a;
        }


    }
}