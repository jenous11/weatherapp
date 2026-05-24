const apiKey = "1602e6476961323719dd6c4944ae487d";
const p = document.querySelector('p')
const input = document.getElementById('input')
const button = document.getElementById('button')
const datalist =  document.querySelector('datalist')
const box =document.getElementById('box')

const temp=document.getElementById('temp')
const desc=document.getElementById('desc')

const one=document.getElementById('one');
const two=document.getElementById('two');

const img=document.querySelector('img')

let data1
let data2
let country

let weatherdata1
let weatherdata2

let temperature
let description     

// hiding at first
one.style.display="none"
two.style.display="none"



button.addEventListener('click',()=>{
let fetchWeatherdata=async()=>{
//cleaning the previous data

temp.innerText=" "
desc.innerText=" "
document.querySelector('.hidden').style.visibility=" ";

// document.querySelector('.hidden').style.visibility='hidden';
const url3=`https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=1602e6476961323719dd6c4944ae487d`;


weatherdata1 = await fetch(url3);
weatherdata2 = await weatherdata1.json();
console.log(weatherdata2);
console.log(weatherdata2.clouds[0]);



const iconCode = weatherdata2.weather[0].icon;
const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
document.getElementById("weather-icon").src = iconUrl;


// data about the weather

temperature = weatherdata2.main.temp;
console.log(weatherdata2);
temperature=Math.round((temperature-273).toFixed(2) )
description = weatherdata2.weather[0].description;

// showing the data
one.style.display="flex"
two.style.display="none"
document.querySelector('.hidden').style.visibility='visible';


let x=(` ${temperature}°c`);
let y=(` ${description}`);

temp.append(x);
desc.append(y);

}
fetchWeatherdata();
})





