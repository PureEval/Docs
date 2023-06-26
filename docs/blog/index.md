<script setup>
  import Article from './ArticleCard.vue'
    import data from './data.json'

</script>

# PureEval Blog

<div v-for="(article, index) in data" :key="index">
  <Article :title="article.title" :excerpt="article.excerpt" :image="article.image" :author="article.Author" :href="article.path" />
</div>  