const clubs = ["Coding Club", "Drama Society", "Music Club", "Literary Committee"];

window.onload = function () {
  const list = document.getElementById("clubList");
  const select = document.getElementById("clubSelect");

  if (list) {
    clubs.forEach(club => {
      const li = document.createElement("li");
      li.textContent = club;
      list.appendChild(li);
    });
  }

  if (select) {
    clubs.forEach(club => {
      const option = document.createElement("option");
      option.value = club;
      option.text = club;
      select.appendChild(option);
    });

    document.getElementById("regForm").addEventListener("submit", function (e) {
      e.preventDefault();
      alert("Registration Successful!");
    });
  }
};
