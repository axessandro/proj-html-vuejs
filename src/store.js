import {reactive} from "vue";

export const store = reactive({
    roles: {
        creativeLeader : {
            roleName: "Creative Leader",
            roleShortText: "Lorem ipsum dolor sit amet, consectur adipiscing elit, sed do nulla eiusmod empor incididunt ut labore et dolore magna aliqua",
            roleText: "Lorem ipsum dolor sit amet, consectur adipiscing elit, sed do nulla eiusmod empor incididunt ut labore et dolore magna aliqua. Ut etim enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor sociis.",
            stats: {
                mentorship : 78,
                education : 95,
                learning : 65,
                motivation : 83
            }
        },
        founderDirector : {
            roleName: "Founder and Executive Director",
            roleShortText: "Lorem ipsum dolor sit amet, consectur adipiscing elit, sed do nulla eiusmod empor incididunt ut labore et dolore magna aliqua",
            roleText: "Lorem ipsum dolor sit amet, consectur adipiscing elit, sed do nulla eiusmod empor incididunt ut labore et dolore magna aliqua. Ut etim enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor sociis.",
            stats: {
                mentorship : 78,
                education : 95,
                learning : 65,
                motivation : 83
            }
        },
        dataAnalyst : {
            roleName: "Data Analyst",
            roleShortText: "Lorem ipsum dolor sit amet, consectur adipiscing elit, sed do nulla eiusmod empor incididunt ut labore et dolore magna aliqua",
            roleText: "Lorem ipsum dolor sit amet, consectur adipiscing elit, sed do nulla eiusmod empor incididunt ut labore et dolore magna aliqua. Ut etim enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor sociis.",
            stats: {
                mentorship : 78,
                education : 95,
                learning : 65,
                motivation : 83
            }
        }
    }
})