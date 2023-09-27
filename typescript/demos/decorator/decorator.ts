console.log("les decorateurs")

function simpleDecoratorClass(target: Function): void {
    target.prototype.id = Math.random();
}


@simpleDecoratorClass
class UserWithDecorator {
    constructor(public name: string){

    }
}

const user = new UserWithDecorator("toto")

console.log(user)

//@ts-ignore
console.log(user.id)

console.clear()

function demoDecoratorMethod(...args: any): MethodDecorator {
    console.log(args)
    return function(target: Object, propertyKey: string ,descriptor: PropertyDescriptor){
        console.log(target)
        console.log(propertyKey)
        console.log(descriptor.value)
        console.log(new Date())
        const originalMethod = descriptor.value;
        descriptor.value= (...args: any) => {
            const resultMethod = originalMethod.apply(target, args);
            return resultMethod
        }
    }
}

class Calculatrice {

    @demoDecoratorMethod("string",42)
    addition(a: number,b: number){
        return a + b;
    }
}

const maCalculatrice = new Calculatrice()

console.log(maCalculatrice.addition(1,2))