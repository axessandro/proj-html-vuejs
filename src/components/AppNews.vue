<script>
export default{
    name: "AppNews",
    data(){
        return{
            news:[
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
    }
}
</script>

<template>
<section>
    <div class="titling">
        <h2>Latest news<span>.</span></h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        <hr>
    </div>
    <div class="container-fluid">

        <!-- cards -->
        <div class="ms-container row row-cols-md-3">
            <div class="col ms-card" :class="newsHiddenIndex === index ? 'hide' : ''" v-for="(news, index) in news" :key="index">
                ciao
            </div>
            
        </div>
        <!-- cards -->
    
    </div>
</section>
</template>

<style lang="scss" scoped>
@use "../style/general.scss" as *;
.hide{
    display: none;
}

section{
    background-image: url(../assets/svg/svg-4.svg);
    background-size: 300px;
    background-position: 100px 20px;
    background-color: $gray-bg;
    background-repeat: no-repeat;
    padding-top: 120px;
    .titling{
        text-align: center;
        padding-bottom: 3rem;
        hr{
            margin: 0 auto;
        }
    }
    .ms-container{
        width: 75%;
        margin: 0 auto;
        .col{
            padding-right: 0;
            padding-left: 0;

        }
    }
}
</style>