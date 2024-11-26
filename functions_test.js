console.log((x => x*10)(5));
console.log((() => "testing")(5));
console.log(function name(x) {
    return x**2;
}(3));

const test_fun = (a,b) => a + b

console.log(test_fun(3,7));
console.log((z => z*7)(4));

const test_fun2 = (a,b) => {
                       var c = a + b;
                       return c*2;
}

console.log(test_fun2(3,7));





