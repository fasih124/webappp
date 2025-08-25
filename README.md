# 🚀 BillzyCraft

> **BillzyCraft** is a **full-stack web application** designed to manage **customers, products, invoices, and settings** efficiently.  
It uses **Node.js, Express, EJS, TailwindCSS**, and follows the **MVC architecture** for scalability and clean code separation.

> ⚡ *BillzyCraft was the early version of [TradeOps](#), later evolved with more advanced features and optimizations.*

---

## 🛠️ **Tech Stack**

| Category          | Technology |
|-------------------|------------|
| **Frontend**      | EJS, TailwindCSS, HTML5, JavaScript |
| **Backend**       | Node.js, Express.js |
| **Database**      | MySQL, MySQL2 Driver |
| **Architecture**  | MVC (Model-View-Controller) |
| **Environment**   | Dotenv for managing secrets |

---

## ✨ **Key Features**

- 📌 **Customer Management**
  - Add, update, delete, and view customer details
  - Fetch customer invoices
- 📦 **Product Management**
  - Manage product catalog and stock
- 🧾 **Invoice Handling**
  - Generate and track invoices for customers
- ⚙️ **Settings Panel**
  - Configure app preferences
- 🖼️ **EJS-Powered Dynamic Views**
  - Clean, reusable components
- 🎨 **Modern UI with TailwindCSS**
  - Fully responsive and accessible
- 🗄️ **MySQL Integration**
  - Fast and secure database operations

---

## 📂 **Project Structure**

```

BillzyCraft/
├── app.js                     # Main application entry point
├── package.json
├── public/                    # Static assets (CSS, JS, images)
├── src/
│   ├── routes/                # Express route handlers
│   │   ├── home.js
│   │   ├── customer.js
│   │   ├── product.js
│   │   ├── invoice.js
│   │   └── setting.js
│   ├── controllers/           # Business logic & request handling
│   │   ├── customer.js
│   │   ├── product.js
│   │   ├── invoice.js
│   │   └── setting.js
│   ├── models/                # MySQL queries and DB logic
│   │   ├── db\_customer.js
│   │   ├── db\_product.js
│   │   ├── db\_invoice.js
│   │   ├── db\_connection.js
│   │   └── ...
│   └── views/                 # EJS templates (frontend)
│       ├── Home/
│       ├── Customer/
│       ├── Product/
│       ├── Invoice/
│       └── Setting/
└── .env                       # Your own Environment variables 

````

---

## ⚡ **Installation & Setup**

### **1. Clone the Repository**
```bash
git clone https://github.com/your-username/BillzyCraft.git
cd BillzyCraft
````

### **2. Install Dependencies**

```bash
npm install
```

### **3. Configure Environment Variables**

Create a `.env` file in the root directory:

```env
DB_HOST=localhost
DB_USER=root
DB_PASS=your_password
DB_NAME=billzycraft_db
```

### **4. Run Database Migrations**

```sql
CREATE DATABASE billzycraft_db;
USE billzycraft_db;

-- Example table for customers
CREATE TABLE customer (
  Customer_ID INT PRIMARY KEY AUTO_INCREMENT,
  customer_Name VARCHAR(100),
  Address VARCHAR(200),
  Email VARCHAR(100),
  PhoneNo VARCHAR(20)
);
```

### **5. Start the Server**

```bash
npm start
```

Or, if `start` is not configured in `package.json`:

```bash
node app.js
```

### **6. Access the App**

```bash
http://localhost:3000
```

---

## 🚀 **Future Plans**

* Migrate to **BillzyCraft 2.0** → Now called **TradeOps**
* Improved **REST API support**
* Enhanced **UI/UX design**
* Role-based authentication & authorization
* Export invoices to **PDF**

---

## 📜 **License**

This project is licensed under the **MIT License**.

---

## 🧠 **Author**

**Fasih Ahmad**
📧 Contact: [fasihkhan124124@gmail.com](mailto:fasihkhan124124@gmail.com)

---
<p align="center"> Made with ❤️ using Node.js, Express.js, MySQL, and EJS </p>

