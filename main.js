import { getSearch } from "./module/fetch.js";
import { displayWeather } from "./module/display.js";

const form = document.querySelector('form');



form.addEventListener('submit',(event)=>{
    event.preventDefault();
    const input = document.querySelector('input').value;

    getSearch(input).then(displayWeather);

})
