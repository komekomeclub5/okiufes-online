<template>
<!-- Header -->
    <header>
        <div class="container">
            <div class="logo">
                <Nuxtlink @click="$router.push('/')"  class='logo-name'>OKIU Fes.</Nuxtlink>
            </div>

            <div class="nav pc">
                <Nuxtlink  @click="$router.push('/about')" class="name hover9">イベントについて</Nuxtlink>
                <Nuxtlink @click="$router.push('/news')"  class="name hover9">お知らせ</Nuxtlink>
                <Nuxtlink @click="$router.push('/')"  class="name hover9">感染対策について</Nuxtlink>
            </div>
            <!-- スマホのみ -->
            <!-- <div class="header-logo-menu sp">
                <div id="nav-drawer">
                        <input id="nav-input" type="checkbox" class="nav-unshown">
                        <label id="nav-open" for="nav-input"><span></span></label>
                        <label class="nav-unshown" id="nav-close" for="nav-input"></label>
                    <div id="nav-content">
                        <ul>
                            <li><Nuxtlink @click="$router.push('/about')"  class="namesp">イベントについて</Nuxtlink></li>
                            <li><Nuxtlink @click="$router.push('/')"  class="namesp">お知らせ</Nuxtlink></li>
                            <li><Nuxtlink @click="$router.push('/')"  class="namesp">感染症対策について</Nuxtlink></li>
                        </ul>
                    </div>
                </div>
            </div> -->
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
                        <li><Nuxtlink @click="$router.push('/')"  class="namesp">TOP</Nuxtlink></li>
                        <li><Nuxtlink @click="$router.push('/about')"  class="namesp">イベントについて</Nuxtlink></li>
                        <li><Nuxtlink @click="$router.push('/news')"  class="namesp">お知らせ</Nuxtlink></li>
                        <li><Nuxtlink @click="$router.push('/')"  class="namesp">感染症対策について</Nuxtlink></li>
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
    cursor: pointer
}

.name {
    margin: 0 10px;
    text-decoration: none;
    font-size: 1.6rem;
    cursor: pointer
}

header a:visited {color: inherit;}

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
  transition: opacity 0.2s;
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
.pc { display: none !important; }
.sp { display: block !important; }


 
@media only screen and (min-width: 768px) {
.pc { display: block !important; }
.sp { display: none !important; }
}


</style>