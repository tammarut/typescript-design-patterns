// The real power of the command pattern is the ability to create these small little commands that are completely separate(decoupling) from the thing that implements them

interface ICalculatorCommand {
  execute(currentValue: number): number
  undo(currentValue: number): number
}

export class Calculator {
  constructor(public value = 0, private history = []) { }

  executeCommand(command: ICalculatorCommand) {
    this.value = command.execute(this.value)
    this.history.push(command)
  }

  undo() {
    const command = this.history.pop()
    this.value = command.undo(this.value)
  }
}

export class AddCommand implements ICalculatorCommand {
  constructor(public valueToAdd: number) { }

  execute(currentValue: number) {
    return currentValue + this.valueToAdd
  }

  undo(currentValue: number) {
    return currentValue - this.valueToAdd
  }
}

export class SubtractCommand implements ICalculatorCommand {
  constructor(public valueToSubtract: number) { }

  execute(currentValue: number) {
    return currentValue - this.valueToSubtract
  }

  undo(currentValue: number) {
    return currentValue + this.valueToSubtract
  }
}

export class MultiplyCommand implements ICalculatorCommand {
  constructor(public valueToMultiply: number) { }

  execute(currentValue: number) {
    return currentValue * this.valueToMultiply
  }

  undo(currentValue: number) {
    return currentValue / this.valueToMultiply
  }
}

export class DivideCommand implements ICalculatorCommand {
  constructor(public valueToDivide: number) { }

  execute(currentValue: number) {
    return currentValue / this.valueToDivide
  }

  undo(currentValue: number) {
    return currentValue * this.valueToDivide
  }
}

export class AddThenMultiplyCommand implements ICalculatorCommand {
  addCommand: AddCommand
  multiplyCommand: MultiplyCommand

  constructor(valueToAdd: number, valueToMultiply: number) {
    this.addCommand = new AddCommand(valueToAdd)
    this.multiplyCommand = new MultiplyCommand(valueToMultiply)
  }

  public execute(currentValue: number) {
    const valueAfterAdded = this.addCommand.execute(currentValue)
    const valueAfterMultiply = this.multiplyCommand.execute(valueAfterAdded)
    return valueAfterMultiply
  }

  public undo(currentValue: number) {
    const newValue = this.multiplyCommand.undo(currentValue)
    return this.addCommand.undo(newValue)
  }
}
