const apiKey = 'aKrnFGwbPncYK65yfb3C7bz8nRuedH4d7p3OhC9x';
const url = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;
const articleEl = document.querySelector('.apodContainer');


fetch(url)
  .then(res => res.json())
  .then(data => getAPOD(data))
  .catch(err => console.log('Error', err));

function getAPOD(apod){
    console.log('apod', apod)
    const newArticle = document.createElement('article');
    const newH2 = document.createElement('h2')
    const newImg = document.createElement('img');
    const newDescription = document.createElement('p')

    newH2.textContent = apod.title
    newDescription.textContent = apod.explanation
    newImg.src = apod.hdurl;
    newArticle.append(newH2, newImg, newH2, newDescription);
    console.log(newArticle)

    articleEl.append(newArticle);
};


function getAPOD(apod){
  articleEl.innerHTML += `
  
  `
}