import mongoose  from 'mongoose'
const productSchema = new mongoose.Schema({}, {timestamps:true})

export const product = mongoose.model('Product', productSchema);