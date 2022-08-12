<template>

    <!-- NAVBAR -->
    <nav class="navbar">

        <div class="menu">
            <span class="material-icons">menu</span>
        </div>

        <div class="painel">
            <ul>

                <li class="painel-item">
                    <span class="painel-item-text">home</span>
                </li>

                <li class="painel-item">
                    <span class="painel-item-text">skills</span>
                </li>

                <li class="painel-item">
                    <span class="painel-item-text">projetos</span>
                </li>

                <li class="painel-item">
                    <span class="painel-item-text">mais</span>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>

let link =  [
                {
                    rel: "stylesheet",
                    href: 'https://fonts.googleapis.com/icon?family=Material+Icons'
                }
            ]

export default {

    head() {
        return {
            link
        }
    }
}
</script>

<style>

.navbar {

    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 100%;
    height: 100%;
    align-items: center;
}

.menu {

   justify-self: flex-start;
   font-size: 20pt;
}

/*  ul  */
.painel {
    
    justify-self: flex-end;
    padding: 0; margin: 0;
}

.painel > ul {
    display: flex;
}

/*  li  */
.painel-item {

    width: 100%;
    padding: 0 20pt;

    list-style-type: none;
}

/*  span  */
.painel-item-text {


    font-family: 'Courier Prime', monospace;
    color:rgb(111, 111, 111);
    cursor: pointer;
    font-size: 14pt;

    transition: 150ms;

    border-bottom: 1px solid rgba(249, 249, 249, 0);
}

.painel-item-text:hover {
    color: rgb(25, 145, 215);
    border-bottom: 1px solid rgb(25, 145, 215);
    transition: 150ms;
}

</style>

