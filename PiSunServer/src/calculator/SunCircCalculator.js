const SUN_RADIUS = 696340n; // this is in KM

const calcSunCircumference = pi => {
  const reducePi = pi.replace('.', '');
  const decimalLength = pi.substring(2).length;
  const circ = 2n * BigInt(reducePi) * SUN_RADIUS;
  const circRoundNum = circ.toString().substring(0, circ.toString().length - decimalLength);
  const circDecNum = circ.toString().substring(circ.toString().length - decimalLength);
  if (circDecNum.length === 0) {
    return circRoundNum;
  }
  return circRoundNum + '.' + circDecNum;
};

module.exports = calcSunCircumference;
