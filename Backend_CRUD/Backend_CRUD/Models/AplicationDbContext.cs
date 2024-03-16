using Microsoft.EntityFrameworkCore;

namespace Backend_CRUD.Models
{
    public class AplicationDbContext: DbContext
    {

        public AplicationDbContext(DbContextOptions<AplicationDbContext> options): base(options)
        {
        }

        public DbSet<User> Users { get; set; }

    }
}
