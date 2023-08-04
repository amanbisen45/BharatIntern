
function convertTemp() {
    var temp = parseFloat(document.getElementById('temp').value);
    var unit = document.getElementById('unit').value;
    var resultElement = document.getElementById('result');

    if (unit === 'celsius') {
        var fahrenheit = (temp * 9 / 5) + 32;
        resultElement.textContent = temp + '°C = ' + fahrenheit.toFixed(2) + '°F';
    } else if (unit === 'fahrenheit') {
        var celsius = (temp - 32) * 5 / 9;
        resultElement.textContent = temp + '°F = ' + celsius.toFixed(2) + '°C';
    }
}