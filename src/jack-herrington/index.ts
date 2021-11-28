// Observer pattern
type Listener<EventType> = (event: EventType) => void
type PubSubType<EventType> = {
  publish(event: EventType): void
  subscribe(listener: Listener<EventType>): () => void
}

function createObserver<EventType>(): PubSubType<EventType> {
  let listeners: Listener<EventType>[] = []

  return {
    publish: (event: EventType) => {
      listeners.forEach((currentListener) => currentListener(event))
    },
    subscribe: (listener: Listener<EventType>): (() => void) => {
      listeners.push(listener)
      return () => {
        listeners = listeners.filter(
          (currentListener) => currentListener !== listener,
        )
      }
    },
  }
}

interface BeforeSetEvent<T> {
  value: T
  newValue: T
}

interface AfterSetEvent<T> {
  value: T
}

export interface Pokemon {
  id: string
  attack: number
  defense: number
}

interface BaseRecord {
  id: string
}

interface Database<T extends BaseRecord> {
  set(newValue: T): void
  get(id: string): T

  onBeforeAdd(listener: Listener<BeforeSetEvent<T>>): () => void
  onAfterAdd(listener: Listener<AfterSetEvent<T>>): () => void
}

// Factory pattern
export function createDatabase<T extends BaseRecord>() {
  class InMemoryDatabase implements Database<T> {
    private db: Record<string, T> = {}

    // Singleton pattern (C++ style)
    static instance = new InMemoryDatabase()
    private beforeAddListeners = createObserver<BeforeSetEvent<T>>()
    private afterAddListeners = createObserver<AfterSetEvent<T>>()
    private constructor() {}

    set(newValue: T): void {
      this.beforeAddListeners.publish({ newValue, value: this.db[newValue.id] })
      this.db[newValue.id] = newValue
      this.afterAddListeners.publish({ value: newValue })
    }

    get(id: string): T | undefined {
      return this.db[id]
    }

    onBeforeAdd(listener: Listener<BeforeSetEvent<T>>): () => void {
      return this.beforeAddListeners.subscribe(listener)
    }

    onAfterAdd(listener: Listener<AfterSetEvent<T>>): () => void {
      return this.afterAddListeners.subscribe(listener)
    }
  }

  // Singleton pattern
  // const InMemoryInstance = new InMemoryDatabase()
  // return InMemoryInstance
  return InMemoryDatabase
}
