<template>
    <div class="the-subcategories">
         <ul class="the-subcategories__list" >
                    <li class="the-subcategories__item"
                        v-for="subcategory in designersArray"
                        :key="subcategory.value"
                        @click="selectSubcategory(subcategory)"
                    >
                        <p>{{subcategory}}</p>
                </li>
            </ul>
    </div>
</template>

<script>
export default {
    props: {
         designersArray: {
            type: Array
        },
    },
    emits: ['selectSubcategory'],
    methods: {
        selectSubcategory(subcategory) {
            //console.log(subcategory)
            
            this.$emit('selectSubcategory',  subcategory)
        }
    }
}
</script>

<style>
.the-subcategories__list {
    list-style: none;
    margin-left: 20px;
    padding: 0;
}
.the-subcategories__item {
    color: #a8a8a8;
    font-size: 14px;
}
</style>