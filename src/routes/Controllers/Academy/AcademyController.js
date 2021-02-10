 
const express = require("express");
const router = express.Router();

const Academy = require('../../../lib/Repositories/Academy/AcademyRepository');


router.get('/AcademySignup', (req, res) => {
    //// console.log(horarios)
    res.render('links/AcademySignup');
})


router.post('/AcademySignup', async (req, res) => {
    let academy = await Academy.Add(req.body);
    req.session.AcademyId = academy.id;

    res.redirect("/links/PanelAcademia");
})

router.get('/UpdateAcademy', async (req, res) => {
    let academy = await Academy.GetById(req.session.AcademyId);
    //// console.log(academy);
    res.render('links/UpdateAcademy', { academy: academy });
})

router.post('/UpdateAcademy', async (req, res) => {
    if (await Academy.Update(req.session.AcademyId, req.body))
        res.redirect("/links/UpdateAcademy");
    else
        res.redirect("/error");
})



router.get('/DeleteAcademy', async (req, res) => {
    let academy = await Academy.GetById(req.session.AcademyId);
    res.render('links/DeleteAcademy', { academy: academy });
})

router.post('/DeleteAcademy', async (req, res) => {
    if (await Academy.Delete(req.session.AcademyId)) {
        req.session.academiaId = 0;
        res.redirect("/signin");
    } else {
        res.redirect("/error");
    }
})



module.exports = router;
