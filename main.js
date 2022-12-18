const mainTitles = document.querySelectorAll(".panel >.header");
console.log(mainTitles);

mainTitles.forEach((title) => {
  title.addEventListener("click", () => {
    toggleAccodion(title);
  });
});

function toggleAccodion(title) {
  const icon = title.querySelector(".icon");
  const body = title.nextElementSibling;

  if (title.classList.contains("active")) {
    title.classList.remove("active");
    icon.classList.add("rotate");
    body.style.maxHeight = 0;
  } else {
    body.style.maxHeight = body.scrollHeight + "px";
    icon.classList.remove("rotate");

    //close all when one is active
    const mainPanel =
      title.parentElement.parentElement.querySelectorAll(".active");
    mainPanel.forEach((item) => {
      const body = item.nextElementSibling;
      const icon = item.querySelector(".icon");
      item.classList.remove("active");
      icon.classList.remove("rotate");
      body.style.maxHeight = 0;
    });
  }

  title.classList.toggle("active");
  icon.classList.add("rotate");
}
