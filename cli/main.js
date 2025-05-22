const { getHardwareInfo } = require('../core/hardwareReader');
const { analyzeHardware } = require('../core/analyzer');
const { recommendUpgrades } = require('../core/recommender');

(async () => {
  console.log('Analisando hardware...');
  const hardware = await getHardwareInfo();
  console.table(hardware);

  console.log('\nAnálise de Gargalos:');
  const issues = analyzeHardware(hardware);
  issues.forEach(msg => console.log('- ' + msg));

  console.log('\nRecomendações de Upgrade:');
  const recs = recommendUpgrades(hardware);
  recs.forEach(msg => console.log('- ' + msg));
})();