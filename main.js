var divv = document.querySelector(".main");

fetch(
  "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=2&api_key=AxMgLvWu7NazchSLgzEtR90p22nDI7GlhilUoLcQ")
  .then((response)=> {return response.json()})
  .then((data)=> {

    for(let i in data["photos"]){
        var imgg = document.createElement("img");
        imgg.setAttribute("src", data["photos"][i]["img_src"]);
        imgg.innerHTML="<a href='"+ data["photos"][i]["img_src"]+"'> </a>"
        divv.appendChild(imgg);
    }


  });