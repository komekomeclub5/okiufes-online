<template>
<!-- トップページ -->
  <div>
    <!-- Top -->
    <div class="top-visual">
      <div class="gradient">
        <div class="container">
          <div class="row pd">
            <div class="col-md left">
              <p class="special">特別イベント</p>
              <h1>学生生活<br>発表会</h1>
              <p>今のこの時だからこそできることがある。<br>さあ立ち上がろう</p>
            </div>
            <div class="col-md">
      
              <div class="top-background">
                <div v-for="(item, index) in $store.getters['imgmodule/itemsList']" :key="index">
                  <img :src='item.src' :class="item.class" :style='item.style'>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- About -->
    <div class="top-about">
      <div class="gradient-filter">
        <div class="container">
            <div class="row">
                <div class="col-md left">
                <h2>このイベントに<br class="sp">ついて</h2>
                <p>
                    このイベントは、今年度のコロナ禍での様々なイベント中止を受け、<br>
                    大学生としての生活に思うように進まない1年次、<br>
                    これまでのサークル活動や学生生活に励んできた2から4年次の学生が<br>
                    大学生活に対しての思いをなくしてしまわない様、<br>
                    新しい生活様式を模索したいとの考えから企画されました。
                </p>
                <MyButton link="/about">もっとみる</MyButton>
              </div>
              <div class="col-md">
                <!-- <img class="aboutimg" src="/top/about.png" /> -->
                <div class="ct-background">
                  <div v-for="(item1, index1) in $store.getters['img2module/ctList']" :key="index1">
                    <img :src='item1.src' :class="item1.class" :style='item1.style'>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>

    <!-- Enjoy Events -->
    <div class="top-enjoy">
      <div class="container">
        <h2>イベントを最大限に楽しもう</h2>
        <div class="row">
          <div class="col-sm enjoy-box">
            <h3>SNSで楽しむ</h3>
            <p>
              フォローしたり、コメントしたり、LIVEを見たり自分だけの楽しみ方を見つける。新しい楽しみ方もここで。
            </p>
            <nuxt-link to="/" class="enjoy-more">もっとみる</nuxt-link>
          </div>
          <div class="col-sm enjoy-box">
            <h3>団体を知る</h3>
            <p>
              あなたが気になる出演団体について知ることができればきっと楽しさ倍増！？お気に入りの団体も見つかるかも
            </p>
            <nuxt-link to="/" class="enjoy-more">もっとみる</nuxt-link>
          </div>
          <div class="col-sm enjoy-box">
            <h3>感染対策の徹底</h3>
            <p>
              多くの人に楽しんでいただくために新しい生活様式を取り入れ、感染対策にも取り組んでいます。
            </p>
            <nuxt-link to="/" class="enjoy-more">もっとみる</nuxt-link>
          </div>
        </div>
      </div>
    </div>

    <!-- info -->
    <div class="top-info">
      <div class="info-gradient">
        <div class="container">
            <h2>お知らせ</h2>
            <div class="news-block">
              <div v-for="n in news" :key="n.slug" class="news-list">
                <nuxt-link :to="'/news/'+ n.slug" class="news-contents">{{n.date}}　<br class="sp">{{n.title}}</nuxt-link>
              </div>
            </div>
            <MyButton link="/news">もっとみる</MyButton>
        </div>
      </div>
    </div>

    <!-- Appearance -->
    <div class="top-appearance">
      <div class="ap-gradient">
        <div class="container">
          <div class="row">
            <div class="col-md left">
              <p>沖国大　学生限定</p>
              <h2>イベントに出演して楽しもう</h2>
              <p>皆さんの日頃の取り組みを発表できる特別イベントを企画しました。ページから出演エントリーして今年だけの思い出を作りましょう！</p>
              <MyButton back_color="#000" fore_color="#fff">出演エントリー</MyButton>
            </div>
            <div class="col-md">
              <img src="top/forms.png" alt="GoogleForms Logo">
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>

  
    
</template>

<script>
import MyButton from "@/components/MyButton.vue";
export default {
  components: {
    MyButton
  },

  async asyncData ({ $content, params }) {
    const query = await $content('news' || 'index').limit(3)
    //const news = await $content('contents' || 'index').where({ tags: 'news' }).fetch(3)
    const news = await query.fetch()
    return { news }
  }
};

</script>

