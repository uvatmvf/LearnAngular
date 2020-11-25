using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LearnAngular.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ProductListController : ControllerBase
    {
        [HttpGet]
        public IEnumerable<Product> Get()
        {
            return new List<Product>
            {
                new Product(){ Name = "Phone XL",
                    Description="Nice large phone",
                    Price=799
                },
                new Product(){ Name = "Phone mini",
                    Description="Nice camera phone",
                    Price=699
                },
                new Product(){ Name = "Phone standard",
                    Description="Nice",
                    Price=299
                },
            };
        }
    }
}
