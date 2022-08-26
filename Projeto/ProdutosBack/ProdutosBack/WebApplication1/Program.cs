
string MyAllowSpecificOrigins = "";
var builder = WebApplication.CreateBuilder(args);

// Add services to the container.


builder.Services.AddCors(options =>
{
    options.AddPolicy(name: MyAllowSpecificOrigins,
                      policy =>
                      {
                          policy.AllowAnyMethod();
                          policy.AllowAnyOrigin();
                          policy.AllowAnyHeader();
                      });
});

// services.AddResponseCaching();

builder.Services.AddControllers();


// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
} 

System.Globalization.CultureInfo.CurrentUICulture = new System.Globalization.CultureInfo("pt-BR");

System.Environment.SetEnvironmentVariable("DBConnection", "Server=DESKTOP-KUTIQI8\\SQLEXPRESS;Database=projeto;Trusted_Connection=True");

app.UseHttpsRedirection();
app.UseStaticFiles();
app.UseRouting();

app.UseCors(MyAllowSpecificOrigins);

            //.AllowAnyOrigin()
            //.AllowAnyMethod()
            //.AllowAnyHeader();


app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
