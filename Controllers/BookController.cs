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
                new Book(){ Author = "Steve McConnell",
                    Title="More Effectie Agile",
                    Publisher="Construx Press", 
                    PublishYear=2019,
                    Details="A handbook for practical Agile"},

                new Book(){ Author = "Steve McConnell",
                    Title="Code Complete", 
                    Publisher="Microsoft Press",
                    PublishYear=2004},

                new Book(){ Author = "Robert C. Martin",
                    Title="Clean Code", 
                    Publisher="Pearson", 
                    Details="Philosophy on code craft"},

                new Book(){ Author = "Gamma et al", 
                    Title="Design Patterns: Elements of Reusable Object-Oriented Software",
                    Publisher="Addison-Wesley"},
            };
        }
    }
}
