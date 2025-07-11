const urls = {
  books: "http://127.0.0.1:5000/api/books",
  news: "http://127.0.0.1:5000/api/news",
  vscode: "http://127.0.0.1:5000/api/vscode",
  github: "http://127.0.0.1:5000/api/github"
};

let currentData = [];

async function fetchData(category) {
  const res = await fetch(urls[category]);
  const data = await res.json();
  currentData = data;
  displayCards(data);
}

function displayCards(data) {
  const container = document.getElementById("card-container");
  container.innerHTML = "";
  data.forEach(item => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <h2>${item.title}</h2>
      ${item.author ? `<h4>by ${item.author}</h4>` : ""}
      <p>${item.description}</p>
      <a href="${item.link}" target="_blank">View</a>
    `;
    container.appendChild(card);
  });
}

document.querySelectorAll(".tab-button").forEach(button => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".tab-button").forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");
    const category = button.dataset.category;
    fetchData(category);
    document.getElementById("search").value = "";
  });
});

document.getElementById("search").addEventListener("input", () => {
  const term = document.getElementById("search").value.toLowerCase();
  const filtered = currentData.filter(item =>
    item.title.toLowerCase().includes(term) ||
    (item.author && item.author.toLowerCase().includes(term))
  );
  displayCards(filtered);
});

fetchData("books");
