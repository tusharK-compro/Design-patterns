class Numbers {
    constructor(...items) {
      this.id = 1
    }
  }
const withValidator = (obj, field, validate) => {
    return new Proxy(obj, {
        set(target, prop, newValue) {
        if (prop === field) {
            const errMsg = validate(newValue)
            if (errMsg) throw new TypeError(errMsg)
            target[prop] = newValue
        }
        },
    })
}

let mello = new Numbers(1, 2, 3)

mello = withValidator(mello, 'id', (newId) => {
if (typeof newId !== 'number') {
    return `The id ${newId} is not a number. Received ${typeof newId} instead`
}
})

mello.id = ''