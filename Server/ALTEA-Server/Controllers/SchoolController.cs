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

        [HttpGet("GetByID/{id}")]
        public async Task<ActionResult<School>> Get(int id)
        {
            return Ok(await _schoolService.GetSchoolByID(id));
        }

        [HttpGet("GetAll")]
        public async Task<ActionResult<List<School>>> GetAll()
        {
            return Ok(await _schoolService.GetAllSchools());
        }

        [HttpPost("Save")]
        public void Save(School school)
        {
            _schoolService.SaveSchool(school);
        }

        [HttpPost("SaveAll")]
        public void Save(List<School> schools)
        {
            _schoolService.SaveSchools(schools);
        }

        [HttpDelete("Delete")]
        public void Delete(School school)
        {
            _schoolService.DeleteSchool(school);
        }

        [HttpPut("Update")]
        public void Update(School school)
        {
            _schoolService.UpdateSchool(school);
        }
    }
}