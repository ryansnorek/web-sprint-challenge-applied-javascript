const Header = (title, date, temp) => {
  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  const parentDiv = document.createElement('div')
  parentDiv.classList.add('header')

  const spanDate = document.createElement('span')
  spanDate.textContent = date
  spanDate.classList.add('date')
  const h1 = document.createElement('h1')
  h1.textContent = title
  const spanTemp = document.createElement('span')
  spanTemp.textContent = temp
  spanTemp.classList.add('temp')
  
  parentDiv.append(spanDate, h1, spanTemp)
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //
  return parentDiv
}

const headerAppender = (selector) => {
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //
  const title = "Webster Dictionary Officials Vote to Drop the 2nd 'L' in Llama"
  const date = '10/01/21'
  const temp = '78 with high humidity. Feels like 89'
  document.querySelector(selector).append(Header(title, date, temp))
}

export { Header, headerAppender }