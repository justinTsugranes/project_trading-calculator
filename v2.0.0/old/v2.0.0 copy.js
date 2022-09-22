// QUERYING CONSTANTS FROM HTML

const accountBalance = document.querySelector('#accountBalance')
const initialMargin = document.querySelector('#initialMargin')
const percentRisk = document.querySelector('#percentRisk')
const amountRisk = document.querySelector('#amountRisk')
const entryLevel = document.querySelector('#entryLevel')
const profitLevel = document.querySelector('#profitLevel')
const stopLoss = document.querySelector('#stopLoss')
const contractSize = document.querySelector('#contractSize')
const quantity = document.querySelector('#quantity')
const leverage = document.querySelector('#leverage')

// CALCULATIONS

const calc = () => {
  // Total Account Balance
  const accountBalance = accountBalance.value
  // Initial Margin: 2%
  const initialMargin = accountBalance * 0.02
  // % Risk
  const percentRisk = percentRiskPerTrade.value
  // $ Risk
  const amountRisk = totalBalance.value * percentRisk
  // Entry Level
  const entryLevel = entryLevel.value
  // Profit Level
  const profitLevel = profitLevel.value
  // Stop Loss
  const stopLoss = stopLoss.value / 100
  // Stop % From Entry: (1 - (stop loss / entry)) * longShort
  const stopFromEntry = 1 - stopLoss / entryLevel
  // Contract Size: amt risk per trade / stop % from entry
  const contractSize = amountRisk / stopFromEntry
  // Quantity: contract size / entry price
  const quantity = contractSize / entryLevel
  // Leverage: contract size / initial margin
  const leverage = contractSize / initialMargin

  if (accountBalance && percentRisk && entryLevel && profitLevel && stopLoss) {
    initialMargin.innerHTML = (accountBalance * 0.1).toFixed(8)
    amountRisk.innerHTML = (totalBalance * percentRisk).toFixed(8)
    contractSize.innerHTML = (amountRisk / stopFromEntry).toFixed(8)
    quantity.innerHTML = (contractSize / entryLevel).toFixed(8)
    leverage.innerHTML = (contractSize / initialMargin).toFixed(8)
    return true
  }
}

accountBalance.addEventListener('input', calc)
percentRisk.addEventListener('input', calc)
entryLevel.addEventListener('input', calc)
profitLevel.addEventListener('input', calc)
stopLoss.addEventListener('input', calc)

/* const margin = document.querySelector('#margin')
const risk = document.querySelector('#risk')
const riskAmount = document.querySelector('#riskAmount')
const stop = document.querySelector('#stop')
const size = document.querySelector('#size')
const leverage = document.querySelector('#leverage')
const cost = document.querySelector('#cost')

const calc = () => {
  const m = margin.value
  const r = risk.value / 100
  const s = stop.value / 100
  const l = leverage.value

  if (m && r && s) {
    riskAmount.innerHTML = (m * r).toFixed(8)
    size.innerHTML = ((m * r) / s).toFixed(8)
    cost.innerHTML = ((m * r) / s / l).toFixed(8)
    return true
  }
}

margin.addEventListener('input', calc)
risk.addEventListener('input', calc)
stop.addEventListener('input', calc)
leverage.addEventListener('input', calc) */
