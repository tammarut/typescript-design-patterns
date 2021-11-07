class User {
  constructor(public id: number, public name: string) { }

  hasAccess() {
    return this.name === 'Arima'
  }
}

class NullUser {
  id = -1
  name = 'Guest'

  hasAccess() {
    return false
  }
}

const users = [
  new User(1, 'Arima'),
  new User(2, 'John')
]

function getUser(id: number) {
  const user = users.find((user) => user.id === id)
  if (!user) {
    return new NullUser()
  }

  return user
}

export function printUser(id: number) {
  const user = getUser(id)

  console.log('⭐️Welcome', user.name)

  if (user.hasAccess()) {
    console.log('You have access')
  } else {
    console.log('You are not allowed here!')
  }

}
