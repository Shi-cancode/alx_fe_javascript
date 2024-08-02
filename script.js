const quotes = [
    { text: "The only way to do great work is to love what you do.", category: "Inspiration" },
    { text: "Life is what happens when you're busy making other plans.", category: "Life" },
    { text: "Get busy living or get busy dying.", category: "Motivation" }
];

function saveQuotes() {
    localStorage.setItem('quotes', JSON.stringify(quotes));
}

function loadQuotes() {
    const storedQuotes = localStorage.getItem('quotes');
    if (storedQuotes) {
        quotes.push(...JSON.parse(storedQuotes));
    }
}

function showRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quote = quotes[randomIndex];
    const quoteDisplay = document.getElementById('quoteDisplay');
    quoteDisplay.textContent = `"${quote.text}" — ${quote.category}`;
    saveLastViewedQuote(quote); // Save to session storage
}

function saveLastViewedQuote(quote) {
    sessionStorage.setItem('lastViewedQuote', JSON.stringify(quote));
}

function addQuote() {
    const newQuoteText = document.getElementById('newQuoteText').value;
    const newQuoteCategory = document.getElementById('newQuoteCategory').value;

    if (newQuoteText && newQuoteCategory) {
        quotes.push({ text: newQuoteText, category: newQuoteCategory });
        saveQuotes(); // Save to local storage
        document.getElementById('newQuoteText').value = '';
        document.getElementById('newQuoteCategory').value = '';
        alert('Quote added successfully!');
    } else {
        alert('Please fill in both fields.');
    }
}

function exportToJsonFile() {
    const blob = new Blob([JSON.stringify(quotes, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'quotes.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

function importFromJsonFile(event) {
    const fileReader = new FileReader();
    fileReader.onload = function(event) {
        try {
            const importedQuotes = JSON.parse(event.target.result);
            if (Array.isArray(importedQuotes)) {
                quotes.length = 0; // Clear existing quotes
                quotes.push(...importedQuotes);
                saveQuotes(); // Update local storage
                showRandomQuote(); // Display the first quote or handle accordingly
                alert('Quotes imported successfully!');
            } else {
                alert('Invalid JSON format.');
            }
        } catch (error) {
            alert('Failed to import quotes.');
        }
    };
    fileReader.readAsText(event.target.files[0]);<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dynamic Quote Generator</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            padding: 20px;
        }
        #quoteDisplay {
            margin-bottom: 20px;
        }
    </style>
</head>
<body>
    <h1>Dynamic Quote Generator</h1>
    <div id="quoteDisplay">Your quote will appear here.</div>
    <button id="newQuote">Show New Quote</button>

    <div>
        <input id="newQuoteText" type="text" placeholder="Enter a new quote" />
        <input id="newQuoteCategory" type="text" placeholder="Enter quote category" />
        <button id="addQuote">Add Quote</button>
<select id="categoryFilter" onchange="filterQuotes()">
    <option value="all">All Categories</option>
    <!-- Dynamically populated categories -->
        function manualSync() {
    fetchQuotesFromServer();
    showNotification('Sync initiated.');
}
</select>

    </div>

    
