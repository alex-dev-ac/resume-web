let getAbout = document.getElementById("getAbout");
let getResume = document.getElementById("getResume");
let getContact = document.getElementById("getContact");

// Sections
let about = document.getElementById("about");
let resume = document.getElementById("resume");
let contact = document.getElementById("contact");

function removeClass() {
    // Links
    getAbout.classList.remove('selected');
    getResume.classList.remove('selected');
    getContact.classList.remove('selected');
    // Sections
    about.classList.remove('view');
    resume.classList.remove('view');
    contact.classList.remove('view');
}

getAbout.addEventListener('click', function (e) {
    if (window.innerWidth > 1040) {
        e.preventDefault();
        removeClass();
        about.classList.add('view');
        getAbout.classList.add('selected');
    }

});
getResume.addEventListener('click', function (e) {
    if (window.innerWidth > 1040) {
        e.preventDefault();
        removeClass();
        resume.classList.add('view');
        getResume.classList.add('selected');
    }
})
getContact.addEventListener('click', function (e) {
    if (window.innerWidth > 1040) {
        e.preventDefault();
        removeClass();
        contact.classList.add('view');
        getContact.classList.add('selected');
    }
})

/*tabs */
const tabs = document.querySelectorAll(".tabs li");
const contents = document.querySelectorAll(".tab-content");

function showTab(tabId) {
  contents.forEach((content) => (content.style.display = "none"));
  document.getElementById(tabId).style.display = "block";

  tabs.forEach((tab) => tab.classList.remove("active"));
  document.querySelector(`[data-tab="${tabId}"]`).classList.add("active");
}

tabs.forEach((tab) => {
  tab.addEventListener("click", function () {
    showTab(this.getAttribute("data-tab"));
  });
});

// Hiển thị tab đầu tiên khi tải trang
showTab("tab1");
