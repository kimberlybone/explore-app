class UserAdapter {
  let userDiv = document.getElementById("all-users")
  const userURL = "http://localhost:3000/users"


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
}
