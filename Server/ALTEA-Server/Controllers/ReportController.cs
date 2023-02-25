using ALTEA_Server.Services;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;

namespace ALTEA_Server.Controllers
{
    [ApiController]
    [EnableCors("OpenCORSPolicy")]
    [Route("[controller]")]
    public class ReportController : ControllerBase
    {
        private readonly IReportService _reportService;

        public ReportController(IReportService reportService)
        {
            _reportService = reportService;
        }

        [HttpPost("Save")]
        public Task<bool> Save(Report report)
        {
            
            return _reportService.SaveReport(report);
            //return Task.FromResult(true);
        }

        [HttpGet("GetAll/{reportId}")]
        public async Task<ActionResult<List<Photo>>> GetAll(int reportId)
        {
            return Ok(await _reportService.GetAllReports(reportId));
        }
    }
}
