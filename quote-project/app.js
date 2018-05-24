const COLORS = ['navy', 'blue', 'aqua', 'teal', 'olive', 'green', 'lime', 'red'];

const createQuote = () => {
    $.get("https://talaikis.com/api/quotes/random/", (response) => {
        $('#quoteText').text(`"${response.quote}"`);
        $('#quoteAuthor').text(`- ${response.author}`);
    }, 'json');
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
        $('body, #generateBtn').css({
            'background-color': COLORS[random]
        });
        $('#quoteText, #quoteAuthor').css({
            'color': COLORS[random]
        });
        createQuote();
    });    
});