import Book from  "../model/book.model.js";
 
export const getBook=async(req,res)=>{
    
        
    //  we used try catch as we coonect to database so that if error occurs then we can handle  and and we use async and await t0 use async in sync way
    try{
        const book = await Book.find() //we are finding data in our model-bookidf data found then response send (200 i.e  status code of success and 500 is for fail
        res.status(200).json(book)
    }catch(error){
        console.log("error",error)
        res.status(500).json(error);

    }
};