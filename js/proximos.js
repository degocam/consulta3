const septJSON = "data/pelis-sept.json";
const octJSON = "data/pelis-oct.json";
const novJSON = "data/pelis-nov.json";
const dicJSON = "data/pelis-dic.json";

$.getJSON(septJSON, function (response, status){
    if(status === "success"){

        for(const peli of response.pelisSept){
            $("#pelisSept").append(`<div class="pelisMes">
                                <img src="${peli.img}">
                                <h3>${peli.nombre}</h3>
                                <h4>Estreno: ${peli.estreno}</h4>
                            </div>`)
        }
    }
});

$.getJSON(octJSON, function (response, status){
    if(status === "success"){

        for(const peli of response.pelisOct){
            $("#pelisOct").append(`<div class="pelisMes">
                                <img src="${peli.img}">
                                <h3>${peli.nombre}</h3>
                                <h4>Estreno: ${peli.estreno}</h4>
                            </div>`)
        }
    }
});

$.getJSON(novJSON, function (response, status){
    if(status === "success"){

        for(const peli of response.pelisNov){
            $("#pelisNov").append(`<div class="pelisMes">
                                <img src="${peli.img}">
                                <h3>${peli.nombre}</h3>
                                <h4>Estreno: ${peli.estreno}</h4>
                            </div>`)
        }
    }
});

$.getJSON(dicJSON, function (response, status){
    if(status === "success"){

        for(const peli of response.pelisDic){
            $("#pelisDic").append(`<div class="pelisMes">
                                <img src="${peli.img}">
                                <h3>${peli.nombre}</h3>
                                <h4>Estreno: ${peli.estreno}</h4>
                            </div>`)
        }
    }
});


