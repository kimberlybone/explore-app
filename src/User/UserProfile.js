class UserProfile{
  let userDiv = document.getElementById("all-users")
  constructor(name, current_city, id){
    this.name = name
    this.current_city = current_city
    this.id = id
  }

  // Fetch User
  static createUser(user, callback){
    return fetch("http://localhost:3000/users/:id", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(user)
    }).then(res => res.json())
      .then(callback)
  }
}
  // Adding form to Create User
  ToyAdapter.createUser(user => {
    let form = document.createElement('form')
    form.className = "form"
    let findform = document.getElementById

    userDiv.innerHTML += `
    <h5> Name: ${user.name} </h5>
    <h5> Current City: ${user.current_city} </h5>
    `
  })

}
