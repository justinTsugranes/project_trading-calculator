/* const margin = document.querySelector('#margin')
const risk = document.querySelector('#risk')
const riskAmount = document.querySelector('#riskAmount')
const stop = document.querySelector('#stop')
const size = document.querySelector('#size')
const leverage = document.querySelector('#leverage')
const cost = document.querySelector('#cost') */

// QUERYING CONSTANTS FROM HTML

// Total Account Balance
const totalBalance = document.querySelector('#totalBalance')
// $ in Trading Account
const amtInTradingAccnt = document.querySelector('#amtInTradingAccnt')
// $ in Funding Account
const amtInFundingAccnt = document.querySelector('#amtInFundingAccnt')
// %R / Trade
const percentRiskPerTrade = document.querySelector('#percentRiskPerTrade')
// $R / Trade
const amtRiskPerTrade = document.querySelector('#amtRiskPerTrade')
// Max Allowable Loss / Day
const maxLossPerDay = document.querySelector('#maxLossPerDay')
// Max Allowable Loss / Week
const mazLossPerWeek = document.querySelector('#mazLossPerWeek')
//  Available Trading Capital - excluding amt locked in orders
const availableTradingCapital = document.querySelector(
  '#availableTradingCapital'
)
// Total Capital Locked in Orders
const totalCapitalInOrders = document.querySelector('#totalCapitalInOrders')
// Total Capital Potentially At Risk - total amt in orders and active trades plus all entry/exit/maintenance fees
const totalPotentialRisk = document.querySelector('#totalPotentialRisk')
// Total Current Trade Exposure - amt up for margin
const totalTradeExposure = document.querySelector('#totalTradeExposure')
// Total USD Currently At Risk
const totalAmtAtRisk = document.querySelector('#totalAmtAtRisk')
// Total Percent of Account Currently At Risk
const totalPercentAtRisk = document.querySelector('#totalPercentAtRisk')
// Total Realized P & L
const totalRealizedPL = document.querySelector('#totalRealizedPL')
// Total UnRealized P & L
const totalUnrealizedPL = document.querySelector('#totalUnrealizedPL')
// Win Loss Ratio
const winLossRatio = document.querySelector('#winLossRatio')
// Average R Value Per Trade
const averageRValuePerTrade = document.querySelector('#averageRValuePerTrade')
// Average $ R Per Trade
const averageAmtPerTrade = document.querySelector('#averageAmtPerTrade')

//TRADE ENTRY

// Initial Margin
const initialMargin = document.querySelector('#initialMargin')
// % Risk
const percentRisk = document.querySelector('#percentRisk')
// $ Risk
const amountRisk = document.querySelector('#amountRisk')
// Long / Short
const longShort = document.querySelector('#longShort')
// Entry Level
const entryLevel = document.querySelector('#entryLevel')
// Profit Level - price, percentage, R value, ATR value
const profitLevel = document.querySelector('#profitLevel')
/* price, percentage, rvalue, atr */
// Stop Loss - price, percentage, $ amount ATR value
const stopLoss = document.querySelector('#stopLoss')
/* price, percentage, amount, atr */
// Stop % From Entry
const stopFromEntry = document.querySelector('#stopFromEntry')
// Quantity
const quantity = document.querySelector('#quantity')
// Contract Size
const contractSize = document.querySelector('#contractSize')
// Leverage
const leverage = document.querySelector('#leverage')
// Liquidation Price
const liquidationPrice = document.querySelector('#liquidationPrice')
// Liquidation % From Entry
const liquidationPercentDistance = document.querySelector(
  '#liquidationPercentDistance'
)
// Fee To Open
const feeToOpen = document.querySelector('#feeToOpen')
// Fee To Close
const feeToClose = document.querySelector('#feeToClose')
// Maintenance Margin
const maintenanceMargin = document.querySelector('#maintenanceMargin')
// Total Order Cost
const totalOrderCost = document.querySelector('#totalOrderCost')
// Actual $ At Risk
const amountAtRisk = document.querySelector('#amountAtRisk')

// TRADE EXIT TARGETS
// Target R/R Ratio
const targetRiskToReward = document.querySelector('#targetRiskToReward')
// Target % Change
const targetPercentChange = document.querySelector('#targetPercentChange')
// Target Net Earnings
const targetNetEarnings = document.querySelector('#targetNetEarnings')
// Target ROI
const targetROI = document.querySelector('#targetROI')

// CALCULATIONS

