class User {
  constructor(data) {
    this.id = data.id;
    this.name = data.name;
    this.current_city = data.current_city;
    User.all.push(this);
  }

  renderListItem() {
    return `
    <li>
      <h3>${this.name}
        <button data-id=${this.id}>edit</button>
      </h3>
    </li>`;
  }
}

User.all = [];
