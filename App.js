let arr = [1, 2, 3, 4, 6, 7, 8, 9];
document.getElementById('heading1').innerHTML = arr; //Print original array
let possition = 4; // Desired position

/* Apply for loop to array such that 
   1. reduce index of array to desired possition
   2. assign lower value to upper index of array till desired possition 
   3. when index = possition assign the desired value to that possition
 */
for (let index = (arr.length - 1); index >= possition; index--) {
    arr[index + 1] = arr[index];
    if (index == possition) {
        arr[index] = 5;
    }
}

document.getElementById('heading2').innerHTML = arr;