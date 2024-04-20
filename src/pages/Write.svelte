<script>
  import { getDatabase, ref, push } from "firebase/database";
  import Footer from "../components/Footer.svelte";

  let title;
  let price;
  let description;
  let place;

  async function writeUserData() {
    const db = getDatabase();
    push(ref(db, "items/"), {
      title,
      price,
      description,
      place,
    });
    alert("글쓰기 완료!"); // 현업에서는 확인을 추가로 사용자가 눌러야 하기 때문에 거의 안씀.
    window.location.hash = "/";
  }
</script>

<form id="write-form" on:submit|preventDefault={writeUserData}>
  <!-- <div>
    <label for="image">이미지</label>
    <input type="file" id="image" name="image" />
  </div> -->
  <div class="title-name">
    <label for="title">제목</label>
    <input
      class="title-bar"
      type="text"
      id="title"
      name="title"
      bind:value={title}
    />
  </div>
  <div class="price-name">
    <label for="price">가격</label>
    <input
      class="price-bar"
      type="number"
      id="price"
      name="price"
      bind:value={price}
    />
  </div>
  <div class="description-name">
    <label for="description">설명</label>
    <input
      class="description-bar"
      type="text"
      id="description"
      name="description"
      bind:value={description}
    />
  </div>
  <div class="place-name">
    <label for="place">장소</label>
    <input
      class="place-bar"
      type="text"
      id="place"
      name="place"
      bind:value={place}
    />
  </div>
  <div>
    <button class="write-btn2" type="submit">글쓰기 완료!</button>
  </div>
</form>

<Footer location="write" />

<!--footer 모듈화-->
