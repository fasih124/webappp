import {pool} from "./db_connection.js";


// =================================================================
// query for all customer records
// =================================================================
export async function getAllCustomers() {
  const [rows] = await pool.query("SELECT * FROM customer");
  return rows;
}

export const AllCustomers =  getAllCustomers;
// console.log(AllCustomer);


// =================================================================
// query for all customer records with names
// =================================================================
export async function getAllCustomersName() {
  const [rows] = await pool.query("SELECT Customer_ID,customer_Name FROM customer");
  return rows;
}

export const AllCustomersName =  getAllCustomersName;
// console.log(AllCustomer);




// =================================================================
// query for one customer records by id
// =================================================================

export async function getCustomerRecord(id) {
  const [rows] = await pool.query(
  `SELECT * 
   FROM customer
   WHERE Customer_ID = ?`, [id]
  );
  return rows[0];
}

// const Customer = await getCustomer(2);
// console.log("this is one customer record: \n", Customer);


// =================================================================
// query for create customer records
// =================================================================

export async function addCustomerdata(customer_Name, Address, Email, PhoneNo) {
  await pool.query(
  `INSERT INTO customer (customer_Name, Address, Email, PhoneNo) Values (?,?,?,?);`,[customer_Name, Address, Email, PhoneNo]
  );
}

//addCustomer("testing", "testing", "testing@testing.com", "12345678901");
// =================================================================
// query for delete customer records
// =================================================================

export async function deleteCustomerRecord(id) {
  const result = await pool.query(
  `DELETE FROM customer 
  WHERE Customer_ID = ?`, [id]
  );
  return result;
}

//  const deleteCustomer = await deleteCustomerRecord(5);
// console.log(deleteCustomer);


// =================================================================
// query for update customer records
// =================================================================



export async function updateCustomerDetail(id, customer_Name, Address, Email, PhoneNo) {
  const result = await pool.query(
  `Update customer 
   set customer_Name = ?,Address=?,Email=?,PhoneNo=?
   WHERE Customer_ID = ?`, [customer_Name,Address,Email,PhoneNo,id]
  );
  return result;
}


// const updateCustomer = await updateCustomerDetail(15,"testing", "testing", "aa@jj.com", '09876543211');
// console.log(updateCustomer);


// const AllCustomerss = await getAllCustomers();
// console.log(AllCustomerss);