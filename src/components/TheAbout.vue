<template>
    <section class="about">
        <ul class="about__list">
            <li class="about__item" v-for="link in links">{{link}}</li>
        </ul>
        <div class="about__social">
            <div class="about__social-img">
                <img src="../img/facebook.png" alt="">
            </div>
            <div class="about__social-img">
                <img src="../img/vk.png" alt="">
            </div>
            <div class="about__social-img">
                <img src="../img/instagram.png" alt="">
            </div>
        </div>
    </section>
</template>

<script>
export default {
 data() {
     return {
         links: ['О нас', 'MIR-SOUL: Философия бренда','MIR-SOUL: Наша команда','Дизайнеры','Контакты','Оплаты и доставка','Обмен и возврат','Бонусные карты','Блог']
     }
 }
}
</script>

<style lang="scss" scoped>
    .about {
        padding: 50px calc((100% - 1200px) / 2) 35px;
        display: block;
        border-top: solid 1px #ccc;
    }
    .about__list{
        list-style: none;
        display: flex;
        flex-wrap: wrap;
        margin: 0;
        padding: 0;
        margin-bottom: 50px;
    }
    .about__item {
        margin: 10px;
        font-size: 15px;
    }
     .about__social {
        padding: 10px;
       display: flex;
       justify-content: start;
       align-items: center;
      
     }
     .about__social-img {
          margin-right: 30px;
     }
     @media only screen and (max-width : 1200px) {
    .about {
        padding: 0 10px;
    }
}
    @media only screen and (max-width : 768px) {
        .about__list {
            margin-bottom: 20px;
        }
        .about__item {
            font-size: 13px;
        }
    }
</style>