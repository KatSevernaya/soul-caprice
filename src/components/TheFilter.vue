<template>
    <div class="the-filter">
        <div class="the-filter__title">
            <div class="the-filter__image">
                <img src="../img/filter.png" alt="">
            </div>
            <div class="the-filter__title-text">
                <p>ФИЛЬТРЫ</p>
            </div>
        </div>
        
    </div>
</template>

<script>
export default {
    data() {
        return {
            minPrice: 0,
            maxPrice: 10000
        }
    }
}
</script>

<style lang="scss" scoped>
    .the-filter{
   display: block; 
   cursor: pointer;
   margin-left: 15px;
   
}
.the-filter__title {
    display: flex;
}
.the-filter__image{
    width: 42px;
    height: 40px;
    img {
        margin: 11px;
    }
}
.the-filter__title-text {
        height: 40px;
        padding: auto;
        p {
            margin: 0;
            line-height: 40px;
            font-weight: 700;
            font-size: 14px;
        }
    }
.the-filter__list {
    list-style: none;
    border: solid 1px #cccccc;
    padding: 10px;
    margin: 0;
    border-radius: 3px;
    
}
.the-filter__item{
    p{
        padding: 5px;
        margin: 0;
        font-family: 'Open Sans', sans-serif;
        font-size: 13px;
    }
}

/* Small Devices, Tablets */
@media only screen and (max-width : 768px) {
    .the-filter {
         margin-left: 0;
    }
    .the-filter__title p {
        font-size: 12px;
    }
   
}


</style>