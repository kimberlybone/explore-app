
  const userURL = "http://localhost:3000/users"
  const favoriteURL = "http://localhost:3000/favorites"
  const cityURL = "http://localhost:3000/cities"
  let userDiv = document.getElementById("all-users")

// INDEX PAGE //
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
