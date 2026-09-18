class Enclosure {
}

class Animal extends Enclosure {
    constructor() {
        super()
    }
    
    static makeSound = `Издает звук...`;

    feed() {
        return `Вы покормили`;
    }
}

class Mammal extends Animal {
    #age;
    constructor(name, age) {
        super();
        this.name = name;
        this.age = age;
    }

    get age() {
        return this.#age;
    }

    set age(value) {
        if (value < 0) {
            throw new Error('Возраст не может быть отрицательным');
        }
        return this.#age = value;
    }

    feed(item, q = 1) {
        if (q < 0) {
            throw new Error('Количество не может быть отрицательным');
        }
        return `${super.feed()} Mammal с помощью: ${item}, ${q} раз/a!`;
    }
}

class Bird extends Animal {
    #age;
    constructor(name, age) {
        super();
        this.name = name;
        this.age = age;
    }

    get age() {
        return this.#age;
    }

    set age(value) {
        if (value < 0) {
            throw new Error('Возраст не может быть отрицательным');
        }
        return this.#age = value;
    }

    feed(item, q = 1) {
        if (q < 0) {
            throw new Error('Количество не может быть отрицательным');
        }
        return `${super.feed()} Bird с помощью: ${item}, ${q} раз/a!`;
    }
}

class Reptile extends Animal {
    #age;
    constructor(name, age) {
        super();
        this.name = name;
        this.age = age;
    }

    get age() {
        return this.#age;
    }

    set age(value) {
        if (value < 0) {
            throw new Error('Возраст не может быть отрицательным');
        }
        return this.#age = value;
    }

    feed(item, q = 1) {
        if (q < 0) {
            throw new Error('Количество не может быть отрицательным');
        }
        return `${super.feed()} Reptile с помощью: ${item}, ${q} раз/a!`;
    }
}

const mammal = new Mammal('Васян', 1)
const bird = new Bird()
const reptile = new Reptile()

console.log(mammal)

console.log(mammal.feed('яблоко'))
console.log(bird.feed('банан', 2))
console.log(reptile.feed('мясо', 3))

console.log(Bird.makeSound)

