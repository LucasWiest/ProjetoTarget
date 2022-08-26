namespace WebApplication1.Models
{
    public partial class Product
    {
        public Guid Id { get; set; }
        public long Code { get; set; }

        public Decimal Price { get; set; }

        public Decimal Quantity { get; set; }

        public string Name { get; set; }
    }
}
