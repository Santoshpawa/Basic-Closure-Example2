function outerfunction(){
    message="Hello";
    return function innerfunction(){
        return `${message} World!!`
    }
}

let msg=outerfunction();
console.log(msg())