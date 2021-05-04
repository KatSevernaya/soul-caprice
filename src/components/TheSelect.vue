<template>
    <div class="the-select">
        <div class="the-select__title">
            <p >СОРТИРОВКА</p>
        </div>
        
        <div class="the-select__options">
            <div class="options" @click="areOptionsVisible=!areOptionsVisible">
            <p 
                class="the-select__default" 
                v-if="areOptionsVisible===false"
                
                >
                    {{selected}}
            </p>
            <p  
                v-else
                v-for="option in options"
                :key="option.value"
                @click="selectOptions(option)"
            >
                {{option.name}}
            </p>
        </div>
        </div>
        
    </div>
</template>

<script>
export default {
    props: {
        options: {
            type: Array
        },
        selected: {
            type: String
        }
    },
    emits: [ 'select' ],
    data() {
        return {
            areOptionsVisible: false
        }
    },
    methods: {
        selectOptions(option){
            this.$emit('select', option)
            this.areOptionsVisible = !this.areOptionsVisible
        },
        hideSelect() {
            this.areOptionsVisible = false
        }
    },
    mounted() {
        document.addEventListener('click', this.hideSelect.bind(this), true)
    },
    beforeUnmount() {
        document.removeEventListener('click', this.hideSelect)
    }
    
}
</script>

<style lang="scss" scoped>
    .the-select {
        display: flex;
        align-items: flex-start;
        margin-left: auto;
        

    }
    .the-select__title {
        height: 40px;
        padding: auto;
        p {
            margin: auto;
            line-height: 40px;
            font-weight: 700;
            font-size: 14px;
        }
    }
    .the-select__options {
        width: 200px;
        p {
            padding: 0;
            
        }
    }
    .options {
        border: solid 1px #cccccc;
        width: 100%;
        border-radius: 3px;
        background-color: #fff;
        cursor: pointer;
        padding: 0;
        margin-left: 10px;
        p {
             padding: 10px;
             margin: 0;
             font-family: 'Open Sans', sans-serif;
             font-size: 13px;
             
        }
       
        .the-select__default {
            position: relative;
            &::after {
                position: absolute;
                content: '';
                top: 50%;
                right: 10px;
                width: 10px;
                height: 10px;
                border-bottom: solid 1px #cccccc;
                border-left: solid 1px #cccccc;
                transform: translateY(-70%) rotate(315deg);
            }
        }
    }
    @media only screen and (max-width : 768px) {
    .the-select {
         margin-left: 11px;
    }
    .the-select__title p{
        font-size: 12px;
    }
   
}
</style>