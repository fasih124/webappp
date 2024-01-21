import {AllCustomers,getCustomerRecord,addCustomerdata,deleteCustomerRecord,updateCustomerDetail} from "../models/db_customer.js";

export async function getCustomerTab(req, res){
  const allCustomerData=await AllCustomers();
  res.render("Customer/customertab", { tab: "Customer", data: allCustomerData});
};  


export function getCustomerForm(req, res){
  res.render('Customer/customertabAdd',{tab: 'Customer'});
};

export async function getCustomerDetail(req, res){
  let id=(parseInt(req.params.id)-50);
  const record=  await getCustomerRecord(id);
  res.render('Customer/customertabDetail',{tab: 'Customer',data:record});
};

export async function updateCustomerform(req, res){
  let id=(parseInt(req.params.id)-50);
  const record=  await getCustomerRecord(id);
  res.render('Customer/customertabDetailEdit',{tab: 'Customer',data:record});
};

export function getCustomerInvoice(req, res) {
  res.render('Customer/customertabinvoice',{tab: 'Customer'});
};

// query to add customer
export async function addCustomer(req, res){
  const {full_name, address, email, phoneNumber} = req.body;
  console.log(req.body);
  console.log(full_name, address, email, phoneNumber);
  addCustomerdata(full_name, address, email, phoneNumber);
  res.redirect('/Customer');
};
// query to delete customer
export async function deleteCustomer(req, res){
  console.log(req.params.id);
  deleteCustomerRecord(req.params.id-50).then((result) => {
    console.log(result[0]);
  });
  console.log("delete customer");
  res.sendStatus(200);
}

// query to update  customer
export async function updateCustomer(req, res){
  const {id,name,email,address,phoneNo} = req.body;
  updateCustomerDetail(id-50,name,address,email,phoneNo).then((result) => {
    console.log(result[0]);
  });
  console.log("update customer");
  res.sendStatus(200);
}

export default {getCustomerTab,getCustomerForm,getCustomerDetail,updateCustomer,getCustomerInvoice};
