const mapKey = Object.freeze({
  THREE: "3개 일치 (5,000원)",
  FOUR: "4개 일치 (50,000원)",
  FIVE: "5개 일치 (1,500,000원)",
  FIVE_BOUNS: "5개 일치, 보너스 볼 일치 (30,000,000원)",
  SIX: "6개 일치 (2,000,000,000원)",
});


const priceMap = Object.freeze({
  THREE: 5000,
  FOUR: 50000,
  FIVE: 1500000,
  FIVE_BOUNS: 30000000,
  SIX: 2000000000,
});


module.exports = { mapKey, priceMap }