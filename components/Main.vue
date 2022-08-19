<template>
<div id="portfolio">
    <div id="home">
        
        <header class="header-extended">
            <Header/>
        </header>
        <header :class="{ 'header-contract': true, 'header-contract-active': scrollY >= 250 }">
            <Header/>
        </header>

        <div class="back-header"></div>
        <main>
            <Home/>
        </main>
    </div>
    <div id="skills">
        <Skills/>
    </div>
    <div id="projects">

    </div>

    <div id="more">

    </div>
</div>
</template>
<script>
import index from './scripts/index.js'

export default index
</script>
<style>

header {
    background-color: white;
}

.header-extended {
    padding: 0 14vw;
    height: 20vh;
}

.header-contract {

    transition: 700ms;

    top: 0;
    width: 72vw;
    height: 10vh;
    padding: 0 14vw;
    position: fixed;
    transform: translate(0vw, -10vw);
}

.header-contract-active {
    opacity: 100;
    transform: translate(0, 0vw);
}

#home, #portfolio, main {
    transition: .5s;
}

main {
    height: 80vh;
}

@media only screen and (max-width: 1200px) {
  header {
    padding: 0 7vw;
  }
}

@media only screen and (max-width: 900px) {
    header .painel {
        display: none;
    }
}

#skills {
    height: 400px;
    background-color: darkgoldenrod;
}

#projects {
    height: 400%;
    background-color: cadetblue;
}

#more {
    height: 400px;
    background-color: darkmagenta;
}
</style>