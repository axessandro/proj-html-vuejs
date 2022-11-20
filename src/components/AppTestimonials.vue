<script>
export default{
    name: "AppTestimonials",
    data(){
        return{
            persons: [
                {
                    name: "Cynthia Clark",
                    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eius mas tellus dolor.",
                    photo: "testimonial-0.png",
                    classBar: "one-three"
                },
                {
                    name: "Sienna Brooks",
                    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eius mas tellus dolor.",
                    photo: "testimonial-1.png",
                    classBar: "two-three"
                },
                {
                    name: "Amy Bennett",
                    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eius mas tellus dolor.",
                    photo: "testimonial-2.png",
                    classBar: "three-three"
                }
            ],
            currentPerson: 0,
        }
    },
    methods:{
        getImg(url){
            return new URL(url, import.meta.url).href;
        },
        showNext(){
            if(this.currentPerson < this.persons.length -1){
                this.currentPerson++;
            }else{
                this.currentPerson = 0;
            }
        },
        showPrev(){
            if(this.currentPerson > 0){
                this.currentPerson--;
            }else {
                this.currentPerson = this.persons.length -1;
            }
        },
    }
}
</script>

<template>
<section>
    <div class="bg-text">Testimonials.</div>
    <div class="inner-section">
        <!-- prev-btn -->
        <div class="prev-btn" @click="showPrev">&larr;</div>
        <!-- /prev-btn -->
        
        <!--container person -->
        <div class="ms-container">
            <div class="person">
                <img :class="currentPerson === 0 ? 'pixelPerfect' : ''" :src="getImg(`../assets/img/${persons[currentPerson].photo}`)" :alt="persons[currentPerson].name">
                <div class="name">{{persons[currentPerson].name}}</div>
                <p>"{{persons[currentPerson].text}}""</p>
                <!-- bar -->
                <div class="bar-row">
                    <div class="min-n">01</div>
                    <div class="bar">
                        <div class="inner-bar" :class="persons[currentPerson].classBar"></div>
                    </div>
                    <div class="max-n"><span v-if="persons.length < 9">0</span>{{persons.length}}</div>
                </div>
                <!-- /bar -->
            </div>
        </div>
        <!--container person -->
        
        <!-- next-btn -->
        <div class="next-btn" @click="showNext">&rarr;</div>
        <!-- /next-btn -->
    </div>
</section>
</template>

<style lang="scss" scoped>
@use "../style/general.scss" as *;
section{
    background: linear-gradient(90deg, #151515, #1a1a1a);
    position: relative;
    padding-bottom: 7rem;
    .bg-text{
        color: #111111;
        text-align: center;
        font-weight: 900;
        font-size: 11rem;
        display: block;
    }
    .inner-section{
        display: flex;
        justify-content: space-around;
        .person{
            color: #EBEBEB;
            text-align: center;
            margin-top: -7rem;
            img{
                margin-bottom: 1.5rem;
                border: 5px solid #EBEBEB;
                border-radius: 50%;
                &.pixelPerfect{
                    margin-top: 1px;
                }
            }
            p{
                opacity: .6;
            }
            .bar-row{
                display: flex;
                align-items: center;
                justify-content: center;
                gap: .8rem;
                font-family: 'PT Sans', sans-serif;
                font-weight: 200;
                font-size: .8rem;
                .bar{
                    width: 200px;
                    height: 2px;
                    background-color: #3C3A3A;
                    .inner-bar{
                        height: 2px;
                        background-color: #ABAAAA;
                    }
                    .one-three{
                        width: calc(100% / 3);

                    }
                    .two-three{
                        width: calc(100% / 3 * 2);
                    }
                    .three-three{
                        width: 100%;
                    }
                }
            }
        }
        .prev-btn, .next-btn{
            color: rgb(240, 240, 240);
            margin-top: -7rem;
            padding: 1rem;
            height: 200px;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            opacity: .7;
            &:hover{
                box-shadow: inset 2px 0px 21px 0 rgb(50, 50, 50);
            }
        }
    }
}
</style>