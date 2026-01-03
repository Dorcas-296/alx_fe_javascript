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

function createAddQuoteForm() {
  const form = document.createElement('form')

  // Create input for quote text
  const textInput = document.createElement('input');
  textInput.id = 'newQuoteText';
  textInput.placeholder = 'ENtera new quote';

  // Create input for category
  const categoryInput = document.createElement('input');
  categoryInput.id = 'newQuoteCategory';
  categoryInput.placeholder = 'Enter quote category';

  // Create button to add quote
  const addButton = document.createElement('button');
  addButton.textContent = 'add Quote';

  addButton.addEventListener("click", addQuote);

  // Add input and button to the form tag
  form.appendChild(textInput);
  form.appendChild(categoryInput);
  form.appendChild(addButton);

  // Add form to the body
  document.body.appendChild(form);

}
button.addEventListener("click", showRandomQuote);
addQuoteBtn.addEventListener("click", addQuote);
