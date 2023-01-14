using ALTEA_Server.Models;
using ALTEA_Server.Services;
using Microsoft.AspNetCore.Mvc;

namespace ALTEA_Server.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class SchoolController : ControllerBase
    {
        private readonly ISchoolService _schoolService;

        public SchoolController(ISchoolService schoolService)
        {
            _schoolService = schoolService;
        }

        [HttpGet("GetSchool/{id}")]
        public async Task<ActionResult<School>> GetSchool(int id)
        {
            return Ok(await _schoolService.GetSchoolByID(id));
        }

        [HttpGet("GetAllSchool")]
        public async Task<ActionResult<List<School>>> GetAllSchool()
        {
            return Ok(await _schoolService.GetAllSchools());
        }

        [HttpPost("SaveSchool")]
        public void SaveSchool(School school)
        {
            _schoolService.SaveSchool(school);
        }

        [HttpPost("SaveSchools")]
        public void SaveSchool(List<School> schools)
        {
            _schoolService.SaveSchools(schools);
        }

        [HttpDelete("DeleteSchool")]
        public void DeleteSchool(School school)
        {
            _schoolService.DeleteSchool(school);
        }

        [HttpPut("UpdateSchool")]
        public void UpdateSchool(School school)
        {
            _schoolService.UpdateSchool(school);
        }
    }
}