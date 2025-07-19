# 📘 IIITDM Course & Faculty API

🎥 [Watch Video Demo](https://drive.google.com/file/d/1jS_tNfZIECU1bNI_qf44q3YG1YlIREOo/view?usp=drive_link)

A RESTful API built during the 24-hour DevClub Hackathon at IIITDM Kancheepuram.  
This API provides structured access to college **course** and **faculty** data in **JSON format** for use in apps, dashboards, and research tools.

---

## 🛠️ Tech Stack

- Node.js
- Express.js
- JSON files as mock database

---

## ⚙️ Setup Instructions

1. Clone or download this repository
2. Open terminal in the project directory
3. Run:
   ```bash
   npm install
   node index.js
   ```
4. The server will start at `http://localhost:3000`

---

## 📚 API Endpoint Reference

### Root

- **GET /**  
  Returns a simple status message.  
  [Try it!](http://localhost:3000/)

---

### Courses

- **GET /courses**  
  Returns a list of all courses.  
  [Try it!](http://localhost:3000/courses)

- **GET /courses/:id**  
  Returns a single course by its `id`.  
  [Example](http://localhost:3000/courses/201)

  **Response Example:**
  ```json
  {
    "id": 201,
    "name": "Computer Architecture",
    "code": "CS4011",
    "description": "Advanced study in computer system organization and architecture.",
    "credits": 4,
    "department": "CSE",
    "prerequisites": ["CS2001"],
    "faculty_id": 3
  }
  ```

  **Error Example:**
  ```json
  { "message": "Course not found" }
  ```

---

### Faculty

- **GET /faculty**  
  Returns a list of all faculty members.  
  [Try it!](http://localhost:3000/faculty)

- **GET /faculty/:id**  
  Returns a single faculty member by their `id`.  
  [Example](http://localhost:3000/faculty/1)

  **Response Example:**
  ```json
  {
    "id": 1,
    "first_name": "Amalan Joseph",
    "last_name": "Antony",
    "email": "amalan@iiitdm.ac.in",
    "department": "CSE",
    "specialization": ["Cryptography", "Data Structures and Algorithms"],
    "office_location": "Room 308 B",
    "office_hours": "TBD"
  }
  ```

  **Error Example:**
  ```json
  { "message": "Faculty not found" }
  ```

---

## 🗂️ Data Model

### Course

```json
{
  "id": 201,
  "name": "Computer Architecture",
  "code": "CS4011",
  "description": "Advanced study in computer system organization and architecture.",
  "credits": 4,
  "department": "CSE",
  "prerequisites": ["CS2001"],
  "faculty_id": 3
}
```

- `id`: Integer, unique course identifier
- `name`: String, course name
- `code`: String, course code
- `description`: String, course description
- `credits`: Integer, number of credits
- `department`: String, department code
- `prerequisites`: Array of course codes
- `faculty_id`: Integer, ID of the faculty teaching the course

---

### Faculty

```json
{
  "id": 1,
  "first_name": "Amalan Joseph",
  "last_name": "Antony",
  "email": "amalan@iiitdm.ac.in",
  "department": "CSE",
  "specialization": ["Cryptography", "Data Structures and Algorithms"],
  "office_location": "Room 308 B",
  "office_hours": "TBD"
}
```

- `id`: Integer, unique faculty identifier
- `first_name`: String, first name
- `last_name`: String, last name
- `email`: String, email address
- `department`: String, department code
- `specialization`: Array of strings, areas of expertise
- `office_location`: String, office location
- `office_hours`: String, office hours

------

## 🎥 Video Walkthrough

Want a quick explanation of how it works?  
Check out this short demo where we walk through the project structure, features, and how to use the API:

👉 [**Click here to watch the full video demo**](https://drive.google.com/file/d/1jS_tNfZIECU1bNI_qf44q3YG1YlIREOo/view?usp=drive_link)

Includes:
- How the API is structured
- Example endpoints in action
- How to set up and run locally
- Behind-the-scenes of the DevClub Hackathon build



