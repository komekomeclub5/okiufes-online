<template>
<!-- Header -->
    <header>
        <div class="container">
            <div class="logo">
                <nuxt-link to="/"  class='logo-name'>OKIU Fes.</nuxt-link>
            </div>

            <div class="nav pc">
                <nuxt-link  to="/about" class="name hover9">イベントについて</nuxt-link>
                <nuxt-link  to="/news" class="name hover9">お知らせ</nuxt-link>
                <nuxt-link  to="/" class="name hover9">感染症対策について</nuxt-link>
            </div>
            <!-- スマホのみ -->
            <div id="app" class="sp">
              <!--ハンバーガーメニューのボタン-->
              <div class="hamburger_btn" v-on:click='ActiveBtn=!ActiveBtn'>
                <span class="line line_01" v-bind:class="{'btn_line01':ActiveBtn}"></span>
                <span class="line line_02" v-bind:class="{'btn_line02':ActiveBtn}"></span>
                <span class="line line_03" v-bind:class="{'btn_line03':ActiveBtn}"></span>
              </div>
              <!--サイドバー-->
              <transition name="menu">
                <div class="menu" v-show="ActiveBtn">
                    <ul>
                        <li v-on:click="ActiveBtn = false"><nuxt-link to="/" class="namesp">TOP</nuxt-link></li>
                        <li v-on:click="ActiveBtn = false"><nuxt-link to="/about"  class="namesp">イベントについて</nuxt-link></li>
                        <li v-on:click="ActiveBtn = false"><nuxt-link to="/news"  class="namesp">お知らせ</nuxt-link></li>
                        <li v-on:click="ActiveBtn = false"><nuxt-link to="/"  class="namesp">感染症対策について</nuxt-link></li>
                    </ul>
                </div> 
              </transition>
            </div>

            
        </div>
    </header>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
        ActiveBtn: false
    };
  }
};
</script>

<style>
header {
    position: fixed;
    padding: 15px 0;
    width: 100%;
    z-index: 10;
    background: rgba(0,0,0,0.4);
    color: #fff;
}

.logo {
    float: left;
}
.nav {
    float: right;
    padding: 3px 0;
}
.logo-name {
    font-size: 2rem;
    text-decoration: none;
    cursor: pointer;
    color: #fff;
}

.name {
    margin: 0 10px;
    text-decoration: none;
    font-size: 1.6rem;
    cursor: pointer;
    color: #fff;
}



ul {
    list-style: none;
}

/* ハンバーガー */


/*ボタン*/
.hamburger_btn {
  position: fixed; /*常に最上部に表示したいので固定*/
  top: 0;
  right: 0;
  width: 70px;
  height: 60px;
  cursor: pointer;
  z-index: 50;
}

.hamburger_btn .line {
  position: absolute;
  top: 0;
  left: 20px;
  width: 32px;
  height: 3px;
  background: #fff;
  text-align: center;
}

.hamburger_btn .line_01 {
  top: 18px;
  transition: 0.4s ease;
}
.hamburger_btn .line_02 {
  top: 28px;
  transition: 0.4s ease;
}
.hamburger_btn .line_03 {
  top: 38px;
  transition: 0.4s ease;
}


.btn_line01 {
  transform: translateY(10px) rotate(-45deg);
  transition: 0.4s ease;
}
.btn_line02 {
  transition: 0.4s ease;
  opacity: 0;
}
.btn_line03 {
  transform: translateY(-10px) rotate(45deg);
  transition: 0.4s ease;
}

/*サイドバー*/
.menu-enter-active, .menu-leave-active {
  transition: opacity 0.15s;
}
.menu-enter, .menu-leave-to {
  opacity: 0;
}
.menu-leave, .menu-enter-to{
  opacity: 1;
}

.menu li {
  list-style: none;
  line-height: 1;
  padding: 1rem;

  transform: translateX(-100%);
  animation-name: fadeIn;
  animation-duration: 0.1s;
  animation-timing-function: ease-out;
  animation-fill-mode: forwards;
}
  li:nth-child(1){ animation-delay: .2s; }
  li:nth-child(2){ animation-delay: .23s; }
  li:nth-child(3){ animation-delay: .26s; }
  li:nth-child(4){ animation-delay: .29s; }
  li:nth-child(5){ animation-delay: .32s; }

@keyframes fadeIn {
    0% {
        opacity: 0;
        transform: translateX(25%);
    }
    100% {
        opacity: 1;
        transform: translateX(0%);
    }
}

.menu {
    background-color:rgba(0,0,0,0.95);
    z-index: 30;
    padding: 10vh 5vw;
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    right: 0;
    font-size: 2.5rem;
}
.menu a {
  color: #fff;
  text-decoration: none;
  font-size: 2rem;
  padding: 0 2rem;
}
.menu ul{
  margin: 1rem;
  padding: 0;
}






/* mobile */ 
.lg { display: none !important; }
.pc { display: none !important; }
.sp { display: block !important; }



 
@media only screen and (min-width: 768px) {
.lg { display: none !important; }
.pc { display: block !important; }
.sp { display: none !important; }
}
@media only screen and (min-width: 1060px) {
.lg { display: block !important; }
.pc { display: block !important; }
.sp { display: none !important; }
}


</style>