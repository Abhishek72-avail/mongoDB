import { Timestamp } from 'bson'
import mongoose from 'mongoose'
const SubTodoSchema  = new  mongooes.Schema({

    content: {
        type: String,
        required: true,
      },
      complete: {
        type: Boolean,
        default: false,
      },
      createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
      },
    },
 {Timestamp:true})

export const Subtodo  = mongooes.model('Subtodo', SubTodoSchema); 