
const Todo = require("../models/Todo");

exports.updateTodo = async(req,res) => {
    try{
        const {id} = req.params;
        const {title,description} = req.body;
        const val = await Todo.findByIdAndUpdate(
            {_id: id},
            {title,description,UpdatedAt: Date.now()}
        )
        res.status(200)
        .json({
            success:true,
            data:val,
            message:"data updated"
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