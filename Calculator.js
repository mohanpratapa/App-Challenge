function run() {
    const value = parseFloat(document.querySelector("#value").value)
    const taxpercentage = parseFloat(document.querySelector("#tax-percentage").value)

    const tip = value * (taxpercentage / 100)
    const tax = value * (0.055) // 0.055 = tax rate / 100
    const final_amt = value + tip + tax

    document.querySelector('#enterthetip').innerHTML = `$${tip.toFixed(2)}`
    document.querySelector('#tax-rate').innerHTML = `$${tax.toFixed(2)}`
    document.querySelector('#total').innerHTML = `$${final_amt.toFixed(2)}`
}

document.querySelector('#run').addEventListener('click', run)