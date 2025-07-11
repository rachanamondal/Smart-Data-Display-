from flask import Flask, jsonify
import json

app = Flask(__name__)

def read_json(file):
    with open(file, encoding="utf-8") as f:
        return json.load(f)

@app.route("/")
def home():
    return {"message": "Smart Data API is live!"}

@app.route("/api/books")
def books():
    return jsonify(read_json("books.json"))

@app.route("/api/news")
def news():
    return jsonify(read_json("news.json"))

@app.route("/api/vscode")
def vscode():
    return jsonify(read_json("vscode.json"))

@app.route("/api/github")
def github():
    return jsonify(read_json("github.json"))

if __name__ == "__main__":
    app.run(debug=True)
