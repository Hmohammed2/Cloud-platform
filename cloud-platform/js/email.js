const BACKEND = "http://localhost:7777";
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#contact form");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch(`${BACKEND}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        alert("✅ Your request has been sent successfully!");
        form.reset();
      } else {
        const errorData = await response.json();
        alert("❌ Error: " + (errorData.error || "Something went wrong"));
      }
    } catch (err) {
      console.error("⚠️ Network or server error:", err);
      alert("⚠️ Unable to send your request right now.");
    }
  });
});
