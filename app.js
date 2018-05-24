const COLORS = ['navy', 'blue', 'aqua', 'teal', 'olive', 'green', 'lime', 'red'];

const createQuote = () => {
    $.get("https://talaikis.com/api/quotes/random/", (response) => {
        $('#quoteText').text(`"${response.quote}"`);
        $('#quoteAuthor').text(`- ${response.author}`);
    }, 'json');
}

const animateColor = (back, color) => {
    let random = Math.floor(Math.random() * (7 + 1));
        $( back.join(',') ).animate({
            backgroundColor: COLORS[random]
        }, 1500 );
        $( color.join(',') ).animate({
            color: COLORS[random]
        }, 1500 );
}

$( document ).ready(() => {
    createQuote();
    $('#twitterImg').click(() => {
        const url = 'https://twitter.com/intent/tweet';
        const quote = `${$('#quoteText').text()}\n${$('#quoteAuthor').text()}`;
        window.open(`${url}?text=${quote}`);
    });
    $('#generateBtn').click(() => {
        let random = Math.floor(Math.random() * (7 + 1));
        animateColor(['body', '#generateBtn'], ['#quoteText, #quoteAuthor']);
        createQuote()
    }); 
});