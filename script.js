
const userProfile = {
    name: "Zainab",
    birthYear: 2005,
    isDeveloper: false,
    hobbies: ["Reading", "Coding", "Walking"]
};

const profileForm = document.getElementById("profileForm");
const usernameInput = document.getElementById("username");
const birthYearInput = document.getElementById("birthYear");
const itemList = document.getElementById("itemList");
const newItemInput = document.getElementById("newItem");

function displayProfile() {
    const currentYear = new Date().getFullYear();
    const age = currentYear - userProfile.birthYear;

    document.getElementById("displayName").textContent = userProfile.name;
    document.getElementById("displayBirthYear").textContent = userProfile.birthYear;
    document.getElementById("displayAge").textContent = age;
    document.getElementById("displayDeveloper").textContent =
        userProfile.isDeveloper ? "Yes" : "No";
    document.getElementById("displayHobbies").textContent =
        userProfile.hobbies.join(", ");
    document.getElementById("hobbiesCount").textContent =
        userProfile.hobbies.length;
}

function updateHobbies() {
    userProfile.hobbies = Array.from(itemList.querySelectorAll("li"))
        .map(item => item.textContent);

    displayProfile();
}

profileForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const username = usernameInput.value.trim();
    const birthYear = Number(birthYearInput.value);
    const currentYear = new Date().getFullYear();

    if (username === "") {
        alert("Please enter your username.");
        return;
    }

    if (!birthYearInput.value || birthYear < 1900 || birthYear > currentYear) {
        alert("Please enter a valid birth year.");
        return;
    }

    userProfile.name = username;
    userProfile.birthYear = birthYear;

    displayProfile();
});

document.getElementById("addItemBtn").addEventListener("click", function() {
    const itemText = newItemInput.value.trim();

    if (itemText === "") {
        alert("Please enter a hobby or task.");
        return;
    }

    const newItem = document.createElement("li");
    newItem.textContent = itemText;
    itemList.appendChild(newItem);

    newItemInput.value = "";
    updateHobbies();
});

document.getElementById("removeItemBtn").addEventListener("click", function() {
    if (itemList.lastElementChild) {
        itemList.lastElementChild.remove();
        updateHobbies();
    } else {
        alert("There are no items to remove.");
    }
});

updateHobbies();
displayProfile();
