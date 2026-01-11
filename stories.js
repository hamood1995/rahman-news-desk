document.addEventListener("DOMContentLoaded", () => {
  const list = document.getElementById("storiesList");
  if (!list) return;

  if (!window.RAHMAN_STORIES || window.RAHMAN_STORIES.length === 0) {
    list.innerHTML = "<p>No stories published yet.</p>";
    return;
  }

  list.innerHTML = "";

  window.RAHMAN_STORIES.forEach(story => {
    const row = document.createElement("div");
    row.style.marginBottom = "18px";

    row.innerHTML = `
      <a href="${story.href}" style="text-decoration:none;color:inherit">
        <div style="display:flex;gap:12px;align-items:center">
          <img src="${story.thumb}"
               style="width:90px;height:65px;object-fit:cover;border-radius:6px">
          <div>
            <strong>${story.title}</strong><br>
            <small>${story.date} • ${story.borough}</small>
          </div>
        </div>
      </a>
    `;

    list.appendChild(row);
  });
});
