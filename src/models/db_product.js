import {pool} from "./db_connection.js";


// =================================================================
// query for all product records
// =================================================================
 async function getAllproduct() {
  const [rows] = await pool.query("SELECT * FROM product");
  return rows;
}

 export const AllProducts = await getAllproduct;
// console.log(AllProducts);


// =================================================================
// query for all product records
// =================================================================
 async function productsName() {
  const [rows] = await pool.query("SELECT Product_ID,Product_Name,Price FROM product");
  return rows;
}

 export const AllProductsName = await productsName;
// console.log(AllProducts);


// =================================================================
// query for one product records by id
// =================================================================

export async function getProductRecord(id) {
  const [rows] = await pool.query(
  `SELECT * 
   FROM product
   WHERE Product_ID = ?`, [id]
  );
  return rows[0];
}

// const Product = await getProductRecord(2);
// console.log("this is one Product record: \n", Product);




// =================================================================
// query for create product records
// =================================================================

export async function addProductdata(product_name, category, price, description) {
  const [result] =await pool.query(
    `INSERT INTO product (seller_id, product_name, category, price, description, phoneNo) Values (1,?,?,?,?,'1234567890');`,[product_name, category, price, description]
    );
  const id =result.insertId;
  return getProductRecord(id);
}
// const result=await  addProductdata("testing", "testing", "testing@testing.com", "12345678901", "testing");
// console.log(result);

// =================================================================
// query for delete product records
// =================================================================

export async function deleteProductRecord(id) {
  const result = await pool.query(
  `DELETE FROM product 
  WHERE Product_ID = ?`, [id]
  );
  return result;
}

// const deleteProduct = await deleteProductRecord(5);
// console.log(deleteProduct);


// =================================================================
// query for update product records
// =================================================================


export async function updateProductRecord(id, Product_Name, Category, Price, Description) {
  const result = await pool.query(
  `UPDATE product
  SET
  Product_Name =?,
  Category =?,
  Price = ?,
  Description =?
  WHERE Product_ID = ?;`, [Product_Name,Category,Price,Description,id]
   );


  return result[0];
}


// const updateProduct = await updateProductDetail("new_test",6);
// console.log(updateProduct);

// export {updateProductDetail,deleteProductRecord,addProductdata,getProductRecord,getAllProduct};

// =================================================================



