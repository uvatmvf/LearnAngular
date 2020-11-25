using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

namespace LearnAngular.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class BookController : ControllerBase
    {
        [HttpGet]
        public IEnumerable<Book> Get()
        {
            return new List<Book>
            {
                new Book(){ Author = "Steve McConnell", Title="More Effectie Agile", Publisher="Construx Press", PublishYear=2019}
            };
        }
    }
}
