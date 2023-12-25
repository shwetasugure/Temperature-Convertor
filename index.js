
function convertTemperature() 
{
    const temperatureInput = parseFloat(document.getElementById('temperature').value);
    const unit = document.getElementById('unit').value;
    let convertedTemperature;
    let convertedUnit;

    if (unit === 'kelvin')
    {
        convertedTemperature = temperatureInput + 273.15;
        convertedUnit = 'Kelvin';
    } 
    else if (unit === 'fahrenheit') 
    {
        convertedTemperature = (temperatureInput - 32) * 5/9 + 273.15;
        convertedUnit = 'Fahrenheit';
    } 
    else 
    {
        convertedTemperature = temperatureInput;
        convertedUnit = 'Celsius';
    }

    document.getElementById('result').textContent = `Converted Temperature: ${convertedTemperature.toFixed(2)} ${convertedUnit}`;
}