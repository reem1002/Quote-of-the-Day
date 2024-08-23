const quotes = [
    { quote: "In complete darkness we are all the same, it is only our knowledge and wisdom that separates us, don't let your eyes deceive you.", author: "Janet Jackson" },
    { quote: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
    { quote: "Life is what happens when you're busy making other plans.", author: "John Lennon" },
    // Add more quotes as needed
];

function newQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const newQuote = quotes[randomIndex];
    document.getElementById('quote-box').innerHTML = ` <h1>Quote of the Day</h1>
            <p id="quote"><img src="./imgs/mark.png " class="icon1">${newQuote.quote} <img src="./imgs/mark.png " class="icon2"></p>
            <p id="author">-${newQuote.author}</p> 
            <div class="footer">
                <div class="buttons">
                    <button id="listen-btn" onclick="listenQuote()"><img class="icon" title="Listen"
                            src="./imgs/volume_up_24dp_064E9A_FILL0_wght400_GRAD0_opsz24 (1).png"></button>
                    <button id="copy-btn" onclick="copyQuote()"><img class="icon" title="Copy"
                            src="./imgs/content_copy_24dp_064E9A_FILL0_wght400_GRAD0_opsz24.png"></button>
                    <button id="tweet-btn" onclick="tweetQuote()"><img class="icon" title="Copy"
                            src="./imgs/image.png"></button>
                </div>
                <button id="new-quote-btn" onclick="newQuote()">New Quote</button>
            </div>`;



}

function listenQuote() {
    const quote = document.getElementById('quote').innerText;
    const author = document.getElementById('author').innerText;
    const utterance = new SpeechSynthesisUtterance(`${quote} by ${author}`);
    speechSynthesis.speak(utterance);
}

function copyQuote() {
    const quote = document.getElementById('quote').innerText;
    const author = document.getElementById('author').innerText;
    const fullQuote = `${quote} ${author}`;
    navigator.clipboard.writeText(fullQuote);
    alert('Quote copied to clipboard!');
}

function tweetQuote() {
    const quote = document.getElementById('quote').innerText;
    const author = document.getElementById('author').innerText;
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(quote)} ${encodeURIComponent(author)}`;
    window.open(twitterUrl, '_blank');
}
