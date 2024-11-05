import mongoose from "mongoose";
const bookSchema=mongoose.Schema({

    name:String,
    price:Number,
    category:String,
    Image:String,
    title:String

//   data type define   
})
//  data that will come in above schema will be stored in book database (down here)
 const Book = mongoose. model("book",bookSchema); 

 export default Book;


