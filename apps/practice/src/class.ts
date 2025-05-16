const executeClass = () => {
  class Counter {
    private _count: number
    constructor() {
      this._count = 0
    }

    get count() {
      return this._count
    }

    countUp() {
      this._count++
    }
  }

  const tenCountUp = (counter: Counter) => {
    for (let i = 0; i < 10; i++) {
      counter.countUp()
    }
  }

  const counter = new Counter()
  console.log(`before: ${counter.count}`)
  tenCountUp(counter)
  console.log(`after: ${counter.count}`)
}

export default executeClass
