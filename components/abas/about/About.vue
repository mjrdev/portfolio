<script>
export default {
    name: 'ok'
}    
</script>

<template>
<div class="container-about" data-aos="fade-up">
    <div class="content">
        <h1 align="center" class="title-namw">Manoel Gomes Lindoso Júnior</h1>
        <img class="img" src="https://avatars.githubusercontent.com/u/52384586?v=4" alt="" width="250px">
        <p class="text">
            <h3>Sobre</h3>
            <p>Olá, tenho 20 anos de idade, apaixonado por tecnologia. Sou Programador, tive meu primeiro contato com programação aos 14 anos, com a linguagem JAVA, porém por falta de recursos e objetos de estudo, tive que pausar.
            Porém aos 16 anos retornei aos estudos agora em PHP e Python, porém pelos recursos de hardware limitados novamente acabei migrando para o Javascript, onde pude me desenvolver e me estabelecer até hoje. Há quase 4 anos venho estudando e me desenvolvendo para entregar o melhor do meu trabalho e dedicação.</p>
        </p>
    </div>

    <div class="contact">
        <h2>Me enviei um email: </h2>
        <input class="input-email" type="email" src="" alt="email" placeholder="Seu Nome">
        <input class="input-email" type="text" src="" alt="email-body" placeholder="Email">
        <textarea class="input-text" name="content" id="" col="15" rows="10" placeholder="Fale comigo"></textarea>
        <button class="btn-send">Enviar</button>
    </div> 

    <div class="more">
        <a class="download">
        Currículo
        <span class="material-symbols-outlined">picture_as_pdf</span>
        </a>
    <a class="to-top"> voltar ao início </a>
    </div>
</div>
</template>
<style lang="scss">
@import 'style';
@import 'header-devices';
</style>