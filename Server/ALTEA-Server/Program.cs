global using ALTEA_Server.Models;
global using Microsoft.EntityFrameworkCore;
using ALTEA_Server.Data;
using ALTEA_Server.Services;
using Microsoft.Extensions.Configuration;

internal class Program
{
    private static void Main(string[] args)
    {
        var builder = WebApplication.CreateBuilder(args);
        var MyAllowSpecificOrigins = "_myAllowSpecificOrigins";
        // Add services to the container.

        builder.Services.AddScoped<IDeviceService, DeviceService>();
        builder.Services.AddScoped<ISchoolService, SchoolService>();
        builder.Services.AddScoped<IUserService, UserService>();
        builder.Services.AddControllers();
        builder.Services.AddDbContext<DataContext>(options => options.UseNpgsql(builder.Configuration.GetConnectionString("alteadb")));
        // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
        builder.Services.AddEndpointsApiExplorer();
        builder.Services.AddSwaggerGen();
        builder.Services.AddCors(options =>
        {
            options.AddPolicy(name: MyAllowSpecificOrigins,
                              policy =>
                              {
                                  policy.WithOrigins("http://localhost:5218/User/Authenticate",
                                                      "http://localhost:5218",
                                                      "http://localhost:4200",
                                                      "http://localhost:4200/login",
                                                      "https://localhost:7042" )
                                    .AllowAnyHeader()
                                    .AllowAnyMethod()
                                    .AllowCredentials(); 
                              });
        });
        var app = builder.Build();

        // Configure the HTTP request pipeline.
        if (app.Environment.IsDevelopment())
        {
            app.UseSwagger();
            app.UseSwaggerUI();
        }
        app.UseCors(MyAllowSpecificOrigins);
        app.UseHttpsRedirection();
        app.UseAuthorization();
        app.MapControllers();
        app.Run();
    }
}