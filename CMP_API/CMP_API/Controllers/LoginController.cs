using System.Net;
using System.Net.Http;
using System.Web.Http;
using CMP_API.Models;
namespace CMP_API.Controllers
{
    [RoutePrefix("Api/Login")]
    public class LoginController : ApiController
    {
        CMPEntities DB = new CMPEntities();

        [HttpPost]
        public object Adddata(Login sd)
        {
            var a = DB.spCheckLoginUser(sd.Email,sd.Password);
            return a;
        }


    }
}