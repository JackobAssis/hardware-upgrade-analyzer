const { loadDatabase } = require('./dbLoader');

function findCpuUpgrade(cpuModel) {
  const db = loadDatabase();
  for (const [brand, families] of Object.entries(db.cpus)) {
    for (const [family, generations] of Object.entries(families)) {
      for (const [generation, cpuData] of Object.entries(generations)) {
        if (cpuData.models.some(model => model.toLowerCase() === cpuModel.toLowerCase())) {
          return { brand, family, generation, compatibleUpgrades: cpuData.compatibleUpgrades };
        }
      }
    }
  }
  return null;
}

function findGpuUpgrade(gpuModel) {
  const db = loadDatabase();
  for (const [brand, seriesList] of Object.entries(db.gpus)) {
    for (const [seriesName, gpuData] of Object.entries(seriesList)) {
      if (gpuData.models.some(model => model.toLowerCase() === gpuModel.toLowerCase())) {
        return { brand, series: seriesName, compatibleUpgrades: gpuData.compatibleUpgrades };
      }
    }
  }
  return null;
}

function findMemoryUpgrade(memoryType) {
  const db = loadDatabase();
  return db.memory[memoryType] || null;
}

module.exports = { findCpuUpgrade, findGpuUpgrade, findMemoryUpgrade };