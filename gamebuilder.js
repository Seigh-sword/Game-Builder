document.addEventListener("DOMContentLoaded", () => {
  const addButton = document.getElementById("addButton");
  const mainDropdown = document.getElementById("mainDropdown");
  const objectDropdown = document.getElementById("objectDropdown");
  const behaviourPanel = document.getElementById("behaviourPanel");

  // Toggle [+] dropdown
  addButton.onclick = () => {
    mainDropdown.classList.toggle("hidden");
    objectDropdown.classList.add("hidden");
    behaviourPanel.classList.add("hidden");
  };

  // Main dropdown options
  document.querySelectorAll('#mainDropdown .dropdown-option').forEach(option => {
    option.onclick = () => {
      const action = option.dataset.action;
      mainDropdown.classList.add("hidden");

      if (action === "behaviour") {
        behaviourPanel.classList.remove("hidden");
      } else if (action === "object") {
        objectDropdown.classList.remove("hidden");
      } else {
        alert(`Clicked on: ${action} (coming soon!)`);
      }
    };
  });

  // Object dropdown logic
  document.querySelectorAll('#objectDropdown .dropdown-option').forEach(obj => {
    obj.onclick = () => {
      const objectType = obj.dataset.object;
      alert(`You selected: ${objectType} (coming soon!)`);
      objectDropdown.classList.add("hidden");
    };
  });
});
