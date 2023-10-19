const form = document.querySelector('form');
const img = document.querySelector('#img');
const topText = document.querySelector('#top-text');
const bottomText = document.querySelector('#bottom-text');
const output = document.querySelector('#output');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const memeFrame = document.createElement('div')
    const meme = document.createElement('img')
    const memeTopText = document.createElement('div');
    const memeBottomText = document.createElement('div');
    const remove = document.createElement('div');
    remove.classList.add('remove');
    memeFrame.classList.add('frame');
    memeTopText.classList.add('top-text');
    memeBottomText.classList.add('bottom-text');
    remove.innerText = 'X';
    meme.setAttribute('src', img.value);
    memeTopText.innerText = topText.value;
    memeBottomText.innerText = bottomText.value;
    memeFrame.appendChild(memeTopText);
    memeFrame.appendChild(memeBottomText);
    memeFrame.appendChild(meme);
    memeFrame.appendChild(remove);
    output.appendChild(memeFrame);
    img.value = '';
    topText.value = '';
    bottomText.value = '';
    console.log('Submited form');
})

output.addEventListener('click', function(e) {
    e.target.parentElement.remove();
})