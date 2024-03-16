using Backend_CRUD.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Backend_CRUD.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly AplicationDbContext _context;

        public UserController(AplicationDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            try
            {
                var userList = await _context.Users.ToListAsync();
                return Ok(userList);

            } catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, "An internal server error ocurred");
            }
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> Get(int id)
        {
            try
            {
                var user = await _context.Users.FindAsync(id);

                if (user == null)
                {
                    return NotFound();
                }

                return Ok(user);

            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, "An internal server error ocurred");
            }
        }

        [HttpPost]
        public async Task<IActionResult> Post(User user)
        {
            try {
                _context.Add(user);
                await _context.SaveChangesAsync();

                return CreatedAtAction("Get", new { id = user.Id }, user);

            } catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, "An internal server error ocurred");
            }
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Put(int id, User user)
        {
            try
            {

                if (id != user.Id)
                {
                    return BadRequest("User ID don't match with the specified ID");
                }

                _context.Update(user);
                await _context.SaveChangesAsync();

                return NoContent();

            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, "An internal server error ocurred");
            }
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            try
            {
                var user = await _context.Users.FindAsync(id);

                if (user == null)
                {
                    return NotFound();
                }

                _context.Users.Remove(user);
                await _context.SaveChangesAsync();

                return NoContent();

            } catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, "An internal server error ocurred");
            }
        }
    }
}
