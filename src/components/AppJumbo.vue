<script>
export default{
    name: "AppJumbo",

    data(){
        return{
            pages: [
                {
                    title: "Our Team",
                    subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing alit sed eiusmod tempor incidunt ut labore et dolore magna aliqua",
                    href: "/about-us",
                    imgURL: "jumbo-1.png"
                },
                {
                    title: "",
                    subtitle: "",
                    href: "",
                    imgURL: "jumbo-2.png"
                }
            ]
        }
    }
}
</script>

<template>
<div class="jumbo">
    
</div>
</template>

<style lang="scss" scoped>
@use "../style/general.scss" as *;
.jumbo{
    width: 100%;
    height: 90vh;
}
</style>