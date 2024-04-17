<script>
  let hour = new Date().getHours();
  let min = new Date().getMinutes();
</script>

<header>
  <div class="info-bar">
    <div class="info-bar__time">{hour}:{min}</div>
    <div class="info-bar__icons">
      <img src="Assets/chart-bar.svg" alt="Chart-bar" />
      <img src="Assets/wifi.svg" alt="Wifi" />
      <img src="Assets/battery.svg" alt="Battery" />
    </div>
  </div>
  <div class="menu-bar">
    <div class="menu-bar__location">
      <div>내손1동</div>
      <div class="menu-bar__location-icon">
        <img src="Assets/arrow-down.svg" alt="" />
      </div>
    </div>
    <div class="menu-bar__icons">
      <img src="Assets/search.svg" alt="serach" />
      <img src="Assets/menu.svg" alt="menu" />
      <img src="Assets/bell.svg" alt="bell" />
    </div>
  </div>
</header>

<main>
  <a class="write-btn" href="#/write">+ 글쓰기</a>
</main>

<footer>
  <div class="footer-block">
    <div class="footer-icons">
      <div class="footer-icons__img">
        <img src="Assets/home.svg" alt="" />
      </div>
      <div class="footer-icons__desc">홈</div>
    </div>
    <div class="footer-icons">
      <div class="footer-icons__img">
        <img src="Assets/paper.svg" alt="" />
      </div>
      <div class="footer-icons__desc">동네생활</div>
    </div>
    <div class="footer-icons">
      <div class="footer-icons__img">
        <img src="Assets/gps.svg" alt="" />
      </div>
      <div class="footer-icons__desc">내 근처</div>
    </div>
    <div class="footer-icons">
      <div class="footer-icons__img">
        <img src="Assets/chat.svg" alt="" />
      </div>
      <div class="footer-icons__desc">채팅</div>
    </div>
    <div class="footer-icons">
      <div class="footer-icons__img">
        <img src="Assets/user.svg" alt="" />
      </div>
      <div class="footer-icons__desc">나의 당근</div>
    </div>
  </div>
</footer>
<div class="media-info-msg">화면 사이즈를 줄여주세요.</div>

<style>
</style>
