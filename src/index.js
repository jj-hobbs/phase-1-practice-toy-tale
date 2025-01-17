let addToy = false;
const addBtn = document.querySelector('#new-toy-btn');
const toyFormContainer = document.querySelector('.container');
const baseURL = 'http://localhost:3000/toys'
const divCollect = document.getElementById('toy-collection')

const getToys = () => {
  return fetch(baseURL)
  .then(data=>data.json())
  .then((toys)=>toys.forEach((el)=>renderToys(el)))
}

getToys()

const renderToys = (toy) => {

  const toyDiv = document.createElement('div')
  toyDiv.className = "card"

  let h2 = document.createElement('h2')
  h2.textContent = toy.name

  let img = document.createElement('img')
  img.src = toy.image
  img.className = 'toy-avatar'

  let p = document.createElement('p')
  p.innerText = `${toy.likes} Likes`

  let btn = document.createElement('button')
  btn.className = 'like-btn'
  btn.id = toy.id

  toyDiv.append(h2, img, p, btn)
  toyCollection.append(toyDiv)
}


  
// append that div to collection
    // get the collection div
    const toyCollection = document.querySelector('#toy-collection')
    // append it
    // toyCollection.append(card)


document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });
});

// let addToy = false;

// document.addEventListener("DOMContentLoaded", () => {
//   toggleForm()
//   getToys()
//   newToyForm()
// });

// const newToyForm = () => {
//   // get the form
//   const toyForm = document.querySelector('.add-toy-form')

//   // add event listener for submit
//   toyForm.addEventListener('submit', (e) => {
//     e.preventDefault()

//     // get the info from the form
//     if(e.target.name.value.trim() && e.target.image.value.trim() ){
//       const newToyName = e.target.name.value
//       const newToyImage = e.target.image.value

//       const newToyObj = {
//         name: newToyName,
//         image: newToyImage,
//         likes: 0
//       }
//       // get the toy to show up
//       renderAToy(newToyObj)
//     }else{
//       alert('fill out the form bruh!!!')
//     }
//   })
// }

// const getToys = () => {
//   fetch('http://localhost:3000/toys')
//   .then(res => res.json())
//   .then(toys => toys.forEach((toy) => renderAToy(toy)))
// }

// function renderAToy(toy) {
//   // create a div with class "card"
//   const toyCard = document.createElement('div')
//   toyCard.className = "card"

//   const toyName = document.createElement('h2')
//   toyName.innerText = toy.name

//   const toyImage = document.createElement('img')
//   toyImage.src = toy.image
//   toyImage.className = "toy-avatar"

//   const toyLikes = document.createElement('p')
//   toyLikes.innerText = `${toy.likes} Likes`

//   const likeBtn = document.createElement('button')
//   likeBtn.innerText = `Like <3`
//   likeBtn.className = 'like-btn'
//   likeBtn.id = toy.id

//   likeBtn.addEventListener('click',(e) => {
//     const currentLikesText = e.target.previousSibling.innerText
//     const actualLikes = currentLikesText.split(" ")[0]

//     e.target.previousSibling.innerText = `${parseInt(actualLikes) + 1} Likes`
//   })

//   toyCard.append(toyName,toyImage,toyLikes,likeBtn)

//   // append that div to collection
//     // get the collection div
//     const toyCollection = document.querySelector('#toy-collection')
//     // append it
//     toyCollection.append(toyCard)
// }

// const toggleForm = () => {
//   const addBtn = document.querySelector("#new-toy-btn");
//   const toyFormContainer = document.querySelector(".container");
//   addBtn.addEventListener("click", () => {
//     // hide & seek with the form
//     addToy = !addToy;
//     if (addToy) {
//       toyFormContainer.style.display = "block";
//     } else {
//       toyFormContainer.style.display = "none";
//     }
//   });
// }