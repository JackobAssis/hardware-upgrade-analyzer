const dotenv = require('dotenv');
dotenv.config();

const { readHardware } = require('./core/hardwareReader.js');
const { analisarComIA } = require('./core/hardwareAdvisor.js');

async function main() {
  console.log('🔍 Detectando informações de hardware...\n');

  try {
    const hardware = await readHardware();
    
    console.log(`🖥  Sistema operacional: ${hardware.os}`);
    console.log(`💻  Arquitetura: ${hardware.arch}`);
    console.log(`\n🧠  CPU detectada: ${hardware.cpu.name}`);
    console.log(`🎮  GPU detectada: ${hardware.gpu.name}`);
    console.log(`💾  Memória RAM detectada: ${hardware.ram.amountGB} GB (${hardware.ram.type})`);

    await analisarComIA(hardware);
  } catch (error) {
    console.error(`\n❌ Erro ao executar: ${error.message}`);
  }
}

import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

main();
