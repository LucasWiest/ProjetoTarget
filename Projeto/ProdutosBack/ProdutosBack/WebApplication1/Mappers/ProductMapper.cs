using WebApplication1.Views;
using WebApplication1.Models;
using AutoMapper;
using System.Collections.Generic;


namespace WebApplication1.Mappers
{

    public static class ProductMapper
    {

        public static ProductView ToView(this Product model)
        {

            var configuration = new MapperConfiguration(cfg =>
            {
                cfg.CreateMap<Product, ProductView>();
            });
            return configuration.CreateMapper().Map<Product, ProductView>(model);
        }

        public static Product ToModel(this ProductView view)
        {

            var configuration = new MapperConfiguration(cfg =>
            {
                cfg.CreateMap<ProductView, Product>();
            });
            return configuration.CreateMapper().Map<ProductView, Product>(view);
        }

        public static List<ProductView> ToViewList(this List<Product> modelList)
        {

            var configuration = new MapperConfiguration(cfg =>
            {
                cfg.CreateMap<Product, ProductView>();
            });
            return configuration.CreateMapper().Map<List<ProductView>>(modelList); 
            
        }

    }

}