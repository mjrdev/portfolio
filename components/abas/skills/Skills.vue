<script>
import { mapState } from 'vuex'
import skills from './skillsScript.js'

export default {
    data() {
        return {
            skills,
            boxSkill: true
        }
    },
    methods: {
    }
}
</script>


<template>
    <div class="skill">
        <h1 class="title" data-aos="fade-up">Minhas Habilidades</h1>
        
        <div class="skill-container">
            <ul class="list" v-for="(skill, index) in skills">
                <li class="item" v-for="(item, index) in skill.items" data-aos="fade-up">
                    <i :class="[ `${item.classIcon}`, 'icon' ]"
                    @mouseleave="itemExplane = false"
                    @mouseover="() => {
                        itemSelected = index
                        itemExplane = true
                    }"></i>
                    <p>{{item.name}}</p>
                </li>
            </ul>
        </div>
    </div>
</template>



<style scoped lang="scss">
@import 'styles';
@import 'skill-devices';
</style>