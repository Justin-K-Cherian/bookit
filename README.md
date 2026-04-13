# 📅 BookIt – Centralized Resource Booking System

A web-based platform for managing institutional facility bookings — seminar halls, auditoriums, and sports grounds — with role-based access, real-time availability, and automated notifications.

---

## 📸 Screenshots

### 🔐 Login
| Login Page |
|---|
| ![Login](<img width="1600" height="772" alt="image" src="https://github.com/user-attachments/assets/8e122e14-8d65-4370-87d4-30b342eadcc3" />
) |

---

### 👤 User View
| Home | Venue Page |
|---|---|
| ![Home](<img width="1600" height="774" alt="image" src="https://github.com/user-attachments/assets/518f8645-c2be-4c38-97ba-61504ef81664" />
) | ![Venue](<img width="1600" height="773" alt="image" src="https://github.com/user-attachments/assets/8a68f745-c78f-4de0-836b-810c1d31640e" />
) |

| Sports Page | Booking Page |
|---|---|
| ![Sports](<img width="1600" height="775" alt="image" src="https://github.com/user-attachments/assets/a4c6bacc-b5a8-49e9-b074-98536e228494" />
) | ![Booking](<img width="1600" height="774" alt="image" src="https://github.com/user-attachments/assets/d2bc945c-83b0-4d55-827e-d91cb2e63ecb" />
) |

| Profile | Feedback |
|---|---|
| ![Profile](<img width="1600" height="781" alt="image" src="https://github.com/user-attachments/assets/2e0e2358-a9a2-46c6-9cff-25cfe38477d5" />
) | ![Feedback](<img width="1600" height="780" alt="image" src="https://github.com/user-attachments/assets/862e1815-22d3-4ff9-a74d-d14040169c59" />
) |

| Chatbot | Team Finder |
|---|---|
| ![Chatbot](<img width="1600" height="773" alt="image" src="https://github.com/user-attachments/assets/60c16654-0201-4ffd-adb0-58163e98cd69" />
) | ![Team Finder](<img width="1600" height="774" alt="image" src="https://github.com/user-attachments/assets/d7980771-898c-4a95-b417-7c97e499048a" />
) |

| Events | Notifications |
|---|---|
| ![Events](<img width="1600" height="778" alt="image" src="https://github.com/user-attachments/assets/4a3c6d07-ec12-4680-8117-c6a634aa1a12" />
) | ![Notifications](<img width="1600" height="779" alt="image" src="https://github.com/user-attachments/assets/f792f578-f26b-4ade-97c0-5aa8090e13e8" />
) |

---

### 🔧 Admin View
| Booking Requests | Feedback |
|---|---|
| ![Booking Requests](<img width="1439" height="826" alt="image" src="https://github.com/user-attachments/assets/1e52cd05-e586-4b13-9c67-405554e82317" />
) | ![Feedback](<img width="1600" height="765" alt="image" src="https://github.com/user-attachments/assets/b40a7b63-a753-4214-929c-aeee1502f3d6" />
) |

| Reports | Announcements |
|---|---|
| ![Reports](<img width="1600" height="782" alt="image" src="https://github.com/user-attachments/assets/66fbb12f-cb21-4bdd-9f2a-c6d340c3b2bd" />
) | ![Announcements](<img width="1600" height="765" alt="image" src="https://github.com/user-attachments/assets/7e64ad19-1170-4a13-a998-82da611c66e2" />
) |



---

## 🚀 Features

- 🏛️ **Facility Booking** — Book seminar halls, auditoriums, and sports grounds
- 👥 **Role-Based Access** — Separate dashboards for students and admins
- ✅ **Approval Workflow** — Seminar hall bookings require admin approval; sports facilities are instantly bookable
- 🔔 **Automated Notifications** — Gmail notifications for booking approvals and rejections
- 📢 **Announcements** — Campus-wide announcements managed by admin
- 💬 **Chatbot Assistant** — Guides users through the booking process
- 🤝 **Team Finder** — Connect with others interested in similar activities
- 📅 **Events Section** — View ongoing and upcoming campus events
- 📊 **Booking Insights** — Track personal booking history and manage schedules
- ⭐ **Feedback Collection** — Users can submit feedback on facilities

---

## 🛠️ Built With

![Python](https://img.shields.io/badge/-Python-3776AB?style=flat&logo=python&logoColor=white)
![Flask](https://img.shields.io/badge/-Flask-000000?style=flat&logo=flask)
![JavaScript](https://img.shields.io/badge/-JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![HTML](https://img.shields.io/badge/-HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/-CSS3-1572B6?style=flat&logo=css3)
![Firebase](https://img.shields.io/badge/-Firebase-FFCA28?style=flat&logo=firebase&logoColor=black)
![SQLite](https://img.shields.io/badge/-SQLite-003B57?style=flat&logo=sqlite)

---


## 🏗️ System Architecture

```
BOOKIT/
│
├── 🔐 Authentication
│   ├── index.html              # Login page
│   └── changepassword.html
│
├── 👤 User Portal
│   ├── user.html               # Home
│   ├── venues.html             # Venue listing
│   ├── sports.html             # Sports facilities
│   ├── bookings.html           # Booking management
│   ├── profile.html            # User profile
│   ├── personal.html           # Personal details
│   ├── feedback/               # Feedback module
│   ├── teamfinder.html         # Team finder
│   ├── event.html              # Campus events
│   ├── noti.html               # Notifications
│   └── myteams.html
│
├── 🔧 Admin Portal
│   ├── admin.html              # Admin dashboard
│   ├── bookings requests       # Approve/reject bookings
│   ├── announcements-admin.html
│   ├── vreports.html           # Reports
│   └── vfeedback.html          # Feedback management
│
├── 💬 Chatbot Module
│   ├── chatbot.html
│   ├── chatbot.js
│   └── chatbot.css
│
└── ☁️ Firebase Backend
    ├── firebase.js             # Firebase config
    ├── firebase.json
    ├── functions/              # Cloud functions
    └── .firebaserc
```
---

## 👥 User Roles

| Role | Permissions |
|---|---|
| **Student** | Book sports facilities, request seminar hall bookings, view events, team finder |
| **Admin** | Approve/reject bookings, manage facilities, post announcements, manage schedules |

---

## ⚙️ How to Run Locally

```bash
git clone https://github.com/Justin-K-Cherian/bookit.git
cd bookit
pip install -r requirements.txt
python app.py
```
Then open `http://localhost:5000` in your browser.

---

## 📌 Project Status
> 🚧 Developed as a Mini Project — Third Year Computer Engineering

---

## 👤 Author
**Justin K Cherian**  
[GitHub](https://github.com/Justin-K-Cherian) · [Gmail](mailto:justincherian2005@gmail.com)
