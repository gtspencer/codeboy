<template>
  <div >
    <div class="mt-10 lg:mt-20 xl:mt-32 tracklist">
        <p class="font-monument-regular text-lg lg:text-2xl font-bold text-center mb-5 lg:mb-10 xl:text-2xl 2xl:text-3xl">
            All Tracks
        </p>

        <div v-for="track in tracks" :key="track.id" class="track-container currentTile relative py-3 flex justify-between after:absolute after:bottom-0 after:left-0 after:w-full after:h-px after:bg-[#E5E5E5] cursor-pointer" ref="currentTile">
            <div class="left-container flex justify-between items-center w-[57%] md:w-[49%]">
                <div class=".left-container flex items-center space-x-2">
                    <div class="cover w-14 h-14 rounded-lg bg-center bg-contain" :style="{ backgroundImage: `url( ${track.cover} )`}">
                        <!-- <p>
                            {{ track.cover }}
                        </p> -->
                    </div>

                    <p class="title font-inter font-medium text-[10px] lg:text-xs xl:text-sm 2xl:text-base">
                        {{ track.name }}
                    </p>
                </div>

                <div class="right-container">
                    <button class="play w-7 h-7 rounded-full bg-[#6837FA] flex justify-center items-center" ref="play" @click="playSong(track.id, track.name)">
                        <font-awesome-icon class="play-icon text-white text-sm xl:text-xs" :icon="['fas', 'play']"/>
                        <font-awesome-icon class="pause-icon text-white hide text-sm xl:text-xs" :icon="['fas', 'pause']"/>
                    </button>
                </div>
            </div>

            <div class="right-container flex justify-between items-center w-[40%] md:w-[49%]">
                <p class="text-xs font-medium duration font-inter lg:text-sm xl:text-base 2xl:text-lg">
                    {{ track.duration }}
                </p>

                <nuxt-link to="/lyrics/Bangee (Single)">
                    <button class="lyrics text-[10px] xl:text-xs 2xl:text-sm py-2 px-3 rounded-full border border-black">
                        Lyrics
                    </button>
                </nuxt-link>
            </div>
        </div>
    </div>
  </div>
</template>

<script>import { mapState, mapMutations, mapActions } from 'vuex'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default {
    layout: 'music',

    props: {
        tracks: Array
    },

    transitions: {

    },
    
    data() {
        return {
            screens: ["All", "CollectionFaq", "RepairFaq", "DeliveryFaq"],
            position: 0,

            // 
            // currentCover: '',
            // currentTitle: '',
            // currentSong: this.currenSongTitle
        }
    },

    computed: {
        ...mapState(["songIndex", "currentSongTitle", "currentSrc"])
    },

    methods: {
        ...mapMutations(["next", "prev", "changeSongIndex", "changeCurrentSongTitle", "changeCurrentSrc"]),

        initSong(id, name) {
            let audio = document.querySelector('.audio')
            const isPlaying = audio.classList.contains('playing')

                // this.changeCurrentSongTitle(name)
        	
            if(isPlaying) {
                this.pauseSong()
            } else {
                // this.changeSongIndex(songIndex)
                this.playSong(id, name)
                console.log(this.currentSongTitle)
            }
                // this.changeCurrentSongTitle(name)
        },

        playSong(id, name) {
            let audio = document.querySelector('.audio')
            const currentTile = document.querySelectorAll('.currentTile')
            const isPlaying = audio.classList.contains('playing')
            let bigPlayIcon = document.querySelector('.big-play-icon')
            let bigPauseIcon = document.querySelector('.big-pause-icon')

            this.changeSongIndex(id)
            this.changeCurrentSongTitle(name)
        
            this.data.map((item) => {
                if(item.id === id) {
                    audio.src = item.src
                    this.changeCurrentSrc(item.src)
                    console.log(item.src)
                    currentTile.forEach((itemTwo, index) => {
                        itemTwo.classList.remove('current')
                        
                        if(index === id) {
                            itemTwo.classList.add('current')
                        }
                })
                }
            })

            console.log(this.currentSrc)
            bigPlayIcon.classList.add('hide')
            bigPauseIcon.classList.remove('hide')

            audio.classList.add('playing')

            // this.changeCurrentSongTitle(name)
            // console.log(this.changeCurrentSongTitle(name)
            console.log(this.currentSongTitle)
            audio.play()
        },

        pauseSong(id, name) {
            let audio = document.querySelector('.audio')
            let bigPlayIcon = document.querySelector('.big-play-icon')
            let bigPauseIcon = document.querySelector('.big-pause-icon')
            
            audio.classList.remove('playing')
            bigPlayIcon.classList.remove('hide')
            bigPauseIcon.classList.add('hide')
            audio.currentTime = audio.currentTime
            audio.pause()
            // this.changeCurrentSongTitle(name)
            // this.changeCurrentSongTitle(name)
            console.log(this.currentSongTitle)
            console.log('paused')
        },

        // nextSong(name) {
        //     let audio = document.querySelector('.audio')
            
        //     this.next(name)

        //     audio.classList.remove('playing')
        //     this.playSong(this.songIndex)
        // },

        // prevSong(name) {
        //     let audio = document.querySelector('.audio')

        //     this.prev(name)

        //     this.changeCurrentSongTitle(name)
        //     audio.classList.remove('playing')
        //     this.playSong(this.songIndex)
        // },
        
        // updateProgress(e) {
        //     const { currentTime, duration } = e.srcElement
        //     const progressPercent = (currentTime / duration) * 100
        //     const progress = document.querySelector('.progress')

        //     // const nodeList = document.querySelectorAll(".example");
        //     // for (let i = 0; i < progress.length; i++) {
        //     //     progress[i].value = progressPercent;
        //     // }
        //     // progress.value = progressPercent

        //     // console.log(progressPercent)

        //     // if(progressPercent === 100) {
        //     //     this.nextSong()
        //     // }
        //     progress.value = progressPercent
        // },

        // seek(e) {
        //     const progress = document.querySelector('.progress')
        //     const audio = document.querySelector('.audio')
        //     const duration = audio.duration
        //     let totalValue 

        //     // for (let i = 0; i < progress.length; i++) {
        //     //     audio.currentTime = ( progress[i].value / 100 ) * duration
        //     //     console.log(audio.currentTime)
        //     // }
        //     audio.currentTime = ( progress.value / 100 ) * duration
        // },

        // rewind() {
        //     const audio = document.querySelector('.audio')
        //     audio.currentTime = audio.currentTime - 15
        // },

        // forward() {
        //     const audio = document.querySelector('.audio')
        //     audio.currentTime = audio.currentTime + 15
        // },
    },
}
</script>

<style>

</style>