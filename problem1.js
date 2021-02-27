'use strict';

// 1. Write a function that multiplies two numbers (provided as arguments) without using *

function findProduct(num1, num2) {
    let product = 0;
    for (let i = 0; i < num2; i++) {
        product += num1;
    }
    return product;
};

console.log(findProduct(5, 2));
