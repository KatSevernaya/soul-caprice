<template>
<section class="the-catalog">
    <div class="the-catalog__breadcrumbs">
        <p>Главная</p>
        <div class="the-catalog__breadcrumbs-arrow">
            <img src="../img/arrow.png" alt="">
        </div>
        <p>Украшения</p>
        <div class="the-catalog__breadcrumbs-arrow" v-if="categoryName">
            <img src="../img/arrow.png" alt="">
        </div>
        <p class="the-catalog__breadcrumbs-product">{{categoryName}}</p>
    </div>
    <div class="the-catalog__banner">
        <img src="../img/banner.jpg" alt="">
        <h3>Весенний Sale<br>скидки до 50%</h3>
    </div>
    <h2>Украшения</h2>
    <div class="the-catalog__handle">
        <the-categories
            :categories="categories"
            @selectCategory="selectCategory"
            :designersArray="designersArray"
            
        >
        
         
        </the-categories>
        <div class="the-filter">
            <the-filter @click="openFilter(), filterIsOpen=!filterIsOpen" ></the-filter>
            <div class="the-filter__wrap" v-if="filterIsOpen">
                <div class="range-title">
                        <p>Ценовой <br>диапазон:</p>
                    </div>
                <div class="the-filter__slide-range" >
                    
                    <div class="range-value-min">
                        <p>{{minPrice}} ₽</p>
                    </div>
                    <div class="the-filter__slides" >
                        <input 
                            type="range"
                            :min="min"
                            :max="max"
                            step="10"
                            v-model.number="minPrice"
                            @change="setRangeSlides"
                        >
                        <input 
                            type="range"
                            :min="min"
                            :max="max"
                            step="10"
                            v-model.number="maxPrice"
                            @change="setRangeSlides"
                        >
                    </div>
                    <div class="range-value-max">
                        <p>{{maxPrice}} ₽</p>
                    </div>
                </div>
                <div class="filter__form-checkbox" >
                    <p> Выберите цвет вставки:</p>
                    <div class="checkbox">
                        <label>
                            <input 
                            class="checkbox-input"
                                type="checkbox" 
                                checked=""
                                v-model="insertColor" 
                                name="insertColor" 
                                value="black"
                                @change="clickCheckbox"
                            />
                                 Черный 
                            </label>
                    </div>
                    <div class="checkbox">
                        <label>
                            <input 
                            class="checkbox-input"
                                type="checkbox" 
                                checked=""
                                v-model="insertColor" 
                                name="insertColor" 
                                value="white"
                                @change="clickCheckbox"
                            />
                                Белый
                            </label>
                    </div>
                    <div class="checkbox">
                        <label>
                            <input 
                                class="checkbox-input"
                                type="checkbox" 
                                checked=""
                                v-model="insertColor" 
                                name="insertColor" 
                                value="pink"
                                @change="clickCheckbox"
                            />
                                 Розовый 
                            </label>
                    </div>
                    <div class="checkbox">
                        <label>
                            <input 
                                class="checkbox-input"
                                type="checkbox" 
                                checked=""
                                v-model="insertColor" 
                                name="insertColor" 
                                value="red"
                                @change="clickCheckbox"
                            />
                                Красный
                            </label>
                    </div>
                    <div class="checkbox">
                        <label>
                            <input 
                                class="checkbox-input"
                                type="checkbox" 
                                checked=""
                                v-model="insertColor" 
                                name="insertColor" 
                                value="blue"
                                @change="clickCheckbox"
                            />
                                 Синий
                            </label>
                    </div>
                    <div class="checkbox">
                        <label>
                            <input 
                                class="checkbox-input"
                                type="checkbox" 
                                checked=""
                                v-model="insertColor" 
                                name="insertColor" 
                                value="green"
                                @change="clickCheckbox"
                            />
                               Зеленый
                            </label>
                    </div>
                    <div class="checkbox">
                        <label>
                            <input 
                                class="checkbox-input"
                                type="checkbox" 
                                checked=""
                                v-model="insertColor" 
                                name="insertColor" 
                                value="none"
                                @change="clickCheckbox"
                            />
                                Без вставки
                            </label>
                    </div>
                </div>
                <button class="button filter-button" @click="canceledFiltraion">СБРОСИТЬ ФИЛЬТРЫ</button>
            </div>
            
        </div>
        
        <the-select
         :options="options"
         @select="optionSelect"
         :selected="selected"
        ></the-select>
    </div>
    
 
     <div class="the-catalog__wrap" v-if="isNoneItems">
         <the-catalog-item 
          
            v-for="product in ifProductSorted"
            :key="product.id" 
            :product_item="product"
        ></the-catalog-item>
     </div>
     <div class="the-catalog__notification" v-else>
         <h3>Увы, такого украшения нет</h3>
     </div>
     <div class="loadmore" v-if="isNoneItems">
         <button 
            class="button btn-active" 
            @click="loadmore"
            :class="{invalid : pages === 1}"
        >
            ЗАГРУЗИТЬ ЕЩЕ
         </button>
     </div>
     <div class="the-pagination" v-if="isNoneItems">
        <div class="the-pagination__buttons" v-if="pages > 1" >
            <button 
                class="btn"
                v-for="p in pagination.pages" 
                @click="setActiveButton($event); setPage(p);"
                :key="p"
            >
                {{ p }}
            </button>
        </div>
    </div>
