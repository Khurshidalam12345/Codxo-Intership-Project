<script>
    const quotes = [
        "Dream is not that which you see while sleeping, it is something that does not let you sleep.",
        "If you want to shine like a sun, first burn like a sun.",
        "To succeed in your mission, you must have single-minded devotion to your goal."
    ];
    
    let quoteIndex = 0;
    const quoteElement = document.querySelector('blockquote');

    function rotateQuotes() {
        quoteElement.textContent = quotes[quoteIndex];
        quoteIndex = (quoteIndex + 1) % quotes.length;
    }

    setInterval(rotateQuotes, 4000); // Change quote every 4 seconds
</script>
