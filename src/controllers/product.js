import { AllProducts,getProductRecord,addProductdata,deleteProductRecord,updateProductRecord} from "../models/db_product.js";

export async function getproducttab(req,res){
  const allProductData= await AllProducts();
  res.render("Product/producttab",{tab:"Product",data:allProductData});
}


export function getproductform(req,res){
  res.render("Product/producttabAdd",{tab:"Product"});
}

export async function getproductdetail(req,res){
  let id=(parseInt(req.params.id)-50);
  const record=  await getProductRecord(id);
  res.render("Product/producttabModify",{tab:"Product",data:record});
}

export async function addproduct(req,res){

  const {product_Name,Category,product_Price, product_Description} = req.body;
  console.log(req.body);
  console.log("data to enter:",product_Name,Category, product_Price, product_Description);
  addProductdata(product_Name,Category, product_Price, product_Description);
  res.redirect("/Product");
}


export function deleteproduct(req,res){
  console.log(req.params.id);
  deleteProductRecord(req.params.id-50).then((result) => {
    console.log(result[0]);
  });
  console.log("delete product");
  res.sendStatus(200);
}


export async function updateproduct(req,res){
  console.log(req.params.id);
  console.log(req.body);
  const {Product_Name,Category, Price, Description} = req.body;
  await updateProductRecord(req.params.id-50,Product_Name,Category, Price, Description).then((result) => {
    console.log(result[0]);
  });
  console.log("update product");
  res.sendStatus(200);
}

export default {getproducttab,getproductform,getproductdetail,addproduct,deleteproduct,updateproduct};