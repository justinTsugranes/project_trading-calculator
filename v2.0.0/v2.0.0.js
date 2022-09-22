// QUERY ALL INPUTS

// const accountBalance = document.querySelector('#accountBalance').value
// const initialMarginPercent = document.querySelector('#initialMargin').value
// const percentRisk = document.querySelector('#percentRisk').value
// const amountRisk = document.querySelector('#amountRisk').value
// const entryLevel = document.querySelector('#entryLevel').value
// const profitLevel = document.querySelector('#profitLevel').value
// const stopLoss = document.querySelector('#stopLoss').value
// const contractSize = document.querySelector('#contractSize').value
// const quantity = document.querySelector('#quantity').value
// const leverage = document.querySelector('#leverage').value

// CALCULATIONS
/*
const calc = () => {
  // Total Account Balance
  accountBalance = Number(document.getElementById('accountBalance').value)
  // Initial Margin Percent
  initialMarginPercent =
    Number(document.getElementById('initialMarginPercent').value) / 100
  // Initial Margin: 2%
  initialMargin = accountBalance * 0.02
  // % Risk
  const percentRisk = percentRiskPerTrade
  // $ Risk
  const amountRisk = totalBalance * percentRisk
  // Entry Level
  const entryLevel = entryLevel
  // Profit Level
  const profitLevel = profitLevel
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
*/

function calcMargin() {
  accountBalance = Number(document.getElementById('accountBalance').value)
  initialMarginPercent =
    Number(document.getElementById('accountBalance').value) / 100
  initialMargin = accountBalance * initialMarginPercent
  document.getElementById('initialMargin').innerHTML = initialMargin
}

function calcAmountRisk() {
  // accountBalance = Number(document.getElementById('accountBalance').value)
  percentRisk = Number(document.getElementById('percentRisk').value / 100)
  amountRisk = accountBalance * percentRisk
  document.getElementById('amountRisk').innerHTML = amountRisk
}

function stopFromEntry() {
  // 1 - stopLoss / entryLevel
  stopLoss = Number(document.getElementById('stopLoss').value)
  entryLevel = Number(document.getElementById('entryLevel').value)
  stopFromEntry = 1 - stopLoss / entryLevel
  document.getElementById('stopFromEntry').innerHTML = stopFromEntry
}

function calcContractSize() {
  // amountRisk / stopFromEntry
  percentRisk = Number(document.getElementById('percentRisk').value / 100)
  entryLevel = Number(document.getElementById('entryLevel').value)
  stopFromEntry = 1 - stopLoss / entryLevel
  contractSize = amountRisk / stopFromEntry
  document.getElementById('contractSize').innerHTML = contractSize
}

function calcQuantity() {
  // contractSize / entryLevel
  quantity = contractSize / entryLevel
  document.getElementById('quantity').innerHTML = quantity
}

function calcLeverage() {
  // contractSize / initialMargin
  leverage = contractSize / initialMargin
  document.getElementById('leverage').innerHTML = leverage
}
