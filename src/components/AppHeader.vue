<script>
export default {
    name: "AppHeader",
    data(){
        return{
            links: [
                {
                    section: "homes",
                    href: "/homes"
                },
                {
                    section: "pages",
                    href: "/pages"
                },
                {
                    section: "blog",
                    href: "/blog"
                },
                {
                    section: "shop",
                    href: "/shop"
                },
                {
                    section: "events",
                    href: "/events"
                },
                {
                    section: "elements",
                    href: "/elements"
                },
            ],
            currentClicked: 0,
        }
    },
    methods:{
        showClicked(index){
            this.currentClicked = index;
        }
    }
}
</script>

<template>
    <!-- HEADER -->
    <header>
        <div class="header-inner">
            <!-- HEADER LEFT -->
            <div class="header-logo"><img src="../assets/img/logo-img-01.png" alt=""></div>
            <!-- HEADER LEFT -->
        
            <!-- HEADER RIGHT -->
            <div class="header-right">
                <div class="links">
                    <a :href="link.href" @click.prevent="showClicked(index)" :class="currentClicked === index ? 'clicked' : ''"  v-for="(link, index) in links" :key="index"> <span class="arrow">&rarr;</span>{{link.section.toUpperCase()}}</a>
                </div>
                <i class="fa-solid fa-magnifying-glass search-btn"></i>
                <div class="hamburgher">
                    <i class="fa-solid fa-ellipsis-vertical"></i>
                    <i class="fa-solid fa-bars"></i>
                </div>
            </div>
            <!-- /HEADER RIGHT -->
        </div>

    </header>
    <!-- /HEADER -->
</template>

<style lang="scss" scoped>
@use "../style/general.scss" as *;
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
            .search-btn{
                transform: rotateY(180deg);
            }
            .hamburgher{
                margin-left: 1rem;

                i{
                    margin-left: .1rem;
                }
            }
        }    
    }
}

</style>