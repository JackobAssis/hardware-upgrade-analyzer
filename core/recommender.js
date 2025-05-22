const { loadDatabase } = require('./dbLoader');

function recommendUpgrades(hardware) {
  const db = loadDatabase();
  const recommendations = [];

  const currentCpuPerf = hardware.cores * hardware.speed;
  const cpuList = Object.entries(db.cpus).flatMap(([brand, families]) =>
    Object.values(families).flatMap(generations =>
      Object.values(generations).flatMap(cpu =>
        cpu.models.map(model => ({
          model,
          performance: Math.random() * 100 + 50 // Simulação de desempenho
        }))
      )
    )
  );
  const betterCPU = cpuList.find(cpu => cpu.performance > currentCpuPerf);
  if (betterCPU) recommendations.push(`Sugestão de CPU: ${betterCPU.model}`);

  const ramGB = parseFloat(hardware.ram);
  if (ramGB < 8) recommendations.push('Adicionar mais memória RAM (mínimo 8 GB recomendado).');

  const gpuList = Object.entries(db.gpus).flatMap(([brand, series]) =>
    Object.values(series).flatMap(gpu =>
      gpu.models.map(model => ({
        model,
        rank: Math.floor(Math.random() * 20) // Simulação de ranking
      }))
    )
  );
  const betterGPU = gpuList.find(gpu => gpu.rank < 10 && gpu.model !== hardware.gpu);
  if (betterGPU) recommendations.push(`Sugestão de GPU: ${betterGPU.model}`);

  return recommendations.length > 0 ? recommendations : ['Nenhum upgrade necessário no momento.'];
}

module.exports = { recommendUpgrades };