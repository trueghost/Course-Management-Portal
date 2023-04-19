using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace CMP_API.Models
{
    public class Login
    {
        public string Name { get; set; } = string.Empty;
        public string Email { get; set; } = string.Empty;
        public string Password { get; set; } = string.Empty;

    }
}