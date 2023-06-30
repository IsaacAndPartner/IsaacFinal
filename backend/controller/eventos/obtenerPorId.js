const { Router } = require("express");
const evento = require("../../models/evento");

exports.default = Router({ mergeParams: true }).get("/events/id/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const eventoEncontrado = await evento.findById(id);
    res.send(eventoEncontrado);
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error en el servidor");
  }
});