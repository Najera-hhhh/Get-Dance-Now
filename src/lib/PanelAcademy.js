const Panel = {}


Panel.GetHorario = async function GetHorarios(result, format = true) {
    const fetch = require("node-fetch")
    const https = require("https");
    var horarios = new Array();

    const agent = new https.Agent({
        rejectUnauthorized: false
    });
    const format12Hours = (date) => {
        const formatApertura = new Date(date.apertura);
        const formatCierre = new Date(date.cierre);

        date.apertura = formatApertura.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
        date.cierre = formatCierre.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
        

        console.log("parametro date:",date);
    	return date;
    }
    //obtine todos los horarios de las clases en result y las gurada en un array
    for (let i = 0; i < result.length; i++) {
        let response = await fetch(result[i].horarios, { agent });
        let data = await response.json();
        horarios.push({
            clase: result[i],
            horarios: format? data.data.map(format12Hours) : data.data
        })
    }

    return horarios;
}


Panel.GetClass = async function(id) {
    const fetch = require("node-fetch")
    const https = require("https");

    const agent = new https.Agent({
        rejectUnauthorized: false
    });


    let resutl = await fetch("https://localhost:5001/api/clase/Academy/" + id, { agent })
        .then(response => response.json())
        .then(json => json)

    return resutl.data;
}

module.exports = Panel;