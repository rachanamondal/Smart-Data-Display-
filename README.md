🧩 Smart Data Display

A full-stack mini web app that scrapes real-world data from public sources (books, news, GitHub trending, and VS Code extensions), serves it via a Flask API, and displays it using a responsive, tab-based frontend built with HTML, CSS, and JavaScript.



🚀 Features

✅ Live data scraping (preloaded samples in JSON format)
✅ Flask backend with RESTful API (`/api/books`, `/api/news`, etc.)
✅ Clean, responsive frontend with tab switch and search filter
✅ Works completely offline
🔄 Easy to deploy on Render + GitHub Pages or Vercel



📁 Project Structure

smart-data-display/
backend/ 
app.py       ← Flask API server   
books.json   ← Sample scraped data news.json 
vscode.json  
github.json 
frontend/ 
index.html    ← Main webpage  style.css     ← Styling 
script.js     ← Logic (fetch + tabs + search) 



💻 How to Run (Offline)

1. Install Flask

Make sure Python is installed, then in terminal:

pip install flask

2. Start the Flask API

cd backend
python app.py

You’ll see:

Running on http://127.0.0.1:5000

3. Open the Frontend

Open frontend/index.html in your browser (double-click or use VS Code Live Server).




🔗 API Endpoints

Endpoint	  Returns

/api/books	JSON of trending books
/api/news	  JSON of tech news
/api/vscode	JSON of VS Code tools
/api/github	JSON of trending repos




🌐 Deployment Options

Frontend: GitHub Pages or Vercel

Backend: Render (Free Flask Hosting)


Need help deploying it? Ask in Issues or Discussions!
