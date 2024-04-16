const form = document.querySelector("#signup-form");

const checkPassword = () => {
  const formData = new FormData(form);
  const password1 = formData.get("password");
  const password2 = formData.get("password2");

  if (password1 === password2) {
    return true;
  } else return false;
};

const handleSumit = async (event) => {
  event.preventDefault();
  const formData = new FormData(form);
  const sha256Password = sha256(formData.get("password"));

  formData.set("password", sha256Password);

  const div = document.querySelector("#info");

  if (checkPassword()) {
    const res = await fetch("/signup", {
      method: "POST",
      body: formData,
    });
    const data = await res.json();

    if (data === "200") {
      //data 가 200찍혔을때 회원가입 성공 메세지 출력

      //   div.innerText = "회원가입에 성공 했습니다!";
      //   div.style.color = "blue";
      alert("회원가입에 성공 했습니다!");
      window.location.pathname = "/login.html"; // 회원가입 성공 시 login.html로 이동
    }
  } else {
    div.innerText = "비밀번호가 다릅니다.";
    div.style.color = "red";
  }
};

form.addEventListener("submit", handleSumit);
