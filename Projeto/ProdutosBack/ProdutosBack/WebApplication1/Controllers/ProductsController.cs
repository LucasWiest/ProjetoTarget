using Microsoft.AspNetCore.Mvc;
using WebApplication1.Views;

namespace WebApplication1.Controllers
{
    [ApiController]
    [Route("api/products")]
    public class ProductsController : ControllerBase
    {
        private readonly ILogger<ProductsController> _logger;
        ProductView productsView; 

        public ProductsController(ILogger<ProductsController> logger)
        {
            _logger = logger;
        }

        [AcceptVerbsAttribute("GET")]
        public List<ProductView> Get()
        {
            productsView = new ProductView();
            return productsView.Get();
        }

        [AcceptVerbsAttribute("DELETE")]
        public void Delete(Guid id)
        {
            productsView = new ProductView();
            productsView.Delete(id);
        }

        [AcceptVerbsAttribute("POST")]
        public void Save([FromBody] ProductView product)
        {
            productsView = new ProductView();
            productsView.Insert(product);
        }
    }
}