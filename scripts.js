const convertbutton = document.querySelector(".convert-button")
const currencyselect = document.querySelector(".currency-select")

function convertvalues() {
    const inputcurrencyvalue = document.querySelector(".currency-value").value
    const currencyvalue = document.querySelector(".currency-value-to-convert")
    const currencyvalueconverted = document.querySelector(".currency-value-converted")
    
    
    const dolartoday = 5.2
    const eurotoday = 6.2
    

    if(currencyselect.value== "dolar"){
        currencyvalueconverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputcurrencyvalue/dolartoday)
    
    }

    if(currencyselect.value== "euro"){
        currencyvalueconverted.innerHTML= new Intl.NumberFormat("de-DE",{
            style: "currency",
            currency:"EUR"
        }).format(inputcurrencyvalue/eurotoday)
    }

   

    currencyvalue.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputcurrencyvalue)

    




}


convertbutton.addEventListener("click", convertvalues)
