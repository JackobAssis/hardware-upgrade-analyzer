const { readHardware } = require('./core/hardwareReader');
const { recommendUpgrades } = require('./core/recommender');

function printHardwareInfo(hardware, recommendations) {
  console.log('🔍 Detectando informações de hardware...\n');

  console.log(`🖥️ Sistema operacional: ${hardware.os}`);
  console.log(`💻 Arquitetura: ${hardware.arch}\n`);

  // Como hardware.cpu e hardware.gpu são objetos, formatamos para string
  console.log(`🧠 CPU detectada: ${hardware.cpu.name || 'Não detectada'}`);
  console.log(`🎮 GPU detectada: ${hardware.gpu.name || 'Não detectada'}`);
  console.log(`💾 Memória detectada: ${hardware.ram.amountGB} GB (${hardware.ram.type})\n`);

  console.log('⚙️ Recomendações Gerais:\n');

  const cpuRec = recommendations.find(r => r.toLowerCase().includes('cpu'));
  const gpuRec = recommendations.find(r => r.toLowerCase().includes('gpu'));
  const ramRec = recommendations.find(r => r.toLowerCase().includes('memória') || r.toLowerCase().includes('ram'));

  console.log('🔧 CPU:');
  console.log(cpuRec ? `  - ${cpuRec}` : '  - Nenhuma sugestão de upgrade para CPU.\n');

  console.log('\n🖥️ GPU:');
  console.log(gpuRec ? `  - ${gpuRec}` : '  - Nenhuma sugestão de upgrade para GPU.\n');

  console.log('\n💾 Memória:');
  console.log(ramRec ? `  - ${ramRec}` : '  - Nenhuma sugestão de upgrade para memória.\n');

  console.log('\n---');
}

async function main() {
  try {
    const hardware = await readHardware();

    // Recebe as recomendações com base no hardware
    const recommendations = recommendUpgrades(hardware);

    printHardwareInfo(hardware, recommendations);
  } catch (error) {
    console.error('❌ Erro ao executar:', error);
  }
}

main();