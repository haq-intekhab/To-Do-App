
const Todo = require("../models/Todo");

exports.getTodoById = async(req,res) => {
    try{
        const {id} = req.params;
        const val = await Todo.findById({_id : id});
        if(!Todo){
            res.status(404)
            .json({
                seccess:false,
                message:"Data not found"
            });
        }
        else{
            res.status(200)
            .json({
                success:true,
                data:val,
                message:"data fetched by id"
            });
        }
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