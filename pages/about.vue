<template>
    <!-- About -->
    <div>
        <div class="about">
            <div class="about-gradient-filter">
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
                        </div>
                        <div class="col-md">
                            <div class="about-background">
                              <div v-for="(item1, index1) in $store.getters['img2module/ctList']" :key="index1">
                                <img :src='item1.src' :class="item1.class" :style='item1.style'>
                              </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- date -->
        <div class="about-date">
          <div class="container">
            <h2>開催日時</h2>
            <p class="date">X月XX日（X曜日）XX:XX~XX:XX</p>
            <p class="date-sub">オンラインサービスでのLIVE配信</p>
          </div>
        </div>

        <!-- Circle -->
        <div class="about-circle">
          <div class="circle-gradient">
            <div class="circle-gradient2">
              <div class="container">
                <div class="row circle-row">
                  <h2>出演団体</h2>
                  <div v-for="n in circle" :key="n.slug" class="circle-list col-sm-6  col-md-3">
                    <nuxt-link :to="'/circle/'+ n.slug" class="circle-contents">
                      <img :src="n.img" :alt="n.title + 'の写真'">
                      <div class="circle-name">
                        {{n.title}}
                      </div>
                    </nuxt-link>
                  </div> 
                  <Mybutton link="/circle">もっとみる</Mybutton>
                  
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- SNS -->
        <div class="about-sns" id="sns">
          <div class="container">
            <h2>イベントをオンラインで楽しむ！</h2>
            <div class="row">
              <div class="col-xs-12 col-sm-6 col-md-4">
                <div class="sns-youtube">
                  <p class="sns-title">YouTube</p>
                  <p class="sns-text">Liveを見ながらフォローしたり、<br class="lg">コメントしたり、自分だけの楽しみ方を</p>
                </div>
              </div>
              <div class="col-xs-12 col-sm-6 col-md-4">
                <div class="sns-twitter">
                  <p class="sns-title">Twitter</p>
                  <p class="sns-text">実行委員公式と繋がって情報ゲット！<br class="lg">＃okiufes2020でツイートしよう</p>
                </div>
              </div>
              <div class="col-xs-12 col-sm-6 col-md-4">
                <div class="sns-instagram">
                  <p class="sns-title">Instagram</p>
                  <p class="sns-text">Liveに参加したり、コメントしたり、<br class="lg">インスタで情報をゲット</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Schedule -->
        <div class="about-schedule">
          <div class="circle-gradient">
            <div class="circle-gradient2">
              <div class="container">
                <h2>タイムスケジュール</h2>

                <div class="schedule">
                  <ul class="schedule-child">
                    <li v-for="(sitem1, sindex1) in $store.getters['schedule/scheduleList']" :key="sindex1">
                  
                      <img :src="sitem1.img" :alt="sitem1.circle + '-photo'" class="schedule-img">
                      <div class="schedule-text">
                        <h3>{{sitem1.time}}</h3>
                        <p>{{sitem1.circle}}<br>{{sitem1.event}}</p>
                      </div>
                      
                  
                    </li>
                  </ul>
                  
                </div>
              </div>
            </div>
          </div>
        </div>

    </div>
    
</template>

<script>
import Mybutton from "../components/Mybutton.vue";
export default {
  components: {
    Mybutton
  },

  async asyncData ({ $content, params }) {
    const query = await $content('circle' || 'index').limit(15)
    const circle = await query.fetch()
    return { circle }
  }
};

</script>


