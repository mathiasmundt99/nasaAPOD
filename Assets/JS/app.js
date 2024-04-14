// Lavet apiKey som en variable så den er lettere at skifte ud. 
const apiKey = 'aKrnFGwbPncYK65yfb3C7bz8nRuedH4d7p3OhC9x';
// URL = API
const url = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;
// Her får jeg fat i apodContainer, som er min main på index.html
const articleEl = document.querySelector('.apodContainer');

// Her laver jeg en fetch på URL 
fetch(url)
// Konverterer til JSON 
  .then(res => res.json())
//  jdasd 
  .then(data => getAPOD(data))
// Catch bruges til at fange diverse fejl, og sende en besked til console 
  .catch(err => console.log('Error', err));

  //Her er en function som skal hjælpe med at finde ud af om det er en video eller et billede som er APOD 
function getMediaElement(apod) {
  //Her starter en if-else block
  //Den første if tjekker om media_type = image. Hivs ja så returneres `<img src="${apod.hdurl || apod.url}" alt="">`, som indsætter hdurl 
  if (apod.media_type === 'image') {
    return `<img src="${apod.hdurl}" alt="">`;
  // Herefetr sker det samme, bare hvor der tjekkes efter om media_type = video. 
  } else if (apod.media_type === 'video') {
    return `<iframe width="560" height="315" src="${apod.url}" frameborder="0" allowfullscreen></iframe>`;
  } 
}

//Her er en function som skal kalde en innerHTML
function getAPOD(apod){
//Jeg har lavet en consol for at tests om det virkede imendes jeg lavede det
  console.log('apod', apod)
//Her er en innerHTML på articleEl, som er en tom article på index.html
  articleEl.innerHTML += `
  <article>
        <div class='apodDiv'>
          <h2>${apod.title}</h2>
          ${getMediaElement(apod)}
          <p>${apod.explanation}</p>
        </div>
    </article>
  `
}

//  Sådan her kunne man også lave opgaven. 
//  Her bruger jeg createElement frem for innerHTML. 

// function getAPOD(apod){
//     console.log('apod', apod)

//     Her oprettes de forskellige elementer / article, h2, div, p

//     const newArticle = document.createElement('article');
//     const newH2 = document.createElement('h2')
//     const newDiv = document.createElement('div');
//     const newDescription = document.createElement('p')

//     Her får diverse elemnter deres værdi fra apod.value
//     Derefter appendes værdierne til diverse elementer

//     newH2.textContent = apod.title
//     newDescription.textContent = apod.explanation
//     newDiv.append = `${getMediaElement(apod)}`; 
//     newArticle.append(newH2, newImg, newH2, newDescription);
//     console.log(newArticle)
     
//     articleEl.append(newArticle);
// };
