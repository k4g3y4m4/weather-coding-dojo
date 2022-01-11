let listeners = () =>{
    let city = document.querySelectorAll('.city');
    city.forEach(element => {
        element.addEventListener('click', (e) => {
            alert("Loading weather report");
        });
    });

    let cookie = document.querySelector('.accept-cookie');
    cookie.addEventListener('click', () => {
        document.querySelector('#cookie').style.display = 'none';
    });

    let typeTemperature = document.querySelector('#type-temperature');
    typeTemperature.addEventListener('change', () => {
        if(typeTemperature.value == 'f'){
            let temperatures = document.querySelectorAll('.temperatures');
            temperatures.forEach(element => {
                let maxTemperature = element.childNodes[1].innerHTML
                let minTemperature = element.childNodes[3].innerHTML

                element.childNodes[1].innerHTML = Math.round((maxTemperature * 9/5) + 32);
                element.childNodes[3].innerHTML = Math.round((minTemperature * 9/5) + 32);
            });
        }else{
            let temperatures = document.querySelectorAll('.temperatures');
            temperatures.forEach(element => {
                let maxTemperature = element.childNodes[1].innerHTML
                let minTemperature = element.childNodes[3].innerHTML

                element.childNodes[1].innerHTML = Math.round((maxTemperature - 32) * 5/9);
                element.childNodes[3].innerHTML = Math.round((minTemperature - 32) * 5/9);
            });
        }
    });
}   


listeners();