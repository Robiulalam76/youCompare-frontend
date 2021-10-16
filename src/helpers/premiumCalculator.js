/**
 * 
 * @param {array of objects} premiums 
 * @param {array of objects} discounts 
 * @param {number} vatInParcentage
 * @returns {object} 
 */
export function premiumCalculator(premiums, discounts, vatInParcentage) {
  const sumReducer = (acc, val) => acc + val.value;
  const totalPremium = premiums.reduce(sumReducer, 0);
  const totalDiscount = discounts.reduce(sumReducer, 0);
  const packagePremium = parseInt(totalPremium) - parseInt(totalDiscount);
  const vat = Math.round((packagePremium * vatInParcentage) / 100);
  const netPremium = packagePremium + vat;
  return {
    packagePremium, vat, netPremium
  }
}