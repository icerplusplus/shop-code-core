import { createRouter, publicProcedure } from "../utils/trpc";

export const sectionRouter = createRouter({
    "get-all-sections": publicProcedure
    .query(({ctx}) => {
        return [
            'new-source-code',
            'top-websites',
            'top-softwares',
            'top-apps',
            'top-games'
        ]
    })
})