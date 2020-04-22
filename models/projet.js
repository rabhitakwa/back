var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var ProjetSchema = new Schema({

  Description: {
    type: String,
    required: true
  },
  titre: {
    type: String,
    required: true
  },
  budget: {
    type: Number,
    required: false
  },
  dateDebut: {
    type: Date,
    required: false
  },
  dateFin: {
    type: Date,
    required: false
  },
});



module.exports = mongoose.model("Projet", ProjetSchema);
