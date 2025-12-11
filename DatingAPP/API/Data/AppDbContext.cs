using System;
using API.Entities;
using Microsoft.EntityFrameworkCore;

namespace API.Data;

public class AppDbContext(DbContextOptions options) : DbContext(options)
{ // ctor creates a constructor
    public DbSet<AppUser> Users { get; set; }
}
