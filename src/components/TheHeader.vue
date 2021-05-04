<template>
<header>
    <div class="header__wrap">
    <div class="header__left">
        <div class="header__logo">
            <img src="../img/logo.png" alt="">
        </div>
        <div class="header__item">
            <a href="tel:+7(977)9245240">+7(977)924-52-40</a>
        </div>
        <div class="header__item hide">
            <a href="#">Обратный звонок</a>
        </div>
    </div>
    <div class="header__rigth">
        <div class="header__item ">
            <img class="header__icon" src="../img/cabinet.png" alt="">
            <a class="hide" href="#" >Личный кабинет</a>
        </div>
        <div class="header__item">
            <img  class="header__icon" src="../img/like.png" alt="">
        </div>
        <div class="header__item cart">
            <img class="header__icon" src="../img/cart.png" alt="">
            <div class="circle">
                <p>1</p>
            </div>
        </div>
    </div>
    </div>
</header>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
header {
    background: black;
    color: white;
    display: flex;
    justify-content: center;
    font-family: 'Roboto', sans-serif;
    a {
        color: white;
        text-decoration: none;
    }
}
.header__wrap {
    width: 1200px;
    margin: 10px;
}
.header__wrap, .header__left, .header__rigth, .header__item {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.header__item{
    margin: 10px;
}
.cart{
    position: relative;
    .circle {
        content: '';
        position: absolute;
        right: 0;
        top: 0;
        background-color: #d11b49;
        width: 25px;
        height: 25px;
        border-radius: 50%;
        transform: translate(50%, -50%);
        display: flex;
        align-items: center;
        justify-content: center;
        
        p {
            padding: 0;
            margin: 0;
            text-align: center;
        }
    }
}

/* Small Devices, Tablets */
@media only screen and (max-width : 768px) {
 .header__wrap{
     margin: 5px;
 }
 .hide {
     display: none;
 }
 

}

@media only screen and (max-width : 420px) {
     .header__wrap{

     font-size: 12px;
 }
    .header__logo img, .header__icon{
        transform: scale(.7);
    }
     .header__item{
     margin: 5px;
     }
     .cart .circle {
         width: 20px;
         height: 20px;
     }
}
</style>