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
        var CORSOpenPolicy = "OpenCORSPolicy";
        // Add services to the container.


        builder.Services.AddScoped<IRecipientService, RecipientService>();
        builder.Services.AddScoped<IUserService, UserService>();
        builder.Services.AddScoped<IGalleryService, GalleryService>();
        builder.Services.AddScoped<IReportService, ReportService>();
        builder.Services.AddScoped<IDeviceInfoService, DeviceInfoService>();
        builder.Services.AddScoped<IDonationService, DonationService>();

        builder.Services.AddControllers()
                        .AddNewtonsoftJson();
        //builder.Services.AddDbContext<DataContext>(options => options.UseNpgsql(builder.Configuration.GetConnectionString("alteadb")));
        // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
        builder.Services.AddDbContext<DataContext>(options => options.UseSqlServer(builder.Configuration.GetConnectionString("WebApiDatabase")));

        builder.Services.AddEndpointsApiExplorer();
        builder.Services.AddSwaggerGen();
        builder.Services.AddCors(options =>
        {
            options.AddPolicy(name: CORSOpenPolicy,
                                builder => {
                                    builder.WithOrigins("*").AllowAnyHeader().AllowAnyMethod();
                                });


        });
        var app = builder.Build();

        // Configure the HTTP request pipeline.
        if (app.Environment.IsDevelopment())
        {
            app.UseSwagger();
            app.UseSwaggerUI();
        }
        app.UseCors(CORSOpenPolicy);
        app.UseHttpsRedirection();
        app.UseAuthorization();
        app.MapControllers();
        app.Run();
    }
}