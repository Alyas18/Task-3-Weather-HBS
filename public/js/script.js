let form = document.getElementById('form1')
form.addEventListener('submit',(e)=>{
    e.preventDefault()
    // console.log(document.getElementById('address').value)
    weatherFun()
    form.reset()
})
const errorF = document.getElementById('error')
const locationF = document.getElementById('location')
const longitudeF = document.getElementById('longitude')
const latitudeF = document.getElementById('latitude')
const forecastF = document.getElementById('forecast')

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// async --> function return promise
let weatherFun = async() =>{
    try{
        const address = document.getElementById('address').value
        const res = await fetch('http://localhost:5000/weather?address='+address)
        const data = await res.json()
        console.log(data)
        if(data.error){
            await delay(1000);
            errorF.innerText = data.error
            locationF.innerText = ``;
            await delay(1000);
            longitudeF.innerText = ``;
            await delay(1000);
            latitudeF.innerText = ``;
            await delay(1000);
            forecastF.innerText = ``;
        }
        else {
            await delay(1000);
            locationF.innerText = `${data.forecast.location}`;
            await delay(1000);
            longitudeF.innerText = ` ${data.forecast.longitude}`;
            await delay(1000);
            latitudeF.innerText = ` ${data.forecast.latitude}`;
            await delay(1000);
            forecastF.innerText = `${data.forecast.forecast}`;
            errorF.innerText = '';

        }
    }
    catch(e){
        console.log(e)
    }
}