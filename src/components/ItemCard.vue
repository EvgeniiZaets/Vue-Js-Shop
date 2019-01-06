<template>
    <div>
        <img :src="item.photo" class="float-left preview-lg">
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
            <div class="row">
                <div class="">
                    <input type="submit" value="Add To Cart">
                </div>
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
        methods: {
            onSubmit() {
                this.$emit('addtocart')
            }
        }
    }
</script>