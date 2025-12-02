


# **AQI Intelligence Platform**

A full-stack MERN application that provides real-time Air Quality Index (AQI) data, visual analytics, comparisons, research insights, city health metrics, and global environmental models — all wrapped inside a fast, modern, minimal UI.

Built with **React + Tailwind**, **Node.js + Express**, **MongoDB**, and the **Open-Meteo Air Quality API**.

Live Demo  :  https://air-quality-intelligence-platform-v.vercel.app/
<br/><br>



## 🚀 **Features**

### ✅ **Live AQI**

- Real-time AQI values for 50+ Indian and global cities
- PM2.5, PM10, NO₂, SO₂, CO, O₃ pollutant data
- Custom AQI calculation model
- Beautiful AQI color-coded card

### 🔎 **Explore Cities**

- Browse AQI across India & worldwide
- Search, filter (India / Global / Low AQI / High AQI)
- Quick AQI tiles redesigned for fast scanning
- City detail page with charts & pollutant breakdown

### 📊 **Compare Cities**

- Compare AQI between any two cities
- Bar chart, line chart & pollutant-level table
- Side-by-side AQI cards

### 📘 **AQI Info**

- What is AQI?
- Categories, health impacts, exposure risks
- WHO & CPCB guidelines
- Infographics-friendly section

### 🔬 **Research Section**

- Curated research papers on air pollution
- Urban models, mitigation strategies
- Government policies & global benchmarks

### 🏙️ **Solution Models**

- Beijing model
- Delhi GRAP
- EU Clean Air Strategy
- Smart-city monitoring frameworks
- Actionable solutions for India



<table>
  <tr>
    <td><img src="https://github.com/user-attachments/assets/1adc4b8f-7c3f-49bd-ac97-17c404f3627e" width="400"/></td>
    <td><img src="https://github.com/user-attachments/assets/0036c23e-06fe-447a-8332-b1a12ce17ae2" width="400"/></td>
  </tr>
  <tr>
    <td><img src="https://github.com/user-attachments/assets/8b53dfe0-7437-47ef-b04c-2bc0046aa988" width="400"/></td>
    <td><img src="https://github.com/user-attachments/assets/521ccfda-5f9d-475a-872c-fad54d6a3793" width="400"/></td>
  </tr>
</table>



## 🏗️ **Tech Stack**

### **Frontend**

- React (Vite)
- Tailwind CSS
- Axios
-  Chart.js for graphs
- React Router DOM

### **Backend**

- Node.js
- Express
- Mongoose
- Node-Cron
- Open-Meteo API client

### **Database**

- MongoDB (for future analytics & historical data caching)



  📂 Project Structure

```

  air_quality_intelligence/
│
├── backend/
│   ├── src/
│   │   ├── modules/
│   │   │   └── aqi/
│   │   │       ├── routes/
│   │   │       ├── controllers/
│   │   │       ├── services/
│   │   │       ├── providers/
│   │   │       └── utils/
│   │   ├── config/
│   │   ├── middleware/
│   │   ├── cron/
│   │   ├── app.js
│   │   └── server.js
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── api/
│   │   ├── components/
│   │   ├── pages/
│   │   │   ├── explorePage/
│   │   │   ├── compare/
│   │   │   ├── aqi-info/
│   │   │   ├── research/
│   │   │   └── solutions/
│   │   ├── data/
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── package.json
│
└── README.md
```

---

🛠️ Setup Instructions
### 1️⃣ Clone repo

```bash
git clone https://github.com/yourusername/aqi-intelligence.git
cd aqi-intelligence

```
### 2️⃣ Backend Setup

```bash
cd backend
npm install
npm run dev

```
3️⃣ Frontend Setup
```bash
cd frontend
npm install
npm run dev

```
Ensure backend runs on **5000** and frontend on **5173**.

---



## 🌐 **API Source**

This project uses the free **Open-Meteo Air Quality API**:

https://open-meteo.com/en/docs/air-quality-api

---

## 🤝 Contributing

Pull requests are welcome.

For major changes, please open an issue first.

---

## ⭐ Show Support

If you like this project:

**Give this repo a ⭐ on GitHub!**

---
contact : arpitdeshmukh21@gmail.com

---
