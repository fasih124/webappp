import {InvoiceRecords} from "../models/db_invoice.js";
import {AllProductsName} from "../models/db_product.js";
import {AllCustomersName} from "../models/db_customer.js";

export async function getInvoicetab(req,res){
  const allInvoiceData= await InvoiceRecords();
  res.render("Invoice/invoicetab",{tab:"Invoice" , data:allInvoiceData});
}

export async  function getinvoiceform(req,res){
  const ProductsName= await AllProductsName();
  const CustomersName= await AllCustomersName();
  res.render("Invoice/invoiceAddTab",{tab:"Invoice", product:ProductsName , customer:CustomersName});
}

export function getinvoicedetail(req,res){
  res.render("Invoice/invoiceDetailTab",{tab:"Invoice"});
}

export default {getInvoicetab,getinvoiceform,getinvoicedetail};