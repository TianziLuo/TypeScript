interface Animal {
    name: string;
    color?: string; // optional
    isFurry?: boolean; // optional
    makeSound(): void;
}

class Dog implements Animal {
    name: string;
    color?: string;

    constructor(name:string, color ?:string){
        this.name = name;
        this.color = color;
    
    }

    makeSound(): void {
        console.log(`${this.name} barks!`)
    }
}

const MyDog = new Dog('cg','brown');

export default MyDog

