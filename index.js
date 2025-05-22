const os = require('os');

function getHardwareInfo() {
  console.log("Detectando informações de hardware...\n");

  const cpus = os.cpus();
  const totalMemGB = (os.totalmem() / (1024 ** 3)).toFixed(2);

  console.log("Sistema operacional:", os.platform());
  console.log("Arquitetura:", os.arch());
  console.log("CPU:", cpus[0].model);
  console.log("Número de núcleos:", cpus.length);
  console.log("Memória RAM total:", totalMemGB + " GB");
}

getHardwareInfo();