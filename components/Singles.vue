<template>
  <div>
    <section class="singles-container mt-10 lg:mt-20 xl:mt-32 xl:w-[75%]">
        <p class="font-monument-regular text-lg lg:text-2xl font-bold text-center mb-5 lg:mb-10 xl:text-2xl 2xl:text-3xl">
            Singles
        </p>

        <div class="grid grid-cols-2 gap-x-5 lg:gap-x-10 gap-y-7 lg:gap-y-10">
            <div v-for="single in singles" :key="single.id" class="singles currentTile cursor-pointer justify-self-center" @click="playSong(single.id, single.name)">
                <div class="top-container">
                    <img class="rounded-xl" :src="single.cover" alt="">
                </div>

                <div class="bottom-container mt-3">
                    <p class="font-monument-regular text-xs lg:text-sm xl:text-sm 2xl:text-base text-center">
                        {{ single.name }}
                    </p>
                </div>
            </div>
        </div>
    </section>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex'


export default {
    props: {
        singles: Array,
        playSong: Function
    },

    // computed: {
    //     ...mapState(["songIndex", "currentSongTitle", "currentSrc", "category"]),
    // },

    // methods: {
    //     ...mapMutations(["next", "prev", "changeSongIndex", "changeCurrentSongTitle", "changeCurrentSrc", "changeCategory"]),

    //     initSong(id, name) {
    //         let audio = document.querySelector('.audio')
    //         const isPlaying = audio.classList.contains('playing')

    //             // this.changeCurrentSongTitle(name)
        	
    //         if(isPlaying) {
    //             this.pauseSong()
    //         } else {
    //             // this.changeSongIndex(songIndex)
    //             this.playSong(id, name)
    //             console.log(this.currentSongTitle)
    //         }
    //             // this.changeCurrentSongTitle(name)
    //     },

    //     playSong(id, name) {
    //         let audio = document.querySelector('.audio')
    //         const currentTile = document.querySelectorAll('.currentTile')
    //         const isPlaying = audio.classList.contains('playing')
    //         let bigPlayIcon = document.querySelector('.big-play-icon')
    //         let bigPauseIcon = document.querySelector('.big-pause-icon')

    //         this.changeSongIndex(id)
    //         this.changeCurrentSongTitle(name)
        
    //         // if(this.category === 'all') {
    //         //     this.tracks.map((item) => {
    //         //         if(item.id === id) {
    //         //             audio.src = item.src
    //         //             this.changeCurrentSrc(item.src)
    //         //             console.log(item.src)
    //         //             currentTile.forEach((itemTwo, index) => {
    //         //                 itemTwo.classList.remove('current')
                            
    //         //                 if(index === id) {
    //         //                     itemTwo.classList.add('current')
    //         //                 }
    //         //         })
    //         //         }
    //         //     })
    //         // }

    //         if(this.category === 'singles') {
    //             this.singles.map((item) => {
    //                 if(item.id === id) {
    //                     audio.src = item.src
    //                     this.changeCurrentSrc(item.src)
    //                     console.log(item.src)
    //                     currentTile.forEach((itemTwo, index) => {
    //                         itemTwo.classList.remove('current')
                            
    //                         if(index === id) {
    //                             itemTwo.classList.add('current')
    //                         }
    //                 })
    //                 }
    //             })
    //         }

    //         console.log(this.currentSrc)
    //         bigPlayIcon.classList.add('hide')
    //         bigPauseIcon.classList.remove('hide')

    //         audio.classList.add('playing')

    //         // this.changeCurrentSongTitle(name)
    //         // console.log(this.changeCurrentSongTitle(name)
    //         console.log(this.currentSongTitle)
    //         audio.play()
    //     },

    //     pauseSong(id, name) {
    //         let audio = document.querySelector('.audio')
    //         let bigPlayIcon = document.querySelector('.big-play-icon')
    //         let bigPauseIcon = document.querySelector('.big-pause-icon')
            
    //         audio.classList.remove('playing')
    //         bigPlayIcon.classList.remove('hide')
    //         bigPauseIcon.classList.add('hide')
    //         audio.currentTime = audio.currentTime
    //         audio.pause()
    //         // this.changeCurrentSongTitle(name)
    //         // this.changeCurrentSongTitle(name)
    //         console.log(this.currentSongTitle)
    //         console.log('paused')
    //     },

    //     nextSong(name) {
    //         let audio = document.querySelector('.audio')
            
    //         this.next(name)

    //         audio.classList.remove('playing')
    //         this.playSong(this.songIndex)
    //     },

    //     prevSong(name) {
    //         let audio = document.querySelector('.audio')

    //         this.prev(name)

    //         this.changeCurrentSongTitle(name)
    //         audio.classList.remove('playing')
    //         this.playSong(this.songIndex)
    //     },
        
    //     updateProgress(e) {
    //         const { currentTime, duration } = e.srcElement
    //         const progressPercent = (currentTime / duration) * 100
    //         const progress = document.querySelector('.progress')

    //         // const nodeList = document.querySelectorAll(".example");
    //         // for (let i = 0; i < progress.length; i++) {
    //         //     progress[i].value = progressPercent;
    //         // }
    //         // progress.value = progressPercent

    //         // console.log(progressPercent)

    //         // if(progressPercent === 100) {
    //         //     this.nextSong()
    //         // }
    //         progress.value = progressPercent
    //     },

    //     seek(e) {
    //         const progress = document.querySelector('.progress')
    //         const audio = document.querySelector('.audio')
    //         const duration = audio.duration
    //         let totalValue 

    //         // for (let i = 0; i < progress.length; i++) {
    //         //     audio.currentTime = ( progress[i].value / 100 ) * duration
    //         //     console.log(audio.currentTime)
    //         // }
    //         audio.currentTime = ( progress.value / 100 ) * duration
    //     },

    //     rewind() {
    //         const audio = document.querySelector('.audio')
    //         audio.currentTime = audio.currentTime - 15
    //     },

    //     forward() {
    //         const audio = document.querySelector('.audio')
    //         audio.currentTime = audio.currentTime + 15
    //     },

    //     /* Handles */
    //     handleGoTo(position) {
    //         this.position = position;
    //     },

    //     handleAll() {
    //         this.position = 0;

    //         this.changeCategory('all')
    //         this.$refs.all.classList.add("active");
    //         this.$refs.mixtapes.classList.remove("active");
    //         this.$refs.singles.classList.remove("active");
    //         this.$refs.musicVideo.classList.remove("active");
    //     },

    //     handleMixtapes() {  
    //     this.position = 1;

    //     this.$refs.mixtapes.classList.add("active");
    //     this.$refs.all.classList.remove("active");
    //     this.$refs.singles.classList.remove("active");
    //     this.$refs.musicVideo.classList.remove("active");
    //     return this.tracks.filter(track => track.type === 'singles')
    //     },

    //     handleSingles() {
    //     this.position = 2;

    //     this.changeCategory('singles')
    //     this.$refs.singles.classList.add("active");
    //     this.$refs.all.classList.remove("active");
    //     this.$refs.mixtapes.classList.remove("active");
    //     this.$refs.musicVideo.classList.remove("active");

    //     return this.tracks.filter(track => track.type === 'singles')
    //     },

    //     handleMusicVideos() {
    //     this.position = 3;

    //     this.$refs.musicVideo.classList.add("active");
    //     this.$refs.all.classList.remove("active");
    //     this.$refs.mixtapes.classList.remove("active");
    //     this.$refs.singles.classList.remove("active");
    //     },
    // },
}
</script>

<style>

</style>