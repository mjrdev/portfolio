<script>
import menuScript from './menuScript.js'

export default menuScript
</script>

<template>
<div>
  <div class="btn-icon-menu" @click="changeMenu()">
    <span class="material-symbols-outlined">
      menu
    </span>
  </div>

      
  <div :class="{'menu-hm': true, 'menu-close-hm': !menu, }">
    <div class="btn-icon-close" @click="changeMenu()">
      <i class="material-icons">close</i>
    </div>

    <ul class="abas">
      <li v-for="aba in abas" class="aba-item">
        <a>{{aba.content}}</a>
      </li>
    </ul>
  </div>

</div>
</template>

<style scoped lang="scss">
@import 'styles/menu.scss';
</style>