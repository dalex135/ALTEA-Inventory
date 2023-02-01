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

        /// <summary>
        /// 
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        [HttpGet("GetByID/{id}")]
        public async Task<ActionResult<School>> Get(int id)
        {
            return Ok(await _schoolService.GetSchoolByID(id));
        }

        /// <summary>
        /// 
        /// </summary>
        /// <returns></returns>
        [HttpGet("GetAll")]
        public async Task<ActionResult<List<School>>> GetAll()
        {
            return Ok(await _schoolService.GetAllSchools());
        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="school"></param>
        /// <returns></returns>
        [HttpPost("Save")]
        public Task<bool> Save(School school)
        {
            return _schoolService.SaveSchool(school);
        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="schools"></param>
        /// <returns></returns>
        [HttpPost("SaveAll")]
        public Task<bool> Save(List<School> schools)
        {
            return _schoolService.SaveSchools(schools);
        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="school"></param>
        [HttpDelete("Delete/{id}")]
        public Task<bool> Delete(long id)
        {
            return _schoolService.DeleteSchool(id);
        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="school"></param>
        /// <returns></returns>
        [HttpPut("Update")]
        public Task<bool> Update(School school)
        {
            return _schoolService.UpdateSchool(school);
        }
    }
}