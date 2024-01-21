import {pool} from "./db_connection.js";


// =================================================================
// query for all customer records
// =================================================================
async function getAllsellerproduct() {
  const [rows] = await pool.query("SELECT * FROM seller_product");
  return rows;
}

// const Allsellerproduct = await getAllsellerproduct();
// console.log(Allsellerproduct);


// =================================================================
// query for one customer records by id
// =================================================================

async function getsellerproduct(id) {
  const [rows] = await pool.query(
  `SELECT * 
   FROM seller_product
   WHERE seller_product_ID = ?`, [id]
  );
  return rows[0];
}

// const seler = await getsellerproduct(2);
// console.log("this is one sellerproduct record: \n", seler);


// =================================================================
// query for create customer records
// =================================================================

async function addsellerproduct(seller_product_Name, Address, Email, PhoneNo, password) {
  const [result] =await pool.query(
  `INSERT INTO seller_product (seller_product_Name, Address, Email, PhoneNo,password) Values (?,?,?,?,?);`,[seller_product_Name, Address, Email, PhoneNo, password]
  );
  const id =result.insertId;
  return getsellerproduct(id);
}

// const result=await  addseller_product("testing", "testing", "testing@testing.com", "12345678901", "testing");
// console.log(result);


// =================================================================
// query for delete customer records
// =================================================================

async function deletesellerproductRecord(id) {
  const result = await pool.query(
  `DELETE FROM seller_product 
  WHERE seller_product_ID = ?`, [id]
  );
  return result;
}

// const deletesellerproduct = await deletesellerproductRecord(5);
// console.log(deletesellerproduct);


// =================================================================
// query for update customer records
// =================================================================



async function updatesellerproductDetail(name,id) {
  const result = await pool.query(
  `Update seller_product 
   set seller_product_Name = ?
   WHERE seller_product_ID = ?`, [name,id]
  );
  return result[0];
}


const updatesellerproduct = await updatesellerproductDetail("new_test",6);
console.log(updatesellerproduct);

export {getAllsellerproduct, getsellerproduct, addsellerproduct, deletesellerproductRecord, updatesellerproductDetail};