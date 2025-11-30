// // Ques 1 count how many even numbers in array.
// document.writeln("1, 2, 3, 4, 5, 6, 7, 8, 9, 10 <br>")
// var arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// var count = 0
// for (var i = 0; i < arr1.length; i++) {
//     if (arr1[i] % 2 == 0) {
//         count++
//     }
// }
// document.writeln("Total even number is " + count + "<br>")

// // Ques 2 Remove all duplicate elements from the array.
// var arr = [1, 1, 2, 3, 4, 1, 5, 2, 77, 2, 1]
// for (var i = 0; i < arr.length; i++) {
//     for (var j = i + 1; j < arr.length; j++) {
//         if (arr[i] == arr[j]) {
//             arr.splice(j, 1)
//             j--
//         }
//     }
// }
// document.writeln(arr + "<br>")

// //Ques 3 rating***
// var rating = [1, 2, 3, 5, 3, 4, 5, 4, 5, 3, 2, 5]
// var count = 0
// for (var i = 0; i < rating.length; i++) {
//     if (rating[i] == 5) {
//         count++
//     }
// }
// document.writeln(count + "<br>")

// let temps = [98.4, 101.1, 99.0, 102.5, 100.1];

// document.writeln("Temperature Status: <br>");
// temps.forEach(t => {
//     let status = t > 100.4 ? "Fever <br>" : "Normal <br>";
//     document.writeln(`${t} → ${status}`);
// });








// Q1: Count even numbers
var arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var countEven = 0;

arr1.forEach(n => { 
    if (n % 2 == 0) countEven++; 
});

document.getElementById("q1").textContent =
    arr1.join(", ") + "\nTotal even numbers: " + countEven;


// Q2: Remove duplicates
var arr = [1, 1, 2, 3, 4, 1, 5, 2, 77, 2, 1];

for (var i = 0; i < arr.length; i++) {
    for (var j = i + 1; j < arr.length; j++) {
        if (arr[i] == arr[j]) {
            arr.splice(j, 1);
            j--;
        }
    }
}

document.getElementById("q2").textContent = arr.join(", ");


// Q3: Count ratings equal to 5
var rating = [1, 2, 3, 5, 3, 4, 5, 4, 5, 3, 2, 5];
var fiveCount = rating.filter(r => r == 5).length;

document.getElementById("q3").textContent =
    "Total 5-star ratings: " + fiveCount;


// Temperature status
let temps = [98.4, 101.1, 99.0, 102.5, 100.1];
let tempText = "";

temps.forEach(t => {
    tempText += `${t} → ${t > 100.4 ? "Fever" : "Normal"}\n`;
});

document.getElementById("temp").textContent = tempText;
