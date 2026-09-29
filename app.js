// 1. Define the Student class
class Student {
  constructor(name, marks) {
    this.name = name;
    this.marks = marks;
  }

  // Grading scale based on typical lecture criteria
  getGrade() {
    if (this.marks >= 90) return 'A';
    if (this.marks >= 80) return 'B';
    if (this.marks >= 50) return 'C';
    return 'F';
  }
}

// 2. Create an array of 6 Student instances
const students = [
  new Student("Ali", 72),
  new Student("Bano", 88),
  new Student("Charlie", 45),
  new Student("Dawood", 91),
  new Student("Esha", 60),
  new Student("Fahad", 38)
];

// 3. Display roster using a ternary operator for the Pass/Fail label
console.log("--- Student Roster ---");
students.forEach(student => {
  // One-line ternary statement for evaluation label
  const status = student.marks >= 50 ? "Pass" : "Fail";
  console.log(`Student: ${student.name} | Marks: ${student.marks} | Grade: ${student.getGrade()} | Status: ${status}`);
});

// 4. Use filter() and map() to extract passing student names
const passingNames = students
  .filter(student => student.marks >= 50)
  .map(student => student.name);

console.log("\n--- Passing Students ---");
console.log("Passing Names:", passingNames);

// 5. Use reduce() to calculate the class average
const totalMarks = students.reduce((sum, student) => sum + student.marks, 0);
const classAverage = totalMarks / students.length;

console.log("\n--- Class Metrics ---");
console.log("Class Average:", classAverage.toFixed(2));

// 6. Use sort() + array destructuring to extract the top scorer's name
// [...students] creates a shallow copy so the original array order is not mutated
const [topScorer] = [...students].sort((a, b) => b.marks - a.marks);

console.log("Top Scorer:", topScorer.name, `(with ${topScorer.marks} marks)`);



