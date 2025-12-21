const quoteDisplay = document.getElementById("quoteDisplay");
const button = document.getElementById("newQuote");

const quotes = [
    { text:"believe in yourself.", category: "motivation" },
    { text: "know one knows tomorrow.", category: "inspiration" },
    { text: "You can begin where you are.", category: "motivation" }
];
function showRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quote = quotes[randomIndex];
    quoteDisplay.innerHTML = `"${quote.text}" <br> <small>Category: ${quote.category}</small>`;
}

button.addEventListener("click", displayRandomQuote);

const newQuoteText = document.getElementById("newQuoteText");
const newQuoteCategory = document.getElementById("newQuoteCategory");
const addQuoteBtn = document.getElementById("addQuoteBtn");

function addQuote() {
    if (newQuoteText.value && newQuoteCategory.value) {
    const newQuote = {
        text: newQuoteText.value,
        category: newQuoteCategory.value
    };

    quotes.push(newQuote);

    newQuoteText.value = "";
    newQuoteCategory.value = "";
    console.log("Quote added:", newQuote);
}
}
addQuoteBtn.addEventListener("click", addQuote);