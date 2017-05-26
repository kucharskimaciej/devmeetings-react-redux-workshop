class Shape {
    type = 'shape'

    constructor(description) {
        this.description = description
    }

    draw() {
        console.log(`${this.type}: ${this.description}`)
    }

    dimensions() {
        console.log('None')
    }
}

const myShape = new Shape('random blob');
myShape.draw() // 'shape: random blob'
myShape.dimensions() // 'None'

class Circle extends Shape {
    type = 'circle'

    constructor(description, radius) {
        super(description);
        this.radius = radius;
    }

    dimensions() {
        console.log(`Radius: ${this.radius}`)
    }
}

const circle = new Circle('Round!', 10);
circle.draw() // 'circle: Round!'
circle.dimensions() // 'Radius: 10'
