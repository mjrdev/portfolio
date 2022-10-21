<script>
export default {
    name: 'ok',
    data() {
        return {
            form: {
                name: '', email: '',body: '',
            },
            messageConf: false
        }
    },
    methods: {
        sendMail(e) {
            e.preventDefault();
            
            let regex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.[a-z]?$/i;

            if(this.form.name.length === 0 || this.form.email.length === 0 || this.form.body.length == 0 || regex.test(this.form.email)) {
                return
            }
            fetch("https://formsubmit.co/ajax/jrgomesdev@gmail.com", {
                method: "POST",
                headers: { 
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    name: this.form.name,
                    email: this.form.email,
                    message: this.form.body
                })
            })
            .then(response => response.json())
            .then(data => {
                this.messageConf = true;
                setTimeout(() => {
                    this.messageConf = false
                } ,5000)
            })
            .catch(error => {
              console.error(error)
            });
            }
    }
}    
</script>

<template>
<div class="container-about" data-aos="fade-up">
    <div class="content">
        <h1 align="center" class="title-namw">Manoel Gomes Lindoso Júnior</h1>
        <img class="img" src="https://avatars.githubusercontent.com/u/52384586?v=4" alt="" width="250px">
        <p class="text">
            <h3>Sobre</h3>
            <p>Olá, Sou Manoel Júnior, atualmente tenho 20 anos de idade sou Programador Júnior. Minha primeira experiência como programador foi aos 14 anos com Java, porém por falta de recursos acabei parando, aos poucos fui retornando aos estudos de programação, onde aprendi os meus primeiros códigos usando linguagens como PHP e Python. Foi no começo de 2019 onde pude me empenhar nos estudos de programação onde tive como principal linguagem de estudo o JavaScript e seus Frameworks.
            <a href="https://www.linkedin.com/in/mjrdev/">linkedIn</a>
            </p>
        </p>
    </div>

    <form class="contact" v-on:submit="sendMail">
        <h2>Me enviei um email: </h2>
        <input class="input-email" type="name" name="name" placeholder="Seu Nome" required v-model="form.name">
        <input class="input-email" type="email" name="email" placeholder="Email" required v-model="form.email">
        <textarea class="input-text" name="message" col="15" rows="10" placeholder="Fale comigo" required v-model="form.body"></textarea>
        <button type="submit" class="btn-send">Enviar</button>
        <div class="message" v-if="messageConf">Messagem enviada com sucesso</div>
    </form> 

    <div class="more" data-aos="fade-up">
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