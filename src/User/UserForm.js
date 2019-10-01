
  class UserForm {

    constructor(createdCallback){
      this.createdCallback = createdCallback
      this.userForm = document.querySelector(".add-toy-form")
      this.userForm.addEventListener("submit", this.submit.bind(this))
    }

    submit(e){
      e.preventDefault()
      UserAdapter.createUser(this.valuesFromForm(), this.createdCallback)
    }

    valuesFromForm(){
      return {
        name: this.userForm.name.value,
        image: this.userForm.image.value
      }
    }

  }
