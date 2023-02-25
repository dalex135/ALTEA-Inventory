using ALTEA_Server.Models;
using ALTEA_Server.Services;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;

namespace ALTEA_Server.Controllers
{
    [ApiController]
    [EnableCors("OpenCORSPolicy")]
    [Route("[controller]")]
    public class RecipientController : ControllerBase
    {
        private readonly IRecipientService _schoolService;

        public RecipientController(IRecipientService schoolService)
        {
            _schoolService = schoolService;
        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        [HttpGet("GetByID/{id}")]
        public async Task<ActionResult<Recipient>> Get(int id)
        {
            return Ok(await _schoolService.GetRecipientByID(id));
        }

        /// <summary>
        /// 
        /// </summary>
        /// <returns></returns>
        [HttpGet("GetAll")]
        public async Task<ActionResult<List<Recipient>>> GetAll()
        {
            return Ok(await _schoolService.GetAllRecipients());
        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="school"></param>
        /// <returns></returns>
        [HttpPost("Save")]
        public Task<bool> Save(Recipient school)
        {
            return _schoolService.SaveRecipient(school);
        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="schools"></param>
        /// <returns></returns>
        [HttpPost("SaveAll")]
        public Task<bool> Save(List<Recipient> schools)
        {
            return _schoolService.SaveRecipients(schools);
        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="school"></param>
        [HttpDelete("Delete/{id}")]
        public Task<bool> Delete(long id)
        {
            return _schoolService.DeleteRecipient(id);
        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="school"></param>
        /// <returns></returns>
        [HttpPut("Update")]
        public Task<bool> Update(Recipient school)
        {
            return _schoolService.UpdateRecipient(school);
        }
    }
}