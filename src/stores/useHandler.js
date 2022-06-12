import { defineStore } from 'pinia';
import axios from "axios";

export const useHandlerStore = defineStore("handler", {
    state: () => ({
            link: '',
            detail: '',
            type1: '',
            type2: '',
            
    }),

    actions: {
        getLink(index) {
            this.link = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + index + ".png";
            return this.link;
        },
    },
});

