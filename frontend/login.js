const form = document.querySelector("#login-form");

const handleSumit = async (event) => {
  event.preventDefault();
  const formData = new FormData(form);
  const sha256Password = sha256(formData.get("password"));

  formData.set("password", sha256Password);

  const res = await fetch("/login", {
    method: "POST",
    body: formData,
  });
  const data = await res.json();
  const accessToken = data.access_token;
  window.localStorage.setItem("token", accessToken);
  alert("로그인 되었습니다.");

  window.location.pathname = "/";

  //   const btn = document.createElement("button");
  //   btn.innerText = "상품 가져오기";
  //   btn.addEventListener("click", async () => {
  //     const res = await fetch("/items", {
  //       headers: {
  //         Authorization: `Bearer ${accessToken}`, // accessToken 사용시 붙혀주는 Bearer
  //       },
  //     });
  //     const data = await res.json();
  //     console.log(data);
  //   });
  //   infoDiv.appendChild(btn);
};

form.addEventListener("submit", handleSumit);
