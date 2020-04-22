var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var ClientSchema = new Schema({


  nom: {
    type: String,
    required: true
  },
  prenom: {
    type: String,
    required: true
  },
  statut_juridique: {
    type: String,
    required: false
  },
  telephone: {
    type: Number,
    required: false
  },
 
});



module.exports = mongoose.model("Client", ClientSchema);
