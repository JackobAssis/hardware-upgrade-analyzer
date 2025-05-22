const analyzeHardware = (hardware) => {
    const issues = [];
  
    if (parseFloat(hardware.ram) < 8) {
      issues.push('Memória RAM abaixo de 8 GB pode limitar multitarefas.');
    }
  
    if (hardware.cores < 4) {
      issues.push('Processador com menos de 4 núcleos é limitado para tarefas modernas.');
    }
  
    return issues.length > 0 ? issues : ['Hardware equilibrado para uso geral.'];
  };
  
  module.exports = { analyzeHardware };