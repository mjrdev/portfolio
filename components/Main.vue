<template>
<div id="portfolio">
    <div id="home">
        
        <header class="header-extended app-padding">
            <Header/>
        </header>
        <header :class="{ 'header-contract': true, 'header-contract-active': scrollY >= 250}">
            <Header/>
        </header>
        <div class="backheader"></div>

        <main data-container-item="main">
            <Home/>
        </main>
    </div>
    <div id="skills" data-container-item="skill">
        <Skills/>
    </div>
    <div id="projects" data-container-item="projects">
        <Projects/>
    </div>

    <div id="more" data-container-item="more">

    </div>
</div>
</template>
<script>
import index from './mainScript.js'

export default index
</script>
<style lang="scss">

@import '~assets/sass/app-sizes';
@import '~assets/sass/theme';

header {
    background-color: white;
    
}

.header-extended {
    height: $header-height-extended;
}

.header-contract {

    transition: 700ms;

    top: 0;
    width: $app-area;
    padding: 0 $app-padding;
    height: $header-height-contract;
    position: fixed;
    transform: translate(0vw, -10vw);
}

.header-contract-active {
    opacity: 100;
    transform: translate(0, 0vw);
    background-color: rgba(255, 255, 255, 0.849);
}

.header-contract-active:hover {
    background-color: rgb(255, 255, 255);
}

#home, #portfolio, main {
    transition: .5s;
}

main {
}

@media only screen and (max-width: 1200px) {
  header {
    padding: 0 7vw;
  }
}

@media only screen and (max-width: 900px) {
    header .painel {
        //display: none;
    }
}

#skills {
    height: 90vh;
    background-color: $color-primary;
}

#projects {
}

#more {
    height: 400px;
    background-color: $gray-high;
}
</style>