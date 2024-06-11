
export async function getSearch(input){
   

    const apiLink = `https://api.weatherapi.com/v1/current.json?key=8312e627f7514220932105611241106&q=${input}&aqi=no`

    const resposne = await fetch(apiLink);
    const data = await resposne.json();
console.log(data)

  

    return data;
}

