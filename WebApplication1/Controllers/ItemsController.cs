using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TestTaskMajor.Data;
using WebApplication1.Models;
using WebApplication1.Repositories;

namespace WebApplication1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ItemsController : ControllerBase
    {
        private readonly ItemDbContext itemDbContext;
        private readonly Repository repository;

        public ItemsController(ItemDbContext context)
        {
            itemDbContext = context;
            repository = new Repository(context);
        }

        [HttpGet]
        public async Task<ActionResult<List<Item>>> GetItems()
        {
            return await repository.GetAll();
        }
        [HttpGet("{id: Guid}")]
        public async Task<ActionResult<Item>> GetItem([FromRoute] Guid id)
        {
            return await repository.Get(id);
        }
        [HttpPost]
        public async Task<ActionResult<Item>> CreateItem(Item item)
        {
            await repository.Create(item);
            return item;
        }
        [HttpDelete]
        public async Task<ActionResult<Item>> DeleteItem(Guid id)
        {
            return await repository.Delete(id);
        }
        [HttpPut]
        [Route("{id: Guid}")]
        public async Task<ActionResult<Item>> UpdateItem([FromRoute] Guid id, Item item)
        {
            var result = await repository.Update(id, item);
            return result != null ? Ok() : NotFound();
        }
    }
}
