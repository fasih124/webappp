import {InvoiceRecords,addinvoicedata} from "../models/db_invoice.js";
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

export async function addinvoice(req, res){
  // const {full_name, address, email, phoneNumber} = req.body;
 // console.log(req.body);
  const {customer,product1,quantity,price1,subtotal1,Total,Discount,nettotal}=req.body;
  const customer_id=customer;
  const product_list=product1;
  const quantity_list=quantity;
  const price_list=price1;
  const subtotal_list=subtotal1;
  const total=Total;
  const discount=Discount;
  const net_total=nettotal;
  addinvoicedata(customer_id, product_list ,quantity_list ,price_list ,subtotal_list ,total ,discount ,net_total);
  res.redirect('/Invoice');
};


export default {getInvoicetab,getinvoiceform,getinvoicedetail, addinvoice};