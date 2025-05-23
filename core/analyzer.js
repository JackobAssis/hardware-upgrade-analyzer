const analyzeHardware = (hardware) => {
  const issues = [];

  if (parseFloat(hardware.ram) < 8) {
    issues.push('Adicionar mais memória RAM (mínimo 8 GB recomendado).');
  }

  if (hardware.cores < 4) {
    issues.push('Processador com menos de 4 núcleos é limitado para tarefas modernas.');
  }

  return issues.length > 0 ? issues : ['Hardware equilibrado para uso geral.'];
};

module.exports = { analyzeHardware };