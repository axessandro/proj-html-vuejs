<script>
export default{
    name: "AppFooter",
    props:{
        links: Array,
        // footerLinks:[
        //     {
        //     section: "About me",
        //     href: "/about-me"
        //     },
        //     {
        //     section: "About us",
        //     href: "/about-us"
        //     },
        //     {
        //     section: "Language packs",
        //     href: "/language"
        //     },
        //     {
        //     section: "Become a coach",
        //     href: "/coach"
        //     },
        //     {
        //     section: "Monthly events",
        //     href: "/events"
        //     }
        // ],
    }
}
</script>

<template>
    <!-- footer -->
    <footer>
        <div class="inner-footer">

            <div class="ms_col about">
                <h4>About</h4>
                <hr>
                <p>We created Everlead to effectively become the stepping stone towards meeting all your goals & achieving business success.</p>
                <div class="socials">
                    <i class="fa-brands fa-linkedin-in"></i>
                    <i class="fa-brands fa-facebook-f"></i>
                    <i class="fa-brands fa-twitter"></i>
                </div>
            </div>

            <div class="ms_col twitter">
                <h4>Twitter</h4>
                <hr>
                <div class="twit">
                    <i class="fa-brands fa-twitter"></i>
                    <p><a href="" @click.prevent>@aliasadadm</a> Hi <a href="" @click.prevent>@aliasadadm</a>, can you please submit a ticket at <a href="" @click.prevent>https://t.co/JLV61aXG7d</a> and one of our support agent... <a href="" @click.prevent>https://t.co/yk57k1S9bS</a></p>
                </div>
                <div class="twit">
                    <i class="fa-brands fa-twitter"></i>
                    <p><a href="" @click.prevent>@HenrySefaBoaky1</a> Check out our theme Gioia witch has all necessary elements to build a multi vendor marketplace.<a href="" @click.prevent>https://t.co/c9BlYxZBIL</a></p>
                </div>
            </div>

            <div class="ms_col important-links">
                <h4>Important links</h4>
                <hr>
                <ul>
                    <li v-for="(link, index) in links" :key="index"><a :href="link.href">{{link.section}}</a></li>
                </ul>
            </div>

            <div class="ms_col contacts">
                <h4>Contact me</h4>
                <hr>
                <div class="contact">
                    <i class="fa-solid fa-location-dot"></i>
                    <p>457 BigBlue Street, NY 10013</p>
                </div>
                <div class="contact">
                    <i class="fa-solid fa-phone"></i>
                    <p>(315) 5512-2579</p>
                </div>
                <div class="contact">
                    <i class="fa-solid fa-envelope"></i>
                    <p>everlead@mikado.com</p>
                </div>
                <div class="input-wrapper">
                    <label for="name-footer"></label>
                    <input type="text" id="name-footer" placeholder="Your Name">
                    <button>SUBSCRIBE</button>
                </div>
            </div>
        </div>
    </footer>
    <!-- /footer -->

    <!-- fooetr bot -->
    <div class="footer-bot">
        <p>Copyright Everlead<i class="fa-regular fa-copyright"></i>MikadoThemes</p>
    </div>
    <!-- /fooetr bot -->
</template>

<style lang="scss">
@use "../style/general.scss" as *;
// footer
footer{
    color: white;
    background-color: $footer-bg;
    .inner-footer{
        width: 75%;
        margin: 0 auto;
        padding: 100px 0;
        display: flex;
        justify-content: space-between;
        .ms_col{
            width: calc(100% / 4 - 2rem);
            h4{
                margin-bottom: 0;
                font-size: 1.3rem;
            }
            p{
                font-size: .9rem;
                opacity: 1;
                color: $footer-color;
            }
            ul{
                list-style-type: none;
                padding-left: 0;
                li{
                    padding-bottom: .3rem;
                    a{
                        color: $footer-color;
                        text-decoration: none;
                        font-family: 'PT Sans', sans-serif;
                        font-weight: 200;
                        &:hover{
                            color: $primary-color;
                        }
                    }
                }
            }
        }
        .about{
            .socials{
                i{
                    background-color: white;
                    color: $footer-bg;
                    &:hover{
                        background-color: $primary-color;
                        color: white;
                    }
                }
            }
        }
        .twitter{
            .twit{
                display: flex;
                i{
                    color: $primary-color;
                    margin-right: 15px;
                }
                p{
                    a{
                        color: $footer-color;
                        &:hover{
                            color: $primary-color;
                        }
                    }
                }
            }
        }
        .contacts{
            display: flex;
            flex-direction: column;
            .contact{
                display: flex;
                i{
                    color: $primary-color;
                    margin-right: 10px;
                }
            }
            .input-wrapper{
                display: flex;
                justify-content: space-between;
                width: 100%;
                border-bottom: 1px solid white;
                padding-bottom: 5px;
                input{
                    flex-wrap: nowrap;
                    width: 60%;
                    font-family: 'PT Sans', sans-serif;
                    font-weight: 200;
                    background-color: $footer-bg;
                    color: $footer-color;
                    border: 0;
                }
                button{
                    
                    font-family: 'PT Sans', sans-serif;
                    font-weight: 900;
                    background-color: $footer-bg;
                    color: white;
                    border: 0;
                    font-size: .9rem;
                    text-align: end;
                }
            }
        }
    }
}
// /footer

// footer bot
.footer-bot{
    height: 50px;
    background-color: $primary-color;
    color: white;
    text-align: center;
    p{
        text-align: center;
        opacity: 1;
        line-height: 50px;
        font-size: .8rem;
        i{
            color: white;
            font-size: .8rem;
        }
    }
}
// /footer bot
</style>