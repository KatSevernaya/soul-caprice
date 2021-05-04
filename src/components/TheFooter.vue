<template>
    <footer>
        <div class="container">
            <p>© 2020 SOUL-CAPPRICE</p>
            <a href="#" class="footer__middel-link">Условия использования</a>
            <a href="#">Соглашение о конфединиальности</a>
        </div>
    </footer>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
    footer {
        background-color: #e5e5e5;
        
    }
    .container {
        padding: 0 calc((100% - 1200px) / 2);
        display: flex;
        justify-content: space-between;
        height: 135px;
        align-items: center;
        flex-wrap: wrap;

        p, a{
            color: #0d0d0d;
            font-size: 13px;
            font-family: 'Montserrat', sans-serif;
            margin: 0;
        }
        a {
            text-decoration: none;
        }
    }

    .footer__middel-link {
        margin-left: auto;
        margin-right: 20px;
    }
@media only screen and (max-width : 1200px) {
    .container {
        padding: 0 10px;
    }
}
@media only screen and (max-width : 768px) {
    .container {
        height: 90px;
        flex-direction: column;
        justify-content: space-around;
        p, a{
            font-size: 11px;
        }
    }
     .footer__middel-link {
        margin: 0;
    }
}
</style>