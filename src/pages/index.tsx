import { useState } from "react";
import { api } from "~/utils/api";



// Componente para mostrar un cliente individual
const ClienteItem = ({ cliente }) => {
  return (
    <div>
      <p>{cliente.id}</p>
      {/*cliente Name Id */}
      
    </div>
  );
};

// Componente para mostrar un abogado individual
const AbogadoItem = ({ abogado }) => {
  return (
    <div>
      <p>{abogado.id}</p>

    </div>
  );
};

// Componente para mostrar un expediente individual
const ExpedienteItem = ({ expediente }) => {
  return (
    <div>
      <p>ID: {expediente.id}</p>
      <p>EXP: {expediente.exp}</p>
      <p>Status: {expediente.status}</p>
      <p>CI: {expediente.ci}</p>
      <p>Mail Client: {expediente.mailClient}</p>
      <p>Resumen: {expediente.resumen}</p>
    </div>
  );
};


export default function Home() {
  // Define constants for Clientes
  const [clienteData, setClienteData] = useState({
    name: "",
    email: "",
    photo: "",
    ci: "",
    idToUpdate: "",
    nameToUpdate: "",
    emailToUpdate: "",
    idToDelete: "",
  });
  const [clienteId, setClienteId] = useState("");
  const [ClienteNameToUpdate, setNameToUpdateCliente] = useState("");
  const [ClienteEmailToUpdate, setEmailToUpdateCliente] = useState("");
  const [ClientePhotoToUpdate, setPhotoToUpdateCliente] = useState("");
  const [ClienteCiToUpdate, setCiToUpdateCliente] = useState("");

  

  // Define constants for Abogados
  const [abogadoData, setAbogadoData] = useState({
    name: "",
    email: "",
    idToUpdate: "",
    nameToUpdate: "",
    emailToUpdate: "",
    idToDelete: "",
  });
  const [abogadoId, setAbogadoId] = useState("");

    // Constants and State for Expediente
    const [expedienteData, setExpedienteData] = useState({
      id: "",
      body: "",
      categories: "",
      ci: "",
      status: "",
      exp: "",
      mailClient: "",
      postedOn: "",
      resumen: "",
      abogado: "",
      idToUpdate: "",
      bodyToUpdate: "",
      categoriesToUpdate: "",
      idToDelete: "",
    });

  const [expId, setExpId] = useState("");

  // Define functions for Clientes
  const fetchAllClientes = api.exampleRouterClientes.getAllClientes.useQuery();
  const fetchOneCliente = api.exampleRouterClientes.getClienteById.useQuery({ id: clienteId });
  const createClienteMutation = api.exampleRouterClientes.createCliente.useMutation();
  const updateClienteMutation = api.exampleRouterClientes.updateCliente.useMutation();
  const deleteClienteMutation = api.exampleRouterClientes.deleteCliente.useMutation();

  // Define functions for Abogados
  const fetchAllAbogados = api.exampleRouterAbogados.getAllAbogados.useQuery();
  const fetchOneAbogado = api.exampleRouterAbogados.getAbogadoById.useQuery({ id: abogadoId });
  const createAbogadosMutation = api.exampleRouterAbogados.createAbogado.useMutation();
  const updateAbogadosMutation = api.exampleRouterAbogados.updateAbogado.useMutation();
  const deleteAbogadosMutation = api.exampleRouterAbogados.deleteAbogado.useMutation();

    // Define functions for Clientes
    const fetchAllExpedientes = api.exampleRouterExpedientes.getAllExpedientes.useQuery();
    const fetchOneExpediente = api.exampleRouterExpedientes.getExpedienteById.useQuery({ id: expId });
    const createExpedienteMutation = api.exampleRouterExpedientes.createCliente.useMutation();
    const updateExpedienteMutation = api.exampleRouterExpedientes.updateCliente.useMutation();
    const deleteExpedienteMutation = api.exampleRouterExpedientes.deleteCliente.useMutation();
  

  // Define handlers for Clientes
  const handleCreateCliente = async () => {
    try {
      await createClienteMutation.mutateAsync({
        name: clienteData.name,
        email: clienteData.email,
        ci: clienteData.ci,
        photo: clienteData.photo,

      });
      setClienteData({
        name: "",
        email: "",
        ci: "",
        photo: "",
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

    // Define handlers for Expedientes
    // Define handlers for Abogados
    const handleCreateExpediente = async () => {
    try {
      await createAbogadosMutation.mutateAsync({
        body: expedienteData.body,
        caterories: expedienteData.categories,
        ci: expedienteData.ci,
        status: expedienteData.status,
        exp: expedienteData.exp,
        mailClient: expedienteData.mailClient,
        resumen: expedienteData.resumen,
      });
      setExpedienteData({
        id: "",
        body: "",
        categories: "",
        ci: "",
        status: "",
        exp: "",
        mailClient: "",
        postedOn: "",
        resumen: "",
        idToUpdate: "",
        nameToUpdate: "",
        emailToUpdate: "",
        idToDelete: "",
      });
      fetchAllExpedientes.refetch();
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
            <p>{user.ci}</p>
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

         {/* Create User */}
         <div className="mb-8">
        <h2 className="mb-4 text-2xl font-bold">Create New User</h2>
        <div className="mb-4 flex">
          <input
            className="mr-2 w-1/2 border border-gray-300 p-2"
            placeholder="Name"
            value={ClienteNameToUpdate}
            onChange={(e) => setNameToUpdateCliente(e.target.value)}
          />
          <input
            className="w-1/2 border border-gray-300 p-2"
            placeholder="Email"
            value={ClienteEmailToUpdate}
            onChange={(e) => setEmailToUpdateCliente(e.target.value)}
          />
           <input
            className="w-1/2 border border-gray-300 p-2"
            placeholder="Email"
            value={ClientePhotoToUpdate}
            onChange={(e) => setPhotoToUpdateCliente(e.target.value)}
          />
           <input
            className="w-1/2 border border-gray-300 p-2"
            placeholder="Email"
            value={ClienteCiToUpdate}
            onChange={(e) => setCiToUpdateCliente(e.target.value)}
          />
        </div>

        <button
          className="rounded bg-green-500 px-4 py-2 text-white hover:bg-green-600"
          onClick={handleCreateCliente}
        >
          Create User
        </button>
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
         {/* Get one user UI Abogado */}

         <div className="mb-8">
        <h2 className="mb-4 text-2xl font-bold">Cada abogado</h2>
        <div className="mb-4 flex">
          <input
            className="mr-2 border border-gray-300 p-2"
            placeholder="Enter user id to get"
            value={abogadoId || ""}
            onChange={(e) => setAbogadoId(String(e.target.value))}
          />
          <button
            className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
            onClick={() => fetchOneAbogado.refetch()}
          >
           Obtener un Cliente
          </button>
        </div>
        {fetchOneAbogado.data && (
          <div>
            <p>Name: {fetchOneAbogado.data.name}</p>
            <p>Email: {fetchOneAbogado.data.email}</p>
          </div>
        )}
      </div>

         {/* Expedientes */}
      <div className="mb-8">
        <h2 className="mb-4 text-2xl font-bold">Get All Clientes</h2>
      </div>
      <button
        className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
        onClick={() => fetchAllExpedientes.refetch()}
      >
        Todos los Clientes
      </button>

      <div className="text- mb-4 mt-4 grid grid-cols-8 gap-4 font-bold">
        <p>Id Exp</p>
        <p>Exp N°</p>
        <p>Estatus</p>
        <p>Cédula Cliente</p>
        <p>email Cliente</p>
        <p>Resumen</p>
        <p>Id Cliente</p>
        <p>Id Abogado</p>
      </div>

      {fetchAllExpedientes.data &&
        fetchAllExpedientes.data.map((user) => (
          <div
            key={user.id}
            className="my-4 grid grid-cols-8 gap-4 rounded border border-gray-300 bg-white p-4 shadow"
          >
            <p>{user.id}</p>
            <p>{user.exp}</p>
            <p>{user.status}</p>
            <p>{user.ci}</p>
            <p>{user.mailClient}</p>
            <p>{user.resumen}</p>
            <ClienteItem cliente={user} />
            <AbogadoItem abogado={user} />            
          </div>
          
        ))}


            {/* Get one user UI Expediente */}

            <div className="mb-8">
        <h2 className="mb-4 text-2xl font-bold">Cada Expediente</h2>
        <div className="mb-4 flex">
          <input
            className="mr-2 border border-gray-300 p-2"
            placeholder="Enter user id to get"
            value={expId || ""}
            onChange={(e) => setExpId(String(e.target.value))}
          />
          <button
            className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
            onClick={() => fetchOneExpediente.refetch()}
          >
           Obtener un Cliente
          </button>
        </div>
        {fetchOneExpediente.data && (
          <div>
            <p>Exp N°: {fetchOneExpediente.data.exp}</p>
            <p>Id Exp: {fetchOneExpediente.data.id}</p>
          </div>
        )}
      </div>

    </div>
  );
}
