var mongoose = require("mongoose");

var config = require("../config/database");

var express = require("express");

var router = express.Router();
var User = require("../models/utilisateur");
var Tache = require("../models/tache");

router.post("/cree", function (req, res) {
  // res.json({ success: false, msg: "Veuillez vérifier les champs." });

  var newTache = new Tache(req.body);
  newTache.save(function (err) {
    if (err) {
      return res.status(401).json({ success: false, msg: "Probleme." });
    }
    res.json({ success: true, msg: "tache cree avec success." });
  });
});

router.post("/modifier", function (req, res) {
  Tache.findOneAndUpdate({ _id: req.body._id }, req.body, function (err) {
    if (err) {
      return res.status(401).json({ success: false, msg: "Probleme." });
    }
    res.json({ success: true, msg: "tache modifier avec success." });
  });
});

router.get("/afficher/all/:idUser", function (req, res) {
  Tache.find({ utilisateur: req.params.idUser })
    .populate("participants")
    .exec(function (err, tache) {
      if (err) {
        return res
          .status(401)
          .json({ success: false, msg: "les taches ne sont pas trouvées" });
      }
      res.status(200).json({ success: true, taches: tache });
    });
});

router.delete("/supprimer/:idtache", function (req, res) {
  Tache.findOneAndDelete({ _id: req.params.idtache })
    .exec(function (err, tache) {
      if (err) {
        return res
          .status(401)
          .json({ success: false, msg: "les taches ne sont pas trouvées" });
      }
      res.status(200).json({ success: true, msg : "tache est supprimer avec success"});
    });
});
module.exports = router;
