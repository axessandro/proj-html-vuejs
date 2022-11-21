<script>
import {store} from "../store"

export default{
    name: "AppEvents",
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
            //         locationEvent: "Cambridge, MA 02138, USA"
            //     },
            //     {
            //         nameEvent: "New York Coaching",
            //         hourEvent: "9:00 am - 5:00 pm",
            //         dayEvent: 11,
            //         mounthEvent: "Jan",
            //         yearEvent: 2022,
            //         locationEvent: "Cambridge, MA 02138, USA"
            //     },
            //     {
            //         nameEvent: "London Coaching",
            //         hourEvent: "9:00 am - 5:00 pm",
            //         dayEvent: 21,
            //         mounthEvent: "Jan",
            //         yearEvent: 2022,
            //         locationEvent: "Cambridge, MA 02138, USA"
            //     }
            // ],
            currentImg: 0,
            
        }
    },
    methods:{
        getImg(url){
            return new URL(url, import.meta.url).href;
        },
        showClicked(index){
        this.currentImg = index;
        },
        clickedClass(index){
            if(index === this.currentImg){
                return "clicked";
            } else {
                return "";
            }
        }
    },
    
}
</script>

<template>
<!-- EVENTS SECTION -->
<section>
    <!-- events img -->
    <img :src="getImg(`../assets/img/event-${currentImg}.jpg`)" alt="Event photo">
    <!-- /events img -->

    <!-- events wrapper -->
    <div class="events-card">
        <h4>Upcoming Events</h4>
        
        <!-- EVENT -->
        <div class="event" @click="showClicked(index)" :class="clickedClass(index)" v-for="(event, index) in store.events" :key="index">
            <!-- orange label -->
            <div class="label">
                <div class="event-num-day"><span v-if="event.dayEvent < 10">0</span>{{event.dayEvent}}</div>
                <div class="event-mounth-year">{{event.mounthEvent}}. {{event.yearEvent}}</div>
            </div>
            <!-- orange label -->

            <!-- info event -->
            <div class="info-event">
                <div class="name-event">{{event.nameEvent}}</div>

                <div class="date-hour-event">
                    <i class="fa-solid fa-clock"></i>
                    <div class="text-wrapper">{{event.hourEvent}}, {{event.mounthEvent}} {{event.dayEvent}}, {{event.yearEvent}}</div>
                </div>

                <div class="location-event">
                    <i class="fa-solid fa-location-dot"></i>
                    <div class="text-wrapper">{{event.locationEvent}}</div>
                </div>

                <a class="read-more" href="" @click.prevent>READ MORE</a>
            </div>
            <!-- /info event -->
        </div>
        <!-- /EVENT -->

    </div>
    <!-- events wrapper -->

</section>
<!-- /EVENTS SECTION -->
</template>

<style lang="scss" scoped>
@use "../style/general.scss" as *;

$p-left: 30px;
section{
    width: 100%;
    margin: 0 auto;
    position: relative;
    max-height: 900px;
    overflow: hidden;
    img{
        height: 100%;
        width: 100%;
        object-fit: cover;
    }
    .events-card{
        position: absolute;
        max-width: 40%;
        top: 50%;
        transform: translateY(-50%);
        left: 12.5%;
        z-index: 999;
        background-color: white;
        display: flex;
        flex-direction: column;
        h4{
            padding-left: $p-left;
            margin-bottom: 0;
            padding-top: 15px;
            padding-bottom: 15px;
            box-shadow: 0 8px 4px -4px rgb(221, 221, 221);
            z-index: 999;
            font-weight: 600;
            font-size: 1.2rem;
        }
        .event{
            display: flex;
            padding: $p-left;
            border-bottom: 1px solid lightgray;
            background-color: #FAFAFA;
            &:hover .name-event{
                color: $primary-color;
            }
            &.clicked{
                background-color: rgb(255, 255, 255);
            }
            .label{
                color: white;
                text-align: center;
                margin-right: 20px;
                padding-top: 5px;
                .event-num-day{
                    background-color: $primary-color;
                    padding-top: 5px;
                    font-weight: 900;
                }
                .event-mounth-year{
                    background-color: $primary-color;
                    padding-bottom: 5px;
                    padding-left: 10px;
                    padding-right: 10px;
                    font-family: 'PT Sans', sans-serif;
                    font-weight: 200;
                }
            }
            .info-event{
                .name-event{
                    font-size: 1.2rem;
                    font-weight: 600;
                    padding-bottom: 10px;
                }
                .date-hour-event, .location-event{
                    i{
                        color: $primary-color;
                        font-size: .8rem;
                    }
                    .text-wrapper{
                        font-family: 'PT Sans', sans-serif;
                        font-weight: 200;
                        opacity: .6;
                        display: inline-block;
                        padding-left: 10px;
                        padding-bottom: 5px;
                        padding-right: 70px;
                    }
                }
                .location-event{
                    padding-bottom: 5px;
                }
            }
            
        }
    }
}
</style>