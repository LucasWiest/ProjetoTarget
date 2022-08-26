namespace WebApplication1.Views
{
    using WebApplication1.Repository;
    using WebApplication1.Mappers; 

    public class ProductView
    {
        
        private ProductRep repo;
        public ProductView()
        {
            this.repo = new ProductRep();
        }

        public Guid Id { get; set; }
        public long Code { get; set; }

        public Decimal Price { get; set; }

        public Decimal Quantity { get; set; }

        public string Name { get; set; } 

        internal List<ProductView> Get ()
        {
            ProductRep repo = new ProductRep();
            return  this.repo.Get().ToViewList();
        }

        internal void Delete(Guid id)
        {
            ProductRep repo = new ProductRep();
            this.repo.Delete(id);
        }

        internal void Insert(ProductView product)
        {
            ProductRep repo = new ProductRep();
            this.repo.Save(product.ToModel());
        }

    }
}