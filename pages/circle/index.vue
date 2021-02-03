<template>
  <div>
    <!-- circle -->
    <div class="circle">
      <div class="circle-gradient-filter">
          <div class="container">
              <div class="row">
                  <div class="col-md left">
                  <h2>団体紹介</h2>
                  <p>
                      このイベントは、今年度のコロナ禍での様々なイベント中止を受け、<br>
                      大学生としての生活に思うように進まない1年次、<br>
                      これまでのサークル活動や学生生活に励んできた2から4年次の学生が<br>
                      大学生活に対しての思いをなくしてしまわない様、<br>
                      新しい生活様式を模索したいとの考えから企画されました。
                  </p>
                  </div>
                  <div class="col-md">
                      <div class="circle-background">
                        <div v-for="(item1, index1) in $store.getters['circleimgmodule/circles']" :key="index1">
                          <img :src='item1.src' :class="item1.class" :style='item1.style'>
                        </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    </div>

    
    <div class="container">
      <!-- jikkou -->
      <div class="jikkou">
        <div class="row">
          <div class="col-sm-8 jikkou-text" >
              <p>沖国大　学生限定</p>
              <h2>実行委員の紹介</h2>
              <p>実行委員は、大学内で開催される体育祭や学園祭などの企画・運営をしています。多くの人と繋がれるチャンスがここにあります。</p>
              <Mybutton back_color="#000" fore_color="#fff">もっとみる</Mybutton>
          </div>
          <div class="col-sm-4">
            <img src="@/assets/img/jikko-group.png" alt="実行委員">
          </div>
        </div>
        
        
      </div>
    
      <!-- circle-list -->
      <div class="circle-list">
        <h2>出演団体の紹介</h2>
        <ul class="circle-list-child">
          <li v-for="n in circle" :key="n.slug">
            <div class="list-frame">
              <div class="circle-img-frame">
                <img :src=n.img :alt="n.title + 'の写真'">  
              </div>
              <h3>{{n.title}}</h3>
              <p>{{n.description}}</p>
              <nuxt-link :to="'/circle/'+ n.slug" class="news-contents">もっとみる</nuxt-link>
            </div>           
          </li>
        </ul>
      </div>
    </div>

  </div>

</template>

<script>
import Mybutton from '../../components/Mybutton.vue'

export default {
  components: { Mybutton },
  async asyncData ({ $content, params }) {
    const query = await $content('circle' || 'index').limit(15)
    //const news = await $content('contents' || 'index').where({ tags: 'news' }).fetch(15)
    const circle = await query.fetch()
    return { circle }
  }
}
</script>

<style>
.circle {
  display: block;
  width: 100%;
  background-image: url("~@/assets/img/about/acer.png");
  background-size: cover;
  background-position:center center;
}

.circle-gradient-filter {
  padding-top: 60px;
  padding: 8% 0 6% 0;
  background: rgba(0, 0, 0, 0.7);
}
.circle h2 {
  font-weight: 600;
  color: #fff;
  padding: 1% 0;
}
.circle p {
  color: #fff;
  padding: 1% 0;
  letter-spacing: 1px;
}
.aboutimg {
  height: auto;
  padding: 10% 2% 10% 20%;
}
.circle-background {
  position: relative;
  margin: auto;
  height: 30rem;
  width: 30rem;
}

.n2 {
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

/* jikkou */
.jikkou {
  background: #FFDDB0;
  border-radius: 20px;
  padding: 5%;
  margin: 5% 0;
}
.jikkou-text {
  margin: auto 0;
}
.jikkou img {
  padding: 10%;
}

/* circle-list */
.circle-list h2 {
  text-align: center;
}
.circle-list-child {
  width: 80%;
  list-style: none outside;
  -moz-column-count: 2;
  column-count: 2;
  margin: 5% 10%;
  padding: 0;
}
.circle-list li {
  float: left;
  width: 100%;
  padding: 3%;
}
.list-frame {
  margin: 0 10%;
}
.circle-img-frame {
  display: inline-block;
  position: relative;
  background: #000;
  border-radius: 10px;
}
.circle-img-frame img{
  width: 30vw;
  height: 15vw;
  padding: 4% 2%;
  object-fit: cover;
}


@media screen and (max-width: 768px) {
  .circle-gradient-filter {
    padding: 11% 0 6% 0;
  }
  .list-frame {
    margin: 0;
  }
  .circle-img-frame img{
    width: 30vw;
    height: 20vw;
    padding: 4% 2%;
    object-fit: cover;
    
  }
}

@media screen and (max-width: 575px) {
  .circle-list ul {
    list-style: none outside;
    column-count: 1;
  }
  .circle-gradient-filter {
    padding: 20% 0 10% 0;
  }
  .circle-img-frame img{
    width: 80vw;
    height: 50vw;
    padding: 4% 2%;
    object-fit: cover;
  }
}


</style>