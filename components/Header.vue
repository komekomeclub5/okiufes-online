<template>
    <header>
        <div class="container">
            <div class="logo">
                <Nuxtlink to="/" class="logo-name">OKIU Fes.</Nuxtlink>
            </div>
            <div class="nav">
                <Nuxtlink to="/" class="name">イベントについて</Nuxtlink>
                <Nuxtlink to="/" class="name">SNS</Nuxtlink>
                <Nuxtlink to="/" class="name">団体紹介</Nuxtlink>
                <Nuxtlink to="/" class="name">感染症対策について</Nuxtlink>
                <Nuxtlink to="/" class="name">お問い合わせ</Nuxtlink>
            </div>
        
        </div>
    </header>
</template>

<style>
header {
    position: absolute;
    top: 0;
    padding: 15px 0;
    width: 100%;
    z-index: 10;
    background: rgba(0,0,0,0.2);
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
    font-size: 20px;
    text-decoration: none;
}
.name {
    margin: 0 10px;
    text-decoration: none;
}
header a:visited {color: inherit;}
</style>