const fs = require('fs');
const path = require('path');
const db = JSON.parse(fs.readFileSync(path.join(__dirname, '../data/hardware-db.json')));

function recommendUpgrades(hardware) {
  const recommendations = [];

  const betterCPU = db.cpus.find(cpu => cpu.performance > hardware.cores * hardware.speed);
  if (betterCPU) recommendations.push(`Sugestão de CPU: ${betterCPU.model}`);

  const ramGB = parseFloat(hardware.ram);
  if (ramGB < 8) recommendations.push('Adicionar mais memória RAM (mínimo 8 GB recomendado).');

  const betterGPU = db.gpus.find(gpu => gpu.rank < 10 && gpu.model !== hardware.gpu);
  if (betterGPU) recommendations.push(`Sugestão de GPU: ${betterGPU.model}`);

  return recommendations.length > 0 ? recommendations : ['Nenhum upgrade necessário no momento.'];
}

module.exports = { recommendUpgrades };