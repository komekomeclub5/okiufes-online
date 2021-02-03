<template>
  <article>
    
    <div class="container">
        <div class="page-head">
            <p>団体紹介</p>
            <h2>{{circle.title}}</h2>
        </div>
        <dl>
            <dt>date</dt>
            <dd>{{circle.date}}</dd>
        </dl>
        <div><img :src="circle.image" /></div>
        <div v-for="tag in circle.tags" :key="tag">{{tag}}</div>

        <nuxt-content :document="circle" />
    </div>
    
  </article>
</template>

<script>
export default {
  async asyncData ({ $content, params }) {
    const circle = await $content('circle', params.slug || 'index').fetch()
    return { circle }
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