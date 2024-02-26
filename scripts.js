const convertbutton = document.querySelector(".convert-button")
const currencyselect = document.querySelector(".currency-select")
const currencyselecttoconvert = document.getElementById("currency-select-to-convert")
const currencyvaluetoconvert = document.querySelector(".currency-value-to-convert")



function convertvalues() {
    const inputcurrencyvalue = document.querySelector(".currency-value").value
    const currencyvalue = document.querySelector(".currency-value-to-convert")
    const currencyvalueconverted = document.querySelector(".currency-value-converted")
    //EM RELACAO AO REAL
    const dolartoday = 4.92
    const eurotoday = 5.33
    const libratoday = 6.22
    const bitcointoday = 253027.55
    const realPbitcoin = 0.00000395
    //EM RELACAO AO DOLAR
    const dolarPreal = 0.203
    const dolarPeuro = 0.93
    const dolarPbitcoin = 0.00001953
    const dolarPlibra = 0.79
    //EM RELACAO AO EURO
    const euroPreal = 5.33
    const euroPbitcoin = 0.000021
    const euroPlibra = 0.86
    const euroPdolar = 1.08
    //EM RELACAO A LIBRA
    const libraPreal = 6.22
    const libraPeuro = 1.17
    const libraPbitcoin = 0.0000246
    const libraPdolar = 1.26
    //EM RELACAO AO BITCOIN
    const bitcoinPdolar = 51019.80
    const bitcoinPreal = 251701.08
    const bitcoinPeuro = 47204.03
    const bitcoinPlibra = 40449.68

    //CONVERTENDO REAL PARA OUTRAS MOEDAS
    if (currencyselect.value == "dolar" && currencyselecttoconvert.value == "real1") {
        currencyvalueconverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputcurrencyvalue / dolartoday)

    }

    if (currencyselect.value == "euro" && currencyselecttoconvert.value == "real1") {
        currencyvalueconverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputcurrencyvalue / eurotoday)
    }
    if (currencyselect.value == "bitcoin2" && currencyselecttoconvert.value == "real1") {
        currencyvalueconverted.innerHTML = inputcurrencyvalue * realPbitcoin
    }
    if (currencyselect.value == "libra2" && currencyselecttoconvert.value == "real1") {
        currencyvalueconverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputcurrencyvalue / libratoday)
    }

    //CONVERTENDO DOLAR PARA OUTRAS MOEDAS
    if (currencyselect.value == "euro" && currencyselecttoconvert.value == "dolar1") {
        currencyvalueconverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputcurrencyvalue * dolarPeuro)
    }

    if (currencyselect.value == "real2" && currencyselecttoconvert.value == "dolar1")
        currencyvalueconverted.innerHTML = new Intl.NumberFormat('pt-BR',
            {
                style: 'currency',
                currency: 'BRL'
            }).format(inputcurrencyvalue / dolarPreal)

    if (currencyselect.value == "bitcoin2" && currencyselecttoconvert.value == "dolar1")
        currencyvalueconverted.innerHTML = inputcurrencyvalue * dolarPbitcoin

    if (currencyselect.value == "libra2" && currencyselecttoconvert.value == "dolar1") {
        currencyvalueconverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputcurrencyvalue * dolarPlibra)
    }

    //CONVERTENDO EURO PARA OUTRAS MOEDAS
    if (currencyselect.value == "real2" && currencyselecttoconvert.value == "euro1") {
        currencyvalueconverted.innerHTML = new Intl.NumberFormat('pt-BR',
            {
                style: "currency",
                currency: "BRL"
            }).format(inputcurrencyvalue * euroPreal)
    }

    if (currencyselect.value == "dolar" && currencyselecttoconvert.value == "euro1") {
        currencyvalueconverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputcurrencyvalue * euroPdolar)

    }
    if (currencyselect.value == "bitcoin2" && currencyselecttoconvert.value == "euro1") {
        currencyvalueconverted.innerHTML = inputcurrencyvalue * euroPbitcoin
    }

    if (currencyselect.value == "libra2" && currencyselecttoconvert.value == "euro1") {
        currencyvalueconverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputcurrencyvalue * euroPlibra)

    }

    //CONVERTENDO LIBRA PARA OUTRAS MOEDAS
    if (currencyselect.value == "real2" && currencyselecttoconvert.value == "libra") {
        currencyvalueconverted.innerHTML = new Intl.NumberFormat('pt-BR',
            {
                style: "currency",
                currency: "BRL"
            }).format(inputcurrencyvalue * libraPreal)
    }

    if (currencyselect.value == "dolar" && currencyselecttoconvert.value == "libra") {
        currencyvalueconverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputcurrencyvalue * libraPdolar)
    }

    if (currencyselect.value == "euro" && currencyselecttoconvert.value == "libra") {
        currencyvalueconverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputcurrencyvalue * libraPeuro)
    }

    if (currencyselect.value == "bitcoin2" && currencyselecttoconvert.value == "libra") {
        currencyvalueconverted.innerHTML = inputcurrencyvalue * libraPbitcoin
    }

    // CONVERTENDO BITCOIN PARA OUTRAS MOEDAS
    if (currencyselect.value == "dolar" && currencyselecttoconvert.value == "bitcoin") {
        currencyvalueconverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputcurrencyvalue * bitcoinPdolar)
    }

    if (currencyselect.value == "euro" && currencyselecttoconvert.value == "bitcoin") {
        currencyvalueconverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputcurrencyvalue * bitcoinPeuro)
    }

    if (currencyselect.value == "real2" && currencyselecttoconvert.value == "bitcoin") {
        currencyvalueconverted.innerHTML = new Intl.NumberFormat('pt-BR',
            {
                style: "currency",
                currency: "BRL"
            }).format(inputcurrencyvalue * bitcoinPreal)
    }

    if (currencyselect.value == "libra2" && currencyselecttoconvert.value == "bitcoin") {
        currencyvalueconverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputcurrencyvalue * bitcoinPlibra)
    }







}
function changecurrency() {
    const currencyname = document.getElementById("currency-name")
    const currencyimg = document.querySelector(".currency-img-converted")
   


    if (currencyselect.value == "dolar") {
        currencyname.innerHTML = "Dolar Americano"
        currencyimg.src = "./assets/dolar.png"
    }
    if (currencyselect.value == "euro") {
        currencyname.innerHTML = "euro"
        currencyimg.src = "./assets/euro.png"
    }
    if (currencyselect.value == "real2") {
        currencyname.innerHTML = "Real Brasleiro"
        currencyimg.src = "./assets/real.png"
    }
    if (currencyselect.value == "bitcoin2") {
        currencyname.innerHTML = "Bitcoin"
        currencyimg.src = "./assets/bitcoin.png"
    }

    if (currencyselect.value == "libra2") {
        currencyname.innerHTML = "Libra Esterlina"
        currencyimg.src = "./assets/libra.png"
    }

   
    

     convertvalues()


}
function mudarfot(){
   var moedaaconverter= document.querySelector(".moeda-a-converter")
   var imgselect= document.querySelector(".img-select")
   const inputcurrencyvalue = document.querySelector(".currency-value").value

    if(currencyselecttoconvert.value=="dolar1"){
        imgselect.src="./assets/dolar.png"
        moedaaconverter.innerHTML="Dolar Americano" 
        currencyvaluetoconvert.innerHTML= new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputcurrencyvalue)
    
    }
    if(currencyselecttoconvert.value=="euro1"){
        imgselect.src="./assets/euro.png"
        moedaaconverter.innerHTML="Euro"
        currencyvaluetoconvert.innerHTML= new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputcurrencyvalue)
    }

    if(currencyselecttoconvert.value=="real1"){
        imgselect.src="./assets/real.png"
        moedaaconverter.innerHTML="Real"
        currencyvaluetoconvert.innerHTML= new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputcurrencyvalue)
    }

    if(currencyselecttoconvert.value=="bitcoin"){
        imgselect.src="./assets/bitcoin.png"
        moedaaconverter.innerHTML="Bitcoin"
        currencyvaluetoconvert.innerHTML= inputcurrencyvalue
    }

    if(currencyselecttoconvert.value=="libra"){
        imgselect.src="./assets/libra.png"
        moedaaconverter.innerHTML="Libra"
        currencyvaluetoconvert.innerHTML= new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputcurrencyvalue)
    }
    convertvalues()
}


currencyselecttoconvert.addEventListener("change",mudarfot)
currencyselect.addEventListener("change", changecurrency)
convertbutton.addEventListener("click", convertvalues)

