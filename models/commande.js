var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var CommandeSchema = new Schema({

  
  client: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Client",
  },
  projet: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Projet",
  },
  date: {
    type: Date,
    required: true
  },
  code_facture: {
    type: String,
    required: true
  },
  
 
});



module.exports = mongoose.model("Commande", CommandeSchema);
