import {pool} from "./db_connection.js";


// =================================================================
// query for all customer records
// =================================================================
async function getAllSeller() {
  const [rows] = await pool.query("SELECT * FROM seller");
  return rows;
}

// export const AllSeller = await getAllSeller();
// console.log(AllSeller);


// =================================================================
// query for one customer records by id
// =================================================================

export async function getSeller(id) {
  const [rows] = await pool.query(
  `SELECT * 
   FROM seller
   WHERE Seller_ID = ?`, [id]
  );
  return rows[0];
}

// const seler = await getSeller(2);
// console.log("this is one seller record: \n", seler);


// =================================================================
// query for create customer records
// =================================================================

async function addseller(Seller_Name, Address, Email, PhoneNo, password) {
  const [result] =await pool.query(
  `INSERT INTO seller (Seller_Name, Address, Email, PhoneNo,password) Values (?,?,?,?,?);`,[Seller_Name, Address, Email, PhoneNo, password]
  );
  const id =result.insertId;
  return getSeller(id);
}

// const result=await  addseller("testing", "testing", "testing@testing.com", "12345678901", "testing");
// console.log(result);


// =================================================================
// query for delete customer records
// =================================================================

async function deleteSellerRecord(id,) {
  const result = await pool.query(
  `DELETE FROM seller 
  WHERE Seller_ID = ?`, [id]
  );
  return result;
}


// const deleteSeller = await deleteSellerRecord(5);
// console.log(deleteSeller);


// =================================================================
// query for update customer records
// =================================================================



export async function updateSellerDetail(id,Seller_Name,Address,Email,PhoneNo) {
  const result = await pool.query(
  `Update seller 
   set Seller_Name = ?,Address=?,Email=?,PhoneNo=?
   WHERE Seller_ID = ?`, [Seller_Name,Address,Email,PhoneNo,id]
  );
  return result[0];
}

// Seller_Name,Address,Email,PhoneNo

// const updateSeller = await updateSellerDetail("new_test",6);
// console.log(updateSeller);

export default {getAllSeller, getSeller, addseller, deleteSellerRecord, updateSellerDetail};