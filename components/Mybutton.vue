<template>
    <nuxt-link :to=link class="button" :style="{'background-color': back_color, color: fore_color}"><slot>ボタン</slot></nuxt-link>
</template>

<script>
export default {
  props: {
    back_color: {
        type: String,
        default: "#fff"
    },
    fore_color: {
        type: String,
        default: "#000"
    },
    link: {
        type: String,
        default: "/"
    }
  }
};
</script>

<style>
.button {
    display: inline-block;
    border-radius: 2.2em;
    width: auto;
    box-shadow: 0 0.2em 0.5em rgb(0 0 0 / 20%);
    padding: 1em 2em;
    margin: 5% 0;
    font-weight: bold;
    text-decoration: none;
}

</style>