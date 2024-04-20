<script>
  import { onMount } from "svelte";
  import Footer from "../components/Footer.svelte";
  import { getDatabase, ref, onValue } from "firebase/database";

  let hour = new Date().getHours();
  let min = new Date().getMinutes();

  $: items = []; //$을 쓰면 업데이트될때마다 스벨트 자체에서 업데이트 진행

  const db = getDatabase();
  const itemsRef = ref(db, "items/");

  //화면이 처음 실행됬을때 한번 실행됨. 그 후에는 데이터 안가져옴,
  //그래서 onMount를 사용하여 화면이 렌더링 될 때 마다 호출될 수 있도록 적용해야함.
  onMount(() => {
    onValue(itemsRef, (snapshot) => {
      const data = snapshot.val();
      items = Object.values(data);
    });
  });
</script>

<header>
  <div class="info-bar">
    <div class="info-bar__time">{hour}:{min}</div>
    <div class="info-bar__icons">
      <img src="assets/chart-bar.svg" alt="Chart-bar" />
      <img src="assets/wifi.svg" alt="Wifi" />
      <img src="assets/battery.svg" alt="Battery" />
    </div>
  </div>
  <div class="menu-bar">
    <div class="menu-bar__location">
      <div>내손1동</div>
      <div class="menu-bar__location-icon">
        <img src="assets/arrow-down.svg" alt="" />
      </div>
    </div>
    <div class="menu-bar__icons">
      <img src="assets/search.svg" alt="serach" />
      <img src="assets/menu.svg" alt="menu" />
      <img src="assets/bell.svg" alt="bell" />
    </div>
  </div>
</header>

<main>
  {#each items as item}
    <div class="item-list">
      <div class="item-list__img" />
      <div class="item-list__info">
        <div class="item-list__info-title">{item.title}</div>
        <div class="item-list__info-meta">{item.place}</div>
        <div class="item-list__info-price">{item.price}</div>
        <div>{item.description}</div>
      </div>
    </div>
  {/each}
  <a class="write-btn" href="#/write">+ 글쓰기</a>
</main>

<Footer location="home" />
<!--footer 모듈화-->

<div class="media-info-msg">화면 사이즈를 줄여주세요.</div>

<style>
</style>
