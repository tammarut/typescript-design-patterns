import UserBuilder from './builder-pattern/builder'
import { printUser } from './null-object-pattern/null-object'
import { logFirstImplementation } from './singleton-pattern/firstUse'
import { logSecondImplementation } from './singleton-pattern/secondUse'

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
