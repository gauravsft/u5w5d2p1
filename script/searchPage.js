
import navbar from "../component/nav.js";

let navbardata = document.querySelector(".navbar");

navbardata.innerHTML = navbar();


document.getElementById("search").addEventListener("input", function () {
    debounce(main, 100)
})

import { getData, appendDAta } from "../component/fetchAndDisplay.js";

async function main() {
    try {
        let container = document.getElementById("container");
        let searchName = document.getElementById("search").value;
        console.log(searchName)
        let url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchName}`;
        let data = await getData(url);
        console.log(data)
        if (!data) {
            return false;

        }
        
        if(data.length!==0 || data.length!=null){
            container.innerHTML = "";
            appendDAta(data, container);
        }
        
    } catch (error) {
        console.log(error);
    }
}
function debounce(main, delay) {
    let timerId;
    if (timerId) {
        clearTimeout(timerId);
    }
    timerId = setTimeout(function () {
        main();
    }, delay);
}


