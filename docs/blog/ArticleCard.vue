<template>
  <div class="card">
    <div class="flex">
      <div class="media">
        <img 
          :src="image" 
          :alt="title"
          class="media-image"
        >
      </div>
      <div class="details">
        <a
          class="article"
          :href="href"
        >
          <h2 class="title">{{ title }}</h2>
          <p class="excerpt">{{ truncateText(excerpt, 60) }}</p>
        </a>
        <div class="author">
          <div>
            <h3 class="name">
              {{ author }}
            </h3>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    excerpt: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    href: {
      type: String,
      required: true,
    },
  },
  methods: {
    truncateText(text, length) {
      if (text.length > length) {
        return text.substring(0, length) + "...";
      }
      return text;
    },
  },
};
</script>

<style scoped>
.card {
  border-radius: 0.5rem;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
  margin-bottom: 1.5rem;
  overflow: hidden;
  width: 100%;
  transition: ease-in-out 0.2s all;
}

.card:hover {
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.25);
}

.flex {
  display: flex;
}

.media {
  width: 30%;
}

.media-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

.details {
  margin-left: 1.2rem;
}

.article {
  text-decoration: none;
}

.title {
  border-top: none;
  margin: 0 0;
}

.name {
  margin: 0 0;
  font-size: 0.7rem;
  color: #999;
}
</style>
