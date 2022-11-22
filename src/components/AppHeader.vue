<script>
import {store} from "../store"

export default {
    name: "AppHeader",
    data(){
        return{
            store,
            linkClicked: 0,
            searchClicked: false,
            hamburgerClicked: false
        }
    },
    props:{
        links: Array,
        footerLinks: Array,
    },
    methods:{
        showClicked(index){
            this.linkClicked = index;
        },
        toggleSearch(){
            this.hamburgerClicked = false;
            this.searchClicked = !this.searchClicked;
        },
        toggleHamburger(){
            this.searchClicked = false;
            this.hamburgerClicked = !this.hamburgerClicked;
        }
    }
}
</script>

<template>
    <!-- HEADER -->
    <header>
        <div class="header-inner">
            <!-- header -->
            <div class="header-logo"><img src="../assets/img/logo-img-01.png" alt=""></div>
            <!-- header -->
        
            <!-- header right -->
            <div class="header-right">
                <div class="links">
                    <a :href="link.href" @click.prevent="showClicked(index)" :class="linkClicked === index ? 'clicked' : ''"  v-for="(link, index) in links" :key="index"> <span class="arrow">&rarr;</span>{{link.section.toUpperCase()}}</a>
                </div>
                <div class="search">
                    <!-- hidden input -->
                    <input :class="searchClicked ? 'd-block'  : 'd-none'" type="text" v-model="store.searchValue">
                    <!-- hidden input -->
                    <i @click="toggleSearch" :class="searchClicked ? 'search-clicked' : ''" class="fa-solid fa-magnifying-glass search-btn"></i>
                </div>
                <div class="hamburger-menu">
                    <div @click="toggleHamburger" class="hamburger" :class="hamburgerClicked ? 'hamburger-clicked' : ''">
                        <i class="fa-solid fa-ellipsis-vertical"></i>
                        <i class="fa-solid fa-bars"></i>
                    </div>
                    <!-- hide menu -->
                    <div class="hide-menu" :class="hamburgerClicked ? 'd-block' : 'd-none'">
                        <button class="btn-close-menu" @click="toggleHamburger"><span>X</span></button>
                        <ul>
                            <li v-for="(link, index) in links" :key="index"><a :href="link.href" @click.prevent="toggleHamburger"><span class="arrow">&rarr;</span>{{link.section.toUpperCase()}}</a></li>
                            <li v-for="(link, index) in footerLinks" :key="index"><a :href="link.href" @click.prevent="toggleHamburger"><span class="arrow">&rarr;</span>{{link.section.toUpperCase()}}</a></li>
                        </ul>
                        <div class="socials">
                            <i class="fa-brands fa-linkedin-in"></i>
                            <i class="fa-brands fa-facebook-f"></i>
                            <i class="fa-brands fa-twitter"></i>
                        </div>
                    </div>
                    <!-- /hide menu -->
                </div>
            </div>
            <!-- /header right -->
        </div>

    </header>
    <!-- /HEADER -->
</template>

<style lang="scss" scoped>
@use "../style/general.scss" as *;

.hamburger-clicked{
    color: $primary-color;
}

$margin-links: .5rem;
header{
    width: 100%;
    height: 80px;
    font-family: 'PT Sans', sans-serif;
    font-size: .9rem;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 999;
    .header-inner{
        width: 90%;
        height: 100%;
        margin: 0px auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .header-logo{
            width: 110px;
            height: 100%;
            display: flex;
            align-items: center;            
        }
        .header-right{
            display: flex;
            align-items: center;
            height: 100%;
            .links{
                margin-right: 1rem;
                a{
                    margin: 0 $margin-links;
                    text-decoration: none;
                    color: $dark-color;
                    .arrow{
                        color: rgba(0, 0, 0, 0);   
                    }
                }
                .clicked{
                    color: $primary-color;
                    .arrow{
                        color: $primary-color;
                    }
                }
            }
            .search{
                display: flex;
                input{
                    color: $dark-color;
                    border: 1px solid $primary-color;
                    border-right: 0;
                    border-radius: 20px 0 0 20px;
                    padding-left: 20px;
                    background-color: $gray-bg;
                }
                .search-btn{
                    transform: rotateY(180deg);
                    &:hover{
                        color: $primary-color;
                        cursor: pointer;
                    }
                }
                .search-clicked{
                    color: $primary-color;
                    border: 1px solid $primary-color;
                    border-right: 0;
                    padding: 5px;
                    border-radius: 50% 0 0 50% ;
                }
            }
            .hamburger-menu{
                .hamburger{
                    margin-left: 1rem;
                    &:hover{
                        color: $primary-color;
                    }
    
                    i{
                        margin-left: .1rem;
                        cursor: pointer;
                    }
                }
                .hide-menu{
                    position: fixed;
                    padding: 0 30px;
                    padding-top: 10px;
                    display: flex;
                    flex-direction: column;
                    top: 0;
                    right: 0;
                    width: 200px;
                    height: 100vh;
                    background-color: $gray-bg;
                    .btn-close-menu{
                        width: 50px;
                        height: 50px;
                        border: 0;
                        border-radius: 50%;
                        line-height: 50px;
                        text-align: center;
                        background-color: $primary-color;
                        color: white;
                        font-size: 20px;
                    }
                    ul{
                        padding: 200px 0;
                        li{
                            padding-bottom: .3rem;
                            a{
                                color: $dark-color;
                                text-decoration: none;
                                font-family: 'PT Sans', sans-serif;
                                font-weight: 200;
                                .arrow{
                                    color: $gray-bg;
                                }
                                &:hover{
                                    color: $primary-color;
                                    .arrow{
                                        color: $primary-color;
                                    }
                                }
                            }
                        }
                    }
                    .socials{
                        text-align: center;
                        padding: 20px;
                        i{
                            background-color: $dark-color;
                        }
                    }
                }
            }
        }    
    }
}
</style>