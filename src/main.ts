import UserBuilder from './builder-pattern/builder'
import { printUser } from './null-object-pattern/null-object'
import { logFirstImplementation } from './singleton-pattern/firstUse'
import { logSecondImplementation } from './singleton-pattern/secondUse'
import { AddThenMultiplyCommand, Calculator } from './command-pattern/command';
import { getUsers, getUserPosts } from './facade-pattern/facade'

// 🔥Null Object pattern
printUser(1)
printUser(2)
printUser(3)

// 🔥Builder pattern
const userBuilder = new UserBuilder('John')
userBuilder.setAge(29)
userBuilder.setPhone('0909090')
userBuilder.setAddress({ zip: '15078', street: 'Siam' })
const user = userBuilder._build()
console.log(user)

// 🔥Singleton pattern
logFirstImplementation()
logSecondImplementation()

// 🔥Facade pattern
getUsers().then(users => {
  users.forEach(user => {
    console.log(user.name)
    getUserPosts(user.id).then(posts => {
      console.log(posts.length)
    })
  });
})

// 🔥Command pattern
// const addCommand = new AddCommand(10)
// const multiplyCommand = new MultiplyCommand(2)
const calculator = new Calculator()
// console.log('Start:', calculator.value)
// calculator.executeCommand(addCommand)
// console.log('After added:', calculator.value)
// calculator.executeCommand(multiplyCommand)
// console.log('After multiplied:', calculator.value)
// calculator.undo()
// console.log('Undo last command:', calculator.value)

console.log('Start:', calculator.value)
calculator.executeCommand(new AddThenMultiplyCommand(10, 2))
console.log('After Add then multiply:', calculator.value)
calculator.undo()
console.log('Undo last command:', calculator.value)
