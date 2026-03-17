// Add your API endpoint here
const API_ENDPOINT = "PASTE_YOUR_API_ENDPOINT_HERE";

// POST: Save student data
document.getElementById("savestudent").onclick = async function () {

    const inputData = {
        studentid: document.getElementById("studentid").value,
        name: document.getElementById("name").value,
        class: document.getElementById("class").value,
        age: document.getElementById("age").value
    };

    try {
        const response = await fetch(API_ENDPOINT, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(inputData)
        });

        const data = await response.json();

        document.getElementById("studentSaved").innerText = "Student Data Saved!";

    } catch (error) {
        alert("Error saving student data.");
    }
};


// GET: Retrieve student data
document.getElementById("getstudents").onclick = async function () {

    try {
        const response = await fetch(API_ENDPOINT);
        const students = await response.json();

        const table = document.getElementById("studentTable");

        // Clear old rows except header
        while (table.rows.length > 1) {
            table.deleteRow(1);
        }

        students.forEach(data => {
            const row = table.insertRow();

            row.insertCell(0).innerText = data.studentid;
            row.insertCell(1).innerText = data.name;
            row.insertCell(2).innerText = data.class;
            row.insertCell(3).innerText = data.age;
        });

    } catch (error) {
        alert("Error retrieving student data.");
    }
};
