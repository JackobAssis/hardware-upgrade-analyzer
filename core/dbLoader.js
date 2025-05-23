function loadDatabase() {
  return {
    cpus: {
      Intel: {
        'Core i5': {
          '4th Gen': {
            compatibleUpgrades: ['i7-4xxx'],
            models: ['i5-4200U', 'i5-4300U'],
          },
          '5th Gen': {
            compatibleUpgrades: ['i7-5xxx'],
            models: ['i5-5200U'],
          }
        },
        'Core i7': {
          '4th Gen': {
            compatibleUpgrades: [],
            models: ['i7-4700MQ'],
          }
        }
      }
    },
    gpus: {
      NVIDIA: {
        'GTX 10 Series': {
          models: ['GTX 1060', 'GTX 1070'],
          compatibleUpgrades: ['RTX 20 Series', 'RTX 30 Series']
        },
        'RTX 20 Series': {
          models: ['RTX 2060', 'RTX 2070']
        }
      }
    }
  };
}

module.exports = { loadDatabase };