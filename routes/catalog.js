const express = require("express");
const router = express.Router();

// Home page route
router.get("/", function(req, res) {
    res.send("Wiki home page");
});

// Lista de todos los objetos especificados
router.get("/:objects", function(req, res) {
    res.send("About this wiki");
});

// Detalles para un objeto específico
router.get("/:object/:id", function(req, res) {
    res.send("About this wiki");
});

// Formulario para crear un nuevo objeto
router.get("/:object/create", function(req, res) {
    res.send("About this wiki");
});

// Formulario para actualizar un objeto específico
router.get("/:object/:id/update", function(req, res) {
    res.send("About this wiki");
});

// formulario para eliminar un objeto específico
router.get("/:object/:id/delete", function(req, res) {
    res.send("About this wiki");
});

module.exports = router;