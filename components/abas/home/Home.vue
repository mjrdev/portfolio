<script>
    import script from './homeScript.js'
    export default script
</script>


<template>
    <div class="content " data-aos="fade-up" data-aos-duration="900">
        <div class="titles">
            <h1 class="title-1">
                    Olá!
                    Bem vindo,<br>
                    Sou {{user.name}} &#x1F60E;
                </h1>
            <h1 class="title-2">FullStack Developer</h1>
            <a class="github" href="https://github.com/mjrdev" target="_blank">
                github.com/mjrdev
            </a>
        </div>

        <div class="perfil">
            <img class="" src="https://avatars.githubusercontent.com/u/52384586?v=4" alt="avata">
        </div>
        

        <div class="machinewrite">
            <h1 class="languages">{{ language }}</h1>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import 'styles';
@import 'home-devices';
</style>