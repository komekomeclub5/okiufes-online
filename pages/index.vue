<template>
<!-- トップページ -->
  <div>
    <!-- Top -->
    <div class="top-visual">
      <div class="gradient">
        <div class="container">
          <div class="row">
              <div class="col-sm left">
              <p class="special">特別イベント</p>
              <h1>学生生活<br>発表会</h1>
              <p>今のこの時だからこそできることがある。<br>さあ立ち上がろう</p>
            </div>
            <div class="col-sm">
              <img class="topimg" src="/top/top.png" />
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
                <div class="col-sm left">
                <h2>このイベントについて</h2>
                <p>
                    このイベントは、今年度のコロナ禍での様々なイベント中止を受け、<br>
                    大学生としての生活に思うように進まない1年次、<br>
                    これまでのサークル活動や学生生活に励んできた2から4年次の学生が<br>
                    大学生活に対しての思いをなくしてしまわない様、<br>
                    新しい生活様式を模索したいとの考えから企画されました。
                </p>
              </div>
              <div class="col-sm">
                <img class="aboutimg" src="/top/about.png" />
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
          <div class="col-sm">
            <h3>SNSで楽しむ</h3>
            <p>
              フォローしたり、コメントしたり、LIVEを見たり自分だけの楽しみ方を見つける。新しい楽しみ方もここで。
            </p>
            <Nuxtlink to="/" class="enjoy-more">もっとみる</Nuxtlink>
          </div>
          <div class="col-sm">
            <h3>団体を知る</h3>
            <p>
              あなたが気になる出演団体について知ることができればきっと楽しさ倍増！？お気に入りの団体も見つかるかも
            </p>
            <Nuxtlink to="/" class="enjoy-more">もっとみる</Nuxtlink>
          </div>
          <div class="col-sm">
            <h3>感染対策の徹底</h3>
            <p>
              多くの人に楽しんでいただくために新しい生活様式を取り入れ、感染対策にも取り組んでいます。
            </p>
            <Nuxtlink to="/" class="enjoy-more">もっとみる</Nuxtlink>
          </div>
        </div>
      </div>
    </div>
  </div>

  
    
</template>


<script>

</script>

<style>
/* top */
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
  font-size: 8rem;
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
  padding: 3% 0;
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
.top-enjoy h2 {
  padding-bottom: 2%;
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

@media screen and (max-width: 575px) {
  .container {
    width: 95%;
    margin: 0 2.5%;
  }
  .top-visual {
    padding-top: 60px;
  }
  .topimg {
    padding: 15%;
  }
  .aboutimg {
    padding: 15%;
  }
}
</style>
