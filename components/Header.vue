<template>
<!-- Header -->
    <header>
        <div class="container">
            <div class="logo">
                <Nuxtlink @click="$router.push('/')"  class='logo-name'>OKIU Fes.</Nuxtlink>
            </div>

            <div class="nav pc">
                <Nuxtlink  @click="$router.push('/about')" class="name hover9">イベントについて</Nuxtlink>
                <Nuxtlink @click="$router.push('/')"  class="name hover9">お知らせ</Nuxtlink>
                <Nuxtlink @click="$router.push('/')"  class="name hover9">感染対策について</Nuxtlink>
            </div>
            <!-- スマホのみ -->
            <div class="header-logo-menu sp">
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
            </div>

            
        </div>
    </header>
</template>

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

#nav-drawer {
  position: relative;
}

/*チェックボックス等は非表示に*/
.nav-unshown {
  display:none;
}

/*アイコンのスペース*/
#nav-open {
  display: inline-block;
  width: 30px;
  height: 22px;
  vertical-align: middle;
}

/*ハンバーガーの形をCSSで表現*/
#nav-open span, #nav-open span:before, #nav-open span:after {
  position: absolute;
  height: 3px;/*線の太さ*/
  width: 25px;/*長さ*/
  border-radius: 3px;
  background: #FFF;
  display: block;
  content: '';
  cursor: pointer;
}
#nav-open span:before {
  bottom: -8px;
}
#nav-open span:after {
  bottom: -16px;
}

/*閉じる用の薄黒箇所*/
#nav-close {
  display: none;
  position: fixed;
  z-index: 99;
  top: 40%;
  right: 0;
  width: 100%;
  height: 60%;
  background: rgba(0, 0, 0, 0.05);
  opacity: 0;
  transition: .3s ease-in-out;
}

/*メニューの中身*/
#nav-content {
  overflow: auto;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 50;
  width: 100%;
  max-width: 100%;/*最大幅（お好みで調整を）*/
  font-size: 3rem;
  height: 40%;
  background: rgba(0, 0, 0);
  transition: .3s ease-in-out;
  -webkit-transform: translateY(-105%);
  transform: translateY(-105%);
  padding-top: 12%;
}

#nav-content li {
    padding: 2% 0;
}

/*チェックがついたら表示させる*/
#nav-input:checked ~ #nav-close {
  display: block;
  opacity: .5;
}

#nav-input:checked ~ #nav-content {
  -webkit-transform: translateX(0%);
  transform: translateX(0%);
  box-shadow: 6px 0 25px rgba(0,0,0,.15);
}

.header-logo-menu{
 display: flex;
 display: -moz-flex;
 display: -o-flex;
 display: -webkit-flex;
 display: -ms-flex;
 flex-direction: row;
 -moz-flex-direction: row;
 -o-flex-direction: row;
 -webkit-flex-direction: row;
 -ms-flex-direction: row;
 float: right;
}

.namesp {
    text-decoration: none;
    font-size: 3rem;
    cursor: pointer
}


/* animation */
.hover9 {
  display: inline-block;
  position: relative;
  text-decoration: none;
  transform-origin: center;
}

.hover9::after {
  position: absolute;
  content: '';
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background: #FFF;
  transition: all 0.3s ease 0s;
}
.hover9:hover {
  cursor: pointer;
}
.hover9:hover::after {
  width: 100%;
}


/* mobile */ 
.pc { display: none !important; }
.sp { display: block !important; }


 
@media only screen and (min-width: 768px) {
.pc { display: block !important; }
.sp { display: none !important; }
}


</style>