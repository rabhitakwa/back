var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var TacheSchema = new Schema({

  utilisateur: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Utilisateur",
  },
  description: {
    type: String,
    required: false
  },
  type: {
    type: String,
    required: false
  },
  titre: {
    type: String,
    required: true
  },
  dateDebut: {
    type: Date,
    required: false
  },
  dateFin: {
    type: Date,
    required: false
  },
  participants: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Utilisateur",
  }]
});



module.exports = mongoose.model("Tache", TacheSchema);
