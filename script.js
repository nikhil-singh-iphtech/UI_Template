



// const arr = [1, 2, , [4, ]];
// const result = [];

// for (let i = 0; i < arr.length; i++) {
//   if (Array.isArray(arr[i])) {
//     for (let j = 0; j < arr[i].length; j++) {
//       result.push(arr[i][j]);
//     }
//   } else {
//     result.push(arr[i]);
//   }
// }

// console.log(result);
// console.log(result.length);

// const arr = ["a", "b", "c", "d", "e", "f"];


// arr.splice(3, 1);
// arr.splice(2, 1); 
// arr.splice(0, 1); 

// console.log(arr);


// const arr=[]

// console.log(arr)

// arr[1]=10;
// arr[4]=15;

// console.log(arr.length)
// console.log(arr)

// let temp=arr[1]
// arr[1]=arr[4];
// arr[4]=temp;

// console.log(arr.length)
// console.log(arr)




// let students = [
//   { id: 1, name: "Rahul" },
//   { id: 2, name: "Priya" },
//   { id: 1, name: "Amit" },
//   { id: 3, name: "Sneha" },
//   { id: 2, name: "Rohit" }
// ];


// let uniqueStudents = [
//   ...new Map(students.map(student => [student.id, student])).values()
// ];

// console.log(uniqueStudents);

// let setA = new Set([1, 2, 3, 4, 5]);
// let setB = new Set([3, 4, 5, 6, 7]);

// let common = [...setA].filter(item => setB.has(item));

// console.log(common); 


let loans = [
  { id: 101, status: "approved", amt: 15000 },
  { id: 102, status: "pending", amt: 8000 },
  { id: 103, status: "rejected", amt: 4000 },
  { id: 104, status: "approved", amt: 22000 },
  { id: 105, status: "pending", amt: 12000 }
];

let groupedByStatus = loans.reduce((acc, loan) => {
  let key = loan.status;

  if (!acc[key]) {
    acc[key] = [];
  }

  acc[key].push(loan);
  return acc;
}, {});

console.log(groupedByStatus);

