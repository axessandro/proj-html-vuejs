<script>
export default{
    name: "AppEvents",
    data(){
        return{
            events:[
                {
                    nameEvent: "Melburne Coaching",
                    hourEvent: "9:00 am - 5:00 pm",
                    dayEvent: 7,
                    mounthEvent: "Jan",
                    yearEvent: 2022,
                    locationEvent: "Cambridge, MA 02138, USA"
                },
                {
                    nameEvent: "New York Coaching",
                    hourEvent: "9:00 am - 5:00 pm",
                    dayEvent: 11,
                    mounthEvent: "Jan",
                    yearEvent: 2022,
                    locationEvent: "Cambridge, MA 02138, USA"
                },
                {
                    nameEvent: "London Coaching",
                    hourEvent: "9:00 am - 5:00 pm",
                    dayEvent: 21,
                    mounthEvent: "Jan",
                    yearEvent: 2022,
                    locationEvent: "Cambridge, MA 02138, USA"
                }
            ],
            currentPhoto: 0,
            nPhotos: 3,
        }
    },
    methods:{
        showNext(){
            if(this.currentPhoto < this.nPhotos -1){
                this.currentPhoto++;
            }else{
                this.currentPhoto = 0;
            }
        },
        getImg(url){
            return new URL(url, import.meta.url).href;
        },
    },
    created(){
        setInterval(this.showNext, 8000)
    }
}
</script>

<template>
<section>
    <img :src="getImg(`../assets/img/event-${currentPhoto}.jpg`)" alt="Event photo">
    <div class="events-card">
        <h4>Upcoming Events</h4>
        
        <!-- EVENT -->
        <div class="event" v-for="(event, index) in events" :key="index">
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
</section>
</template>

<style lang="scss" scoped>
@use "../style/general.scss" as *;
$p-left: 30px;

section{
    width: 100%;
    margin: 0 auto;
    position: relative;
    .events-card{
        position: absolute;
        max-width: 40%;
        top: 150px;
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
            box-shadow: 0 4px 2px -2px lightgray;
            font-weight: 600;
            font-size: 1.2rem;
        }
        .event{
            display: flex;
            padding: $p-left;
            border-bottom: 1px solid lightgray;
            background-color: #FAFAFA;
            &.active{
                background-color: white;
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
            .read-more{
                color: black;
                font-family: 'PT Sans', sans-serif;
                font-weight: 900;
                text-decoration: none;
            }
        }
    }

}

</style>