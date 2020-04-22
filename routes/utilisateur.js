var mongoose = require("mongoose");
var passport = require("passport");
var config = require("../config/database");

var express = require("express");

var router = express.Router();
var User = require("../models/utilisateur");

router.post("/cree", function (req, res) {
  if (!req.body.email || !req.body.password) {
    res.json({ success: false, msg: "Veuillez vérifier les champs." });
  } else {
    var newUser = new User(req.body);
    newUser.save(function (err) {
      if (err) {
        return res
          .status(401)
          .json({ success: false, msg: "Email existe déja." });
      }
      res.json({ success: true, msg: "User cree avec success." });
    });
  }
});

router.post("/login", function (req, res) {
  User.findOne(
    {
      email: req.body.email,
    },
    function (err, user) {
      if (err) throw err;

      if (!user) {
        res.status(401).send({
          success: false,
          msg: "Authentication failed. User non trouve.",
        });
      } else {
        user.comparePassword(req.body.password, function (err, isMatch) {
          if (isMatch && !err) {
            res.json({ loggedIn: true, User: user });
          } else {
            res.status(401).send({
              success: false,
              msg: "Authentication failed. Fausse password.",
            });
          }
        });
      }
    }
  );
});

router.post("/modifier", function (req, res) {
  User.findOne(
    {
      email: req.body.email,
    },
    function (err, user) {
      if (err) throw err;

      if (!user) {
        res.status(401).send({
          success: false,
          msg: " failed. Utilsateur non trouve.",
        });
      } else {
        user.updateOne(req.body, function (err, newUtilisateur) {
          if (newUtilisateur && !err) {
            res.status(200).json({ Utilisateur: req.body });
          } else {
            res.status(401).send({
              success: false,
              msg: "probleme avec la modification",
            });
          }
        });
      }
    }
  );
});

router.delete("/supprimer/:email", function (req, res) {
  User.findOne(
    {
      email: req.params.email,
    },
    function (err, user) {
      if (err) throw err;

      if (!user) {
        res.status(401).send({
          success: false,
          msg: " failed. Utilsateur non trouve.",
        });
      } else {
        user.remove(function (err, deleteUtilisateur) {
          if (deleteUtilisateur && !err) {
            res.status(200).json({ Utilisateur: deleteUtilisateur});
          } else {
            res.status(401).send({
              success: false,
              msg: "probleme avec la suppression",
            });
          }
        });
      }
    }
  );
});
router.get("/all", function (req, res) {
  User.find(
    {},
    function (err, users) {
      if (err) throw err;
      res.status(200).json({ Utilisateurs: users});
   
    }
  );
});
router.get("/:id", function (req, res) {
  User.find(
    {_id : req.params.id},
    function (err, user) {
      if (err) throw err;
      res.status(200).json({ Utilisateur: user});
    }
  );
});

module.exports = router;
