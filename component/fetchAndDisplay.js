

const getData=async(url)=>{
    try {
        let res = await fetch(url);
        let data = await res.json();
        
        return data.meals;
        
    } catch (error) {
        console.log(error)
    }
}

const appendDAta=async(data,parentNode)=>{
    data.forEach(element => {
        
        let card =document.createElement("div");

        let imgElement=document.createElement("img");
        imgElement.src=element.strMealThumb;


        let titleElement=document.createElement("p");
        titleElement.innerText=element.strMeal;

        card.append(imgElement,titleElement);

        parentNode.append(card);
    });
}


export {getData,appendDAta};