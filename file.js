const Data= require('../models/data');
const db=require('../db/mongo');
const display=async (req,res)=>{
try {
    const store=await Data.find();
    return res.json({success:true, count:store.length, data:store})
} catch (error) {
    console.error(error);
};
};


const create=async (req,res)=>{
    try{
const data= await Data.create(req.body);
return res.json({success:true,data});
}
catch(e){
    if(e.code===11000)
    {return res.json({error:'this id is already exist'});
}
}

};








module.exports={
    display,
    create,
}