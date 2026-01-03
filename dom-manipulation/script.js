const quoteDisplay = document.getElementById("quoteDisplay");
const button = document.getElementById("newQuote");
const newQuoteText = document.getElementById("newQuoteText");
const newQuoteCategory = document.getElementById("newQuoteCategory");
const addQuoteBtn = document.getElementById("addQuoteBtn");

const quotes = [
    { text: "Believe in yourself.", category: "Motivation" },
    { text: "No one knows tomorrow.", category: "Inspiration" },
    { text: "You can begin where you are.", category: "Motivation" }
];

function showRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quote = quotes[randomIndex];
    quoteDisplay.innerHTML = `"${quote.text}" <br> <small>Category: ${quote.category}</small>`;
}

function addQuote() {
    if (newQuoteText.value && newQuoteCategory.value) {
        const newQuote = {
            text: newQuoteText.value,
            category: newQuoteCategory.value
        };
        quotes.push(newQuote);
        quoteDisplay.innerHTML = `"${newQuote.text}" <br> <small>Category: ${newQuote.category}</small>`;
        newQuoteText.value = "";
        newQuoteCategory.value = "";
    }
}

button.addEventListener("click", showRandomQuote);
addQuoteBtn.addEventListener("click", addQuote);
