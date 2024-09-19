import { company } from "../model/companymodel.js";
import { transactions } from "../model/transactionmodel.js";

export const tra = async (req,res)=>{
    try {
        const {status,actype,amount,companyname} = req.body;
        const findCompany = await company.findOne({companyname})
        if(!findCompany){
            return res.status(404).json({message: 'Company not found'})
        }
        const newTransaction = await transactions.create({
            status,
            actype,
            amount,
            companyname
        })
        res.status(201).json(newTransaction)
    } catch (error) {
        console.log(error);
        
    }
}