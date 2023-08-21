var realInput = document.getElementById("real");
var dolarInput = document.getElementById("dolar");
var euroInput = document.getElementById("euro");
var libraInput = document.getElementById("libra");
var inputs = document.getElementsByClassName("input");

function currencyValueComparison(coins){
    for (var i = 0; i < inputs.length; i++) {
        var input = inputs[i];
    
        input.addEventListener("input", function(e) {
            var value = parseFloat(e.target.value);
    
            switch (e.target.name) {
                case "real":
                    dolarInput.value = value * coins.BRLUSD.high;
                    euroInput.value = value * coins.BRLEUR.high;
                    libraInput.value = value * coins.BRLGBP.high;
                    break;
                case "dolar":
                    realInput.value = value * coins.USDBRL.high;
                    euroInput.value = value * coins.USDEUR.high;
                    libraInput.value = value * coins.USDGBP.high;
                    break;
                case "euro":
                    realInput.value = value * coins.EURBRL.high;
                    dolarInput.value = value * coins.EURUSD.high;
                    libraInput.value = value * coins.EURGBP.high;
                    break;
                case "libra":
                    realInput.value = value * coins.GBPBRL.high;
                    dolarInput.value = value * coins.GBPUSD.high;
                    euroInput.value = value * coins.GBPEUR.high;
                    break;
            }
        });
    }
}

function get(url){
    let request = new XMLHttpRequest()
    request.open("GET", url, false)
    request.send()

    return request.responseText
}

function getCoins(){
    var data = get(" https://economia.awesomeapi.com.br/last/BRL-USD,BRL-EUR,BRL-GBP,USD-BRL,USD-EUR,USD-GBP,EUR-BRL,EUR-USD,EUR-GBP,GBP-BRL,GBP-USD,GBP-EUR")
    var coins = JSON.parse(data);
    
    currencyValueComparison(coins);
}

getCoins();