const calculator = () => {
  // Total Account Balance
  const totalBalance = totalBalance.value
  // $ in Trading Account: 10% of total account
  const amtInTradingAccnt = totalBalance.value * 0.1
  // $ in Funding Account: 1% of total account
  const amtInFundingAccnt = totalBalance.value * 0.01
  // %R / Trade:User Input %
  const percentRiskPerTrade = percentRiskPerTrade.value / 100
  // $R / Trade: total balance * percent risk per trade
  const amtRiskPerTrade = totalBalance.value * percentRiskPerTrade.value
  // Max Allowable Loss / Day: 3R - amt risk per trade * 3
  const maxLossPerDay = amtRiskPerTrade * 3
  // Max Allowable Loss / Week: 9R - amt risk per trade * 9
  const mazLossPerWeek = amtRiskPerTrade * 9
  //  Available Trading Capital - excluding amt locked in orders
  const availableTradingCapital = ''
  // Total Capital Locked in Orders: sum of the total cost of all active orders
  const totalCapitalInOrders = ''
  // Total Capital Potentially At Risk - total amt in orders and active trades plus all entry/exit/maintenance fees
  const totalPotentialRisk = ''
  // Total Current Trade Exposure - sum of current margin for all active trades
  const totalTradeExposure = ''
  // Total USD Currently At Risk: sum of the actual $ at risk for all active trades
  const totalAmtAtRisk = ''
  // Total Percent of Account Currently At Risk: total USD at Risk / 100
  const totalPercentAtRisk = ''
  // Total Realized P & L: net earnings of completed trades minus fees
  // Closed P&L = Position P&L - Fee to open - Fee to close - Sum of all funding fees paid/received
  // Realized P&L = Sum of realized position P&L - Trading fees - Funding fees over the period of position opening 
  const totalRealizedPL = ''
  // Total UnRealized P & L: potential net earnings/losses minus fees of all active trades
  // for long position: Unrealized P&L = Contract Qty x (Last Traded Price - Entry Price)
  // for short position: Unrealized P&L = Contract Qty x (Entry Price - Last Traded Price)
  const totalUnrealizedPL = ''
  // Win Loss Ratio: positive outcome trades / negative outcome trades
  const winLossRatio = ''
  // Average R Value Per Trade: 
  const averageRValuePerTrade = ''
  // Average $ R Per Trade: total realized p&l / number of trades
  const averageAmtPerTrade = ''

  //TRADE ENTRY

  // Initial Margin: 2%
  const initialMargin = totalBalance.value * 0.02
  // % Risk: called from user input above. you can make this more efficient
  const percentRisk = percentRiskPerTrade.value
  // $ Risk
  const amountRisk = totalBalance.value * percentRisk
  // Long / Short: is this a switch statement? I need a positive number if long is toggled and a negative number if short is toggled.
  let longShort = 0
  switch (longShort) {
    case long:
      longShort = 1;
      break;
    case short:
      longShort = -1;
  }
  // Entry Level
  const entryLevel = entryLevel.value
  // Profit Level - price, percentage, R value, ATR value
  const profitLevel = profitLevel.value
  /* price, percentage, rvalue, atr */
  // Stop Loss - price, percentage, $ amount ATR value
  const stopLoss = stopLoss.value
  /* price, percentage, amount, atr */
  // Stop % From Entry: (1 - (stop loss / entry)) * longShort
  const stopFromEntry = 
  // Quantity: contract size / entry price
  const quantity = 
  // Contract Size: amt risk per trade / stop % from entry
  const contractSize = 
  // Leverage: contract size / initial margin
  const leverage = 
  // Liquidation Priced
  // Initial Margin Rate = 1/Leverage
  // For Longs: Liquidation Price = Entry Price * (1 - Initial Margin Rate + Maintenance Margin Rate) - Extra Margin Added/ Contract Size
  // For Shorts: Liquidation Price = Entry Price * (1 + Initial Margin Rate - Maintenance Margin Rate) + Extra Margin Added/ Contract Size
  const liquidationPrice = 
  // Liquidation % From Entry
  const liquidationPercentDistance = 
  // Fee To Open = Order Quantity × Order Price × Taker Fee Rate
  const feeToOpen = 
  // Fee To Close = Order Quantity × Bankruptcy Price × Taker Fee Rate
  const feeToClose = 
  // Maintenance Margin: Contract Size * maintenance margin rate
  // bybit MMR = 1%
  // so MM = contract size * 0.01
  const maintenanceMargin = 
  // Bankruptcy Price
  // For Long Position = Order Price × (Leverage − 1) / Leverage
  // For Short Position = Order Price × ( Leverage + 1) / Leverage
  const bankruptcyPrice = 
  // Total Order Cost
  //For Longs: Order Cost = Initial Margin + Fee to Open Position + Fee to Close Position
  const totalOrderCost = 
  // Actual $ At Risk
  const amountAtRisk = 

  // TRADE EXIT TARGETS
  // Target R/R Ratio
  const targetRiskToReward = 
  // Target % Change
  const targetPercentChange = 
  // Target Net Earnings
  const targetNetEarnings = 
  // Target ROI
  const targetROI = 
}

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
leverage.addEventListener('input', calc)