const express = require('express');
const router = express.Router();
const fetch = require("node-fetch")

async function ExistAcademy(account) {
    const fetch = require("node-fetch")

    let academy;

    try {

        let url = global.apiConnection + "/api/cuenta/" + account.Correo + "/" + account.Password;
        // console.log(url);
        const result = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const response = await result.json();

        if (response.data.id > 0) {
            url = global.apiConnection + "/api/academia/Accout/" + response.data.id;
            // console.log(url);
            var queryAcademy = await fetch(url, {
                headers: {
                    'Content-Type': 'application/json'
                }
            })

            academy = await queryAcademy.json();
            academy = academy.data
        }
    } catch (e) {
        // console.log(e);
    }

    return academy;
}

router.get('/signin', (req, res) => {

    res.render("auth/signin", req.flash('navbar', true)[0])

})

router.post("/signin", async(req, res) => {
    let redirect = "/links/PanelAcademia";
    const Academy = await ExistAcademy(req.body);
    // console.log(Academy);
    if (Academy) {
        req.session.AcademyId = Academy.id;
    } else {
        req.flash('failLogin', 'No se encontro ninguna cuenta con esos datos registrada, favor de verificar los datos');
        redirect = "/signin";
    }
    res.redirect(redirect);
})

router.get('/logout', (req, res) => {
    req.session.AcademyId = 0;
    res.redirect("/signin");

})





module.exports = router;