import {pool} from "./db_connection.js";



// =================================================================
// query for get join records invoice from ORDERS  invoice and customer table
// =================================================================


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


// =================================================================
// query for create customer records
// =================================================================

export async function addinvoicedata(customer_id, product_list ,quantity_list ,price_list ,subtotal_list ,total ,discount ,net_total) {
  const [result1]= await pool.query(
    `INSERT INTO orders (customer_id, total_amount) VALUES (?,?);`,[customer_id,total]
  );
  const id1 =result1.insertId;
  const [result2]= await pool.query( 
    `INSERT INTO invoice (order_id, total_amount, discount) VALUES (?,?,?);`,[id1,total,discount]
  );
  const id2 =result2.insertId;
  const id3 =[];
  for(let i=0;i<product_list.length;i++){
    const [result3]= await pool.query(
      `INSERT INTO ORDER_DETAILS (product_id, order_id, quantity, SubTotal) VALUES (?,?,?,?);`,[product_list[i],id1,quantity_list[i],subtotal_list[i]]
    );
    id3.push(result3.insertId);
  }
  console.log("order id + invoice id ",id1,id2);
  console.log("product id  that entered ",id3);
}


export async function getInvoiceDetail(id) {
  const [rows] = await pool.query(
    `SELECT *
    FROM invoice as i
    INNER JOIN orders as o ON i.Order_ID = o.Order_ID
    INNER JOIN customer as c ON o.Customer_ID = c.Customer_ID
    INNER JOIN order_details as od ON o.Order_ID = od.Order_ID
    INNER JOIN product as p ON  od.Product_ID = p.Product_ID
    INNER JOIN seller as s ON  p.Seller_ID = s.Seller_ID
    where Invoice_ID =?;`,[id]
  );
  return rows;
}

export const  InvoiceDetail = await getInvoiceDetail;
// console.log(InvoiceRecords);