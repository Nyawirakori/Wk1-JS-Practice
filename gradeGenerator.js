//Generates student grade based on their input
function studentGradeGenerator() {
    const marks = parseFloat(prompt("Enter student marks (0-100):"));//prompts user for grade

    if (marks < 0 || marks > 100 || isNaN(marks)) {
        return "Invalid marks! Please enter a valid value between 0 and 100.";
    }

    let grade;
    //switch case to loop through the grades
    switch (true) {
        case marks > 79:
            grade = "A";
            break;
        case marks >= 60 && marks <= 79:
            grade = "B";
            break;
        case marks >= 50 && marks <= 59:
            grade = "C";
            break;
        case marks >= 40 && marks <= 49:
            grade = "D";
            break;
        default:
            grade = "E";
    }
    return `Your grade is: ${grade}`;
}

//testing our code
console.log(studentGradeGenerator());