<script>
export default{
    name: "AppJumbo",

    data(){
        return{
            pages: [
                {
                    title: "Our Team",
                    subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed eiusmod tempor incidunt ut labore et dolore magna aliqua",
                    href: "/about-us",
                    imgURL: "jumbo-0.jpg"
                },
                {
                    title: "Our Works",
                    subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed eiusmod tempor incidunt ut labore et dolore magna aliqua",
                    href: "/our-works",
                    imgURL: "jumbo-1.png"
                }
            ],
            currentPage: 0,
            autoplay:null,
        }
    },
    methods:{
        getImg(url){
            return new URL(url, import.meta.url).href;
        },
        showNext(){
            if(this.currentPage < this.pages.length -1){
                this.currentPage++;
            }else{
                this.currentPage = 0;
            }
        },
        showPrev(){
            if(this.currentPage > 0){
                this.currentPage--;
            }else {
                this.currentPage = this.pages.length -1;
            }
        },
        startAutoplay(){
            if (this.autoplay === null){
                this.autoplay = setInterval(()=>{this.showNext()}, 5000);
            }
        },
        stopAutoplay(){
            clearInterval(this.autoplay);
            this.autoplay = null;
        }
    },
    created(){
        this.startAutoplay();
    }
}
</script>

<template>
<!-- JUMBO -->
<section class="jumbo">
    <!-- jumbo img -->
    <img :src="getImg(`../assets/img/${this.pages[currentPage].imgURL}`)" :alt="pages[currentPage].title">
    <!-- /jumbo img -->

    <!-- jumbo inner -->
    <div class="jumbo-inner">
        <!-- prev-btn -->
        <div class="prev-btn" @mouseover="stopAutoplay" @mouseleave="startAutoplay" @click="showPrev">&larr;</div>
        <!-- /prev-btn -->

        <!-- text -->
        <div class="text-wrapper">
            <h1>{{pages[currentPage].title}}<span>.</span></h1>
            <p>{{pages[currentPage].subtitle}}</p>
            <button><a :href="pages[currentPage].href"><span>READ MORE</span> &rarr;</a></button>
            <button class="orange-btn"><a :href="pages[currentPage].href"><span>PURCHASE</span> &rarr;</a></button>
        </div>
        <!-- text -->

        <!-- next btn -->
        <div class="next-btn" @mouseover="stopAutoplay" @mouseleave="startAutoplay" @click="showNext">&rarr;</div>
        <!-- /next btn -->
    </div>
    <!-- jumbo inner -->
</section>
<!-- JUMBO -->
</template>

<style lang="scss" scoped>
@use "../style/general.scss" as *;
.jumbo{
    width: 100%;
    height: 90vh;
    position: relative;
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: top;
    }
    .jumbo-inner{
        width: 90%;
        height: calc(90vh - 80px);
        position: absolute;
        top: 80px;
        left: 5%;
        display: flex;
        justify-content: space-between;
        align-items: center;

        .prev-btn, .next-btn{
            padding: 1rem;
            height: 50%;
            display: flex;
            align-items: center;
            cursor: pointer;
            opacity: .7;
            &:hover{
                box-shadow: inset 2px 0px 21px 0 rgb(225, 225, 225);
            }
        }
        .text-wrapper{
            flex-grow: 1;
            padding: 5.5rem;
            h1{
                font-size: 3.8rem;
            }
            p{
                width: 450px;
            }
            button{
                border: 0;
                background-color: white;
                padding-right: 1rem;
                padding-top: .6rem;
                padding-bottom: .6rem;
                font-size: .8rem;
                margin-right: 1rem;
                a{
                    font-family: 'PT Sans', sans-serif;
                    font-weight: 600;
                    text-decoration: none;
                    color: $dark-color;
                    span{
                        height: 100%;
                        margin-right: .5rem;
                        padding-left: 1.5rem;
                        padding-right: 1.5rem;
                        padding-top: .3rem;
                        padding-bottom: .3rem;
                        font-size: .8rem;
                        border-right: 1px solid $dark-color;
                    }
                }
                &.orange-btn{
                    background-color: $primary-color;
                    a{
                        color: white;
                        span{
                            border-right: 1px solid white;
                        }  
                    }
                    &:hover span{
                        border-right: 1px solid $primary-color;
                    }
                }
                &:hover span{
                    border-right: 1px solid white;
                }
            }

        }
    }
}
</style>