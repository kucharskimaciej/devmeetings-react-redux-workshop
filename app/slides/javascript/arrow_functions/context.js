const user = {
    name: 'John',
    greeting() {
        console.log(this.name)
    },
    delayedGreeting() {
        setTimeout(function() {
            console.log(this.name)
        });
    }
}

user.greeting() // "John"
user.delayedGreeting() // error! `this` is undefined

user.delayedGreeting = function() {
    setTimeout(() => {
        console.log(this.name)
    })
}

user.delayedGreeting() // "John"