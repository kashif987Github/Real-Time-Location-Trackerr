 const student = require("../models/crudSchema.js");

const normal = async (req,res)=>{
try{
    const studentData = await student.find({
 
    })
    res.send(studentData);
}

catch(error){  console.log(error.message);}

    
}

const createnew=async(req,res)=>{
    try{
        const {name,email,password,city}=req.body;
        const studentData = await student({
            name:name,
            email:email,   
            password:password,
            city:city
        })

        if(studentData){
            await studentData.save() 
             console.log("Data saved successfully");
                    }   
         
        res.send(studentData)

    }
    catch(error){
        console.log(error.message);
    }
}

const readById= async(req,res)=>{
    try{

        const studentId =req.params.id.trim();
    const result = await student.findById(studentId, req.body,{new:true});
        if(!result){
            console.log(error.message);
        }
        res.send(result);

    }catch(error){
        console.log(error.message);
    }   
    
     
};
const updateById = async (req,res)=>{
   try{
    const studentId =req.params.id.trim();
    const result =await  student.findByIdAndUpdate(studentId,req.body,{new:true});
    if(!result){
        console.log("data not found");
        }
        res.send(result);

   }
   
   catch(error){
       console.log(error.message);
   }    
 }
const deleteById=async(req,res)=>{
 
    try{
        const studentId =req.params.id.trim();
   const result= await student.findByIdAndDelete(studentId,req.body,{new:true});
   res.send(result);
    } catch(error){
        console.log(error.message);
    }  
}

module.exports = {normal,createnew,readById,updateById,deleteById};