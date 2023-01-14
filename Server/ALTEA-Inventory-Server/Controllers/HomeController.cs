using ALTEA_Inventory_Server.Data;
using Microsoft.AspNetCore.Mvc;


[Controller]
[Route("[controller]")]
public class HomeController : Controller
{
    private readonly DataBaseContext context;
    public IActionResult Index()
    {
        return View();
    }

    public HomeController(DataBaseContext context) {
        this.context = context;
    }
}

