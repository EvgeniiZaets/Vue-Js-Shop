<template>
    <div>
        <img class="float-left preview-lg"
             :src="require('../assets/' + item.photo)"
             :style="styleObject"
             @mouseover="enlarge"
             @mouseout="reduce">
        <h1>{{ item.name }}</h1>
        <h2 class="description"><b>{{ item.description }}</b></h2>
        <span class="price"><b>US{{ item.price }}.00</b></span>
        <form @submit.prevent="onSubmit">
            <div class="row pb-4 d-flex align-items-center">
                <div class="col-md-3 pl-0">
                    Size:
                </div>
                <div class="col-md-2">
                    <select>
                        <option>S</option>
                        <option>M</option>
                        <option>L</option>
                        <option>XL</option>
                    </select>
                </div>
            </div>
            <div class="row pb-4 d-flex align-items-center">
                <div class="col-md-3 pl-0">
                    Quantity:
                </div>
                <div class="col-md-2">
                    <input type="text" name="quantity" value="1">
                </div>
            </div>
            <div class="animated tada">
                <input type="submit" value="Add To Cart">
            </div>
        </form>
        <div class="clearfix"></div>
    </div>
</template>

<script>
    export default {
        props: {
            item: {
                type: Object,
                required: true
            }
        },
        data() {
            return {
                styleObject: {
                    maxWidth: '755px'
                }
            };
        },
        methods: {
            onSubmit() {
                this.$emit('addtocart')
            },
            enlarge() {
                this.styleObject.maxWidth = '900px';
                this.styleObject.transition = 'max-width 0.5s'
            },
            reduce() {
                this.styleObject.maxWidth = '755px';
                this.styleObject.transition = 'max-width 0.5s'
            }
        }
    }
</script>

<style scoped>
    .preview-lg {
        margin-right: 20px;
    }

    h1 {
        padding-bottom: 10px;
    }

    .description {
        text-transform: uppercase;
        font-family: 'Lato', sans-serif;
        font-size: 16px;
        padding-bottom: 15px;
    }

    .price {
        text-transform: uppercase;
        font-family: 'Lato', sans-serif;
        font-size: 20px;
        display: block;
        padding-bottom: 1.5rem;
    }

    input[type="text"] {
        width: 49px;
        text-align: center;
        padding: 4px 0;
    }

    input[type="submit"] {
        width: 170px;
        height: 50px;
        font-size: 24px;
    }

    select {
        border: 1px solid #ccc;
        border-radius: 2px;
        background-color: white;
        padding: 5px;
    }
</style>