
const Todo = require("../models/Todo");

exports.getTodo = async(req,res) => {
    try{
        const val = await Todo.find({});
        res.status(200)
        .json({
            success:true,
            data:val,
            message:"Data fetched"
        });
    }
    catch(err){
        console.error(err),
        res.status(500).json({
            success:false,
            data:"internal server error",
            message:err.message,
        })
    }
}