<script>
import skills from '../skills';

export default {
    data() {
        return {
            itemExplane: false,
            itemSelected: 0
        }
    },
    props: {
        skills: Object,
    }
}
</script>
<template>
    <div class="container-skill-item">
        <h1 class="title">{{skills.title}}</h1>

        <!---->
        <ul class="list">
            <li class="item" v-for="(item, index) in skills.items">
                <img class="image-item"
                :alt="item.name"
                :src="item.urlIcon"
                @mouseleave="itemExplane = false"
                @mouseover="() => {
                    itemSelected = index
                    itemExplane = true
                }"
            >
            </li>
        </ul>

        <div :class="{ 'item-skill': true, 'item-explaned':itemExplane }">
            {{skills.items[itemSelected].name}}
            <span class="progress-bar"></span>
        </div>
    </div>
</template>

<style scoped lang="scss"> @import './SkillElement.scss'; </style>