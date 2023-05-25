let OEM_SpecsModel = require("../models/OEM_Specs_Model");



let OEM_SpecsGetController=async (req, res) => {
    const specsArray = req.body;
  
    try {
      // Insert the array of OEM specs into the database
      const insertedSpecs = await OEM_SpecsModel.insertMany(specsArray);
  
      res.json(insertedSpecs);
    } catch (error) {
      console.error('Error inserting OEM specs:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  };


let Get_OEM_SpaceController=async(req,res)=>{
    try {

        let getAllOEMSpecs=await OEM_SpecsModel.find();

        res.status(200).send({success:true,message:"OEM_Specs fetched successfully",getAllOEMSpecs})
        
    } catch (error) {
        console.log(error);
        res.status(500).send({success:false,message:"Something went wrong whil geting OEM Specs",error})
    }
}


  module.exports={OEM_SpecsGetController,Get_OEM_SpaceController};
