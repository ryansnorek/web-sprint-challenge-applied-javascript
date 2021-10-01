const Card = (article) => {
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
    const card = document.createElement('div')
    card.classList.add('card')

    const headline = document.createElement('div')
    headline.classList.add('headline')
    headline.textContent = article.headline

    const author = document.createElement('div')
    author.classList.add('author')
  
    const imgContainer = document.createElement('div')
    imgContainer.classList.add('img-container')
    const img = document.createElement('img')
    img.src = article.authorPhoto
    imgContainer.append(img)
    const name = document.createElement('span')
    name.textContent = `By ${article.authorName}`

    author.append(imgContainer, name)

    card.append(headline, author)
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //
  return card
}
import axios from 'axios'
const cardAppender = (selector) => {
  // TASK 6
  // ---------------------
  axios.get(`http://localhost:5000/api/articles`)
    .then(res => {
      const data = res.data.articles
      for (let key in data) {
        // const x = data[key].map(el => Card(el))
        data[key].forEach(article => {
          let DOMelement = document.querySelector(selector)
          DOMelement.append(Card(article)) 
          // console.log(Card(article))
        })
      }
    })
    .catch(err => console.log('Error: ', err))
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5000/api/articles` (test it in Postman/HTTPie!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //

}

export { Card, cardAppender }