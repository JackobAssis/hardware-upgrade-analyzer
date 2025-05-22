const os = require('os');
const { findCpuUpgrade, findGpuUpgrade, findMemoryUpgrade } = require('./core/hardwareService');
const { recommendUpgrades } = require('./core/recommender');

const detectedCpuModel = 'i5-4200U';
const detectedGpuModel = 'GTX 1060';
const detectedMemoryType = 'DDR3';

console.log('Detectando informações de hardware...\n');
console.log(`Sistema operacional: ${os.platform()}`);
console.log(`Arquitetura: ${os.arch()}`);
console.log(`CPU detectada: ${detectedCpuModel}`);
console.log(`GPU detectada: ${detectedGpuModel}`);
console.log(`Memória detectada: ${detectedMemoryType}`);

const cpuInfo = findCpuUpgrade(detectedCpuModel);
if (cpuInfo) {
  console.log('\nSugestões de upgrade para CPU:');
  console.log(`Marca: ${cpuInfo.brand}`);
  console.log(`Família: ${cpuInfo.family}`);
  console.log(`Geração: ${cpuInfo.generation}`);
  console.log(`Upgrades compatíveis: ${cpuInfo.compatibleUpgrades.join(', ')}`);
} else {
  console.log('\nNenhuma sugestão de upgrade para CPU encontrada.');
}

const gpuInfo = findGpuUpgrade(detectedGpuModel);
if (gpuInfo) {
  console.log('\nSugestões de upgrade para GPU:');
  console.log(`Marca: ${gpuInfo.brand}`);
  console.log(`Série: ${gpuInfo.series}`);
  console.log(`Upgrades compatíveis: ${gpuInfo.compatibleUpgrades.join(', ')}`);
} else {
  console.log('\nNenhuma sugestão de upgrade para GPU encontrada.');
}

const memoryInfo = findMemoryUpgrade(detectedMemoryType);
if (memoryInfo) {
  console.log('\nSugestões de upgrade de Memória:');
  console.log(`Tipo: ${detectedMemoryType}`);
  console.log(`Velocidade Máxima: ${memoryInfo.maxSpeed}`);
  console.log(`Compatível com: ${memoryInfo.compatibleWith.join(', ')}`);
} else {
  console.log('\nNenhuma sugestão de upgrade para Memória encontrada.');
}

console.log('\nRecomendações Gerais:');
const recommendations = recommendUpgrades({
  cores: 2,
  speed: 2.5,
  ram: 4,
  gpu: detectedGpuModel
});
recommendations.forEach(r => console.log(`- ${r}`));
