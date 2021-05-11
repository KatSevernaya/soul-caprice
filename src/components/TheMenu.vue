<template>
   <section class="catalog">
            <ul class="catalog__list">
                <li class="catalog__item">
                    <a href="" class="catalog__link" @click.prevent="active">УКРАШЕНИЯ</a>
                </li>
                <li class="catalog__item">
                    <a href=""  class="catalog__link" @click.prevent="active">СУМКИ</a>
                </li>
                <li class="catalog__item">
                    <a href="" class="catalog__link" @click.prevent="active">АКСЕССУАРЫ</a>
                </li>
                <li class="catalog__item">
                    <a href="" class="catalog__link" @click.prevent="active">ПОДАРКИ</a>
                </li>
                <li class="catalog__item sale">
                    <a href="" class="catalog__link" @click.prevent="active">SALE</a>
                </li>
                <li class="catalog__item">
                    <a href="" class="catalog__link" @click.prevent="active">КРАСОТА</a>
                </li>
                <li class="catalog__item">
                    <a href="" class="catalog__link" @click.prevent="active">ИНСТА ШОППИНГ</a>
                </li>
                <li class="catalog__item">
                    <a href="" class="catalog__link" @click.prevent="active">УСЛУГИ</a>
                </li>
                <li class="catalog__item">
                    <a href="" class="catalog__link" @click.prevent="active">ТОВАРЫ ДО 2000 РУБЛЕЙ</a>
                </li>
                <li class="catalog__item">
                    <a href="" class="catalog__link" @click.prevent="active" >ДИЗАЙНЕРЫ</a>
                </li>
                <li class="catalog__item" @click="isSearchOpen= !isSearchOpen">
                    <img src="../img/search.png" alt="">
                </li>
            </ul>
            <div class="menu__search" v-if="isSearchOpen">
                <input class="catalog__input" type="text"  :value="text" @input="text = $event.target.value">
                <button class="button input-button"  @click.prevent="searchButton">Найти</button>
               
            </div>
    </section> 
</template>

<script>
import { mapGetters,  } from 'vuex'
export default {
    data() {
        return {
            isSearchOpen: false,
            inputSearch: '',
            text: ''
        }
    },
    methods: {
       
        searchButton(event) {
            this.$store.state.searchArray = []
            const inputValue = document.querySelector('.catalog__input').value
            this.PRODUCTS.forEach(product => {
                console.log(this.text)
                if (product.title.toLowerCase().indexOf(this.text.toLowerCase) === 0) {
                    this.$store.state.searchArray.push(product)
                }
            })
            document.querySelector('.catalog__input').value = ''
        },
        active(e) {
            const linkArray = document.getElementsByClassName('catalog__link')
            linkArray.forEach((el)=> {
                if(el.classList.contains('active')) {
                    el.classList.remove('active')
                }
            })
            e.target.classList.add('active')
            console.log(e)

        }
    },
    computed: {
         ...mapGetters([
            'PRODUCTS'  
        ]),
        isInputSearch() {
            return this.text
        }
    },
    watch: {
        isInputSearch(newInput, oldInput, event) {
            this.$store.state.searchArray = []
            this.PRODUCTS.forEach(product => {
                if (product.title.toLowerCase().indexOf(newInput.toLowerCase()) === 0) {
                    this.$store.state.searchArray.push(product)
                }
            })
        }
    }
}
</script>

<style lang="scss" scoped>
    .catalog{
         border-bottom: solid 1px #cccccc;
         padding: 0 calc((100% - 1200px) / 2);
         display: block;
    }
    .catalog__list{
        height: 90px;
        margin:  0;
        display: flex;
        align-items: center;
        list-style: none;
        justify-content: space-between;
        padding: 0;
        flex-wrap: wrap;
       
       
    }
    .catalog__item{
        position: relative;
        margin: 5px 10px;
        cursor: pointer;
        a {
            text-decoration: none;
            color: #000000;
            font-weight: 700;
            font-size: 13px;
        }
        
        
    }
    .sale a{
        color: #d11b49;
    }
    .active{
        position: relative;
        &::after{
                position: absolute;
                content: '';
                display: block;
                width: 100%;
                height: 2px;
                bottom: -5px;
                background-color: #000000;
                transform: scale(1);
                transition: all 0.5s;
        }
                
    }
    .catalog__input {

        border: solid 1px #ccc;
        width: 200px;
        height: 25px;
        box-shadow: 0 0 15px 3px rgba($color: #ccc, $alpha: .5);
        margin: 10px 10px 0;

    }
    .menu__search {
        display: flex;
        justify-content: flex-end;
        margin-bottom: 15px;
        margin-top: 0;
    }
    .input-button {
        height: 30px;
        margin: 10px 10px 0;
        border: solid 1px #000000;
        text-transform: uppercase;
        padding: 0;
    }
  
    /* Small Devices, Tablets */
    @media only screen and (max-width : 768px) {
        .catalog__item {
            margin:0 5px;
            a {
                font-size: 14px;
            }
        }
    }
    @media only screen and (max-width : 380px) {
        .catalog__list {
           height: 130px;
        }
    }
    
</style>