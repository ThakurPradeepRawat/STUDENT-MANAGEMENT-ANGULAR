# 🎓 Student Management System – Angular

A modern **Student Management System frontend** built using **Angular**, focused on clean architecture, reusable components, form validation, and seamless API integration.  
This project is designed to simulate a **real-world enterprise application** used in educational institutions.

---

## 🚀 Features

- ➕ Add new students
- ✏️ Update student details
- ❌ Delete students
- 📋 View student list
- 📂 Bulk student upload via Excel
- ⚠️ Client-side form validation (email, mobile, name, DOB, etc.)
- 📤 Download invalid records after bulk upload
- 🔄 API integration using Angular services
- ♻️ Reusable components & shared services
- 📁 Clean folder structure (scalable)

---

## 🛠️ Tech Stack

- **Frontend**: Angular, TypeScript
- **UI**: HTML5, CSS3, Angular Material
- **Forms**: Reactive Forms
- **API Communication**: HttpClient
- **Validation**: Custom Validators & Regex
- **Version Control**: Git & GitHub

---
## 📂 Project Structure

src/
├── app/
│ ├── core/
│ │ ├── services/
│ │ └── models/
│ ├── shared/
│ │ ├── components/
│ │ ├── validators/
│ │ └── utils/
│ ├── students/
│ │ ├── add-student/
│ │ ├── update-student/
│ │ ├── student-list/
│ │ └── bulk-upload/
│ └── app.module.ts
├── environments/
└── assets/

---

## 📋 Form Validations Implemented

- ✅ Email format validation
- ✅ Mobile number validation
- ✅ Name character validation
- ✅ Date of Birth format validation
- ✅ Required field checks
- ✅ Duplicate detection (via API)

---

## 🔁 Bulk Upload Flow

1. Upload Excel file
2. Data sent to backend API
3. Invalid records identified
4. Errors returned with exact column issues
5. User can download invalid data in Excel format

---

## 🔌 Backend Integration

- REST API based communication
- Uses Angular **Services** for all HTTP calls
- Environment-based API URLs

---

## ⚙️ Setup & Installation

```bash
# Clone the repository
git clone https://github.com/ThakurPradeepRawat/STUDENT-MANAGEMENT-ANGULAR.git

# Navigate to project folder
cd student-management-angular

# Install dependencies
npm install

# Run the application
ng serve