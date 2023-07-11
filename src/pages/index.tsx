import { useState } from "react";
import { api } from "~/utils/api";

export default function Home() {
  // Define constants for Clientes
  const [clienteData, setClienteData] = useState({
    name: "",
    email: "",
    ci: "",
    idToUpdate: "",
    nameToUpdate: "",
    emailToUpdate: "",
    idToDelete: "",
  });

  const [clienteId, setClienteId] = useState("");

  // Define constants for Abogados
  const [abogadoData, setAbogadoData] = useState({
    name: "",
    email: "",
    idToUpdate: "",
    nameToUpdate: "",
    emailToUpdate: "",
    idToDelete: "",
  });

    // Constants and State for Expediente
    const [expedienteData, setExpedienteData] = useState({
      body: "",
      categories: "",
      idToUpdate: "",
      bodyToUpdate: "",
      categoriesToUpdate: "",
      idToDelete: "",
    });

  // Define functions for Clientes
  const fetchAllClientes = api.exampleRouterClientes.getAllClientes.useQuery();
  const fetchOneCliente = api.exampleRouterClientes.getClienteById.useQuery({ id: clienteId });
  const createClienteMutation = api.exampleRouterClientes.createCliente.useMutation();
  const updateClienteMutation = api.exampleRouterClientes.updateCliente.useMutation();
  const deleteClienteMutation = api.exampleRouterClientes.deleteCliente.useMutation();

  // Define functions for Abogados
  const fetchAllAbogados = api.exampleRouterAbogados.getAllAbogados.useQuery();
  const createAbogadosMutation = api.exampleRouterAbogados.createAbogado.useMutation();
  const updateAbogadosMutation = api.exampleRouterAbogados.updateAbogado.useMutation();
  const deleteAbogadosMutation = api.exampleRouterAbogados.deleteAbogado.useMutation();

  // Define handlers for Clientes
  const handleCreateCliente = async () => {
    try {
      await createClienteMutation.mutateAsync({
        name: clienteData.name,
        email: clienteData.email,
      });
      setClienteData({
        name: "",
        email: "",
        ci: "",
        idToUpdate: "",
        nameToUpdate: "",
        emailToUpdate: "",
        idToDelete: "",
      });
      fetchAllClientes.refetch();
    } catch (error) {
      console.log(error);
    }
  };

  // Define handlers for Abogados
  const handleCreateAbogado = async () => {
    try {
      await createAbogadosMutation.mutateAsync({
        name: abogadoData.name,
        email: abogadoData.email,
      });
      setAbogadoData({
        name: "",
        email: "",
        idToUpdate: "",
        nameToUpdate: "",
        emailToUpdate: "",
        idToDelete: "",
      });
      fetchAllAbogados.refetch();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="mx-auto p-8">
      {/* Clientes */}
      <div className="mb-8">
        <h2 className="mb-4 text-2xl font-bold">Get All Clientes</h2>
      </div>
      <button
        className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
        onClick={() => fetchAllClientes.refetch()}
      >
        Todos los Clientes
      </button>

      <div className="text- mb-4 mt-4 grid grid-cols-4 gap-4 font-bold">
        <p>Id</p>
        <p>Name</p>
        <p>c.i</p>
        <p>Email</p>
      </div>

      {fetchAllClientes.data &&
        fetchAllClientes.data.map((user) => (
          <div
            key={user.id}
            className="my-4 grid grid-cols-4 gap-4 rounded border border-gray-300 bg-white p-4 shadow"
          >
            <p>{user.id}</p>
            <p>{user.name}</p>
            <p>{user.id}</p>
            <p>{user.email}</p>
          </div>
        ))}
      
         {/* Get one user UI */}

         <div className="mb-8">
        <h2 className="mb-4 text-2xl font-bold">Cada cliente</h2>
        <div className="mb-4 flex">
          <input
            className="mr-2 border border-gray-300 p-2"
            placeholder="Enter user id to get"
            value={clienteId || ""}
            onChange={(e) => setClienteId(String(e.target.value))}
          />
          <button
            className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
            onClick={() => fetchOneCliente.refetch()}
          >
           Obtener un Cliente
          </button>
        </div>
        {fetchOneCliente.data && (
          <div>
            <p>Name: {fetchOneCliente.data.name}</p>
            <p>Email: {fetchOneCliente.data.email}</p>
          </div>
        )}
      </div>

      {/* Abogados */}
      <div className="mb-8">
        <h2 className="mb-4 text-2xl font-bold">Todos los Abogados</h2>
      </div>
      <button
        className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
        onClick={() => fetchAllAbogados.refetch()}
      >
        Get All Abogados
      </button>

      <div className="text- mb-4 mt-4 grid grid-cols-3 gap-4 font-bold">
        <p>Id</p>
        <p>Name</p>
        <p>Email</p>
      </div>

      {fetchAllAbogados.data &&
        fetchAllAbogados.data.map((user) => (
          <div
            key={user.id}
            className="my-4 grid grid-cols-3 gap-4 rounded border border-gray-300 bg-white p-4 shadow"
          >
            <p>{user.id}</p>
            <p>{user.name}</p>
            <p>{user.email}</p>
          </div>
        ))}

    </div>
  );
}
