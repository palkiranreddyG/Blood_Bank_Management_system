# 🩸 Blood Bank Management System

A comprehensive Blood Bank Management System developed using the **MERN stack** to streamline blood donor registration, inventory management, and blood request handling for hospitals and blood banks.

## 🏆 Achievement

This project **won Webathon 3.0**, hosted by the **ACM Student Chapter of VNR VJIET**, for its impactful implementation, intuitive interface, and real-world applicability.

## **Features**

* Donor Registration and Management
* Recipient Blood Request Handling
* Blood Inventory Tracking (type and quantity)
* Hospital Integration
* Secure Admin and User Authentication
* Real-time Admin Dashboard
* Smart Blood Match Recommendations

## **Tech Stack**

* **Backend:** Node.js, Express.js
* **Frontend:** React.js
* **Database:** MongoDB
* **Tools:** VS Code, Postman

## **Project Structure**

```
Blood_Bank_Management_system/
├── backend/
│   ├── config/             -> DB connection and environment configs
│   ├── controllers/        -> API logic for donors, recipients, admin, auth
│   ├── models/             -> Mongoose schemas for collections
│   ├── routes/             -> Express routes for API endpoints
│   ├── middleware/         -> Auth and error handling middleware
│   └── server.js           -> Entry point for backend server
├── frontend/
│   ├── public/             -> Public assets
│   ├── src/
│   │   ├── components/     -> React UI components
│   │   ├── pages/          -> React pages (Dashboard, Login, etc.)
│   │   ├── services/       -> API calls
│   │   └── App.js          -> Main React app component
│   └── package.json
├── .gitignore
├── README.md
└── package.json            -> Root package.json if monorepo setup
```

## **How to Use**

1. **Clone the repository:**

   ```bash
   git clone https://github.com/palkiranreddyG/Blood_Bank_Management_system.git
   cd Blood_Bank_Management_system
   ```

2. **Setup Backend:**

   ```bash
   cd backend
   npm install
   ```

   * Configure MongoDB connection string in `.env` file:

     ```
     MONGO_URI=your_mongodb_connection_string
     JWT_SECRET=your_jwt_secret_key
     PORT=5000
     ```

   * Start the backend server:

     ```bash
     npm run dev
     ```

3. **Setup Frontend:**

   Open a new terminal:

   ```bash
   cd frontend
   npm install
   npm start
   ```

4. **Access the app:**

   Visit `http://localhost:3000` in your browser.

## **Future Enhancements**

* Add Email/SMS notifications for donors
* Improve UI/UX with Material UI or Tailwind CSS
* Implement role-based access control
* Integrate payment gateway for blood donation campaigns
* Add donation history analytics and reports



If you want, I can also help you make a **professional portfolio PDF** or website snippet for this project! Would you like that?
