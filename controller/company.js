import { company } from "../model/companymodel.js";

export const com = async (req,res)=>{
    try {
        const  {companyname,detail} = req.body
        const newCompany = await company.create({
            companyname,
            detail
        });
        res.status(201).json(newCompany);
    } catch (error) {
        console.log(error);
        
    }
}

