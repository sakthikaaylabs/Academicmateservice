const mongoose=require('mongoose')
const DB=async()=>{
  await mongoose.connect(process.env.DB)
  console.log("DB Connected")
}
module.exports=DB;