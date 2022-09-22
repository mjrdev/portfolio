<script>
import SkillStatus from './SkillStatus'

export default {
    components: { SkillStatus },
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
    <div class="container-skill-item" data-aos="fade-up">
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

        <SkillStatus :class="{ 'item-explaned':itemExplane }" :skill="skills.items[itemSelected]"/>
    </div>
</template>

<style scoped lang="scss"> @import './SkillElement.scss'; </style>