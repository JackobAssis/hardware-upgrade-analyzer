const os = require('os');
const { execSync } = require('child_process');

function getCpuInfo() {
  const cpus = os.cpus();
  if (!cpus || cpus.length === 0) return {};

  const model = cpus[0].model || '';
  const cpuBrand = model.includes('Intel') ? 'Intel' : '';
  let cpuFamily = '';
  let cpuGen = '';

  const match = model.match(/i(\d)-(\d{4})/i);
  if (match) {
    cpuFamily = `Core i${match[1]}`;
    const genDigit = match[2][0];
    cpuGen = `${genDigit}th Gen`;
  }

  return {
    name: model,
    brand: cpuBrand,
    family: cpuFamily,
    generation: cpuGen,
  };
}

function getGpuInfo() {
  try {
    const output = execSync('lspci | grep -i vga').toString();
    const gpuLine = output.split('\n')[0] || '';
    const gpuNameMatch = gpuLine.match(/\[([^\]]+)\]/);
    const gpuName = gpuNameMatch ? gpuNameMatch[1] : gpuLine;
    return { name: gpuName };
  } catch {
    return { name: 'Não detectado' };
  }
}

function getRamInfo() {
  const totalMemGB = Math.round(os.totalmem() / (1024 ** 3));
  return { amountGB: totalMemGB, type: 'DDR3' }; // tipo fictício por enquanto
}

async function readHardware() {
  return {
    cpu: getCpuInfo(),
    gpu: getGpuInfo(),
    ram: getRamInfo(),
    os: os.type(),
    arch: os.arch()
  };
}

module.exports = { readHardware };