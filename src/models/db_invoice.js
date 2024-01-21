import {pool} from "./db_connection.js";


// // =================================================================
// // query for all customer records
// // =================================================================
// async function getAllInvoice() {
//   const [rows] = await pool.query("SELECT * FROM customer");
//   return rows;
// }

// // const AllCustomer = await getAllCustomers();
// // console.log(AllCustomer);



// // =================================================================
// // query for one customer records by id
// // =================================================================

// async function getCustomer(id) {
//   const [rows] = await pool.query(
//   `SELECT * 
//    FROM customer
//    WHERE Customer_ID = ?`, [id]
//   );
//   return rows[0];
// }

// // const Customer = await getCustomer(2);
// // console.log("this is one customer record: \n", Customer);


// // =================================================================
// // query for create customer records
// // =================================================================

// async function addCustomer(customer_Name, Address, Email, PhoneNo) {
//   await pool.query(
//   `INSERT INTO customer (customer_Name, Address, Email, PhoneNo) Values (?,?,?,?);`,[customer_Name, Address, Email, PhoneNo]
//   );
// }

// //addCustomer("testing", "testing", "testing@testing.com", "12345678901");
// // =================================================================
// // query for delete customer records
// // =================================================================

// async function deleteCustomerRecord(id) {
//   const result = await pool.query(
//   `DELETE FROM customer 
//   WHERE Customer_ID = ?`, [id]
//   );
//   return result;
// }

// //  const deleteCustomer = await deleteCustomerRecord(5);
// // console.log(deleteCustomer);


// // =================================================================
// // query for update customer records
// // =================================================================



// async function updateCustomerName(id) {
//   const result = await pool.query(
//   `Update customer 
//    set customer_Name = ?
//    WHERE Customer_ID = ?`, ["testing2",id]
//   );
//   return result;
// }


// const updateCustomer = await updateCustomerName(5);
// console.log(updateCustomer);


// const AllCustomer = await getAllCustomers();
// console.log(AllCustomer);


async function getInvoiceRecord() {
  const [rows] = await pool.query(
  `SELECT i.Invoice_ID,i.Order_ID,c.Customer_ID,i.Dated,i.Net_Amount,c.customer_Name
  FROM invoice as i
  INNER JOIN orders as o ON i.Order_ID = o.Order_ID
  INNER JOIN customer as c ON o.Customer_ID = c.Customer_ID;`
  );
  return rows;
}

export const  InvoiceRecords = await getInvoiceRecord;
// console.log(InvoiceRecords);