namespace ApiClientes.Services
{
    using ApiClientes.Models;
    using System.Collections.Generic;

    public interface IClientesService
    {
        IEnumerable<Cliente> ObtenerClientesPaginados(int page, int size);
        IEnumerable<Cliente> ObtenerClientesDesdeSP(int page, int size);
    }
}
