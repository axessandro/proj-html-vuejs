<script>
export default{
    name: "AppContact",
}
</script>

<template>
<section>
    <div class="ms-container">
        <!-- map -->
        <div class="map">
            <img src="../assets/img/map.png" alt="">
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
                <input type="text" placeholder="Write a message...">
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
                input{
                    border: 0;
                    background-color: $gray-bg;
                    border-bottom: 1px solid lightgray;
                    font-size: .8rem;
                    padding: .5rem 1rem;
                    margin-bottom: 1rem;
                    &#name, &#email{
                        width: 48%;
                    }
                    &#message{
                        height: 200px;
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