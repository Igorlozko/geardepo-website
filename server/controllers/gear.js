import Gear from "../models/Gear";
import tryCatch from "./utils/tryCatch";


export const createGear = tryCatch(async(req, res)=>{
    const {id: uid, name: uName, photoURL: uPhoto} = req.user;
    const newGear = Gear({
        ...req.body, 
        uid, 
        uName,
        uPhoto
    });
    await newGear.save();
    res.status(201).json({sucess: true, result: newGear});
});