using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TestTaskMajor.Data;
using WebApplication1.Models;

namespace WebApplication1.Repositories
{
    public class Repository
    {
        private ItemDbContext ItemDbContext { get; set; }

        public Repository(ItemDbContext itemDbContext)
        {
            ItemDbContext = itemDbContext;
        }
        public async Task<Item> Create(Item item)
        {
            if (item != null)
            {
                await ItemDbContext.Items.AddAsync(item);
                await ItemDbContext.SaveChangesAsync();
            }
            return item;
        }
        public async Task<Item> Delete(Guid id)
        {
            var toDelete = ItemDbContext.Items.FirstOrDefault(x => x.Id == id);
            if (toDelete != null)
            {
                ItemDbContext.Items.Remove(toDelete);
                await ItemDbContext.SaveChangesAsync();
            }
            return toDelete;
        }

        public async Task<List<Item>> GetAll()
        {
            return await ItemDbContext.Items.ToListAsync();
        }

        public async Task<Item> Update(Item item)
        {
            var isInDB = await ItemDbContext.Items.AnyAsync(x =>  x.Id == item.Id);
            if (isInDB)
            {
                ItemDbContext.Items.Update(item);
                await ItemDbContext.SaveChangesAsync();
                return item;
            }
            return null;
        }
        public async Task<Item> Get(Guid id)
        {
            return await ItemDbContext.Items.FirstOrDefaultAsync(x => x.Id == id);
        }
    }
}
