const handleSumitForm = async (event) => {
  event.preventDefault();
  try {
    const res = await fetch("/items", {
      method: "POST",
      body: new FormData(form),
    });
    const data = await res.json();
    if (data === "200") window.location.pathname = "/";
  } catch (e) {
    console.error("이미지 업로드에 실패했습니다.");
  }
};
const form = document.getElementById("write-form");
form.addEventListener("submit", handleSumitForm);
