const textareaEl = document
    .querySelector('.textarea');
const numberOfCharactorsEl = document.querySelector('.stat__number--characters');
const TwitterNumberEl = document.querySelector('.stat__number--twitter');
const facebookNumbersEl = document.querySelector('.stat__number--facebook');
const WordNumberEl = document.querySelector('.stat__number--words');

const inputHandler = ()=>{
      if(textareaEl.value.includes('<script>'))
    {
        alert('wrong input');
        textareaEl.value=textareaEl.value.replace('<script>' , '')

    }
    let numberOfWords = textareaEl.value.split(' ').length;

    if (textareaEl.value.length === 0) {
        numberOfWords = 0;
    }

    const numberOfCharactors = textareaEl.value.length;
    const twitterCharactersLeft = 280 - numberOfCharactors;
    const facebookCharactersLeft = 1200 - numberOfCharactors;

    if (twitterCharactersLeft < 0) {
        TwitterNumberEl.classList.add('stat__number--limit')
    } else {
        TwitterNumberEl.classList.remove('stat__number--limit')
    }


    if (facebookCharactersLeft < 0) {
        facebookNumbersEl.classList.add('stat__number--limit')
    } else {
        facebookNumbersEl.classList.remove('stat__number--limit')
    }

    numberOfCharactorsEl.textContent = numberOfCharactors;
    TwitterNumberEl.textContent = twitterCharactersLeft;
    facebookNumbersEl.textContent = facebookCharactersLeft;
    WordNumberEl.textContent = numberOfWords;
}
textareaEl.addEventListener('input',inputHandler);


