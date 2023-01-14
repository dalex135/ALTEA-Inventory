using ALTEA_Inventory_Server.Data;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);
builder.Services.AddControllersWithViews();
builder.Services.AddDbContext<DataBaseContext>(
    o=>o.UseNpgsql(builder.Configuration.GetConnectionString("ALTEADB"))
    );

var app = builder.Build();

app.MapGet("/", () => "Hello World!");

app.Run();
