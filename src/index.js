
document.addEventListener('DOMContentLoaded', () => {

///////////////////////////////// HELPER METHODS //////////////////////////////////////
  // URLs //
  const userURL = "http://localhost:3000/users"
  const favoriteURL = "http://localhost:3000/favorites"
  const cityURL = "http://localhost:3000/cities"
  // DIVs //
  let userDiv = document.getElementById("all-users")
  let favoriteDiv = document.getElementById("all-favorites")
  let cityDiv = document.getElementById("all-cities")
  let navDiv = document.querySelector('.navs')
  // get elements //
  let slidePics = document.getElementById('TopNav')
  let cityIcons = document.querySelector('.row')
  let allInfo = document.getElementById('all-info')
  let headerDiv = document.getElementById('headerDiv')
  let profileInfo = document.getElementById('profile-info')
  let citiesTitle = document.getElementById('city-title')
  // done getting elements //

  // Clear Main Page //
  function clearEverything(){
    slidePics.innerText = ""
    cityIcons.innerText = ""
    allInfo.innerText = ""
    headerDiv.innerText = ""
    navDiv.innerText=""
  }
  function clearBody(){
    console.log(headerDiv)
    // cityIcons.innerText = ""
    // headerDiv.innerText = ""
  }
  // Headers & Body //

  function createHeader(){
      return {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
    }

//// END HELPER METHODS ////




//////////////////////////////// INDEX PAGE FOR USERS ///////////////////////////////
let sidenav = document.getElementById("mySidenav")

  fetch(userURL)
  .then(res => res.json())
  .then(userArr => {
    userArr.forEach(user => {
      sidenav.innerHTML += `
      <div class="user">
      <a href="#about" class="sideMenuItems" data-id="${user.id}">${user.name}</a>
      <button class="deleteButton" data-id="${user.id}" style="border-radius: 4px;">x</button><br>
      </div>
      `
      localStorage.id = user.id
    })
  })

////////////////////////////////////// CREATE USER /////////////////////////////////////

let form = document.createElement('form')

    userNav.addEventListener('click', function(evt){
      if(evt.target.className === "createUser"){
      let userNav = document.querySelector('#userNav')
      form.id = "form"

      form.innerHTML = `
      <br>
      <label>Name: </label>
      <input type="text" name="name" id="formInput"/><br>
      <label>Current City: </label>
      <input type="text" name="city" id="formInput"/><br><br>
      <input type="submit" class="submitUser" id="button" />
      `
      userNav.append(form)
      }
    })

    form.addEventListener('submit', function(evt){
      evt.preventDefault()
      let name = evt.target.name.value
      let city = evt.target.city.value
      debugger
      fetch(userURL, {
        method: 'POST',
        headers: createHeader(),
        body: JSON.stringify({
          name: name,
          current_city: city
        })
      })
      .then(res => res.json())
      .then(userObj => {
        sidenav.innerHTML += `
        <div class="user">
        <a href="#about" class="sideMenuItems" data-id="${userObj.id}">${userObj.name}</a>
        <button class="deleteButton" style="border-radius: 4px;" data-id="${userObj.id}">x</button>
        </div>
        `
        localStorage.id = userObj.id
      })
    })

////////////////////////////////////// SHOW USER //////////////////////////////////////

  sidenav.addEventListener('click', function(evt){
        if(evt.target.className === "sideMenuItems"){
          let id = evt.target.dataset.id
          fetch(userURL + '/' + id)
          .then(res => res.json())
          .then(userObj => {
            clearEverything()
            profileInfo.innerHTML = `
            <div>
            <h1 style="text-align: center"> ${userObj.name}'s Profile </h1>
            </div>
            <h3> Name: ${userObj.name} </h3>
            <h3> Current City: ${userObj.current_city} </h3>
            <button type="button" class="editButton" id="button" data-id="${userObj.id}"> Edit Profile Information </button>
            <button type="button" class="button" id="button" data-id="${userObj.id}"> Edit My Favorites </button><br><br>
            `
            let favoriteDiv = document.createElement('div')
            favoriteDiv.className = ('userFavorites')
            profileInfo.append(favoriteDiv)

            userObj.favorites.forEach(favorite => {
              favoriteDiv.innerHTML += `
              <div id="userFavorites">
                <div class="card h-100">
                  <a href="#"><img class="card-img-top" src="${favorite.city.image_url}" alt=""></a>
                  <div class="card-body" data-id="">
                    <h4>
                      <a href="#" data-id="" class="cardTitle">${favorite.city_name}</a>
                    </h4>
                    <p class="card-text">  </p>
                    <a href"#" class="cardFavoriteBtn" data-id=""> ${favorite.city.favorite_count}❤️</a>
                    <span data-id="" class="favoriteDeleteBtn">Delete Favorite </span>
                  </div>
                </div><br><br>
              </div>
              `
            })
          })
        }
      })


////////////////////////////////////// EDIT USER //////////////////////////////////////
  profileInfo.addEventListener('click', (evt) => {
    let id = evt.target.dataset.id

    if(evt.target.className === 'editButton'){
      let form = document.createElement('form')

      form.innerHTML = `
      <br>
      <h1> Edit Profile Information </h1>
      <div id="form">
      <label>Name: </label>
      <input type="text" name="name" /><br>
      <label>Current City: </label>
      <input type="text" name="city" /><br>
      <input type="submit" class="hey" />
      </div>
      `
      profileInfo.append(form)

      form.addEventListener('submit', (evt) => {
        evt.preventDefault()

        let name = evt.target.name.value
        let city = evt.target.city.value

        fetch(userURL + '/' + id, {
          method: 'PATCH',
          headers: createHeader(),
          body: JSON.stringify({
            name: name,
            current_city: city,
          })
        })
        .then(res => res.json())
        .then(userObj => {
          profileInfo.innerHTML = `
          <div>
          <h1> ${userObj.name}'s Profile </h1>
          </div>
          <h2> Name: ${userObj.name} </h2>
          <h3> Current City: ${userObj.current_city} </h3>
          `
          userObj.favorites.forEach(favorite => {
            profileInfo.innerHTML += `
            <h3> Favorites: ${favorite.city_name}</h3>
            <button type="button" class="button" data-id="${userObj.id}"> Edit </button>
            `
          })
        })
      })
    }
  })

////////////////////////////////////// DELETE USER ////////////////////////////////
  let deleteButton = document.querySelector('.deleteButton')


  sidenav.addEventListener('click', function(evt){
    let id = evt.target.dataset.id
    if(evt.target.className === "deleteButton"){
      let userLink = evt.target.parentElement
      fetch(userURL + `/` + id, {
        method: 'DELETE'
      })
      userLink.remove()
    }
  })

////////////////////////////////////// INDEX PAGE FOR CITIES ////////////////////////////////
let mostLikedCity = document.querySelector('#mostLikedCity')
    fetch(cityURL)
    .then(res => res.json())
    .then(cityArr => {
      cityArr.forEach(city => {
        if(city.favorites_count > cityArr.length){
        mostLikedCity.innerText += `${city.name}`
      }

        cityIcons.innerHTML += `
          <div class="col-lg-4 col-sm-6 portfolio-item">
            <div class="card h-100">
              <a href="#"><img class="card-img-top" src="${city.image_url}" alt=""></a>
              <div class="card-body" data-id="${city.id}">
                <h4>
                  <a href="#" data-id="${city.id}" class="cardTitle">${city.name}</a>
                </h4>
                <p class="card-text"> ${city.description} </p>
                <a href"#" class="cardFavoriteBtn" data-id="${city.id}"> ❤️</a>
                <span data-id="${city.id}" class="cardFavoriteBtn">${city.favorites_count}</span><br><br>
                <button class="like-button" name="addFavoriteBtn" data-id="${city.id}" data-name="${city.name}">Add To My Favorites</button>
              </div>
            </div>
          </div>
         `
      })
    })

////////////////////////////////////// CITY SHOW PAGE /////////////////////////////////////
let cityCards = document.querySelector('#cityCards')
let cityInfo = document.querySelector('#city-info')

  cityCards.addEventListener('click', (evt) => {
    let id = evt.target.dataset.id
    if(evt.target.className === "cardTitle"){
      console.log('hello')
      fetch(cityURL + '/' + id)
      .then(res => res.json())
      .then(cityObj => {
        clearEverything()
        cityInfo.innerHTML = `
        <div>
        <h1> ${cityObj.name} </h1>
        </div>
        <h3> Facts: </h3>
        <ul> <li>${cityObj.description}</li>
        </ul>
        <button type="button" class="favoriteBtn" data-id="${cityObj.id}"> Favorite ❤️</button>
        `
      })
    }
  })

//////////////////////////////////// CLICK ON FAVORITES ////////////////////////////////////

  cityCards.addEventListener('click', function(evt){
    if(evt.target.className === "cardFavoriteBtn"){
      console.log('hello')
      let likeID = evt.target.dataset.id
      let userID = localStorage.id
      let likeNum = document.querySelector(`span[data-id = "${likeID}"]`)

      let addFavorites = parseInt(likeNum.innerText)
      likeNum.innerText = addFavorites + 1

      fetch(cityURL + '/' + likeID, {
        method: 'PATCH',
        headers: createHeader(),
        body: JSON.stringify({
          favorite_count: addFavorites + 1
        })
      })
    }
  })

//////////////////////////////////// ADD FAVORITE TO USER ////////////////////////////////////
  let favortieDiv = document.getElementById('all-favorites')
  cityIcons.addEventListener('click', function(evt){
    if(evt.target.name === "addFavoriteBtn"){
      let city_id = evt.target.dataset.id
      let user_id = localStorage.id
      let city = evt.target.dataset.city
      fetch(favoriteURL, {
        method: 'POST',
        headers: createHeader(),
        body: JSON.stringify({
          city_id: city_id,
          user_id: user_id
        })
      })
      .then(res => res.json())
      .then(favObj => {
        // clearBody()
        favoriteDiv.innerHTML += `
        <div class="col-lg-4 col-sm-6 portfolio-item">
          <div class="card h-100">
            <a href="#"><img class="card-img-top" src="" alt=""></a>
            <div class="card-body" data-id="">
              <h4>
                <a href="#" data-id="" class="cardTitle">${favObj.city_name}</a>
              </h4>
              <a href"#" class="cardFavoriteBtn" data-id=""> ❤️</a>
              <span data-id="" class="cardFavoriteBtn"></span>${favObj.city.favorites_count}<br><br>
              <button class="like-button" name="addFavoriteBtn" data-id="" data-name="">Add To My Favorites</button>
            </div>
          </div>
        </div>
        `
      })
    }
  })

////////////////////////////////////// CLOCK //////////////////////////////////////

  function showClock(){
    const secondHand = document.getElementById('second-hand')
    const minsHand = document.getElementById('min-hand')
    const hourHand = document.getElementById('hour-hand')
    const clockDiv = document.querySelector('.clock')
    function setDate(){
      const now = new Date()
      const seconds = now.getSeconds()
      const secondsDegrees = ((seconds/60) * 360) + 90
      secondHand.style.transform = `rotate(${secondsDegrees}deg)`

      const mins = now.getMinutes()
      const minSDegrees = ((mins/60) * 360) + 90
      minsHand.style.transform = `rotate(${minSDegrees}deg)`

      const hour = now.getHours()
      const hourDegrees = ((hour/12) * 360) + 90
      hourHand.style.transform = `rotate(${hourDegrees}deg)`
    }
    setInterval(setDate, 1000)
  }
  showClock()


  ///////////////////////////////// FETCH API ////////////////////////////////////
  let searchForm = document.getElementById('search-form')


  searchForm.addEventListener('submit', function submitSearchForm(evt){
    evt.preventDefault()

    let wikiURL = "https://en.wikipedia.org/w/api.php";
    let term = document.getElementById('search')
    let searchInput = term.value
    let searchUL = document.getElementById('displayInfo')

    let params = {
      action: "query",
      list: "search",
      srsearch: searchInput,
      format: "json"
    };

    wikiURL = wikiURL + "?origin=*";
    Object.keys(params).forEach(function(key){wikiURL += "&" + key + "=" + params[key];});

    fetch(wikiURL)
    .then(res => res.json())
    .then(searchObj => {
      if (searchObj.query.search[0].title === searchInput){
        searchUL.innerText = ""
        searchObj.query.search.forEach(element => {
          console.log(element)
          cityIcons.innerText = ""
          allInfo.innerText = ""
          citiesTitle.innerText = ""
          searchUL.innerHTML += `
          <h3 style="">${element.title}</h3><br>
          <div>${element.snippet}</div><br>
          `
        })
        console.log("Your search page 'Nelson Mandela' exists on English Wikipedia" );
      }
    })
    .catch(function(error){console.log(error);});
  })
});
