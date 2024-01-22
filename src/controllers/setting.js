import {getSeller,updateSellerDetail} from "../models/db_seller.js";

export async function getsettingtab(req,res){
  const Seller=await getSeller(1);
  res.render("Setting/settingtab",{tab:"Setting",data:Seller});
}
export function updateSettingtab(req,res){
  console.log(req.body);
  const {id,Seller_Name,Address,Email,PhoneNo} = req.body;
  console.log(id,Seller_Name,Address,Email,PhoneNo);
  updateSellerDetail(id,Seller_Name,Address,Email,PhoneNo).then((result) => {
    console.log(result[0]);
  });
  res.sendStatus(200);
}

export default {getsettingtab,updateSettingtab};
