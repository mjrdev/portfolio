<template>
<div id="portfolio">
    <div id="home">
        <header>
            <Header/>
        </header>
        <main>
            <Home/>
        </main>
    </div>
    <div id="skills">
        <Skills/>
    </div>
</div>
</template>
<script>
import Header from "./abas/Header.vue";
import Home from "./abas/Home.vue";
import Skills from "./abas/Skills.vue";
export default {
    components: { Header, Home, Skills }
}
</script>
<style>
#home {
    display: grid;
    grid-template-areas: "h"
                        "m";
    grid-template-columns: 1fr;
    grid-template-rows: 20vh 80vh;
}

header {
    padding: 0 14vw;
}

header {
    grid-area: h;
}

main {
    grid-area: m;
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
</style>