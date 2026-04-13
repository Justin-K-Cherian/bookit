# 📅 BookIt – Centralized Resource Booking System

A web-based platform for managing institutional facility bookings — seminar halls, auditoriums, and sports grounds — with role-based access, real-time availability, and automated notifications.

---

## 📸 Screenshots

<!-- Add screenshots below -->
| Dashboard | Booking Page |
|---|---|
| ![Dashboard](screenshots/dashboard.png) | ![Booking](screenshots/booking.png) |

| Admin Panel | Chatbot |
|---|---|
| ![Admin](screenshots/admin.png) | ![Chatbot](screenshots/chatbot.png) |

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
BookIt/
│
├── Student Portal       # View availability, book facilities, team finder
├── Admin Panel          # Approve/reject bookings, manage facilities, announcements
├── Chatbot Module       # User assistance and booking guidelines
└── Notifications        # Gmail alerts for booking status updates
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