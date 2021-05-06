// const $icon = document.querySelector('.icon');
const cityName = document.getElementById('cityname');
const submitbtn = document.getElementById('submitbtn');
const city_name = document.getElementById('city_name');
const temp_status = document.getElementById('temp_status');
const temp = document.getElementById('temp');
const datahide = document.querySelector('.middle_layer');
const temp_real_val = document.getElementById('temp_real_val');
// const $arrow = document.querySelector('.fa-arrow-right');

// $icon.onclick = () => {
//   $arrow.animate([
//     {left: '0'},
//     {left: '10px'},
//     {left: '0'}
//   ],{
//     duration: 700,
//     iterations: Infinity
//   });
// }

// $arrow.addEventListener('click', onclick);

const getInfo = async(event) => {
  event.preventDefault();
  let cityval = cityName.value;
  if(cityval === ""){
    city_name.innerText = `please write the name of thhe city to search`;
    datahide.classList.add('data_hide');
  }else{
    try{
      let url = `http://api.openweathermap.org/data/2.5/weather?q=${cityval}&appid=eb4c02c9e2dac5494e92910b21a4250d`;
      const response = await fetch(url);
      const data = await response.json();
      // console.log(data);
      const arr = [data];
      city_name.innerText = `${arr[0].name}, ${arr[0].sys.country}`;
      temp_real_val.innerText = arr[0].main.temp;
      const tempMood = arr[0].weather[0].main;
      // temp_status.innerText = arr[0].weather[0].main;
      if(tempMood == 'Clear'){
        temp_status.innerHTML = "<i class='fa fa-sun-o' style='color: #a4bobe;'></i>";
      }else if(tempMood == 'Clouds'){
        temp_status.innerHTML = "<i class='fa fa-cloud' style='color: #a4bobe;'></i>";
      }else if(tempMood == 'Rain'){
        temp_status.innerHTML = "<i class='fa fa-tint' style='color: #a4bobe;'></i>";
      }else{
        temp_status.innerHTML = "<i class='fa fa-cloud' style='color: #a4bobe;'></i>";
      }
    datahide.classList.remove('data_hide');
    }
    catch{
      city_name.innerText = `please enter the city name properly`;
      datahide.classList.add('data_hide');
    }
  }
}

submitbtn.addEventListener('click', getInfo);