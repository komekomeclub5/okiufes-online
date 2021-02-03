<template>
<!-- OKIU Magic -->
    <div>
        <div class="magic">
            <div class="container">
                <h2>沖国実行委員で<br>多くの繋がりと思い出を</h2>
                <p>
                    大学祭や体育祭を企画・運営する仲間と一緒に、<br>
                    大学生活の限られた時間が充実した日々となるよう活動しています。
                </p>
            </div>
        </div>

        <!-- img -->
        <div class="magic-bigimg">
            
        </div>

        <!-- about -->
        <div class="magic-about">
            <div class="container">
                <div class="row">
                    <div class="col-md">
                        <h2>100+</h2>
                        <p>実行委員数</p>
                    </div>
                    <div class="col-md">
                        <h2>1年次~4年次</h2>
                        <p>幅広い学年</p>
                    </div>
                    <div class="col-md">
                        <h2>大学祭・体育祭</h2>
                        <p>2大イベント</p>
                    </div>
                    <div class="col-md">
                        <h2>12班</h2>
                        <p>多くの班</p>
                    </div>
                </div>
            </div>
        </div>

        <!-- photo -->
        <div class="magic-photo">
            <div class="container">
                <h2>沖国実行委員を見てみよう</h2>
                <div class="row">
                    <div class="col">
                        <img src="@/assets/img/okiumagic/jikko.jpg">
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-7 p2">
                        <img src="@/assets/img/okiumagic/2.jpg">
                    </div>
                    <div class="col-sm-5 p3">
                        <img src="@/assets/img/okiumagic/3.jpg">
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-5 p3">
                        <img src="@/assets/img/okiumagic/4.jpg">
                    </div>
                    <div class="col-sm-7 p2">
                        <img src="@/assets/img/okiumagic/5.jpg">
                    </div>
                </div>
                <div class="row bt">
                    <div class="col p4">
                        <img src="@/assets/img/okiumagic/6.jpg">
                    </div>
                </div>
            </div>
        </div>
        
        <!-- companion -->
        <div class="magic-companion" id="companion">
            <div class="magic-companion-filter">
                <div class="container">
                    <h2>一緒に活動して、一緒に良い思い出を！</h2>
                    <p>
                        たくさんの仲間とたくさんの思い出、たくさんの繋がりを一緒につくりましょう。<br>
                        楽しい大学生活過ごしたいなら沖縄国際大学実行委員になろう。
                    </p>
                    <Mybutton to="/">実行委員になる</Mybutton>
                </div>
            </div>
            
        </div>


    </div>
</template>


<script>
import Mybutton from "../components/Mybutton.vue";
export default {
  components: { Mybutton }
};
</script>

<style>
/* Magic-top */
.magic {
    padding: 10% 0;
}
.magic h2{
    color: #FF5700;
    padding: 1% 0;
}

/* img */
.magic-bigimg{
    min-height: 60vw;
    background-image: url("~@/assets/img/okiumagic/jikko.jpg");
    background-size: cover;
    background-position: center;
    height: auto;
}

/* about */
.magic-about {
    padding: 5% 0;
    text-align: center;
}
.magic-about h2 {
    font-size: 3.8rem;
    color: #FF5700;
    padding: 1% 0
}

/* photo */
.magic-photo {
    background-color: #FFDDB0;
}
.magic-photo h2{
    padding: 5% 0;
    color: #FF5700;
    text-align: center;
}
.magic-photo img {
    width: 100vw;
    border-radius: 3em;
    margin: 10px 0;
}

.p3 img{
    width: 43vw;
    height: 43vw;
    max-height: 487.5px;
    object-fit: cover;
    object-position: center;
}
.p4 img{
    max-height: 632.81px;
    object-fit: cover;
    object-position: center;
}
.bt {
    padding-bottom: 10%;
}

/* companion */
.magic-companion {
    background-image: url("~@/assets/img/okiumagic/jikko.jpg");
    background-size: cover;
    background-position: center;
}
.magic-companion-filter {
    background-color: rgba(255, 87, 0, 0.85);
    color: #fff;
    text-align: center;
    padding: 10%;
}
.magic-companion-filter  p{
    font-size: 2.4rem;
    padding: 1% 0
}

@media screen and (max-width: 575px) {
    .magic {
        padding: 30% 0 15%;
    }
    .magic-about {
        padding: 10% 0;
    }
    .magic-photo h2{
       padding: 10% 0;
    }
    .p3 img{
        width: 100vw;
        height: 70vw;
    }
}
</style>