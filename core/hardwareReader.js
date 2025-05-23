const os = require('os');
const execSync = require('child_process').execSync;

function getCpuInfo() {
  // Retorna nome, marca, família e geração simplificada para testes
  const cpus = os.cpus();
  if (!cpus || cpus.length === 0) return {};

  const model = cpus[0].model || '';
  // Exemplo: "Intel(R) Core(TM) i5-4200U CPU @ 1.60GHz"
  const cpuBrand = model.includes('Intel') ? 'Intel' : '';
  let cpuFamily = '';
  let cpuGen = '';

  // Tentar extrair geração e família do modelo com regex
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
  // Tente pegar GPU via lspci (Linux)
  try {
    const output = execSync('lspci | grep -i vga').toString();
    // Exemplo: 00:02.0 VGA compatible controller: NVIDIA Corporation GM204M [GeForce GTX 970M] (rev a1)
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
  // Só retorna quantidade por enquanto
  return { amountGB: totalMemGB, type: 'DDR3' }; // tipo fixo para exemplo
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