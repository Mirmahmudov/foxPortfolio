document.querySelectorAll(".accordion-header").forEach((header) => {
  header.addEventListener("click", () => {
    const content = header.nextElementSibling;
    const isActive = header.classList.contains("active");

    // Close all open accordions
    document.querySelectorAll(".accordion-header").forEach((item) => {
      item.classList.remove("active");
      item.nextElementSibling.style.display = "none";
    });

    // Toggle current accordion
    if (!isActive) {
      header.classList.add("active");
      content.style.display = "block";
    }
  });
});
