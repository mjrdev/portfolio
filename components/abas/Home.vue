<script>
    import script from './scripts/mainbody.js'
    export default script
</script>


<template>
    <div class="main-bg content">
        <div class="titles">
            <div>
                <h1>
                    Olá!
                    Bem vindo,<br>
                    Sou {{user.name}} &#x1F60E;
                </h1>
                <h1 class="title2">FullStack Developer 👨‍💻</h1>
            </div>
            <a class="github" href="https://github.com/mjrdev" target="_blank">
                github.com/mjrdev
            </a>
        </div>

        <div class="perfil">
            <img src="https://avatars.githubusercontent.com/u/52384586?v=4" alt="avata">
        </div>

        <div class="machinewrite">
            <h1 class="languages">{{ language }}</h1>
        </div>
    </div>
</template>

<style lang="scss" scoped>

@import '~assets/sass/theme';
@import '~assets/sass/app-sizes';

.main-bg {
    height: $home-height;
}

.content {
    
    display: grid;
    grid-template-columns: 2fr 1fr;
    grid-template-rows: 50vh 15vh;
    grid-template-areas:
    "titles image"
    "language language";
}

.titles {
    color: #4C527A;
    grid-area: titles;
    display: flex;
    flex-direction: column;

    align-items: center;
    justify-content: center;
    text-align: left;
    line-height: 45pt;

    h1 {

        padding: 0; margin: 0;
        font-family: 'Montserrat', 'Arial', sans-serif;
        font-size: 2.2rem;
        color: $color-secundary;
        font-weight: 900;
        font-stretch: ultra-expanded;
    }
    .title2 {

        padding: 0; margin: 0;
        font-family: 'Montserrat', 'Arial', sans-serif;
        font-size: 40pt;
        color: $color-primary;
        font-weight: 700;
    }

    .github {
        color: $color-secundary;
    }
}

.perfil {
    grid-area: image;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
        height: 35vh;
        border-radius: 30% 0 30% 0;
    }
}

.machinewrite {
    grid-area: language;
    display: flex;
    justify-content: center;
    align-items: center;

    .languages {

        padding: 0; margin: 0;

        font-family: 'Montserrat', 'Arial', sans-serif;
        font-size: 100px;
        color: $color-secundary;
        font-weight: 900;
        font-stretch: ultra-expanded;
        letter-spacing: 3pt;
        align-self: center;
        justify-self: center;
    }
}


@media only screen and (max-width: 1200px) {
  .content {
    padding: 0 7vw;
    
  }
}

</style>