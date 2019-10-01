
  const userURL = "http://localhost:3000/users"
  const favoriteURL = "http://localhost:3000/favorites"
  const cityURL = "http://localhost:3000/cities"
  let userDiv = document.getElementById("all-users")
  let favoriteDiv = document.getElementById("all-favorites")
  let cityDiv = document.getElementById("all-cities")

// INDEX PAGE FOR USERS//
  fetch(userURL)
    .then(res => res.json())
    .then(userArr => {
      userArr.forEach(user => {
        userDiv.innerHTML += `
        <h5> Name: ${user.name} </h5>
        <h5> Current City: ${user.current_city} </h5>
        `
      })
    })

// SHOW PAGE //
  // let id =
  //   fetch(userURL + "/" + id, {
  //
  //   })

// INDEX PAGE FOR CITIES //
  fetch(cityURL)
    .then(res => res.json())
    .then(cityArr => {
      cityArr.forEach(city => {
        cityDiv.innerHTML += `
        <h5> City: ${city.name} </h5>
        `
      })
    })

// CREATE A FAVORITE //
  fetch(favoriteURL, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: {
      name: "Favorite"
    }
  })
  .then(res => res.json())
