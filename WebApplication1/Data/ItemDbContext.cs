using Microsoft.EntityFrameworkCore;
using WebApplication1.Models;

namespace TestTaskMajor.Data
{
    public class ItemDbContext : DbContext
    {
        public ItemDbContext(DbContextOptions options) : base(options) { }

        public DbSet<Item> Items { get; set; }

    }
}