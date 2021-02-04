export default function toggleAnswer(button) {
  button.addEventListener("click", () => {
    const answer = button.parentNode.querySelector(".answer");
    answer.classList.toggle("hidden");
    button.innerText = answer.classList.contains("hidden")
      ? "Show Answer"
      : "Hide Answer";
  });
}

export function toggleBookmark(bookmark) {
  bookmark.addEventListener("click", () => {
    bookmark.classList.toggle("fas");
    bookmark.classList.toggle("active");
  });
}
