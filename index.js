import dotenv from 'dotenv';
dotenv.config();

import { readHardware } from './core/hardwareReader.js';
import { analisarComIA } from './core/hardwareAdvisor.js';

async function main() {
  console.log('🔍 Detectando informações de hardware...\n');

  try {
    const hardware = await readHardware();

    console.log(`🖥  Sistema operacional: ${hardware.os}`);
    console.log(`💻  Arquitetura: ${hardware.arch}`);
    console.log(`\n🧠  CPU detectada: ${hardware.cpu.name}`);
    console.log(`🎮  GPU detectada: ${hardware.gpu.name}`);
    console.log(`💾  Memória RAM detectada: ${hardware.ram.amountGB} GB (${hardware.ram.type})`);

    // Chama IA para análise e sugestões
    await analisarComIA(hardware);
  } catch (error) {
    console.error(`\n❌ Erro ao executar: ${error.message}`);
  }
}

main();