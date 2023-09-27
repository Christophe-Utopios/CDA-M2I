var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
console.log("les decorateurs");
function simpleDecoratorClass(target) {
    target.prototype.id = Math.random();
}
let UserWithDecorator = class UserWithDecorator {
    constructor(name) {
        this.name = name;
    }
};
UserWithDecorator = __decorate([
    simpleDecoratorClass
], UserWithDecorator);
const user = new UserWithDecorator("toto");
console.log(user);
//@ts-ignore
console.log(user.id);
console.clear();
function demoDecoratorMethod(...args) {
    console.log(args);
    return function (target, propertyKey, descriptor) {
        console.log(target);
        console.log(propertyKey);
        console.log(descriptor.value);
        console.log(new Date());
        const originalMethod = descriptor.value;
        descriptor.value = (...args) => {
            const resultMethod = originalMethod.apply(target, args);
            return resultMethod;
        };
    };
}
class Calculatrice {
    addition(a, b) {
        return a + b;
    }
}
__decorate([
    demoDecoratorMethod("string", 42)
], Calculatrice.prototype, "addition", null);
const maCalculatrice = new Calculatrice();
console.log(maCalculatrice.addition(1, 2));
