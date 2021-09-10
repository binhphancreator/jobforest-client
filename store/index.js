export const state = () => ({
    cloud:'http://149.28.129.121',
})

export const actions = {
    async nuxtServerInit ({ state,dispatch }) {
        await dispatch("tags/init")
    },
}