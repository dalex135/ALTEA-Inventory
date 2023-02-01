using ALTEA_Server.Services;
using Microsoft.AspNetCore.Mvc;

namespace ALTEA_Server.Controllers
{   
/// <summary>
/// 
/// </summary>
    [ApiController]
    [Route("[controller]")]
    public class UserController : ControllerBase
    {
        private readonly IUserService _userService;

        public UserController(IUserService userService)
        {
            _userService = userService;
        }

        //[HttpPost("Authenticate")]
        //public  Task<bool> Authenticate(Object obj)
        //{
        //    return _userService.authenticate(obj);
        //}

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
        [HttpGet("GetAllPrincipals")]
        public async Task<ActionResult<List<User>>> GetAllPrincipals()
        {
            return Ok(await _userService.GetAllPrincipals());
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

        /// <summary>
        /// 
        /// </summary>
        /// <param name="users"></param>
        /// <returns></returns>
        [HttpPost("SaveAll")]
        public Task<bool> Save(List<User> users)
        {
            return _userService.SaveUsers(users);

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
