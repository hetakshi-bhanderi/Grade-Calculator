
function calculateMarks() {
    let subjects = ["Physics", "Maths", "Chemistry"];
    let total = 0;
    let count = 0;
    let marks = [];

    // Loop to get user inputs
    for (let i = 0; i < subjects.length; i++) {
        let mark = document.getElementById(subjects[i]).value.trim();
        mark = Number(mark);

        // Stop calculation if an invalid mark is found
        if (isNaN(mark) || mark < 0 || mark > 100) {
            alert(`Invalid input for ${subjects[i]}. Please enter a number between 0 and 100.`);
            return;
        }

        // marks.push(mark);
        total += mark;
        count++;
    }

    // If no valid marks entered, stop execution
    if (count === 0) {
        document.getElementById("result").innerHTML = "Please enter valid marks!";
        return;
    }

    let average = total / count;
    let grade;

    // Assigning grades using if/else
    if (average >= 90) {
        grade = "A";
    } else if (average >= 80) {
        grade = "B";
    } else if (average >= 70) {
        grade = "C";
    } else if (average >= 60) {
        grade = "D";
    } else {
        grade = "F";
    }

    let status = grade === "F" ? "Fail" : "Pass";

    // Display the result
    document.getElementById("result").innerHTML = `
        <h3>Result</h3>
        <p>Total Marks: ${total}</p>
        <p>Average: ${average.toFixed(2)}</p>
        <p>Grade: ${grade}</p>
        <p>Status: ${status}</p>
    `;

}
