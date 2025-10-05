function unique(arr) {
    const sortedArray = arr.slice().sort();
    for(let i = 0; i < arr.length; i++){
        if(sortedArray[i] == sortedArray[i + 1]){
            sortedArray.pop();
        }
    }
    return console.log(sortedArray);
}

let strings = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

alert( unique(strings) ); // Hare, Krishna, :-O