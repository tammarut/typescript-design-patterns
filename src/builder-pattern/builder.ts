class Address {
  constructor(public zip: string, public street: string) {}
}

class User {
  constructor(
    public name: string,
    public age?: number,
    public phone?: string,
    public address?: Address,
  ) {}
}

class UserBuilder {
  user: User

  constructor(name: string) {
    this.user = new User(name)
  }

  setAge(age: number) {
    this.user.age = age
    return this
  }

  setPhone(phone: string) {
    this.user.phone = phone
    return this
  }

  setAddress(address: Address) {
    this.user.address = address
    return this
  }

  _build() {
    return this.user
  }
}

export default UserBuilder
