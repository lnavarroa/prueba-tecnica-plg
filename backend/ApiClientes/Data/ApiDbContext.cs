using Microsoft.EntityFrameworkCore;
using ApiClientes.Models;

namespace ApiClientes.Data
{
    public class ApiDbContext : DbContext
    {
        public ApiDbContext(DbContextOptions<ApiDbContext> options) : base(options) { }

        public DbSet<Cliente> Clientes { get; set; }
    }
}
