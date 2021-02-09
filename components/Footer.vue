<template>
<!-- Footer -->
    <footer>
        <div class="container footer-con">
            <div class="row">
                <div class="col-sm">
                    <div class="top-left">
                        <h3>OKIU Fes.</h3>
                    </div>
                </div>
                <div class="col-sm">
                    <dl class="mid-list">
                        <dt>実行委員</dt>
                        <dd><nuxt-link  to="/okiumagic" class="f-nav-list">実行委員について</nuxt-link></dd>
                        <dd><nuxt-link  to="/okiumagic#companion" class="f-nav-list">実行委員募集</nuxt-link></dd>
                        <dd><nuxt-link  to="/contact" class="f-nav-list">お問合せ</nuxt-link></dd>
                    </dl>
                </div>
                <div class="col-sm">
                    <dl class="mid-list">
                        <dt>イベント</dt>
                        <dd><nuxt-link  to="/about" class="f-nav-list">イベントについて</nuxt-link></dd>
                        <dd><nuxt-link  to="/" class="f-nav-list">感染症対策について</nuxt-link></dd>
                        <dd><nuxt-link  to="/news" class="f-nav-list">お知らせ</nuxt-link></dd>
                        <dd><nuxt-link  to="/#Appearance" class="f-nav-list">出演エントリー</nuxt-link></dd>
                        <dd><nuxt-link  to="/" class="f-nav-list">広告</nuxt-link></dd>
                    </dl>
                </div>    
                <div class="col-sm">
                    <dl class="mid-list">
                        <dt>その他</dt>
                        <dd><a href="https://www.okiu.ac.jp/" class="f-nav-list">沖縄国際大学HP</a></dd>
                    </dl>
                </div>
                    
                <div class="col-sm">
                    <div class="snslogo">
                        <img src="@/assets/img/sns/twitter.jpg" alt="twitter-logo">
                        <img src="@/assets/img/sns/instagram.png" alt="instagram-logo">
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="footer-bottom1 col-sm">
                    <p>Design / Nagi Ishikura <br>Develop / Kei Yoneda</p>
                </div>
                <div class="footer-bottom2 col-sm">
                    <p><br>©OKIU FEST 2021</p>
                </div>
            </div>
            
            
        </div>

        
    </footer>

</template>

<style>
footer {
    color: #FFF; 
    background-color: #000; 
    /*color: #000;
    background-color: #FFF;*/
    padding: 0;
    font-size: 1.6rem;
}

.footer-con {
    padding: 5% 0;
}

.top-left h3 {
    font-weight: 600;
}
.snslogo {
    height: 20%;
}

.snslogo img{
    width: 54px;/*幅*/
    float: right;
    margin: 0 3%;
    border-radius: 50%;
    object-fit: cover;
}

.mid-list {
    display: table-cell;
    width: 30%;
    margin: 0;
}

.mid-list dt {
    margin: 20px 0;
    color: #919496;
    font-weight: 600;
    line-height: 1.4;
    letter-spacing: .08em;
    text-transform: uppercase;
    text-align: left;
}
.mid-list dd {
    text-align: left;
    margin-inline-start: 0px;
    padding: 2px 0;
    
}
.f-nav-list {
    text-decoration-line: none;
    color: #fff;
}

.footer-bottom1 {
    padding: 10% 0 0 0;
    text-align: left;
    color:  #919496;
}

.footer-bottom2 {
    padding: 10% 0 0 0;
    text-align: right;
}

@media screen and (min-width:1200px) { 
    .mid-list {
        display: table-cell;
        width: 30%;
        margin: 0;
    }   
}

@media screen and (max-width: 575px) {
    .footer-con {
        padding: 10% 1%;
    }
    .snslogo img{
        width: 54px;/*幅*/
        float: left;
        margin: 5% 1%;
        border-radius: 50%;
        object-fit: cover;
    }
}



</style>