
const dataForm = document.getElementById("dataForm");

dataForm.addEventListener("submit", function (event) {

    // PART 2 - TASK 1: Confirmation box
    const confirmation = confirm("are you sure?");

    if (confirmation === false) {
        alert("Data processing cancelled.");
        return;
    } else {
        // Continue processing when the user clicks OK
    }

    // TASK 1: Variables and String Concatenation
    const studentName = document.getElementById("studentName").value;
    const age = document.getElementById("age").value;
    const enrolled = document.getElementById("enrolled").value;

    const studentInfo = "Student Name is " + studentName
        + ", Age is " + age
        + ", Enrolled status is " + enrolled;

    alert(studentInfo);

    // TASK 2: Testing Infinity
    const valueA = Number(document.getElementById("valueA").value);
    const valueB = Number(document.getElementById("valueB").value);

    const divisionResult = valueA / valueB;

    // TASK 3: Testing NaN
    const mathText = document.getElementById("mathText").value;
    const nanResult = mathText / 2;

    // TASK 4: Scientific Notation
    const largeNumber = 4.25e+6;
    const smallNumber = 4.25e-6;

    // PART 2 - TASK 2: Array and for...of loop
    const subjects = ["JavaScript", "DBMS", "Java"];

    let arrayOutput = "";

    for (const subject of subjects) {
        arrayOutput += subject + "<br>";
    }

    // PART 2 - TASK 3: Standard for loop
    let loopOutput = "";

    for (let i = 0; i < valueA; i++) {
        loopOutput += studentName + "<br>";
    }

    // Make user-entered text safe to display as HTML
    function escapeHTML(text) {
        return String(text)
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#39;");
    }

    // TASK 5 and PART 2: Display all results
    // Open the document once because document.write()
    // will replace the original page content.
    document.open();

    document.write("<h1>JavaScript Lab Results</h1>");

    document.write("<h2>Task 2: Division Result</h2>");
    document.write("Value A / Value B = " + divisionResult + "<br>");

    document.write("<h2>Task 3: NaN Result</h2>");
    document.write(escapeHTML(mathText) + " / 2 = " + nanResult + "<br>");

    document.write("<h2>Task 4: Scientific Notation</h2>");
    document.write("Large number: " + largeNumber + "<br>");
    document.write("Small number: " + smallNumber + "<br>");

    document.write("<h2>Part 2 - Task 2: Array Elements</h2>");
    document.write(arrayOutput);

    document.write("<h2>Part 2 - Task 3: Standard For Loop</h2>");
    document.write(loopOutput);

    document.close();
});
