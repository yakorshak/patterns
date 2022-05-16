// Прототип — это порождающий паттерн проектирования, который позволяет копировать объекты, не вдаваясь в подробности их реализации.

const car = {
    wheels: 4,

    init() {
        console.log(`I have ${this.wheels} wheels and my owner is ${this.owner}`)
    }
}

export const carWithOwner = Object.create(car, {
    owner: {
        value: 'Andrew'
    }
})