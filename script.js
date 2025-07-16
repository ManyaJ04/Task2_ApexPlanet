// Show section based on user choice
function showSection(section) {
  document.getElementById('welcomeModal').style.display = 'none';

  if (section === 'form') {
    document.getElementById('formSection').style.display = 'block';
  } else if (section === 'todo') {
    document.getElementById('todoSection').style.display = 'block';
  }
}

// Contact Form Validation
const form = document.getElementById('contactForm');
const errorBox = document.getElementById('error');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const message = form.message.value.trim();
  const emailRegex = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  if (!name || !email || !message) {
    errorBox.textContent = "Please fill in all fields.";
  } else if (!emailRegex.test(email)) {
    errorBox.textContent = "Enter a valid email address.";
  } else {
    errorBox.textContent = "";
    alert("Thanks for contacting us!");
    form.reset();
  }
});

// Add a new task to the list
function addTask() {
  const input = document.getElementById("taskInput");
  const taskText = input.value.trim();

  if (taskText === "") return;

  const li = document.createElement("li");
  li.textContent = taskText;

  const removeBtn = document.createElement("span");
  removeBtn.textContent = "❌";
  removeBtn.className = "remove";
  removeBtn.onclick = () => li.remove();

  li.appendChild(removeBtn);
  document.getElementById("taskList").appendChild(li);
  input.value = "";
}
