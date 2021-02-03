<template>
  <div>
      <div class="container">
            <div class="page-head">
              <h2>お知らせ</h2>
            </div>
            
            <div v-for="n in news" :key="n.slug" class="news-lists">
                <nuxt-link :to="'/news/'+ n.slug" class="news-contents"> {{n.date}}　{{n.title}}</nuxt-link>
            </div>
      </div>
    
  </div>
</template>

<script>

export default {
  async asyncData ({ $content, params }) {
    const query = await $content('news' || 'index').limit(15)
    //const news = await $content('contents' || 'index').where({ tags: 'news' }).fetch(15)
    const news = await query.fetch()
    return { news }
  }
}
</script>

<style>
.page-head {
    padding: 10rem 0 5rem 0;
}
.news-lists a{
    text-decoration: none;
    color: #000;
}

</style>