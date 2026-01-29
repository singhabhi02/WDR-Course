function getTotal(marks) {
  return marks;
}

function calculatePercentage(total) {
  return (total / 100) * 100;
}

const getGrade = (percentage) => {
  if (percentage >= 90) return "A";
  else if (percentage >= 75) return "B";
  else if (percentage >= 50) return "C";
  else return "Fail";
};

function displayGrade(name, total, percentage, grade) {
  let resultText = `
    Name: ${name} <br>
    Total: ${total} <br>
    Percentage: ${percentage}% <br>
    Grade: ${grade}`;

  document.getElementById("output").innerHTML = resultText;
}

function calculateResult() {
  let name = document.getElementById("name").value;
  let marks = document.getElementById("marks").value;
  let total = getTotal(marks);
  let percentage = calculatePercentage(total);
  let grade = getGrade(percentage);

  displayGrade(name, total, percentage, grade);
}
