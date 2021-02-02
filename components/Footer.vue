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
                        <dt>私たちについて</dt>
                        <dd>実行委員情報</dd>
                        <dd>実行委員募集</dd>
                        <dd>お問い合わせ</dd>
                    </dl>
                </div>
                <div class="col-sm">
                    <dl class="mid-list">
                        <dt>イベントについて</dt>
                        <dd>出演団体</dd>
                        <dd>感染対策</dd>
                        <dd>お知らせ</dd>
                        <dd>広告</dd>
                    </dl>
                </div>    
                <div class="col-sm">
                    <dl class="mid-list">
                        <dt>その他</dt>
                        <dd>実行委員上層メンバー</dd>
                        <dd>沖国際実行委員2020</dd>
                    </dl>
                </div>
                    
                <div class="col-sm">
                    <div class="snslogo">
                        <img src="sns/twitter.jpg" alt="twitter-logo">
                        <img src="sns/instagram.png" alt="instagram-logo">
                    </div>
                </div>
            </div>
            <div class="footer-bottom">
                <p>©OKIU FEST 2021</p>
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

.footer-bottom {
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