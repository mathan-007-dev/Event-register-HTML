// Make checkboxes behave like radio buttons
function onlyOne(checkbox) {
  let checkboxes = document.getElementsByName('mode');
  checkboxes.forEach((item) => {
    if (item !== checkbox) item.checked = false;
  });
}

// Handle form submission
document.querySelector("form").addEventListener("submit", function(event) {
  event.preventDefault(); // stop default form submission

  // Collect values
  let name = document.querySelector("input[name='name']").value.trim();
  let email = document.querySelector("input[name='email']").value.trim();
  let phone = document.querySelector("input[name='phone']").value.trim();
  let eventSelected = document.querySelector("select[name='event']").value;
  let mode = "";
  document.getElementsByName("mode").forEach((item) => {
    if (item.checked) mode = item.value;
  });
  let submit = document.querySelector("input[name='Submit']").checked;
  

  // Validation
  if (name === "" || email === "" || phone === "") {
    alert("Please fill in Name, Email, and Phone.");
    return;
  }
  if (!submit) {
    alert("Please confirm that your details are correct.");
    return;
  }

  // Add participant to table
  let table = document.querySelector("table tbody");
  let newRow = document.createElement("tr");
  newRow.innerHTML = `
    <td>${name}</td>
    <td>${email}</td>
    <td>${phone}</td>
    <td>${eventSelected}</td>
    <td>${mode}</td>
  `;
  table.appendChild(newRow);

  // Reset form
  document.querySelector("form").reset();
});

// Footer checkbox interaction
document.getElementById("newsletter").addEventListener("change", function() {
  if (this.checked) {
    alert("Thank you for subscribing to our newsletter!");
  } else {
    alert("You have unsubscribed from the newsletter.");
  }
});