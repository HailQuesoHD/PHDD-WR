

const clientes = [
    { id: 1, nombre: "Ana", edad: 28 },
    { id: 2, nombre: "Luis", edad: 35 },
    { id: 3, nombre: "María", edad: 22 }
];

clientes.forEach(cliente => {
    console.log(`Nombre: ${cliente.nombre}, Edad: ${cliente.edad}`);
});