<style>
.left {
  margin: auto 0;
}
.about {
  display: block;
  width: 100%;
  background: #00FFF7;
  background: -moz-linear-gradient(left, #004BFF 0%, #00FFF7 100%);
  background: -webkit-gradient(linear, left center, right center, from(#004BFF), to(#00FFF7));
  background: -webkit-linear-gradient(left, #004BFF 0%, #00FFF7 100%);
  background: -o-linear-gradient(left, #004BFF 0%, #00FFF7 100%);
  background: linear-gradient(to right, #004BFF 0%, #00FFF7 100%);
}
.about-gradient-filter {
  padding-top: 60px;
  padding: 8% 0 6% 0;
  background: rgba(0, 0, 0, 0.2);
}
.about h2 {
  font-weight: 600;
  color: #fff;
  padding: 1% 0;
}
.about p {
  color: #fff;
  padding: 1% 0;
  letter-spacing: 1px;
}
.aboutimg {
  height: auto;
  padding: 10% 2% 10% 20%;
}

/* chatan img animation */
.about-background {
  position: relative;
  margin: auto;
  height: 30rem;
  width: 40rem;
  margin-right: 2%;
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

/* date */
.about-date {
  padding: 5% 0;
  text-align: center;
}
.about-date h2 {
  padding-bottom: 3%;
}
.date {
  font-size: 4.4rem;
}

/* Circle */
.about-circle {
  background-image: url("~@/assets/img/about/acer.png");
  text-align: center;
  color: #fff;
}
.about-circle h2{
  padding-bottom: 3%;
}
.circle-gradient {
  background: linear-gradient(90deg, rgba(0, 77, 255, 0.85) 0%, rgba(0, 255, 247, 0.85) 100%);
}
.circle-gradient2 {
  background: rgba(0, 0, 0, 0.4);
  padding: 5% 0;
}
.circle-gradient2 a {
  margin: 5% auto;
}
.circle-row {
  margin: 0 auto;
}
.circle-contents img {
  object-fit: cover;
  width: 20rem;
  height: 20rem;
  border-radius: 20px;
  margin: auto;
}
.circle-contents {
  text-decoration: none;
  color: #fff;
}
.circle-name {
  padding: 5% 0;
  font-size: 2.4rem;
}


/* SNS */
.about-sns {
  padding: 5% 0;
  
}
.about-sns h2 {
  text-align: center;
  padding-bottom: 3%;
}
.sns-youtube {
  margin: 0 auto;
  width: 80%;
  background:linear-gradient( #E43535 0%, #B12F2F 100%);
  border-radius: 20px;
  color: #fff;
}
.sns-twitter {
  margin: 0 auto;
  width: 80%;
  background:linear-gradient( #359EE4 0%, #2B79AE 100%);
  border-radius: 20px;
  color: #fff;
}
.sns-instagram {
  margin: 0 auto;
  width: 80%;
  background:linear-gradient( #D83D9A 0%, #AF307C 100%);
  border-radius: 20px;
  color: #fff;
}
.sns-title {
  padding: 20rem 2rem 0 2rem;
  font-size: 3rem;
  font-weight: 600;
}
.sns-text {
  padding: 2rem;
}

/* Schedule */
.about-schedule {
  background-image: url("~@/assets/img/about/background.jpg");
  color: #fff;
}
.about-schedule h2 {
  text-align: center;
}
.schedule {
  display: flex;
  margin: 0 auto;
}
.schedule-child {
  width: 80%;
  list-style: none outside;
  column-count: 2;
  margin: 5% 10%;
  padding: 0;
}
.schedule-child li{
  float: left;
  width: 100%;
  padding:3%;
}
.schedule-img{
  width: 6em;
  height: 6em;
  float: left;
  margin: 0 5% 0 0;
  object-fit: cover;
  border-radius: 10px;
  box-shadow: 0px 10px 10px -5px rgba(0,0,0,0.2);
}
.schedule-text {
  width: 70%;
  float: right;
}

@media screen and (max-width: 1200px) {
  .schedule-img{
    width: 5em;
    height: 5em;
  }
}

@media screen and (max-width: 991px) {
  .schedule-child {
    width: 100%;
    list-style: none outside;
    column-count: 2;
    margin: 5% 0;
    padding: 0;
  }
}

@media screen and (max-width: 770px) {
  .about-background {
    height: 15em;
    width: 20em;
    margin: 5% auto;
  }
  .about-gradient-filter {
    padding: 11% 0 6% 0;
  }
  .circle-gradient2 h2 {
    padding-bottom: 5%;
  }
  .about-sns {
    padding:10% 0;
  }
  
  .sns-youtube {
    margin: 3% auto;
  }
  .sns-twitter {
    margin: 3% auto;
  }
  .sns-instagram {
    margin: 3% auto;
  }
  .schedule-img {
    width: 20vw;
    height: 20vw;
  }
  .schedule-child {
    width: 100%;
    list-style: none outside;
    column-count: 1;
    margin: 0;
    padding: 0 0 0 5%;
  }
  .schedule-child li {
    padding: 3% 1%;
  }
  .schedule-img {
    margin: 0 5% 0 0;
  }
}

@media screen and (max-width: 575px) {
  .about-gradient-filter {
    padding:20% 0 10% 0;
  }
  .about-date {
    padding: 10% 0;
  }
  .date {
    font-size: 3.5rem;
  }
  .circle-gradient2 {
    padding: 10% 0;
  }
  .about-sns h2 {
    padding-bottom:5%;
  }
  .schedule-img {
    width: 20vw;
    height: 20vw;
  }
  .schedule-child {
    width: 100%;
    list-style: none outside;
    column-count: 1;
    margin: 0;
    padding: 0 0 0 5px;
  }
  .schedule-child li {
    padding: 3% 1%;
  }
  .schedule-img {
    margin: 3% 5% 3% 0;
  }
}
@media screen and (max-width: 320px) {
  .schedule-img {
    margin: 0 5% 0 0;
  }
}

</style>

