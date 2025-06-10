using ApiClientes.Models;
using ApiClientes.Services;
using ApiClientes.Data;
using System.Collections.Generic;
using System.Linq;
using Microsoft.EntityFrameworkCore;

public class ClientesService : IClientesService
{
    private readonly ApiDbContext _context;

    public ClientesService(ApiDbContext context)
    {
        _context = context;
    }

    public IEnumerable<Cliente> ObtenerClientesPaginados(int page, int size)
    {
        var clientes = _context.Clientes.ToList(); // Obtiene todos los clientes de la BD
        Console.WriteLine($"Clientes en la BD: {clientes.Count()}"); // Muestra cuántos clientes hay
    
        return _context.Clientes
            .Skip((page - 1) * size)
            .Take(size)
            .ToList();
    }

    public IEnumerable<Cliente> ObtenerClientesDesdeSP(int page, int size)
    {
        return _context.Clientes
            .FromSqlRaw("EXEC sp_ObtenerClientesPaginados @Page={0}, @Size={1}", page, size)
            .ToList();
    }

}
