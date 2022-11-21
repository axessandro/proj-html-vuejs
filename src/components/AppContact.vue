<script>
import {store} from "../store"

export default{
    name: "AppContact",
    data(){
        return{
            store,
            // events:[
            //     {
            //         nameEvent: "Melburne Coaching",
            //         hourEvent: "9:00 am - 5:00 pm",
            //         dayEvent: 7,
            //         mounthEvent: "Jan",
            //         yearEvent: 2022,
            //         locationEvent: "Cambridge, MA 02138, USA",
            //         class: "-melburne",
            //         mapVisible: false
            //     },
            //     {
            //         nameEvent: "New York Coaching",
            //         hourEvent: "9:00 am - 5:00 pm",
            //         dayEvent: 11,
            //         mounthEvent: "Jan",
            //         yearEvent: 2022,
            //         locationEvent: "Cambridge, MA 02138, USA",
            //         class: "-new-york",
            //         mapVisible: true
            //     },
            //     {
            //         nameEvent: "London Coaching",
            //         hourEvent: "9:00 am - 5:00 pm",
            //         dayEvent: 21,
            //         mounthEvent: "Jan",
            //         yearEvent: 2022,
            //         locationEvent: "Cambridge, MA 02138, USA",
            //         class: "-london",
            //         mapVisible: false
            //     }
            // ]
            currentActive: 2,
        }
    },
    methods:{
        showClicked(clickedIndex){
            if(clickedIndex === this.currentActive){
                this.store.events[clickedIndex].mapVisible = false
                this.currentActive = null
            } else{

                this.hideLabel();
                this.currentActive = clickedIndex;
                this.store.events[clickedIndex].mapVisible = true            
            }
        },
        hideLabel(){
            for (let i = 0; i < this.store.events.length; i++) {
                const event = this.store.events[i];
                event.mapVisible = false;
            }
        }
    }
}
</script>

<template>
<section>
    <div class="ms-container">
        <!-- map -->
        <div class="map">
            <img src="../assets/img/map.png" @click="hideLabel" alt="">

            <!-- btn -->
            <div v-for="(event, index) in store.events" :key="index" class="dot" :class="`dot${event.class}`">
                
                <img src="../assets/img/map-dot.png" @click="showClicked(index)" alt="">
                <div class="label" :class="event.mapVisible ? 'visible' : ''">
                    <h4>{{event.nameEvent}}</h4>
                    <a class="read-more" href="" @click.prevent>READ MORE</a>
                </div>
    
            </div>
            <!-- /btn -->

        </div>
        <!-- /map -->

        <!-- form -->
        <div class="contact-us">
            <h2>Contact Us<span>.</span></h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            <hr>
            <div class="ms-form">
                <div class="name-email">
                    <input id="name" type="text" placeholder="Your Name">
                    <label for="name"></label>
                    <label for="email"></label>
                    <input id="email" type="text" placeholder="Your Email">
                </div>
                <label for="message"></label>
                <textarea name="" id="message" placeholder="Write a message..." cols="30" rows="3"></textarea>
                <button class="orange-btn"><a><span>SEND</span> &rarr;</a></button>
            </div>
        </div>
        <!-- /form -->
    </div>
</section>
</template>

<style lang="scss" scoped>
@use "../style/general.scss" as *;
section{
    background-color: $gray-bg;
    padding: 100px 0;
    .ms-container{
        display: flex;
        gap: 3rem;
        width: 75%;
        margin: 0 auto;
        align-items: center;
        .map{
            width: 50%;
            position: relative;
            .dot{
                position: absolute;
                .label{
                    z-index: 999;
                    background-color: white;
                    padding: 1rem;
                    display: none;
                    h4{
                        margin-bottom: 0;
                        font-weight: 600;
                    }
                    
                }
                .visible{
                    display: block;
                }
            }
            .dot-new-york{
                left: 23%;
                top: 35%;
                
            }
            .dot-london{
                left: 43%;
                top: 28%;
            }
            .dot-melburne{
                display: flex;
                align-items: flex-end;
                flex-direction: column-reverse;
                right: 10%;
                bottom: 10%;
            }
            
        }
        .contact-us{
            width: 50%;
            button{
                border: 0;
                width: 150px;
                padding-right: 1rem;
                padding-top: .6rem;
                padding-bottom: .6rem;
                font-size: .8rem;
                margin-right: 1rem;
                background-color: $primary-color;
                margin-top: 1rem;
                a{
                    font-family: 'PT Sans', sans-serif;
                    font-weight: 600;
                    text-decoration: none;
                    color: $dark-color;
                    color: white;
                    span{
                        height: 100%;
                        margin-right: .5rem;
                        padding-left: 1.5rem;
                        padding-right: 1.5rem;
                        padding-top: .3rem;
                        padding-bottom: .3rem;
                        font-size: .8rem;
                        border-right: 1px solid white;
                    }
                }
                &:hover span{
                    border-right: 1px solid $primary-color;
                }
                &:hover a{
                    color: white;
                }
            }
            .ms-form{
                display: flex;
                flex-direction: column;
                input, textarea{
                    border: 0;
                    font-family: 'PT Sans', sans-serif;
                    color: rgb(100, 100, 100);
                    background-color: $gray-bg;
                    border-bottom: 1px solid lightgray;
                    font-size: .8rem;
                    padding: .5rem 1rem;
                    margin-bottom: 1rem;
                    &#name, &#email{
                        width: 48%;
                    }
                }
                .name-email{
                    width: 100%;
                    display: flex;
                    justify-content: space-between;
                }
            }
        }
    }
}
</style>