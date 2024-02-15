let Employees = [
  {
    employeeName: "Ram",
    employeeId: 23,
  },
  {
    employeeName: "Shyam",
    employeeId: 24,
  },
  {
    employeeName: "Ram",
    employeeId: 21,
  },
  {
    employeeName: "Ram",
    employeeId: 25,
  },
  {
    employeeName: "Kisan",
    employeeId: 22,
  },
  {
    employeeName: "Shyam",
    employeeId: 20,
  },
];

const ans = [];
let count = 0;

Employees.map((employee) => {
  if (!ans[employee.employeeName]) {
    ans = employee.employeeName;
    ans["occurance"] = count++;
  }
  else{
    ans.push(employee.employeeName)
  }
});

console.log(ans);
