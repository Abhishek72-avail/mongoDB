import mongooes from 'mongooes'
const UserSchema = new mongooes.scheme(
   {
username: {
  type: String,
  required : true,
  unique: true ,
  lowercase : true,
},

email: {
  type: String,
  required : true,
  unique: true ,
  lowercase : true,
},
password: {
  type : String,
  required: true,
},

},{timestamp:true});

export const User = mongooes.model('User', userSchema);