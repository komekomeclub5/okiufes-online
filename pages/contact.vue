<template>
    <div>
        <!-- contact -->
        <div class="contact">
            <div class="container">
                <h2>お問い合せ</h2>
                <p>
                    沖縄国際大学 実行委員に関するお問い合わせはこちらです。<br>
                    質問やご不明点がございましたらお気軽にお問い合わせください。
                </p>
            </div>
        </div>

        <!-- photo -->
        <div class="contact-photo">
            <div class="container">
                <div class="row">
                    <div class="col-sm-5 p3">
                        <img src="@/assets/img/contact/1.jpg">
                    </div>
                    <div class="col-sm-7 p2">
                        <img src="@/assets/img/contact/2.jpg">
                    </div>
                </div>
                <div class="row">
                    <div class="col p4">
                        <img src="@/assets/img/okiumagic/jikko.jpg">
                    </div>
                </div>
            </div>
        </div>

        <!-- number -->
        <div class="contact-number">
            <div class="container">
                <div class="row">
                    <div class="col">
                        <h2>電話</h2>
                        <p>000-000-0000</p>
                    </div>
                    <div class="col">
                        <h2>メール</h2>
                        <p>xxxx.xxxx@mail.com</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
</template>

<style>
/* contact */
.contact {
    padding: 10% 0;
}
.contact h2{
    font-weight: 600;
    color: #FF5700;
    padding: 1% 0;
}

/* photo */
.contact-photo img {
    width: 100vw;
    border-radius: 3em;
    margin: 10px 0;
}

/* number */
.contact-number {
    padding: 15% 0;
    text-align: center;
}
.contact-number h2 {
    font-size: 3.8rem;
    padding: 1% 0
}
.contact-number p {
    font-size: 2rem;
    padding: 1% 0
}

@media screen and (max-width: 575px) {
    .contact {
        padding: 30% 0;
    }
}

</style>