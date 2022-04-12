const express = require('express')
const router = express.Router()
const productmodel = require('../model/productSchema')

router.get('/', (req,res,next)=>{
    productmodel.find()
    .then(result=>{
        res.status(200).json({
            result:result
        })
        .catch(err=>{
            res.status(500).json({
                err:err
            })
        })
    })
})

router.delete('/', (req,res,next)=>{
    productmodel.remove({_id:req.params.id})
    .then(result=>{
        res.status(200).json({
            result:result   
        })
    })
})

router.post('/',(req,res,next)=>{
    const{product_id,name,description,quantity,order_id,amt}=req.body
    const product = new productmodel({
        product_id,name,description,quantity,order_id,amt
    })
    product.save();
})

module.exports = router;