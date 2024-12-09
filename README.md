# **My Project**

## **Overview**
This project is a sign-up and login system built using React, TypeScript, and Formik with user credential validation. It demonstrates user-friendly interactions, local storage management, and navigation between signup and login pages.

---

## **Table of Contents**
1. [How to Run the Project](#how-to-run-the-project)
2. [Design Choices](#design-choices)
3. [Assumptions and Limitations](#assumptions-and-limitations)

---

## **How to Run the Project**
Follow these steps to run the project locally:

### **Prerequisites**
- Install **Node.js** (>=16.x) from [Node.js Official Website](https://nodejs.org/).
- Install **npm** (comes with Node.js) or **yarn** (optional).

### **Steps**
1. Clone this repository:
   ```bash
   git clone https://github.com/your-username/repository-name.git
   ```
2. Navigate to the project directory:
   ```bash
   cd repository-name
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
   or if using Yarn:
   ```bash
   yarn install
   ```
4. Start the development server:
   ```bash
   npm start
   ```
   or if using Yarn:
   ```bash
   yarn start
   ```

5. Open your browser and go to `http://localhost:3000`.

---

## **Design Choices**
### **Technology Stack**
- **React and TypeScript:** For building the user interface and ensuring type safety.
- **Formik with Yup:** Simplifies form management and validation.
- **CSS:** For styling the components without introducing external UI libraries.

### **User Experience (UX)**
1. **Password Visibility Toggle:**
   - Provides a "Show Password" checkbox for better usability while typing passwords.
2. **Real-Time Validation:**
   - Displays password requirements dynamically as the user types.
3. **Error Handling:**
   - Ensures input fields retain their values if validation fails.
4. **Local Storage Management:**
   - Utilizes local storage for persistent user data across sessions.

### **Navigation**
- Links provided to switch seamlessly between the **Sign-Up** and **Login** forms.

---
## Some Snippets
### Login Page
![image](https://github.com/user-attachments/assets/b99657fa-3b41-44b3-a2e1-81a7b8f7ace9)
### SignUp Page
![image](https://github.com/user-attachments/assets/ff2a9faa-4d75-45a8-a03f-5e61e9896db4)


---
## **Assumptions and Limitations**
### **Assumptions**
1. Users have a modern browser that supports local storage.
2. Basic email format is used for validation purposes.

### **Limitations**
1. **Local Storage:**
   - User data is stored locally, making it less secure compared to server-side storage or a database.
   - Data will not be shared across devices or browsers.
2. **Validation:**
   - Email validation checks for format only and does not confirm the existence of the email.
3. **Password Strength Indicator:**
   - Focuses on simple rules (length, uppercase, digits) and doesn't account for advanced security guidelines.

---
