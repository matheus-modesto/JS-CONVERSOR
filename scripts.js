const convertbutton = document.querySelector(".convert-button")
const currencyselect = document.querySelector(".currency-select")


function convertvalues() {
    const inputcurrencyvalue = document.querySelector(".currency-value").value
    const currencyvalue = document.querySelector(".currency-value-to-convert")
    const currencyvalueconverted = document.querySelector(".currency-value-converted")
   
     const dolartoday = 5.2
    const eurotoday = 6.2
    
    console.log(currencyselect.value)

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
function changecurrency(){
    const currencyname= document.getElementById("currency-name")
    const currencyimg= document.querySelector(".currency-img")
    if(currencyselect.value== "dolar"){
        currencyname.innerHTML = "Dolar Americano"
        currencyimg.src="./assets/dolar.png"
    }
    if(currencyselect.value== "euro"){
        currencyname.innerHTML= "euro"
        currencyimg.src="./assets/euro.png"

    }
}

currencyselect.addEventListener("change",changecurrency)
convertbutton.addEventListener("click", convertvalues)

