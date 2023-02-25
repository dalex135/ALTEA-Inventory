using ALTEA_Server.Services;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;

namespace ALTEA_Server.Controllers
{
    /// <summary>
    /// 
    /// </summary>
    /// 
    public class LoginDetails
    {
        public String username {get;set;}  
        public String password {get;set;}
    }


    [ApiController]
    [EnableCors("OpenCORSPolicy")]
    [Route("[controller]")]
    public class UserController : ControllerBase
    {
        private readonly IUserService _userService;

        

        public UserController(IUserService userService)
        {
            _userService = userService;
        }

        [HttpPost("Authenticate")]
        public Task<bool> Authenticate(LoginDetails loginDetals)
        {
            return _userService.authenticate(loginDetals.username, loginDetals.password);
        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="username"></param>
        /// <returns></returns>
        [HttpGet("GetByUserName/{username}")]
        public async Task<ActionResult<User>> GetByUserName(string username)
        {
            return Ok(await _userService.GetUserByUserName(username));
        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        [HttpGet("GetByID/{id}")]
        public async Task<ActionResult<User>> GetByID(int id)
        {
            return Ok(await _userService.GetUserByID(id));
        }

        /// <summary>
        /// 
        /// </summary>
        /// <returns></returns>
        [HttpGet("GetAll")]
        public async Task<ActionResult<List<User>>> GetAll()
        {
            return Ok(await _userService.GetAllUsers());
        }

        /// <summary>
        /// 
        /// </summary>
        /// <returns></returns>
        [HttpGet("GetAllRecipientLeaders")]
        public async Task<ActionResult<List<User>>> GetAllRecipientLeaders()
        {
            return Ok(await _userService.GetAllRecipientLeaders());
        }

        /// <summary>
        /// 
        /// </summary>
        /// <returns></returns>
        [HttpGet("GetAllDonors")]
        public async Task<ActionResult<List<Donor>>> GetAllDonors()
        {
            return Ok(await _userService.GetAllDonors());
        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="user"></param>
        /// <returns></returns>
        [HttpPost("Save")]
        public Task<bool> Save(User user)
        {
            return _userService.SaveUser(user);

        }

        [HttpPost("SaveDonor")]
        public Task<bool> SaveDonor(Donor donor)
        {
            return _userService.SaveDonor(donor);

        }

        [HttpPost("SaveAdmin")]
        public Task<bool> SaveAdmin(Admin admin)
        {
            return _userService.SaveAdmin(admin);
            //return Task.FromResult(true);

        }

        [HttpPost("SaveRecipientLeader")]
        public Task<bool> SaveRecipientLeader(RecipientLeader recipientLeader)
        {
            return _userService.SaveRecipientLeader(recipientLeader);
            //return Task.FromResult(true);

        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="user"></param>
        [HttpDelete("Delete/{id}")]
        public Task<bool> Delete(long id)
        {
            return _userService.DeleteUser(id);
        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="user"></param>
        [HttpPut("Update")]
        public Task<bool> Update(User user)
        {
            return _userService.UpdateUser(user);
        }
    }
}
