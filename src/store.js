import {reactive} from "vue";

export const store = reactive({
    hamburgerClicked: false,
    searchValue: "",
    roles: {
        creativeLeader : {
            roleName: "Creative Leader",
            roleShortText: "Lorem ipsum dolor sit amet, consectur adipiscing elit, sed do nulla eiusmod empor incididunt ut labore et dolore magna aliqua",
            roleText: "Lorem ipsum dolor sit amet, consectur adipiscing elit, sed do nulla eiusmod empor incididunt ut labore et dolore magna aliqua. Ut etim enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor sociis.",
            stats: [
                {
                    nameStat: "Mentorship",
                    valueStat: "78%"
                },
                {
                    nameStat: "Education",
                    valueStat: "95%"
                },
                {
                    nameStat: "Learning",
                    valueStat: "65%"
                },
                {
                    nameStat: "Motivation",
                    valueStat: "83%"
                }
            ]
        },
        founderDirector : {
            roleName: "Founder and Executive Director",
            roleShortText: "Lorem ipsum dolor sit amet, consectur adipiscing elit, sed do nulla eiusmod empor incididunt ut labore et dolore magna aliqua",
            roleText: "Lorem ipsum dolor sit amet, consectur adipiscing elit, sed do nulla eiusmod empor incididunt ut labore et dolore magna aliqua. Ut etim enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor sociis.",
            stats: [
                {
                    nameStat: "Mentorship",
                    valueStat: "78%"
                },
                {
                    nameStat: "Education",
                    valueStat: "95%"
                },
                {
                    nameStat: "Learning",
                    valueStat: "65%"
                },
                {
                    nameStat: "Motivation",
                    valueStat: "83%"
                }
            ]
        },
        dataAnalyst : {
            roleName: "Data Analyst",
            roleShortText: "Lorem ipsum dolor sit amet, consectur adipiscing elit, sed do nulla eiusmod empor incididunt ut labore et dolore magna aliqua",
            roleText: "Lorem ipsum dolor sit amet, consectur adipiscing elit, sed do nulla eiusmod empor incididunt ut labore et dolore magna aliqua. Ut etim enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor sociis.",
            stats: [
                {
                    nameStat: "Mentorship",
                    valueStat: "78%"
                },
                {
                    nameStat: "Education",
                    valueStat: "95%"
                },
                {
                    nameStat: "Learning",
                    valueStat: "65%"
                },
                {
                    nameStat: "Motivation",
                    valueStat: "83%"
                }
            ]
        }
    },
    events:[
        {
            nameEvent: "Melburne Coaching",
            hourEvent: "9:00 am - 5:00 pm",
            dayEvent: 7,
            mounthEvent: "Jan",
            yearEvent: 2022,
            locationEvent: "Cambridge, MA 02138, USA",
            class: "-melburne",
            mapVisible: false
        },
        {
            nameEvent: "New York Coaching",
            hourEvent: "9:00 am - 5:00 pm",
            dayEvent: 11,
            mounthEvent: "Jan",
            yearEvent: 2022,
            locationEvent: "Cambridge, MA 02138, USA",
            class: "-new-york",
            mapVisible: true
        },
        {
            nameEvent: "London Coaching",
            hourEvent: "9:00 am - 5:00 pm",
            dayEvent: 21,
            mounthEvent: "Jan",
            yearEvent: 2022,
            locationEvent: "Cambridge, MA 02138, USA",
            class: "-london",
            mapVisible: false
        }
    ],
    clients:[
        {
            urlLogo: "client-1a",
            urlLogoActive: "client-1b"
        },
        {
            urlLogo: "client-2a",
            urlLogoActive: "client-2b"
        },
        {
            urlLogo: "client-3a",
            urlLogoActive: "client-3b"
        },
        {
            urlLogo: "client-4a",
            urlLogoActive: "client-4b"
        },
        {
            urlLogo: "client-5a",
            urlLogoActive: "client-5b"
        }
    ]
})