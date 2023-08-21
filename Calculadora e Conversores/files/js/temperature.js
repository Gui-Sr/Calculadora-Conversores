var celciusInput = document.getElementById("celcius");
var fahrenheitInput = document.getElementById("fahrenheit");
var kelvinInput = document.getElementById("kelvin");
var rankineInput = document.getElementById("rankine");
var reaumurInput = document.getElementById("reaumur");
var inputs = document.getElementsByClassName("input");

for (var i = 0; i < inputs.length; i++) {
    var input = inputs[i];

    input.addEventListener("input", function(e) {
        var value = parseFloat(e.target.value);

        switch (e.target.name) {
            case "celcius":
                fahrenheitInput.value = (value * 1.8) + 32;
                kelvinInput.value = value + 273.15;
                rankineInput.value = (value + 273.15) * 9 / 5;
                reaumurInput.value = value * 4 / 5;
                break;
            case "fahrenheit":
                celciusInput.value = (value - 32) / 1.8;
                kelvinInput.value = ((value - 32) / 1.8) + 273.15;
                rankineInput.value = value + 459.67;
                reaumurInput.value = (value - 32) * 4 / 9;
                break;
            case "kelvin":
                celciusInput.value = value - 273.15;
                fahrenheitInput.value = ((value - 273.15) * 1.8) + 32;
                rankineInput.value = value * 1.8;
                reaumurInput.value = (value - 273.15) * 4 / 5;
                break;
            case "rankine":
                celciusInput.value = value - 273.15;
                fahrenheitInput.value = ((value - 273.15) * 1.8) + 32;
                kelvinInput.value = value * 5 / 9;
                reaumurInput.value = (value - 491.67) * 4 / 9;
                break;
            case "reaumur":
                celciusInput.value = value - 273.15;
                fahrenheitInput.value = ((value - 273.15) * 1.8) + 32;
                kelvinInput.value = value * 5 / 4 + 273.15;
                rankineInput.value = value * 9 / 4 + 491.67;
                break;
        }
    });
}