using System.ComponentModel.DataAnnotations;

namespace Backend_CRUD.Models
{
    public class User
    {

        [Key]
        public int Id { get; set; }
        public string name { get; set; }
        public string email { get; set; }

    }
}
