import { defineStore } from 'pinia';
import axios from "axios";

export const useHandlerStore = defineStore("handler", {
    state: () => ({
            link: 'Pinia Test',
            name: 'Luis'
    }),

    actions: {
        getLink(index) {
            this.link = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + index + ".png";
        },
    },
});

