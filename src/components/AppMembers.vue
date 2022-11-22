<script>
import {store} from "../store"

export default{
    name: "AppMember",
    data(){
        return{
            store,
            members: [
                {
                    name: "Jason Bickford",
                    role: `${store.roles.founderDirector.roleName}`,
                    photo: "jason-photo.jpg",
                    signature: "jason-signature.png"
                },
                {
                    name: "Pamela Hill",
                    role: `${store.roles.dataAnalyst.roleName}`,
                    photo: "pamela-photo.jpg",
                    signature: "pamela-signature.png"
                },
                {
                    name: "Linda Brown",
                    role: `${store.roles.creativeLeader.roleName}`,
                    photo: "linda-photo.jpg",
                    signature: "linda-signature.png"
                }
            ],
            currentMember: 0,
        }
    },
    methods:{
        getImg(url){
            return new URL(url, import.meta.url).href;
        },
        showNext(){
            if(this.currentMember < this.members.length -1){
                this.currentMember++;
            }else{
                this.currentMember = 0;
            }
        },
        showPrev(){
            if(this.currentMember > 0){
                this.currentMember--;
            }else {
                this.currentMember = this.members.length -1;
            }
        },
    }
}
</script>

<template>
<!-- MEMBERS SECTION -->
<section>
    <div class="ms_container">

        <div class="member-img">
            <!-- member img -->
            <img :src="getImg(`../assets/img/${members[currentMember].photo}`)" alt="">
            <div class="btns">
                <div class="prev-btn" @click="showPrev">&larr;</div>
                <div class="next-btn" @click="showNext">&rarr;</div>
            </div>
            <!-- member img -->

            <!-- member info -->
            <div class="member-card">
                <h3>{{members[currentMember].name}}</h3>
                <p class="role">{{members[currentMember].role}}</p>
                <hr>
                <p>{{store.roles.founderDirector.roleShortText}}...</p>
                <div class="social-sign-wrapper">
                    <div class="socials">
                        <i class="fa-brands fa-linkedin-in"></i>
                        <i class="fa-brands fa-facebook-f"></i>
                        <i class="fa-brands fa-twitter"></i>
                    </div>
                    <img :src="getImg(`../assets/img/${members[currentMember].signature}`)" :alt="members[currentMember].name">
                </div>
            </div>
            <!-- member info -->
        </div>

        <!-- background pattern -->
        <div class="section-right">
            <img src="../assets/svg/svg-4.svg" alt="">
        </div>
        <!-- background pattern -->
    </div>
</section>
<!-- MEMBERS SECTION -->
</template>

<style lang="scss" scoped>
@use "../style/general.scss" as *;
section{
    background-color: $gray-bg;
    padding-bottom: 4rem;
    .ms_container{
        width: 100%;
        padding-right: 5%;
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        position: relative;
        .member-img{
            width: 40%;
            margin-left: 12.5%;
            padding-top: 3rem;
            position: relative;
            .btns{
                position: absolute;
                left: 0;
                bottom: 0;
                display: flex;
                cursor: pointer;
                .prev-btn, .next-btn{
                    background-color: $primary-color;
                    color: white;
                    padding-top: .5rem;
                    padding-bottom: .5rem;
                    font-size: 1.5rem;
                }
                .prev-btn{
                    padding-left: 1rem;
                    padding-right: .2rem;
                }
                .next-btn{
                    padding-right: 1rem;
                    padding-left: .2rem;
                }
            }
            .member-card{
                background-color: white;
                padding: 3.3rem;
                padding-bottom: 1rem;
                width: 120%;
                position: absolute;
                bottom: 40px;
                left: 85%;
                z-index: 700;
                .role{
                    font-size: .6rem;
                }
                p{
                    font-size: .8rem;
                }
                .social-sign-wrapper{
                    width: 100%;
                    height: 100px;
                    display: flex;
                    justify-content: space-between;
                    .socials{
                        i{
                            background-color: $primary-color;
                            color: white;
                            &:hover{
                                background-color: $dark-color;
                            }
                        }
                    }
                    img{
                        width: 200px;
                        margin-top: -3rem;
                    }
                }
            }
        }
        .section-right{
            display: flex;
            justify-content: flex-end;
            position: relative;
            img{
                width: 80%;
            }
        }
    }
}
</style>