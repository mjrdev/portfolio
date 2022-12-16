<script>
export default {
  name: "Formation"
}
</script>
<template>
  <div class="formations">
    <h1 class="title-formations">Formação e Certificações</h1>

    <div class="formation">
      <span class="material-symbols-outlined icon-formation">
        school
      </span>
      <div class="infos">
        <h5>UNOPAR (Universidade do Norte do Paraná)</h5>
        <h3>Análise e Desenvolvimento de Sistemas</h3>
        <h5>12/2022 - 12/2024</h5>
      </div>
    </div>

    <div class="certifications">

      <div class="certification">
        <span class="material-symbols-outlined icon-formation icon">
          badge
        </span>
        <h5>
          Desenvolvimento Web com PHP, Laravel, SQL e VueJs
          <p>Udemy</p>
        </h5>
      </div>
      <div class="certification">
        <span class="material-symbols-outlined icon-formation icon">
          badge
        </span>
        <h5>
          Certificado Fundamentos da Programação, Computadores e Internet
          <p>Rocketseat</p>
        </h5>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import '~assets/sass/theme';
@import '~assets/sass/app-sizes';
@import '~assets/sass/fonts';

.formations {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    justify-items: center;
    margin: 2rem 0;
    width: 60%;
    

    .title-formations {
      font-family: $font-primary, sans-serif;
      margin-bottom: 2rem;
      font-size: 30pt;
      color: $color-secundary;
    }

    .formation {
      height: 7rem;
      width: 50%;
      border: 2px solid $color-primary;
      border-radius: 10px;
      display: flex; justify-content: space-around; align-items: center;
      padding: 1rem;

      .icon-formation {
        font-size: 4.3rem;
        color: $color-primary;
      }

      .infos {
        justify-self: flex-start;

        h5, h3 {
          margin: 0;
          line-height: 1.5rem;
        }
      }
    }

    .certifications {
      display: flex; justify-content: center; flex-wrap: wrap;
      align-items: center;
      margin: 2rem 0;
      width: 80%;
      gap: 1rem;

      .certification {
        width: 40%;
        border: 2px solid $color-primary;
        border-radius: 10px;
        padding: 0.2rem;
        height: 3.4rem;

        display: flex; justify-content: space-between; align-items: center;

        .icon {
          font-size: 2rem;
          color: $color-primary;
          width: 15%;
          text-align: center;
        }

        h5 {
          width: 85%;
          margin: 0;
          font-size: 9pt;
          font-weight: 800;
          line-height: 0.9rem;

          p {
            margin: 0;
            font-size: 9pt;
            color: $color-primary;
          }
        }
      }
    }

  @media only screen and (max-width: $md) {
    .formation {
      width: 90%;

      .formation {
        width: 100%;
      }
    }

    .certifications {
      flex-direction: column;

      .certification {
        width: 100%;
      }
    }
  }
}
</style>
