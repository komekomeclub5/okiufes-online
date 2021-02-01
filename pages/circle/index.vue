<template>
  <div>
      <div class="container">
            <div class="page-head">
                <h2>団体紹介</h2>
            </div>
            
            <div v-for="n in news" :key="n.slug" class="news-list">
                <nuxt-link :to="'/news/'+ n.slug" class="news-contents">{{n.title}} {{n.date}}</nuxt-link>
            </div>
      </div>
    
  </div>
</template>

<script>

export default {
  async asyncData ({ $content, params }) {
    const query = await $content('circle' || 'index').limit(15)
    const news = await query.fetch()
    return { news }
  }
}
</script>

<style>
.page-head {
    padding: 10rem 0 5rem 0;
}
.news-list a{
    text-decoration: none;
}

</style>