using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;
using ApiClientes.Models;
using ApiClientes.Services;

[Route("api/clientes")]
[ApiController]
public class ClientesController : ControllerBase
{
    private readonly IClientesService _clientesService;

    public ClientesController(IClientesService clientesService)
    {Console.WriteLine($"Solicitud recibida:");
        _clientesService = clientesService;
    }

    [HttpGet]
    public IActionResult GetClientes([FromQuery] int page = 1, [FromQuery] int size = 10)
    {
        Console.WriteLine($"Solicitud recibida en ClientesController: page={page}, size={size}");
        
        var clientes = _clientesService.ObtenerClientesPaginados(page, size);
        
        Console.WriteLine($"Cantidad de clientes obtenidos: {clientes.Count()}");

        if (!clientes.Any()) 
        {
            Console.WriteLine("No se encontraron clientes en la BD");
            return NotFound("No se encontraron clientes.");
        }

        return Ok(clientes);
    }

    [HttpGet("sp")]
    public IActionResult GetClientesDesdeSP([FromQuery] int page = 1, [FromQuery] int size = 10)
    {
        var clientes = _clientesService.ObtenerClientesDesdeSP(page, size);

        if (!clientes.Any()) 
            return NotFound("No se encontraron clientes.");

        return Ok(clientes);
    }
}
