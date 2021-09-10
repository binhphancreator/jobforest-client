<template>
    <client-only>
        <Particles
            id="tsparticles"
            :options="options"
            style="z-index:-1" 
            class="fixed top-0 bottom-0 right-0 left-0"
        />
    </client-only>
</template>

<script>
export default {
    data(){
        return{
            options:{
                background: {
                    color: {
                        value: 'transparent'
                    }
                },
                fpsLimit: 60,
                interactivity: {
                    detectsOn: 'window',
                    events: {
                        onClick: {
                            enable: true,
                            mode: 'repulse'
                        },
                        onHover: {
                            enable: true,
                            mode: 'grab'
                        },
                        resize: true
                    },
                    modes: {
                        bubble: {
                            distance: 400,
                            duration: 2,
                            opacity: 0.8,
                            size: 40
                        },
                        push: {
                            quantity: 4
                        },
                        repulse: {
                            distance: 200,
                            duration: 0.4
                        }
                    }
                },
                particles: {
                    color: {
                        value: '#154360'
                    },
                    links: {
                        color: '#CACFD2',
                        distance: 120,
                        enable: true,
                        opacity: 0.5,
                        width: 1
                    },
                    collisions: {
                        enable: true
                    },
                    move: {
                        direction: 'none',
                        enable: true,
                        outMode: 'out',
                        random: false,
                        speed: 0.5,
                        straight: false
                    },
                    number: {
                        density: {
                            enable: true,
                            value_area: 800
                        },
                        value: 25
                    },
                    opacity: {
                        value: 0.2
                    },
                    shape: {
                        type: ["circle", "star"]
                    },
                    size: {
                        random: true,
                        value: 5
                    }
                },
                detectRetina: true
            }
        }
    },
    mounted(){
        
    }
}
</script>

<style>

</style>