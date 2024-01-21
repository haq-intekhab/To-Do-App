//import the model
const Todo = require("../models/Todo");

//define route handler

exports.createTodo = async(req,res) => {
    try{
        //extract title & desc from req body
        const {title,description} = req.body;
        //create a new Todo Obj & insert in db
        const response = await Todo.create({title,description});
        //send a JSON response with a success flag
        res.status(200).json(
            {
                success:true,
                data:response,
                message:"Entry CReated successfully"            
            }
        );

    }
    catch(err){
        console.error(err);
        console.log(err);
        res.status(500).json({
            success:false,
            data:"internal server error",
            message:err.message,
        })
    }
}