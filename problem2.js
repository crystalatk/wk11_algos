'use strict';

// 2. Given a 2D array of 1s and 0s, count the number of “islands of 1s” (e.g. groups of 1s)
// eg [0,0,1,1,0,1,0,1,0,1,0,0,0,0,1,1,1,1,1,0,1,0,1,1] => 7

function countIslands(arr) {
    let count = 0;
    for (let i = 0; i < arr.length-1; i++) {
        if (arr[i] === 1) {
            if (arr[i] !== arr[i+1]) {
                count += 1;
            }
            if (i === arr.length-2) {
                count += 1;
            }
        };
    };
    return count;
};


const arr1 = [0,0,1,1,0,1,0,1,0,1,0,0,0,0,1,1,1,1,1,0,1,0,1,1];
console.log(countIslands(arr1));

// function countIsland(arr,num) {
//     let count = 0;

//     for (let i = 0; i < arr.length ; i++) {
        
//         if (arr[i] === num && arr[i+1] !== num) {
//             count += 1;
//         }
//     }
//     return count;
// }
// const arr1 = [0,0,1,1,0,1,0,1,0,1,0,0,0,0,1,1,1,1,1,0,1,0,1,1];

// console.log(countIsland(arr1,1));