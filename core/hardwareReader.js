const si = require('systeminformation');

async function getHardwareInfo() {
  const cpu = await si.cpu();
  const mem = await si.mem();
  const gpu = (await si.graphics()).controllers[0];
  const baseboard = await si.baseboard();

  return {
    cpu: cpu.brand,
    cores: cpu.cores,
    speed: cpu.speed,
    ram: (mem.total / 1073741824).toFixed(2) + ' GB',
    gpu: gpu ? gpu.model : 'N/A',
    baseboard: baseboard.model
  };
}

module.exports = { getHardwareInfo };