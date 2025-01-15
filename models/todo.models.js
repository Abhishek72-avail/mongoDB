import mongoose  from 'mongoose'
const todoSchema = new mongoose.Schema(
  {
  content :{
    type :String,
    required : true,
  },
  complete :{
    type : String,
    default:Boolean,
  },
  createdBy :{
    type : mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  subTodos : [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'SubTodo'
  },
],// Array of sub todos
  },
  {timestamps:true }
);
export const Todo = mongoose.todo('Todo',todoSchema);