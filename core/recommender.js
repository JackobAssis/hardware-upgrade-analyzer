// core/recommender.js
const { loadDatabase } = require('./dbLoader');

// --- Funções de pontuação ---
function scoreCpuModel(model) {
  if (/i9/i.test(model)) return 95;
  if (/i7/i.test(model)) return 90;
  if (/i5/i.test(model)) return 75;
  if (/i3/i.test(model)) return 60;
  return 50;
}

function scoreGpuModel(model) {
  if (/RTX 40/i.test(model)) return 95;
  if (/RTX 30/i.test(model)) return 85;
  if (/GTX 10/i.test(model)) return 70;
  if (/GT/i.test(model)) return 50;
  return 40;
}

function filterCompatibleUpgrades(currentModel, compatiblePrefixes, modelList) {
  return modelList.filter(entry =>
    entry.model !== currentModel &&
    compatiblePrefixes.some(prefix => entry.model.startsWith(prefix.replace('x', '')))
  );
}

function recommendUpgrades(hardware) {
  const db = loadDatabase();
  const recommendations = [];

  // --- CPU ---
  const currentCpuScore = scoreCpuModel(hardware.cpu || '');
  const currentCpuBrand = hardware.cpuBrand;
  const currentCpuFamily = hardware.cpuFamily;
  const currentCpuGen = hardware.cpuGen;

  const cpuModels = Object.entries(db.cpus).flatMap(([brand, families]) =>
    Object.values(families).flatMap(generations =>
      Object.values(generations).flatMap(cpu =>
        cpu.models.map(model => ({ model, score: scoreCpuModel(model) }))
      )
    )
  );

  const compatibleCpuPrefixes = db.cpus?.[currentCpuBrand]?.[currentCpuFamily]?.[currentCpuGen]?.compatibleUpgrades || [];
  const betterCompatibleCpus = filterCompatibleUpgrades(hardware.cpu, compatibleCpuPrefixes, cpuModels)
    .filter(cpu => cpu.score > currentCpuScore)
    .sort((a, b) => b.score - a.score);

  if (betterCompatibleCpus.length) {
    recommendations.push(`Melhor CPU sugerida: ${betterCompatibleCpus[0].model} (score ${betterCompatibleCpus[0].score})`);
  }

  // --- RAM ---
  const ramGB = parseFloat(hardware.ram);
  if (ramGB < 8) {
    recommendations.push('Adicionar mais memória RAM (mínimo 8 GB recomendado).');
  }

  // --- GPU ---
  const currentGpuScore = scoreGpuModel(hardware.gpu || '');
  const gpuModels = Object.entries(db.gpus).flatMap(([brand, series]) =>
    Object.values(series).flatMap(gpu =>
      gpu.models.map(model => ({ model, score: scoreGpuModel(model) }))
    )
  );

  const betterGpus = gpuModels.filter(gpu => gpu.score > currentGpuScore && gpu.model !== hardware.gpu)
    .sort((a, b) => b.score - a.score);

  if (betterGpus.length) {
    recommendations.push(`Melhor GPU sugerida: ${betterGpus[0].model} (score ${betterGpus[0].score})`);
  }

  return recommendations.length > 0 ? recommendations : ['Nenhum upgrade necessário no momento.'];
}

module.exports = { recommendUpgrades };
