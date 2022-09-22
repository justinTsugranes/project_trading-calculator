const margin = document.querySelector('#margin')
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
leverage.addEventListener('input', calc)
