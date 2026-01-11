document.addEventListener("DOMContentLoaded", () => {
  const list = document.getElementById("storiesList");

  // Safety check
  if (!list) {
    console.error("storiesList element not found");
    return;
  }

  // If no stories exist
  if (!window.RAHMAN_STORIES || RAHMAN_STORIES.length === 0) {
    list.innerHTML = `
      <p style="color:var(--muted)">
        No stories published yet.
      </p>
    `;
    return;
  }

  // Clear loading text
  list.innerHTML = "";

  // Render stories
  RAHMAN_STORIES.forEach(story => {
    list.innerHTML += `
      <div style="margin-bottom:18px">
        <b>${story.date} · ${story.borough}</b><br>
        <a href="${story.href}">${story.title}</a>
      </div>
      <div style="height:1px;background:var(--border);margin-bottom:14px"></div>
    `;
  });
});
