const form = document.querySelector('form');
const main = document.querySelector('main');
//Extract the values from the form
const imgInput = form.querySelector('#form-link-img');
const topTextInput = form.querySelector('#form-text-top');
const bottomTextInput = form.querySelector('#form-text-bottom');
const meme = document.querySelectorAll('.meme__wrapper');


//REMOVE MEME
const removeMeme = main.addEventListener('click', function(event) {
  console.log(event.target.tagName);
  //if the tagName of the target is P, I, or MAIN
  if (event.target.tagName === 'P' || event.target.tagName === 'I' || event.target.tagName === 'MAIN') {
    //remove the parent of the target
    event.target.parentElement.remove();
  }
});


//ADD MEME
const addMeme = form.addEventListener('submit', function(event) {
  //prevent the default action
  event.preventDefault();
  //to check to make sure inputs are logging correctly, you have to access the value of the variable
  console.log(imgInput.value, topTextInput.value, bottomTextInput.value);
  //create a new figure
  const newMeme = document.createElement('figure');
  //assign the class meme_wrapper to the figure
  newMeme.classList.add('meme__wrapper');
  //create new image
  const newImg = addImg(imgInput.value);
  //create top-text and bottom text elements
  const newTopText = addTopText(topTextInput.value);
  const newBottomText = addBottomText(bottomTextInput.value);
  //create new trashcan
  const newTrashCan = addTrashCan();
  //append the i, p, p, img to the figure
  newMeme.append(newImg, newTopText, newBottomText, newTrashCan);
  //append the figure to the <main>
  main.append(newMeme);
});

function addImg(link) {
  //create a new image element
  const image = document.createElement('img');
  //assign the source to be the image link, change the link to a string
  image.setAttribute('src', link.toString());
  //assign the class to be meme__img
  image.classList.add('meme__img');
  return image;
}

function addTrashCan() {
  //create i element
  const trashcan = document.createElement('i');
  //assign the class to the i element
  trashcan.classList.add('fa-solid','fa-trash-can','fa-5x');
  return trashcan;
}

function addTopText(input) {
  //create a new p element
  const text = document.createElement('p');
  //assign the classes, meme_text, meme_text--top to the the p element
  text.classList.add('meme__text', 'meme__text--top');
  //assign innerText to be the text-top from form
  text.innerText = input;
  return text;
}

function addBottomText(input) {
  //create a new p element
  const text = document.createElement('p');
  //assign the classes, meme_text, meme_text--bottom to the the p element
  text.classList.add('meme__text', 'meme__text--bottom');
  //assign innerText to be the text-bottom from form
  text.innerText = input;
  return text;
}

