const db = require('../models')
const Counters = require('../models/counter.model')
const Product = require('../models/product.model')
// create product

const getSequenceValue = async () =>{
    const seqValue =  await Counters.findOneAndUpdate({'product':true},{$inc:{sequence_val:1}});
    return seqValue.sequence_val
}
const  create  = async (req,res) =>{
    let seqVal = await getSequenceValue();
    const  products ={
        productId : seqVal,
        productName : req.body.productName,
        categoryName : req.body.categoryName,
        categoryId : req.body.categoryId
    }

    Product.insertMany(products).then(data =>{
        res.send(data)
    })
    .catch(err =>{
        console.log(err)
    })
}

const fetchAllProducts = async (req,res) =>{
  const PageSize = 10;
  const currentPage = req.body.currPage
  const getQuery = Product.find();

  if(currentPage && PageSize){
    getQuery.skip(PageSize * (currentPage-1))
            .limit(PageSize);
  }
    getQuery.then(data =>{
        res.status(200).json({message:"Data fetched", posts: data})
    }).catch(err =>{
        console.log("error while fetching details",err)
    })
}

const deleteProduct = async (req,res) =>{
    const deleteId = req.body.productName

    Product.deleteOne({productName:deleteId}).then(data =>{
        res.send({"Message":`${req.body.productName} deleted successfully`})
    }).catch(err =>{
        res.send('Some technincal error',err)
    })
}



module.exports = {create , fetchAllProducts, getSequenceValue,deleteProduct}


