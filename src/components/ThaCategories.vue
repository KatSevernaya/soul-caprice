<template>
    <div class="the-categories">
        <div class="the-categories__title" @click="openCategories">
            <div class="the-categories__image">
                <img src="../img/hamburger.png" alt="">
            </div>
            <div class="the-categories__title-text">
                <p>КАТЕГОРИИ ТОВАРОВ</p>  
            </div>
        </div>
        
        <ul class="the-categories__list" v-if="isOpen">
            <li 
                class="the-categories__item" 
                v-for="category in categories"
                :key="category.value"
                @click.prevent="selectCategory(category, subcategory)"
            >
                <p>{{category.name}}</p>
               
                <the-subcategory 
                    :designersArray="designersArray"
                    :isSubcategoryOpen="isSubcategoryOpen"
                    v-if="category.isSubcategoryOpen"
                    @selectSubcategory="selectSubcategory"

                ></the-subcategory>
            </li>
             
        </ul>
    </div>
</template>

<script>
import TheSubcategory from './TheSubcategory'
export default {
    props: {
        categories: {
            type: Array
        },
        designersArray: {
            type: Array
        }
    },
    emits: ['selectCategory'],
    components: { TheSubcategory },
    data() {
        return {
            isOpen: false,
            isSubcategoryOpen: false,
            subcategory: ''
        }
    },
    methods: {
        openCategories() {
            this.isOpen = !this.isOpen
        },
       selectSubcategory(subcategory) {
           this.subcategory= subcategory
       },
        selectCategory(category, subcategory) {
            this.subcategory = ''
            this.categories.forEach(categoryItem => {
                categoryItem.isSubcategoryOpen = false
            })
            const ar = this.categories.find( categoryItem => categoryItem.name === category.name )
            ar.isSubcategoryOpen = !ar.isSubcategoryOpen
            this.$emit('selectCategory', category, subcategory)
        },

    }

    
}
</script>

<style lang="scss" scoped>
.the-categories{
   display: block; 
   cursor: pointer;
   
}
.the-categories__title {
    display: flex;
}
.the-categories__image{
    img {
        margin: 11px;
    }
}
.the-categories__title-text {
        height: 40px;
        padding: auto;
        p {
            margin: 0;
            line-height: 40px;
            font-weight: 700;
            font-size: 14px;
        }
    }
.the-categories__list {
    list-style: none;
    border: solid 1px #cccccc;
    padding: 10px;
    margin: 0;
    border-radius: 3px;
    
}
.the-categories__item{
    p{
        padding: 5px;
        margin: 0;
        font-family: 'Open Sans', sans-serif;
        font-size: 13px;
    }
}

    @media only screen and (max-width : 768px) {
   
    .the-categories__title p{
        font-size: 12px;
    }
   
}
</style>