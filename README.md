# Frontend Mentor - Advice generator app solution

This is a solution to the [Advice generator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Generate a new piece of advice by clicking the dice icon 

### Screenshot

![Screenshot of the project](./images/Captura%20de%20pantalla%202022-04-26%20101032.png)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- DOM manipulation with vainilla JS
- fetch API
- JSON API

### What I learned

In this challenge I learned how to use the fetch and json API's to work with async function and promises. 
This was very fun for me since this is the first project in which I implement this API's.
```
```js
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
```


### Continued development

Now that I feel more confident working with promises I'll keep working on projects using different API's (I'd love to find a way to use the Rick and Morty API on a future project 😅).

### Useful resources

- [MDN web docs](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Introducing) - This helped me a lot to finally undestand what are, and how to use promises.

## Author

- Website - [Alejandro Villaescsa](https://www.instagram.com/alex_codes.js/?hl=en)
- Frontend Mentor - [@alexvillhen](https://www.frontendmentor.io/profile/alexvillhen)
- Twitter - [@alexvillhen](https://www.twitter.com/alexvillhen)

## Acknowledgments

I'd recomend to everyone that is struggling with async programming and promises to read the MDN documentation about this subject and just try to buld somethig, this project actually helped me A LOT to have a better understanding of the fecth API.