</section>

</template>

<script>
import TheCatalogItem from './TheCatalogItem'
import TheCategories from './ThaCategories'
import ThePagination from './ThePagination'
import TheFilter from './TheFilter'
import TheSelect from './TheSelect'
import {mapActions, mapGetters} from 'vuex'
export default {
    components: { TheCatalogItem, TheSelect, TheCategories, TheFilter, ThePagination },
    data() {
        return{
            options: [
                {name: 'Сначала популярные', value: 'popular'},
                {name: 'Сначала недорогие', value: 'cheap'},
                {name: 'Сначала дорогие', value: 'expensive'}
            ],
            selected: 'сначала популярные',
            sortedProducts: [],
            categoriedProduct: [],
            categories: [
                {name: 'Все', value: 'All', isSubcategoryOpen: false},
                {name: 'Браслеты', value: 'Bracelet', isSubcategoryOpen: false},
                {name: 'Подвески', value: 'Necklace', isSubcategoryOpen: false},
                {name: 'Серьги', value: 'Earring', isSubcategoryOpen: false},
            ],
            minPrice: null,
            maxPrice: null,
            min: null,
            max: null,
            filterIsOpen: false,
            pagination: {},
            page: 1,
            categoryAssigned: false,
            categoryName: '',
            btnActive: false,
            perPageIfLoadMore: null,
            pages: null,
            insertColor: [],
            designersArray: [],
            typeArray: [],
            isNoneItems: true,
            isColorPicked: false
        }
    },

    methods: {
        ...mapActions([
           'getProductsFromApi'
        ]),
        openFilter() {
            let priceArray = []
            this.products.forEach(product => priceArray.push(product.price))
            this.min = Math.min.apply(null, priceArray)
            this.max = Math.max.apply(null, priceArray)
            this.maxPrice = Math.max.apply(null, priceArray)
            this.minPrice = Math.min.apply(null, priceArray)
        },
        optionSelect(option) {
           
            this.selected = option.name
            if (option.value === 'cheap') {
                this.sortedProducts = this.PRODUCTS.sort(function compareNumbers(a, b) {
                    return a.price - b.price
                })
            }
            if (option.value === 'expensive') {
                this.sortedProducts = this.PRODUCTS.sort(function compareNumbers(a, b) {
                    return  b.price - a.price
                })
            }
            if (option.value === 'popular') {
                this.sortedProducts = this.PRODUCTS.sort(function compareNumbers(a, b) {
                    return  a.wasBougth - b.wasBougth
                })
            }

           
           
        },

        selectCategory(category, subcategory) {
            let context = this;
            this.isNoneItems = true
            console.log(this.sortedProducts)
            if (this.categoriedProduct.length === 0) {
                this.sortedProducts = this.products
            } else {
                this.sortedProducts = this.categoriedProduct
                this.categoriedProduct = []
            }
            
            this.sortedProducts = this.sortedProducts.filter(product => {
            return product.price >= context.minPrice && product.price<= context.maxPrice
             })
             console.log(this.sortedProducts)
                 if (this.sortedProducts.length === 0) {
                        this.isNoneItems = false
                         this.openFilter() 
                         this.sortedProducts = this.products
                        
                    } else {
                         this.isNoneItems = true
                     }
             
            if (category) {
                if (this.categoryAssigned) { 
                  this.sortedProducts = this.products  
                }
                if (category.value === 'All') {
                    this.sortedProducts =  this.products
                    
                    this.designersArray = []
                    this.sortedProducts.forEach(product => {
                    this.designersArray.push(product.designer)
                    })
                    this.designersArray = Array.from(new Set(this.designersArray))

                     if(subcategory) {
                            this.sortedProducts =  this.sortedProducts.filter(product => product.designer === subcategory)
                        }
                
                } else {
                    this.sortedProducts =  this.sortedProducts.filter(product => product.type === category.value)
                    this.categoryAssigned = true
                    this.categoryName = category.name
                    
                    
                    this.designersArray = []
                    this.sortedProducts.forEach(product => {
                    this.designersArray.push(product.designer)
                    })

                    this.designersArray = Array.from(new Set(this.designersArray))
                        if(subcategory) {
                            this.sortedProducts =  this.sortedProducts.filter(product => product.designer === subcategory)
                        }
                    }
            console.log(this.sortedProducts) 
             this.categoriedProduct = this.sortedProducts
             this.setPage(this.page)
            }
    
            
            
        },
         setRangeSlides() {
        if (this.minPrice > this.maxPrice) {
            let tmp = this.maxPrice
            this.maxPrice = this.minPrice
            this.minPrice = tmp
        }
        
        this.selectCategory()
           
    },
    setPage(p) {
            if (this.sortedProducts.length === 0) {
                this.pagination = this.paginator(this.PRODUCTS.length, p)
            } else {
                this.pagination = this.paginator(this.sortedProducts.length, p)
            }
            
            this.page = p
        },
    setActiveButton(event) {
            const btnArray = document.getElementsByClassName('btn')
             btnArray.forEach(btn => {
                 if (btn.classList.contains('btn-active')) {
                     btn.classList.remove('btn-active')
                 } 
             })
           event.target.classList.add('btn-active')

    },
    paginate(data) {
            return _.slice(data, this.pagination.startIndex, this.pagination.endIndex +1 )
    },
    paginator(totalItems, currentPage) {
            let startIndex = (currentPage - 1) * this.perPageIfLoadMore
            let endIndex = Math.min(startIndex + this.perPageIfLoadMore - 1, totalItems - 1)
            let pages = _.range(1, Math.ceil(totalItems / this.perPageIfLoadMore) + 1)
            this.pages = pages.length

           
            return {
                currentPage,
                startIndex,
                endIndex,
                pages
            }
    },
     loadmore() {
            if ((this.PRODUCTS.length - (this.perPageIfLoadMore + this.PERPAGE)) >= 0){
            this.perPageIfLoadMore = this.perPageIfLoadMore + this.PERPAGE
            this. setPage(this.page)
            }
        },
    clickCheckbox() {
         if ((this.categoriedProduct.length === 0)&&(this.isColorPicked)) {
                this.sortedProducts = this.products
            } else {
                this.sortedProducts = this.categoriedProduct

            }
        const checkboxedArray = []
        this.isColorPicked = true
        this.sortedProducts.forEach(product => {
            this.insertColor.forEach(color => {
                if (color === product.color) {
                    checkboxedArray.push(product)
                }
            })
        })

        if (checkboxedArray.length === 0) {
            this.isNoneItems = false
        } else {
            this.isNoneItems = true
            
        }
      
        this.setPage(this.page)
    },
    canceledFiltraion() {
        
        this.sortedProducts = this.PRODUCTS
        this.openFilter()
        document.querySelectorAll('.checkbox-input').forEach(checkbox => {
            
            checkbox.checked = false
            console.log(checkbox.checked)
        })
        this.isColorPicked = false

    },
  
   },
    computed: {
        ...mapGetters([
            'PRODUCTS',
            'PERPAGE'
        ]),
        products() {
            return this.$store.getters.PRODUCTS
        },
        ifProductSorted() {
            if (this.sortedProducts.length) {
                
                return this.paginate(this.sortedProducts)
            } else {
                return this.paginate(this.products)
            }
        },
        sortprod() {
            return this.sortedProducts
        },
        searchArray() {
            return this.$store.state.searchArray
        }
    },
    watch: {
        products(newpr, oldpr) {
            this.setPage(this.page)
            this.openFilter()
       

            
  
        },
        sortprod(newpr, oldpr) {
            return this.sortedProducts
        },
        searchArray(newser, oldser) {
            this.sortedProducts = this.$store.state.searchArray
        }
            
       
    },
    created() {
        this.selected = this.options[0].name
        this.perPageIfLoadMore = this.PERPAGE
         
        
    },
     mounted() {
        this.getProductsFromApi()       
    },
    updated() {
        // const btn = document.querySelectorAll('.btn')
        // btn[0].classList.add('btn-active')
    }
}
</script>

<style scoped lang="scss">

.the-catalog{
    display: block;
    padding: 0 calc((100% - 1200px) / 2);
    font-family: 'Roboto', sans-serif;
    h2 {
        font-size: 30px;
        font-weight: 400;
        margin-left: 11px;
    }

}
.the-catalog__handle {
    display: flex;
    align-items: flex-start;
}

.the-catalog__wrap {
    flex: 1 0 70%;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      align-items: stretch;
}
.the-catalog__banner {

    position: relative;
    img {
        max-width: 100%;
        min-height: 90px;
    }
    h3 {
        position: absolute;
        top: 50%;
        right: 50%;
        transform: translate(50%, -100%);
        color: #fff;
        font-size: 30px;
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        letter-spacing: .1em;
        
    }
}
.the-catalog__notification{
    h3{
        font-size: 16px;
        text-align: center;
        margin-top: 30px;
        margin-bottom: 30px;
    }
}
/* Small Devices, Tablets */
@media only screen and (max-width : 768px) {
    .the-catalog__handle {
        display: block;
    }
    .the-catalog__banner h3, .the-catalog h2 {
        font-size: 16px;
        
    }
}

</style>