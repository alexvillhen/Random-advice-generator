const result = document.querySelector("#result");
const btn = document.querySelector('button');
const id = document.querySelector('i');

const addQuote = () => {
    const requestAdvice = fetch("https://api.adviceslip.com/advice");
    requestAdvice.then( response => {
        return response.json()
    })
    .then(json => {
        result.innerHTML = `"${json.slip.advice}"`;
        id.innerHTML = `Advice #${json.slip.id}`;
    });
}

window.addEventListener('load', addQuote);
btn.addEventListener('click', addQuote);
