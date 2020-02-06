fetch('https://api.openweathermap.org/data/2.5/weather?q=Ternopil&appid=ed6482ee3d073e42650f5b6982083916')
    .then(function(resp){return resp.json()})
    .then(function(date){  
        console.log(date);
        document.querySelector('.city-name-text').textContent = date.name;

        document.querySelector('.number-text').innerHTML = Math.round(date.main.temp - 273) + '&deg;';

        document.querySelector('.weather-text').textContent = date.weather[0]
        ['description'];

        // document.querySelector('.icon-text').innerHTML = '<img src=https://openweathermap.org/img/wn/' + date.weather[0]['icon'] + '@2x.png>'
    })

    .catch(function(){

    });