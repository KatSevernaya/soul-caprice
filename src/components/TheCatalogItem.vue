<template>
    <div class="the-catalog-item">
        <img :src="require('../img/' + product_item.img)" alt="">
        <h3>{{product_item.title}}</h3>
        <p class="the-catalog-item__designer">{{product_item.designer}}</p>
        <p class="the-catalog-item__price">{{product_item.price}} ₽</p>
    </div>
</template>

<script>

export default {
    props: {
        product_item: {
            type: Object,
            default() {
                return {}
            }

        }
    }
}
</script>

<style lang='scss' scoped>
.the-catalog-item{
    font-family: 'Roboto', sans-serif;
    flex: 0 0 calc( 25% - 30px );
    max-width: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
   img{
       max-width: 300px;
   }
    h3 {
        font-weight: 700;
        text-align: center;
        min-height: 46px;
    }

}
.the-catalog-item__designer{
    font-weight: 300;
}

/* Small Devices, Tablets */
@media only screen and (max-width : 768px) {
    .the-catalog-item {
        padding: 10px;
        flex: 0 0 calc( 50% - 20px);
        img {
        width: 130px;
        margin: 7px 0;
        }
        h3, p {
            font-size: 14px;
            margin: 7px 0;
        }
    }
}

</style>