//Math
const getFahrenheit = (celsius) => (celsius * 9 / 5) + 32;

const getKelvin = (celsius) => celsius + 273.15;

const getWindChill = (temp, speed) => 
    13.12 + 0.6215 * temp - 11.37 * Math.pow(speed, 0.16) + 0.3965 * temp * Math.pow(speed, 0.16);

//Logic
const getStatus = (celsius) => {
    if (celsius < 0) return "Freezing";
    if (celsius >= 0 && celsius < 10) return "Cold";
    if (celsius >= 10 && celsius < 20) return "Mild";
    if (celsius >= 20 && celsius < 30) return "Warm";
    return "Hot";
};

//Output
const printWeatherReport = (name, temp) => {
    console.log("Weather Report for " + name);
    console.log("Temperature: " + temp + "°C");
    console.log("Temperature: " + getFahrenheit(temp) + "°F");
    console.log("Temperature: " + getKelvin(temp) + "K");
    console.log("Status: " + getStatus(temp));
    console.log("---");
};

const printWindChill = (name, temp, speed) => {
    console.log("Wind chill in " + name + ": " + getWindChill(temp, speed).toFixed(2) + "°C");
};

//Execution
const city1 = { name: "Amsterdam", temp: 22, wind: 15 };
const city2 = { name: "Berlin", temp: 15, wind: 20 };
const city3 = { name: "Copenhagen", temp: -5, wind: 25 };

//Reports
printWeatherReport(city1.name, city1.temp);
printWeatherReport(city2.name, city2.temp);
printWeatherReport(city3.name, city3.temp);

//Wind
printWindChill(city1.name, city1.temp, city1.wind);
printWindChill(city2.name, city2.temp, city2.wind);
printWindChill(city3.name, city3.temp, city3.wind);