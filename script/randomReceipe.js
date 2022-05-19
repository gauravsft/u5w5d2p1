
import navbar  from "../component/nav.js";

import {getData , appendDAta} from "../component/fetchAndDisplay.js";

let navbardata=document.querySelector(".navbar");

let container=document.getElementById("container");

navbardata.innerHTML=navbar();

let url="https://www.themealdb.com/api/json/v1/1/random.php";

let data=await getData(url);


appendDAta(data,container)

