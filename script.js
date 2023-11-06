const rating = document.querySelector('.rating')
const allRatings = rating.querySelectorAll('li')
const submitBtn = document.querySelector('button')
const mainBody = document.querySelector('main')

const ratingSelected = (e) => {
  // First Step: Check if a rating has been selected before
  // a) If the rating has been selected before then remove the 'rating-clicked' class first then add the 'rating-clicked' class to the item that was clicked.

  allRatings.forEach((currRating) => {
    if (currRating.classList.contains('rating-clicked')) {
      currRating.classList.remove('rating-clicked')
    }
  })

  if (e.target.tagName.toLowerCase() == 'li') {
    const currRating = e.target
    currRating.classList.add('rating-clicked')
  }
}

const submitThanks = (e) => {
  e.preventDefault()
  let getRating
  allRatings.forEach((currRating) => {
    if (currRating.classList.contains('rating-clicked')) {
      getRating = currRating.textContent
    }
  })

  if (getRating == undefined) {
    alert('Please select a rating!')
  } else {
    mainBody.innerHTML = `<div id="thankyou-component">
      <div class="thank-you-container">
        <img src="images/illustration-thank-you.svg" alt="">
      </div>

      <div class="rating-provided">
        <p>You selected ${getRating} out of 5</p>
      </div>

      <h2>Thank you!</h2>
      <p>
        We appreciate you taking the time to give a rating. If you ever need more support,
        don’t hesitate to get in touch!
      </p>
    </div>`
  }
}

rating.addEventListener('click', ratingSelected)
submitBtn.addEventListener('click', submitThanks)
