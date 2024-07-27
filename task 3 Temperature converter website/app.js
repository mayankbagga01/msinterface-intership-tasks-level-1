function convertTemperature(temperature, unit) {
	if (unit === "c") {
	
		return (temperature * 9 / 5) + 32;
	} else {
	
		return (temperature - 32) * 5 / 9;
	}
}

var temperature = document.getElementById("temperature").value;
var unit = document.getElementById("unit").value;

var result = convertTemperature(temperature, unit);


document.getElementById("result").innerHTML = result.toFixed(2) + "°" + (unit === "c" ? "F" : "C");