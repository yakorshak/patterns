// Одиночка — это порождающий паттерн проектирования, который гарантирует, что у класса есть только один экземпляр, и предоставляет к нему глобальную точку доступа.

export class ComittedDeadline {
    constructor(data) {
        if (ComittedDeadline.exists) {
            console.log('You already commited!')
            return ComittedDeadline.instance
        }
        ComittedDeadline.instance = this
        ComittedDeadline.exists = true
        this._data = data
    }

    get deadline() {
        return this._data
    }
}





