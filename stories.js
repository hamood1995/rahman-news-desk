document.addEventListener("DOMContentLoaded", () => {
  const list = document.getElementById("storiesList");

  if (!window.RAHMAN_STORIES || RAHMAN_STORIES.length === 0) {
    list.innerHTML = "<p>No stories published yet.</p>";
    return;
  }

  list.innerHTML = "";

  RAHMAN_STORIES.forEach(story => {
    list.innerHTML += `
      <div style="margin-bottom:16px">
        <b>${story.date} · ${story.borough}</b><br>
        <a href="${story.href}">${story.title}</a>
      </div>
      <div style="height:1px;background:var(--border);margin-bottom:16px"></div>
    `;
  });
});
