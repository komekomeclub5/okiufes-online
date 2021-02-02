<template>
  <div>
    <Header />
    <main>
      <Nuxt />
    </main>
    <Footer />
  </div>
</template>

<script>
  import Header from "@/components/Header.vue"; // headerをインポート
	import Footer from "@/components/Footer.vue"; // footerをインポート
	export default {
		components: {
			Header,
			Footer
		}
	};
</script>

<style>
html {
  font-family:
    'Montserrat',
    'Noto Sans JP';
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}

main {
    min-height: 600px;
    margin: 0 auto;
    background-color: #fff;
    font-size: 1.6rem;
  }
  
h1 {
  font-size: 8rem;
}
h2 {
  font-size: 4.8rem;
}
h3 {
  font-size: 2.4rem;
}
p {
  font-size: 1.6rem;
  letter-spacing: 0.5px;
  font-weight: 500;
}

@media screen and (min-width: 1025px) {
    html {
        font-size: 62.5%;
    }
}
@media screen and (max-width: 1024px) {
    html {
        font-size: 50%;
    }
}
@media screen and (max-width: 770px) {
    html {
        font-size: 50%;
    }
}
@media screen and (max-width: 425px) {
    html {
        font-size: 50%;
    }
}
@media screen and (max-width: 320px) {
    html {
        font-size: 40%;
    }
}
</style>
