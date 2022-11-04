const arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
const main = [];
const side = [];

const n = arr.length;

for(let i = 0; i < n; i++) {
    console.log(arr[i]);
}

for(let i = 0; i < n; i++) {
    main[i] = arr[i][i];
}

for(let i = 0; i < n; i++) {
    side[i] = arr[i][n - 1 - i];
}

console.log("главная диагональ", main);
console.log("побочная диагональ", side);

// Нахождение правильной и обратной диагонали