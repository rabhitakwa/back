var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var CongeSchema = new Schema({


  utilisateur: {
    type: mongoose.Schema.Types.ObjectId,
    ref:"Utilisateur"
  },
  etat: {
    type: String,
    required: false
  },
  type: {
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
 
});



module.exports = mongoose.model("Conge", CongeSchema);
