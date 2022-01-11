const router = require("express").Router();
const Data = require("../models/Data");

/// Create route
router.post("/", async (req, res) => {
  const newData = new Data(req.body);
  try {
    const savedData = await newData.save();
    res.status(200).json(savedData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Read all route
router.get('/', async(req, res)=>{
    Data.find({}, (err, result)=>{
        if(err){
            console.log(err)
            res.send(err)
        }
        res.json(result);
    })
})

// Read a specific id route
router.get("/:id", (req, res)=>{
    
    Data.findById(req.params.id, (err, result)=>{
        if (err) {
          console.log(err);
          res.status(422).send(err);
        }
        res.status(200).json(result);
    })
})

//Update route
router.put("/:id", async (req, res) => {
  try {
    Data.findById(req.params.id, (err, result)=>{
      if(!result){
        res.status(404).send("data not found.");
      }else{
        result.car_name = req.body.car_name;
        result.engine_temperature = req.body.engine_temperature;
        result.car_speed = req.body.car_speed;
        result.car_longitude = req.body.car_longitude;
        result.car_latitude = req.body.car_latitude;
        result.fuel_consumption_rate = req.body.fuel_consumption_rate,
        result.performance_status = req.body.performance_status,
        result.save()
      }
    })
    res.status(200).json("updated");
  } catch (err) {
    res.status(500).json(err);
  }
});

// Delete route
router.delete("/:id", (req, res)=>{
  try {
    const id = req.params.id
    Data.findByIdAndDelete(id).exec()
    res.status(200).json("Deleted")
  } catch (err) {
    res.status(500).json(err);
  }
})

module.exports = router;
