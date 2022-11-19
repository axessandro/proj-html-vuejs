<script>
import {store} from "../store";

export default{
    name: "AppRole",
    data(){
        return{
            store,

        }
    },
}
</script>

<template>
<section>
    <div class="ms-container">
        <!-- left-side -->
        <div class="left-side">
            <h3>{{store.roles.creativeLeader.roleName}}<span>.</span></h3>
            <hr>
            <p>{{store.roles.creativeLeader.roleText}}</p>
            <a class="read-more" href="" @click.prevent>READ MORE</a>
        </div>
        <!-- /left-side -->

        <!-- right-side -->
        <div class="right-side">
            <div class="stat" v-for="(stat, index) in store.roles.creativeLeader.stats" :key="index">
                <span>{{stat.nameStat}}</span>
                <span>{{stat.valueStat}}</span>
                <div class="bar">
                    <div :style="{ width: stat.valueStat }" class="inner-bar"></div>
                </div>
            </div>
        </div>
        <!-- /right-side -->
    </div>
</section>
</template>

<style lang="scss" scoped>
@use "../style/general.scss" as *;
section{
    padding-top: 4.5rem;
    padding-bottom: 8rem;
    .ms-container{
        width: 75%;
        margin: 0 auto;
        display: flex;
        .left-side{
            height: 100%;
            width: 50%;
            padding: 1rem;
            padding-left: 0;
        }
        .right-side{
            width: 50%;
            padding: 1rem;
            padding-right: 0;
            .stat{
                display: flex;
                justify-content: space-between;
                flex-wrap: wrap;    
                span{
                    font-size: .9rem;
                } 
                .bar{
                    width: 100%;
                    height: 3px;
                    background-color: rgb(226, 226, 226);
                    margin-top: 5px;
                    margin-bottom: 20px;
                    .inner-bar{
                        height: 3px;
                        background-color: $primary-color;
                    }
                }
            }
        }
    }
}
</style>