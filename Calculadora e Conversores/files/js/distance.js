var centimeterInput = document.getElementById("centimeter");
var meterInput = document.getElementById("meter");
var kilometerInput = document.getElementById("kilometer");
var inputs = document.getElementsByClassName("input");

for (var i = 0; i < inputs.length; i++) {
    var input = inputs[i];

    input.addEventListener("input", function(e) {
        var value = parseFloat(e.target.value);

        switch (e.target.name) {
            case "centimeter":
                meterInput.value = value * 0.01;
                kilometerInput.value = value * 0.00001;
                break;
            case "meter":
                centimeterInput.value = value * 100;
                kilometerInput.value = value * 0.001;
                break;
            case "kilometer":
                centimeterInput.value = value * 100000;
                meterInput.value = value * 1000;
                break;
        }
    });
}