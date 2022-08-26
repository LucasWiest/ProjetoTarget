using WebApplication1.Views;
using System.Data.SqlClient;
using WebApplication1.Models;


namespace WebApplication1.Repository
{
    public class ProductRep
    {

        public void Save (Product product)
        {
            try
            {
                if (product.Id == Guid.Empty)
                    Insert(product); 
                else  
                    Update(product);

            }
            catch (Exception e) 
            {
               
            }

        }

        private void Insert (Product product)
        {
            using (var sqlConnection1 = new SqlConnection(System.Environment.GetEnvironmentVariable("DBConnection")))
            {
                string sql = "INSERT INTO product (Id, Name, Price, Quantity, Code) VALUES (@id, @name, @price, @quantity, @code)";

                using (var cmd = new SqlCommand(sql, sqlConnection1))
                {
                    cmd.Parameters.AddWithValue("@Id", Guid.NewGuid());
                    cmd.Parameters.AddWithValue("@Name", product.Name);
                    cmd.Parameters.AddWithValue("@Price", product.Price);
                    cmd.Parameters.AddWithValue("@Quantity", product.Quantity);
                    cmd.Parameters.AddWithValue("@Code", product.Code);

                    sqlConnection1.Open();

                    cmd.ExecuteReader();
                }
            }
        }

        private void Update(Product product)
        {
            using (var sqlConnection1 = new SqlConnection(System.Environment.GetEnvironmentVariable("DBConnection")))
            {
                string sql = "UPDATE product SET Name = @Name, Price = @Price, Quantity = @Quantity, Code = @Code WHERE Id = @Id";

                using (var cmd = new SqlCommand(sql, sqlConnection1))
                {
                    cmd.Parameters.AddWithValue("@Id", product.Id);
                    cmd.Parameters.AddWithValue("@Name", product.Name);
                    cmd.Parameters.AddWithValue("@Price", product.Price);
                    cmd.Parameters.AddWithValue("@Quantity", product.Quantity);
                    cmd.Parameters.AddWithValue("@Code", product.Code);

                    sqlConnection1.Open();

                    cmd.ExecuteReader();
                }
            }
        }

        public void Delete(Guid id)
        {
            try
            {
                using (var sqlConnection1 = new SqlConnection(System.Environment.GetEnvironmentVariable("DBConnection")))
                {
                    string sql = "DELETE product WHERE Id = @Id";

                    using (var cmd = new SqlCommand(sql, sqlConnection1))
                    {
                        cmd.Parameters.AddWithValue("@Id", id);

                        sqlConnection1.Open();

                        cmd.ExecuteReader();

                    }
                }
            }
            catch (Exception e)
            { 

            }
        }

        public List<Product> Get()
        {
            List<Product> list = new();
         
            using (var sqlConnection1 = new SqlConnection(Environment.GetEnvironmentVariable("DBConnection")))
            {
                string sql = "SELECT * FROM product";

                using (var cmd = new SqlCommand(sql, sqlConnection1))
                {

                    sqlConnection1.Open();

                    using (var reader = cmd.ExecuteReader())
                    {
                        while (reader.Read())
                        {
                            Product product = new()
                            {
                                Code = long.Parse(reader["Code"].ToString()),
                                Name = reader["Name"].ToString(),
                                Quantity = decimal.Parse(reader["Quantity"].ToString()),
                                Price = decimal.Parse(reader["Price"].ToString()),
                                Id = Guid.Parse(reader["Id"].ToString())
                            };

                            list.Add(product);
                        }
                    }
                }
            }
            return list;
        }

    }
}
