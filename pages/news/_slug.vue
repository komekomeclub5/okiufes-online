<template>
  <article>
    
    <div class="container">
        <div class="page-head">
          <p>お知らせ</p>
          <h2>{{news.title}}</h2>
        </div>
        <dl>
            <dt>date</dt>
            <dd>{{news.date}}</dd>
        </dl>
        <div><img :src="news.image" /></div>
        <div v-for="tag in news.tags" :key="tag">{{tag}}</div>

        <nuxt-content :document="news" />
    </div>
    
  </article>
</template>

<script>
export default {
  async asyncData ({ $content, params }) {
    const news = await $content('news', params.slug || 'index').fetch()
    return { news }
  }
}
</script>

<style>
.page-head {
    padding: 10rem 0 5rem 0;
}
.nuxt-content {
    padding: 5% 0;
}
.nuxt-content h1 {
    font-size: 3.2rem;
    padding: 5px 0;
}
.nuxt-content h2 {
    font-size: 2.4rem;
    padding: 5px 0;
}
.nuxt-content h3 {
    font-size: 1.8rem;
    padding: 5px 0;
}
</style>