const express = require("express");
const app = express();
const dotenv = require("dotenv");
const router = express.Router();
const userModel = require("../Models/user.js");

//  CRUD Operation on Database :-

//  CREATE new User and adding it to the database :-

router.post("/", async function (req, res) {
  const { name, email, age } = req.body;

  try {
    const createdUser = await userModel.create({
      name: name,
      email: email,
      age: age,
    });

    //   If user created successfully :-
    res.status(201).send(createdUser);
  } catch (error) {
    //   If somehow user can not be created successfully :-
    console.log(error);
    res.status(400).json({ message: error.message });
  }
});

//  READ operation on database :-

//  Get all users :-

router.get("/", async function (req, res) {
  try {
    const AllUsers = await userModel.find();
    res.status(200).json(AllUsers);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

//  Get single users :-

router.get("/:id", async function (req, res) {
  const id = req.params.id;

  try {
    const user = await userModel.findOne({ _id: id });
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

//  UPDATE REQUEST TO THE DATABASE :-

// PATCH :- UPDATE some part of the data

router.patch("/:id", async function (req, res) {
  const id = req.params.id;
 
   try {
    
  const UpdatedUser = await userModel.findOneAndUpdate({ _id: id }, req.body, {
    new: true,
  });

   res.status(200).json(UpdatedUser)
   } catch (error) {
    res.status(400).json({message : error.message})
   }


});

// PUT :- REPLACE

router.put("/:id" , async function (req , res){
     
     const id = req.params.id;

     try {
          const Replaceduser = await userModel.findOneAndReplace({_id : id} , req.body , {new : true})

          res.status(200).json(Replaceduser)
     } catch (error) {
        res.status(400).json({message : error.message})
     }
})



//  DELETE :- delete the document from the database collection :- 
router.delete("/:id" , async function (req , res){
       
    const id = req.params.id;

    try {
        const DeletedUser = await userModel.findOneAndDelete({_id : id} , {new : true})
        res.status(202).json(DeletedUser)
    } catch (error) {
        res.status(400).json({message : error.message})
        
    }

    
})




module.exports = router;
