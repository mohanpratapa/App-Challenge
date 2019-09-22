function run() {
    const value1=document.querySelector("#value").value
    const value = parseFloat(value1)
    const tax1=document.querySelector("#tax-percentage").value;
    const taxpercentage = parseFloat(tax1)

    const tip = value * (taxpercentage / 100)
    const tax = value * (0.055) // 0.055 = tax rate / 100
    const final_amt = value + tip + tax

    document.querySelector('#enterthetip').innerHTML = `$${tip.toFixed(2)}`
    document.querySelector('#tax-rate').innerHTML = `$${tax.toFixed(2)}`
    document.querySelector('#total').innerHTML = `$${final_amt.toFixed(2)}`
}

document.querySelector('#run').addEventListener('click', run)