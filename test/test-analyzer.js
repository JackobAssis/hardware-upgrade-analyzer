const assert = require('assert');
const { analyzeHardware } = require('../core/analyzer');

function runTests() {
  console.log('🧪 Iniciando testes do analyzer...');

  let hardware = { ram: '4', cores: 2 };
  let result = analyzeHardware(hardware);
  assert.ok(result.includes('Memória RAM abaixo de 8 GB pode limitar multitarefas.'), 'Deve avisar sobre pouca RAM');
  assert.ok(result.includes('Processador com menos de 4 núcleos é limitado para tarefas modernas.'), 'Deve avisar sobre poucos núcleos');

  hardware = { ram: '16', cores: 8 };
  result = analyzeHardware(hardware);
  assert.deepStrictEqual(result, ['Hardware equilibrado para uso geral.'], 'Deve indicar hardware equilibrado');

  console.log('✅ Todos os testes passaram!');
}

runTests();