const express = require("express");

const router =
    express.Router();


const financeiroController =
    require("../controller/financeiro_controller.js");


// ======================================================
// GET FINANCEIRO
// ======================================================

router.get(
    "/financeiro",
    financeiroController.buscarFinanceiro
);


module.exports = router;