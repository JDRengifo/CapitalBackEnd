const server = require("./src/app");

const PORT = 3000;

server.listen(PORT, () => {
  console.log(`Escuchando en el puerto ${PORT}`);
});
