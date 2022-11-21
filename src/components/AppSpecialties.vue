<script>
export default{
    name: "AppSpecialties",
    data(){
        return{
            specialties: [
                {
                    title: "Knowing",
                    subtitle: "Lorem ipsum dolor sit amet, quis consect",
                    imgURL: "svg-0.svg"
                },
                {
                    title: "Selling",
                    subtitle: "Lorem ipsum dolor sit amet, quis consect",
                    imgURL: "svg-1.svg"
                },
                {
                    title: "Learning",
                    subtitle: "Lorem ipsum dolor sit amet, quis consect",
                    imgURL: "svg-2.svg"
                },
                {
                    title: "Contact",
                    subtitle: "Lorem ipsum dolor sit amet, quis consect",
                    imgURL: "svg-3.svg"
                },
            ]
        }
    },
    methods:{
        getImg(url){
            return new URL(url, import.meta.url).href;
        },
    }
}
</script>

<template>
<!-- SPECIALTIES SECTION -->
<section>
    <div class="specialties">

        <h2>Our specialties<span>.</span></h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        <hr>
        
        <div class="row">
            <!-- card -->
            <div class="ms_card col-md-2" v-for="(specialty, index) in specialties" :key="index">
                <div class="img-wrapper">
                    <img :src="getImg(`../assets/svg/${specialty.imgURL}`)" :alt="specialty.title">
                </div>
                <h4>{{specialty.title}}</h4>
                <p>{{specialty.subtitle}}</p>
            </div>
            <!-- card -->
        </div>
        
    </div>
</section>    
<!-- /SPECIALTIES SECTION -->
</template>

<style lang="scss" scoped>
@use "../style/general.scss" as *;
section{
    width: 100%;
    position: relative;
    height: 500px;
    background-color: $gray-bg;
    .specialties{
        width: 90%;
        position: absolute;
        top: -50px;
        left: 5%;
        background-color: white;
        padding: 5rem 0;
        text-align: center;
        hr{
            margin: 0 auto 2rem;
        }
        .row{
            justify-content: center;
            .ms_card{
                padding: 0 1rem;
                .img-wrapper{
                    padding: 0 20% 1rem;
                    img{
                        margin: 0 auto;
                    }
                }
                p{
                    font-size: .9rem;
                }
            }
        }
    }
}
</style>