let OEM_SpecsModel = require("../models/OEM_Specs_Model");

let OEM_SpecsGetController = async (req, res) => {
  const specsArray = req.body;

  try {
    // Insert the array of OEM specs into the database
    const insertedSpecs = await OEM_SpecsModel.insertMany(specsArray);

    res.json(insertedSpecs);
  } catch (error) {
    console.error("Error inserting OEM specs:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

let Get_OEM_SpaceController = async (req, res) => {
  const { search } = req.query;

  try {
    if (search) {
      //this query will find the documents which will match the patiucular regex query by options i for
      //case senstive searching
      // if search queyr matches with any of the nameofModel yearModel and colors it weill return data
      let specs = await OEM_SpecsModel.find({
        $or: [
          { model: { $regex: search, $options: "i" } },
          { year: { $regex: search, $options: "i" } },
          { colors: { $regex: search, $options: "i" } },
        ],
      });
      res.status(200).send({ specs });
    } else {
      let specs = await OEM_SpecsModel.find({});
      res.send({ specs });
    }
  } catch (error) {
    res.send({ error });
  }
};

module.exports = { OEM_SpecsGetController, Get_OEM_SpaceController };
