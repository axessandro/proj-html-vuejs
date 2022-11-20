<script>
export default{
    name: "AppNews",
    data(){
        return{
            newsArray:[
                {
                    nameNews: "Next investment",
                    textNews: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eius mas tellus dolor ...",
                    dateNews: "May 5, 2019",
                    authorNews: "Amanda Doe",
                    categoryNews: "Business, Leading",
                    imgTop: "news-3.jpg",
                    imgBot: "news-0.jpg"
                },
                {
                    nameNews: "Team Building",
                    textNews: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eius mas tellus dolor ...",
                    dateNews: "May 5, 2019",
                    authorNews: "Amanda Doe",
                    categoryNews: "Business, Leading",
                    imgTop: "news-0.jpg",
                    imgBot: "news-1.jpg"
                },
                {
                    nameNews: "Next Business Day",
                    textNews: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eius mas tellus dolor ...",
                    dateNews: "May 5, 2019",
                    authorNews: "Amanda Doe",
                    categoryNews: "Business, Leading",
                    imgTop: "news-1.jpg",
                    imgBot: "news-2.jpg"
                },
                {
                    nameNews: "Coaching Giveaway",
                    textNews: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eius mas tellus dolor ...",
                    dateNews: "May 5, 2019",
                    authorNews: "Amanda Doe",
                    categoryNews: "Business, Leading",
                    imgTop: "news-2.jpg",
                    imgBot: "news-3.jpg"
                }
            ],
            newsHiddenIndex: 3,
        }
    },
    methods:{
        getImg(url){
            return new URL(url, import.meta.url).href;
        },
        showNext(){
            if(this.newsHiddenIndex < this.newsArray.length -1){
                this.newsHiddenIndex++;
            }else{
                this.newsHiddenIndex = 0;
            }
        },
        showPrev(){
            if(this.newsHiddenIndex > 0){
                this.newsHiddenIndex--;
            }else {
                this.newsHiddenIndex = this.newsArray.length -1;
            }
        },
    }
}
</script>

<template>
<section>

    <img src="../assets/svg/svg-4.svg" alt="Decoration">

    <div class="titling">
        <h2>Latest news<span>.</span></h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        <hr>
    </div>
    <div class="container-fluid">
        
        <!-- prev-btn -->
        <div class="prev-btn" @click="showPrev">&larr;</div>
        <!-- /prev-btn -->
        <!-- cards -->
        <div class="ms-container row row-cols-md-3">
            <div class="col" :class="newsHiddenIndex === index ? 'hide' : ''" v-for="(news, index) in newsArray" :key="index">
                
                <!-- card -->
                <div class="ms-card">
                    <!-- imgs-wrapper -->
                    <div class="imgs-wrapper">
                        <div class="img-bot" :style="{back}">
                            <div class="img-top">
                               <img :src="getImg(`../assets/img/${news.imgTop}`)" alt="">
                            </div>
                           <img :src="getImg(`../assets/img/${news.imgBot}`)" alt="">
                        </div>
                    </div>
                    <!-- /imgs-wrapper -->
                    
                    <!-- text wrapper -->
                    <div class="text-wrapper">
                        <!-- label -->
                        <div class="orange-label">
                            <i class="fa-solid fa-tag"></i>
                            <span>{{news.categoryNews}}</span>
                        </div>
                        <!-- /label -->

                        <!-- info article -->
                        <div class="info-article">
                            <span class="date">
                                <i class="fa-solid fa-clock"></i>
                                <span>{{news.dateNews}}</span>
                            </span>
                            <span>
                                <i class="fa-regular fa-user"></i>
                                <span>{{news.authorNews}}</span>
                            </span>
                        </div>
                        <div class="title-article">
                            <h4>{{news.nameNews}}</h4>
                        </div>
                        <p>{{news.textNews}}</p>
                        <a class="read-more" href="" @click.prevent>READ MORE</a>
                        <!-- info article -->

                    </div>
                    <!-- /text wrapper -->
                </div>
                <!-- /card -->

            </div>
            
        </div>
        <!-- cards -->
    
        <!-- next-btn -->
        <div class="next-btn" @click="showNext">&rarr;</div>
        <!-- /next-btn -->
    </div>
</section>
</template>

<style lang="scss" scoped>
@use "../style/general.scss" as *;
.hide{
    display: none;
}

section{
    position: relative;
    background-color: $gray-bg;
    padding-top: 100px;
    padding-bottom: 60px;
    &>img{
        position: absolute;
        width: 400px;
        top: -80px;
        left: 80px;
    }
    .titling{
        text-align: center;
        padding-bottom: 3rem;
        hr{
            margin: 0 auto;
        }
    }
    .container-fluid{
        display: flex;
        align-items: center;
        height: 100%;
        width: 100%;
        .prev-btn, .next-btn{
            padding: 1rem;
            height: 400px;
            display: flex;
            position: absolute;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            opacity: .7;
            &:hover{
                box-shadow: inset 2px 0px 21px 0 rgb(225, 225, 225);
            }
        }
        .prev-btn{
            left: 5%;
        }

        .next-btn{
            right: 5%;
        }
        .ms-container{
            width: 80%;
            margin: 0 auto;
            .col{
                
                padding-right: 0;
                padding-left: 0;
                
                .ms-card{
                    margin: 0 1.5rem;
                    .imgs-wrapper{
                        .img-bot{
                            width: 100%;
                            object-fit: cover;
                            object-position: left bottom;
                            position: relative;
                            .img-top{
                                position: absolute;
                                top: 0;
                                left: 0;
                                height: 40%;
                                width: 100%;
                                object-fit: cover;
                                object-position: top;
                                overflow: hidden;
                            }
                        }
                    }
                    .text-wrapper{
                        position: relative;
                        padding: 2rem 0;
                        
                        .info-article{
                            margin-bottom: .4rem;
                            i{
                                color: $primary-color;
                                margin-right: .3rem;
                            }
                            span{
                                font-family: 'PT Sans', sans-serif;
                                font-weight: 200;
                                opacity: .7;
                                font-size: .8rem;
                                margin-right: .4rem;
                            }
                        }
                        
                        .title-article{
                            h4{
                                font-size: 1.3rem;
                            }
                        }
                        
                        .orange-label{
                            background-color: $primary-color;
                            position: absolute;
                            top: -22px;
                            right: 10px;
                            z-index: 999;
                            font-family: 'PT Sans', sans-serif;
                            font-weight: 200;
                            color: white;
                            padding: .4rem .8rem;
                            font-size: .8rem;
                            i{
                                margin-right: 5px;
                            }
                        }
                        
                    }
                }
            }
        }
    }
}
</style>