<template>
    <!-- About -->
    <div>
        <div class="about">
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



    </div>
    
</template>



<style>
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
.gradient-filter {
  background: rgba(0, 0, 0, 0.2);
  padding: 3% 0;
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
</style>