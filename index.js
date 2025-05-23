import dotenv from 'dotenv';
dotenv.config();

import { readHardware } from './core/hardwareReader.js';
import { analisarComIA } from './core/hardwareAdvisor.js';
import readline from 'readline';

async function main() {
  console.log('🔍 Detectando informações de hardware...\n');

  try {
    const hardware = await readHardware();

    console.log(`🖥  Sistema operacional: ${hardware.os}`);
    console.log(`💻  Arquitetura: ${hardware.arch}`);
    console.log(`\n🧠  CPU detectada: ${hardware.cpu.name}`);
    console.log(`🎮  GPU detectada: ${hardware.gpu.name}`);
    console.log(`💾  Memória RAM detectada: ${hardware.ram.amountGB} GB (${hardware.ram.type})`);

    const resposta = await analisarComIA(hardware);
    console.log('\n📊 Análise da IA:\n');
    console.log(resposta);
  } catch (error) {
    console.error(`\n❌ Erro ao executar: ${error.message}`);
  }

  // Pausa antes de fechar o terminal
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.question('\nPressione Enter para sair...', () => {
    rl.close();
  });
}

main();
