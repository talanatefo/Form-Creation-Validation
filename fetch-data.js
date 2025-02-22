document.addEventListener("DOMContentLoaded", fetchUserData);
async function fetchUserData() {
  const apiUrl = "https://jsonplaceholder.typicode.com/users";
  const dataContainer = document.getElementById("api-data");
  try {
    const response = await fetch(apiUrl);

    if (response.ok) {
      const users = await response.json();
      dataContainer.innerHTML = "";
      const userList = document.createElement("ul");
      users.forEach((user) => {
        let li = document.createElement("li");
        li.textContent = user.name;
        userList.appendChild(li);
        dataContainer.appendChild(userList);
      });
    } else {
      console.log("response not okay");
    }
  } catch (error) {
    console.error("Fetch error");
    dataContainer.innerHTML = "Failed to load user data.";
  }
}