<style>
/* top */
.pd {
  padding: 6% 0;
}
.top-visual {
  display: block;
  width: 100%;
  padding: 0;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: #ff9100;
  background: -moz-linear-gradient(left, #ff005e 0%, #ff9100 100%);
  background: -webkit-gradient(linear, left center, right center, from(#ff005e), to(#ff9100));
  background: -webkit-linear-gradient(left, #ff005e 0%, #ff9100 100%);
  background: -o-linear-gradient(left, #ff005e 0%, #ff9100 100%);
  background: linear-gradient(to right, #ff005e 0%, #ff9100 100%);
}
.gradient {
  position: relative;
  display: block;
  width: 100%;
  padding: 60px 0 0 0;
  background: -moz-linear-gradient(bottom, #111, transparent);
  background: -webkit-linear-gradient(bottom, #111, transparent);
  background: linear-gradient(to top, #111, transparent);
}
.left {
  margin: auto 0;
}
.special {
  font-size: 1.2rem;
}
.top-visual h1 {
  padding: 3% 0;
  font-weight: 800;
  line-height: 1.2;
  color: #fff;
}
.top-visual p {
  font-size: 2.4rem;
  font-weight: 500;
  color: #fff;
}
.topimg {
  height: auto;
  padding: 15% 2% 15% 20%;
}

/* top img animation */
.top-background {
  position: relative;
  margin: auto;
  height: 30rem;
  width: 40rem;
  /* background: rgba(255, 255, 255, 0.5); */
}
.n {
  opacity: 0;
  border-radius: 12px; animation-name: fadein; animation-duration: 2s;
  animation-fill-mode: forwards; /*これで値を保持*/
  will-change: transform;
}
@keyframes fadein {
  from {
      opacity: 0;
      transform: translateY(20px);
  }
  to {
      opacity: 1;
      transform: translateY(0);
  }
}
/* chatan img animation */
.ct-background {
  position: relative;
  margin: auto;
  height: 30rem;
  width: 40rem;
  /* background: rgba(255, 255, 255, 0.5); */
}
.n1 {
  opacity: 0;
  border-radius: 12px; animation-name: zoom; animation-duration: 2s;
  animation-fill-mode: forwards; /*これで値を保持*/
  will-change: transform;
}
@keyframes zoom {
  from {
      opacity: 0;
      transform: scale(0.5, 0.5);
  }
  to {
      opacity: 1;
      transform: scale(1, 1);
  }
}



/* about */
.top-about {
  display: block;
  width: 100%;
  background: #00FFF7;
  background: -moz-linear-gradient(left, #004BFF 0%, #00FFF7 100%);
  background: -webkit-gradient(linear, left center, right center, from(#004BFF), to(#00FFF7));
  background: -webkit-linear-gradient(left, #004BFF 0%, #00FFF7 100%);
  background: -o-linear-gradient(left, #004BFF 0%, #00FFF7 100%);
  background: linear-gradient(to right, #004BFF 0%, #00FFF7 100%);
}
.gradient-filter {
  background: rgba(0, 0, 0, 0.2);
  padding: 6% 0;
}
.top-about h2 {
  font-weight: 600;
  color: #fff;
  padding: 1% 0;
}
.top-about p {
  color: #fff;
  padding: 1% 0;
  letter-spacing: 1px;
}
.aboutimg {
  height: auto;
  padding: 10% 2% 10% 20%;
}

/* enjoy */
.top-enjoy {
  display: block;
  width: 100%;
  padding: 5% 0;
}
.enjoy-box {
  padding: 1.5% 0;
}
.top-enjoy h2 {
  padding-bottom: 3%;
}
.top-enjoy h3 {
  padding: 2% 0;
}
.top-enjoy p {
  padding: 2% 0;
}
.enjoy-more {
  padding: 4% 0;
  color: #FF6F00;
}

/* info */
.top-info {
  display: block;
  width: 100%;
  background: linear-gradient(-45deg, #FF00A2 0%, #6600FF 100%);
  color: #fff;
  text-align: center;
}
.top-info h2{
  padding-bottom: 3%;
  
}
.info-gradient {
  padding: 5% 0;
  background: rgba(0, 0, 0, 0.2);
}
.news-block {
  display: table;
	margin: auto;
}
.news-list {
  max-width: 700px;
  text-align: left;
  margin: 10px auto;
  
}
.news-list a{
  text-align: left;
  text-decoration: none;
  color: #fff;
  font-size: 18px;
}

/* Appearance */
.top-appearance {
  background: linear-gradient(90deg, rgba(255, 0, 94, 0.3) 0%, rgba(255, 145, 0, 0.3) 100%);
}
.top-appearance h2 {
  padding-bottom: 3%;
}
.top-appearance img {
  margin: 0 auto;
}
.ap-gradient {
  padding: 5% 0;
  background: linear-gradient(90deg, rgba(255, 0, 94, 0.3) 0%, rgba(255, 145, 0, 0.3) 100%);
}

/* tablet */
@media screen and (max-width:768px) {
  .top-background {
    height: 15em;
    width: 20em;
  }
  .ct-background {
    height: 15em;
    width: 20em;
  }
}

/* smartphone */
@media screen and (max-width: 575px) {
  .pd {
    padding: 6% 0;
  }

  .container {
    width: 95%;
    margin: 0 2.5%;
  }
  .top-visual {
    padding-top: 60px;
  }
  .gradient {
    padding: 0;
  }
  .top-background {
    margin: 15% auto;
  }
  .gradient-filter {
    padding: 10% 0;
  }
  .top-enjoy {
    padding: 10% 0;
  }
  .ct-background {
    margin: 15% auto;
    
  }
  .aboutimg {
    padding: 15%;
  }
  .info-gradient {
    padding: 10% 0;
  }
  .ap-gradient {
    padding: 10% 0;
  }
  .top-appearance img {
    margin: 20% auto;
  }
}
</style>


