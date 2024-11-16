document.getElementById("routineForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const formData = new FormData(this);

  fetch("addRoutine.php", {
    method: "POST",
    body: formData,
  })
    .then((response) => response.text())
    .then((data) => {
      alert(data);
      loadRoutines();
    });
});

function loadRoutines() {
  fetch("viewRoutine.php")
    .then((response) => response.json())
    .then((data) => {
      const table = document.getElementById("routineTable");
      table.innerHTML = `
                <tr>
                    <th>Course</th>
                    <th>Faculty</th>
                    <th>Day</th>
                    <th>Time</th>
                    <th>Room</th>
                </tr>
            `;
      data.forEach((routine) => {
        table.innerHTML += `
                    <tr>
                        <td>${routine.course}</td>
                        <td>${routine.faculty}</td>
                        <td>${routine.day}</td>
                        <td>${routine.time}</td>
                        <td>${routine.room}</td>
                    </tr>
                `;
      });
    });
}

// Load routines on page load
document.addEventListener("DOMContentLoaded", loadRoutines);
