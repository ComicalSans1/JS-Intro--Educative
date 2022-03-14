const students = [
    {
      name: "Anna",
      sex: "f",
      grades: [4.5, 3.5, 4]
    },
    {
      name: "Dennis",
      sex: "m",
      country: "Germany",
      grades: [5, 1.5, 4]
    },
    {
      name: "Martha",
      sex: "f",
      grades: [5, 4, 2.5, 3]
    },
    {
      name: "Brock",
      sex: "m",
      grades: [4, 3, 2]
    }
  ];

function studentResult(students){
    const FemaleStudents = students.filter(x => x.sex == "f");
    const FemScores = FemaleStudents.map(x => x.grades);
    const aveScores = FemScores.map(x => x.reduce((acc, x) => acc + x) / x.length)
    return aveScores;
}

console.log(studentResult(students));