<script>
export default {
    name: 'SkillStatus',
    props: {
        skill: Object,
    }
}
</script>

<template>
    <div class="item-skill">
        <h3>{{ skill.name }}</h3>
        <span class="progress-bar"></span>
    </div>
</template>

<style scoped lang="scss">
@import '~assets/sass/theme'; @import '~assets/sass/fonts';
.item-skill {
    opacity: 0;
    
    width: 30%; height: 0px;
    transform: scale(0.1);

    background-color: $white;
    box-shadow: 0px 0px 5px rgba(61, 61, 61, 0.5);
    border-radius: 5px;
    display: flex;
    position: relative; left: 10px;

    transition: .30s;

    display: flex; flex-direction: column; justify-content: center; align-items: center;

    .progress-bar {
        width: 100%; height: 0.3rem;
        border-radius: 1.5rem;
        background-color: aqua;
    }
}

.item-explaned {
    opacity: 100;
    transform: scale(1.3);
    height: 3rem;
    padding: 0.3rem 0.6rem;
}

</style>