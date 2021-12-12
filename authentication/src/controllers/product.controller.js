const express = require("express")  

const Product = require("../models/product.models")
const router = express.Router();

const authenticate = require("../middleware/authenticate")
//const { body, validationResult } = require('express-validator');
router.post("/", authenticate , async (req,res) =>
{
    
  
    try {
        const user = req.user
        const product = await Product.create
        ({

            name:req.body.name,
            price:req.body.price,
            img_urls: ["www.google.com"],
            user:user.user._id
        })
      
        
     

        return res.status(201).json({product})

    }
    catch(e)
    {
        return res.status(500).json({status:"failed", message: e.message})
    }
})  ;




router.get("/", async (req, res) => 
{
    const products = await Product.find().lean().exec();
    return  res.send(products)

})

module.exports = router;

//http://localhost:1212/products
//http://localhost:1212/login