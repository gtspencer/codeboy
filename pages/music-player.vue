<template>
  <div>
    <section class="mt-10 mb-20 player">
        <div class="space-y-10 player-container md:flex md:space-y-0 md:space-x-5">
            <div class="top-left lg:w-[30%]">
                <div class="top-left-container">
                    <h2 class="text-2xl text-center capitalize md:text-left font-monument-regular sm:text-3xl md:text-2xl lg:text-4xl xl:text-5xl 2xl:text-6xl lg:leading-normal xl:leading-normal 2xl:leading-normal">
                        listening <br class="hidden lg:block"> player
                    </h2>

                    <p class="font-monument-light font-light text-[10px] uppercase text-center lg:mt-2 xl:mt-3 md:text-left xl:text-xs 2xl:text-sm md:px-0 px-10 py-2 lg:leading-normal xl:leading-normal">
                        A short paragraph describing <br class="hidden md:block"> your team. You may want to <br class="hidden md:block"> describe what they are <br class="hidden md:block"> responsible for
                    </p>

                    <ul class="tray w-full font-monument-light font-light text-[#2E2B26] text-[8px] lg:text-[10px] xl:text-xs 2xl:text-sm flex md:flex-col justify-around items-center md:items-start mt-4 sm:mt-6 md:space-y-1">
                        <li><button class="uppercase all-button active leading-loose" ref="all" @click="handleAll">- all</button></li>
                        <li><button class="uppercase mixtapes-button leading-loose" ref="mixtapes" @click="handleMixtapes">- mixtapes</button></li>
                        <li><button class="uppercase singles-button leading-loose" ref="singles" @click="handleSingles">- singles</button></li>
                        <li><button class="uppercase musicVideo-button leading-loose" ref="musicVideo" @click="handleMusicVideos">- music videos</button></li>
                    </ul>
                </div>
            </div>

            <div class="bottom-right w-full lg:w-[70%]">
                <component
                    :is="screens[position]"
                    @goto="handleGoTo"
                    :tracks="tracks"
                    :singles="singles"
                    :meetings="meetings"
                    :codeLife="codeLife"
                    :playSong="playSong"
                    :init="initSong"
                    @meetings="handleMeetings"
                    @code="handleCodeLife"
                />
            </div>
        </div>
    </section>    
    <audio class="audio" src="https://res.cloudinary.com/eazzie/video/upload/q_100/v1642773073/Codeboy/Banjee_SINGLE_a8uvtn.mp3" ref="audio" @timeupdate="updateProgress" @ended="nextSong"></audio>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default {
    layout: 'music',
    
    data() {
        return {
            screens: ["All", "Mixtapes", "Singles", "DeliveryFaq", "Meetings", "CodeLife", "Lyrics"],
            position: 0,

            tracks: [
                {
            name: 'Days Amazing',
            duration: '2:39',
            cover: 'https://res.cloudinary.com/eazzie/image/upload/q_100/v1644355083/Codeboy/Mixtape_small_kl5p0z.webp',
            id: 0,
            status: '/svg/lock.svg',
            src: 'https://res.cloudinary.com/eazzie/video/upload/q_100/v1644335810/Codeboy/Days_Amazing_ofmuje.wav',
            lyrics: `(Chorus)

                I swear to god I wont change up

                Our bond was so real

                Me and you was gonna build (yea x2)

                Dates on your day off

                Ate you like a meal

                You put me in my feelings


                (Verse 1)

                Killing them with no makeup

                And I know they hate us

                Cause’ we always shining, always grinding, money makers

                In the hills like lakers

                I ain’t got a contract

                And I need a million plus cause under? I aint signing that

                Working hard, Shining hard

                Remember being in the dark

                Remember when I pushed the cars

                Now the cars is push to start

                And I really need that contract 

                Cause I really like to ball

                Keep my lawyer on retainer

                Cause I cant aint even trust these broads

                I like all types designer

                Im in Cali like a Niner

                Glow em up I got the Midas (Touch)

                Man we got too high with the Pilot (Fuck)


                (Bridge)

                People grow, feelings change, I hope our time ain’t up 

                Don’t compare to anybody, other people aint us

                I know the money wont change me

                Hope the money don’t change ya

                I just wanna stay down, stay low

                Make my money, make love

                We makeup to breakup

                You’d promise that you wait up

                Ima see you later, get back and get this paper


                (Hook)

                Cause I never change, never change

                Girl I never switch up

                If I cut you off you missing me

                I’ll never miss ya

                (Chorus)

                I swear to god I wont change up

                Our bond was so real

                Me and you was gonna build (yea x2)

                Dates on your day off

                Ate you like a meal

                You put me in my feelings


                (Verse 2)

                Killing them with no makeup

                And I know they hate us

                Cause’ you looking good girl

                Yea you rocking my world

                Yea you never complaining

                Everynight we stay lit

                Member working dayshift

                Now Im making these hits

                (yea x3) I love to ball!

                Yea ill always hold you down

                If you ever need me most

                If you ever feeling down

                Then we need to hit the coast

                When I pull up lose your top

                Take it off right now

                I fell for you when we met

                We had dinner up at catch

                Turn around, ass up

                Face down when we sex

                You get mad if I don’t text

                To you I dont have a next

                Hold me down, I’ll you down

                Baby we girl we our a match


                (Chorus)

                I swear to god I wont change up

                Our bond was so real

                Me and you was gonna build (yea x2)

                Dates on your day off

                Ate you like a meal

                You put me in my feelings


                (Verse 3)

                Throwing money yea to the ceiling

                Look around Im with my day 1s, what a feeling

                Never change, never change

                I’ll never switch up

                If I cut you off you missing me

                I’ll never miss ya

                (yea x3) Never change, Never change

                I’ll never switch up

                If I cut you off you missing me

                I’ll never miss ya

                You aint in the picture

  I hope you get the picture (yea, yea)`
        },

        {
            name: 'Never Change Up',
            duration: '3:30',
            cover: 'https://res.cloudinary.com/eazzie/image/upload/q_100/v1644355083/Codeboy/Mixtape_small_kl5p0z.webp',
            id: 1,
            src: 'https://res.cloudinary.com/eazzie/video/upload/q_100/v1644335921/Codeboy/Never_Change_Up_eccwyu.wav',
            lyrics: `(Chorus)

                I swear to god I wont change up

                Our bond was so real

                Me and you was gonna build (yea x2)

                Dates on your day off

                Ate you like a meal

                You put me in my feelings


                (Verse 1)

                Killing them with no makeup

                And I know they hate us

                Cause’ we always shining, always grinding, money makers

                In the hills like lakers

                I ain’t got a contract

                And I need a million plus cause under? I aint signing that

                Working hard, Shining hard

                Remember being in the dark

                Remember when I pushed the cars

                Now the cars is push to start

                And I really need that contract 

                Cause I really like to ball

                Keep my lawyer on retainer

                Cause I cant aint even trust these broads

                I like all types designer

                Im in Cali like a Niner

                Glow em up I got the Midas (Touch)

                Man we got too high with the Pilot (Fuck)


                (Bridge)

                People grow, feelings change, I hope our time ain’t up 

                Don’t compare to anybody, other people aint us

                I know the money wont change me

                Hope the money don’t change ya

                I just wanna stay down, stay low

                Make my money, make love

                We makeup to breakup

                You’d promise that you wait up

                Ima see you later, get back and get this paper


                (Hook)

                Cause I never change, never change

                Girl I never switch up

                If I cut you off you missing me

                I’ll never miss ya

                (Chorus)

                I swear to god I wont change up

                Our bond was so real

                Me and you was gonna build (yea x2)

                Dates on your day off

                Ate you like a meal

                You put me in my feelings


                (Verse 2)

                Killing them with no makeup

                And I know they hate us

                Cause’ you looking good girl

                Yea you rocking my world

                Yea you never complaining

                Everynight we stay lit

                Member working dayshift

                Now Im making these hits

                (yea x3) I love to ball!

                Yea ill always hold you down

                If you ever need me most

                If you ever feeling down

                Then we need to hit the coast

                When I pull up lose your top

                Take it off right now

                I fell for you when we met

                We had dinner up at catch

                Turn around, ass up

                Face down when we sex

                You get mad if I don’t text

                To you I dont have a next

                Hold me down, I’ll you down

                Baby we girl we our a match


                (Chorus)

                I swear to god I wont change up

                Our bond was so real

                Me and you was gonna build (yea x2)

                Dates on your day off

                Ate you like a meal

                You put me in my feelings


                (Verse 3)

                Throwing money yea to the ceiling

                Look around Im with my day 1s, what a feeling

                Never change, never change

                I’ll never switch up

                If I cut you off you missing me

                I’ll never miss ya

                (yea x3) Never change, Never change

                I’ll never switch up

                If I cut you off you missing me

                I’ll never miss ya

                You aint in the picture

  I hope you get the picture (yea, yea)`
        },

        {
            name: "Feelings Can't Fade away",
            duration: '3:34',
            cover: 'https://res.cloudinary.com/eazzie/image/upload/q_100/v1644355083/Codeboy/Mixtape_small_kl5p0z.webp',
            id: 2,
            status: '/svg/lock.svg',
            src: 'https://res.cloudinary.com/eazzie/video/upload/v1644335894/Codeboy/Feelings_Can_t_Fade_Away_niztxc.wav',
            lyrics: `(Chorus)

                I swear to god I wont change up

                Our bond was so real

                Me and you was gonna build (yea x2)

                Dates on your day off

                Ate you like a meal

                You put me in my feelings


                (Verse 1)

                Killing them with no makeup

                And I know they hate us

                Cause’ we always shining, always grinding, money makers

                In the hills like lakers

                I ain’t got a contract

                And I need a million plus cause under? I aint signing that

                Working hard, Shining hard

                Remember being in the dark

                Remember when I pushed the cars

                Now the cars is push to start

                And I really need that contract 

                Cause I really like to ball

                Keep my lawyer on retainer

                Cause I cant aint even trust these broads

                I like all types designer

                Im in Cali like a Niner

                Glow em up I got the Midas (Touch)

                Man we got too high with the Pilot (Fuck)


                (Bridge)

                People grow, feelings change, I hope our time ain’t up 

                Don’t compare to anybody, other people aint us

                I know the money wont change me

                Hope the money don’t change ya

                I just wanna stay down, stay low

                Make my money, make love

                We makeup to breakup

                You’d promise that you wait up

                Ima see you later, get back and get this paper


                (Hook)

                Cause I never change, never change

                Girl I never switch up

                If I cut you off you missing me

                I’ll never miss ya

                (Chorus)

                I swear to god I wont change up

                Our bond was so real

                Me and you was gonna build (yea x2)

                Dates on your day off

                Ate you like a meal

                You put me in my feelings


                (Verse 2)

                Killing them with no makeup

                And I know they hate us

                Cause’ you looking good girl

                Yea you rocking my world

                Yea you never complaining

                Everynight we stay lit

                Member working dayshift

                Now Im making these hits

                (yea x3) I love to ball!

                Yea ill always hold you down

                If you ever need me most

                If you ever feeling down

                Then we need to hit the coast

                When I pull up lose your top

                Take it off right now

                I fell for you when we met

                We had dinner up at catch

                Turn around, ass up

                Face down when we sex

                You get mad if I don’t text

                To you I dont have a next

                Hold me down, I’ll you down

                Baby we girl we our a match


                (Chorus)

                I swear to god I wont change up

                Our bond was so real

                Me and you was gonna build (yea x2)

                Dates on your day off

                Ate you like a meal

                You put me in my feelings


                (Verse 3)

                Throwing money yea to the ceiling

                Look around Im with my day 1s, what a feeling

                Never change, never change

                I’ll never switch up

                If I cut you off you missing me

                I’ll never miss ya

                (yea x3) Never change, Never change

                I’ll never switch up

                If I cut you off you missing me

                I’ll never miss ya

                You aint in the picture

  I hope you get the picture (yea, yea)`
        },

        {
            name: "Hopeless Romantic",
            duration: '3:26',
            cover: 'https://res.cloudinary.com/eazzie/image/upload/q_100/v1644355083/Codeboy/Mixtape_small_kl5p0z.webp',
            id: 3,
            status: '/svg/lock.svg',
            src: 'https://res.cloudinary.com/eazzie/video/upload/v1644335851/Codeboy/HOPELESS_ROMANTIC_ykwpoi.wav',
            lyrics: `(Chorus)

                I swear to god I wont change up

                Our bond was so real

                Me and you was gonna build (yea x2)

                Dates on your day off

                Ate you like a meal

                You put me in my feelings


                (Verse 1)

                Killing them with no makeup

                And I know they hate us

                Cause’ we always shining, always grinding, money makers

                In the hills like lakers

                I ain’t got a contract

                And I need a million plus cause under? I aint signing that

                Working hard, Shining hard

                Remember being in the dark

                Remember when I pushed the cars

                Now the cars is push to start

                And I really need that contract 

                Cause I really like to ball

                Keep my lawyer on retainer

                Cause I cant aint even trust these broads

                I like all types designer

                Im in Cali like a Niner

                Glow em up I got the Midas (Touch)

                Man we got too high with the Pilot (Fuck)


                (Bridge)

                People grow, feelings change, I hope our time ain’t up 

                Don’t compare to anybody, other people aint us

                I know the money wont change me

                Hope the money don’t change ya

                I just wanna stay down, stay low

                Make my money, make love

                We makeup to breakup

                You’d promise that you wait up

                Ima see you later, get back and get this paper


                (Hook)

                Cause I never change, never change

                Girl I never switch up

                If I cut you off you missing me

                I’ll never miss ya

                (Chorus)

                I swear to god I wont change up

                Our bond was so real

                Me and you was gonna build (yea x2)

                Dates on your day off

                Ate you like a meal

                You put me in my feelings


                (Verse 2)

                Killing them with no makeup

                And I know they hate us

                Cause’ you looking good girl

                Yea you rocking my world

                Yea you never complaining

                Everynight we stay lit

                Member working dayshift

                Now Im making these hits

                (yea x3) I love to ball!

                Yea ill always hold you down

                If you ever need me most

                If you ever feeling down

                Then we need to hit the coast

                When I pull up lose your top

                Take it off right now

                I fell for you when we met

                We had dinner up at catch

                Turn around, ass up

                Face down when we sex

                You get mad if I don’t text

                To you I dont have a next

                Hold me down, I’ll you down

                Baby we girl we our a match


                (Chorus)

                I swear to god I wont change up

                Our bond was so real

                Me and you was gonna build (yea x2)

                Dates on your day off

                Ate you like a meal

                You put me in my feelings


                (Verse 3)

                Throwing money yea to the ceiling

                Look around Im with my day 1s, what a feeling

                Never change, never change

                I’ll never switch up

                If I cut you off you missing me

                I’ll never miss ya

                (yea x3) Never change, Never change

                I’ll never switch up

                If I cut you off you missing me

                I’ll never miss ya

                You aint in the picture

  I hope you get the picture (yea, yea)`
        },

        {
            name: "Meetings & Makeups",
            duration: '4:51',
            cover: 'https://res.cloudinary.com/eazzie/image/upload/q_100/v1644355083/Codeboy/Mixtape_small_kl5p0z.webp',
            id: 4,
            status: '/svg/lock.svg',
            src: 'https://res.cloudinary.com/eazzie/video/upload/v1644336025/Codeboy/Meetings_Makeups_zu6du2.wav',
            lyrics: `(Chorus)

                I swear to god I wont change up

                Our bond was so real

                Me and you was gonna build (yea x2)

                Dates on your day off

                Ate you like a meal

                You put me in my feelings


                (Verse 1)

                Killing them with no makeup

                And I know they hate us

                Cause’ we always shining, always grinding, money makers

                In the hills like lakers

                I ain’t got a contract

                And I need a million plus cause under? I aint signing that

                Working hard, Shining hard

                Remember being in the dark

                Remember when I pushed the cars

                Now the cars is push to start

                And I really need that contract 

                Cause I really like to ball

                Keep my lawyer on retainer

                Cause I cant aint even trust these broads

                I like all types designer

                Im in Cali like a Niner

                Glow em up I got the Midas (Touch)

                Man we got too high with the Pilot (Fuck)


                (Bridge)

                People grow, feelings change, I hope our time ain’t up 

                Don’t compare to anybody, other people aint us

                I know the money wont change me

                Hope the money don’t change ya

                I just wanna stay down, stay low

                Make my money, make love

                We makeup to breakup

                You’d promise that you wait up

                Ima see you later, get back and get this paper


                (Hook)

                Cause I never change, never change

                Girl I never switch up

                If I cut you off you missing me

                I’ll never miss ya

                (Chorus)

                I swear to god I wont change up

                Our bond was so real

                Me and you was gonna build (yea x2)

                Dates on your day off

                Ate you like a meal

                You put me in my feelings


                (Verse 2)

                Killing them with no makeup

                And I know they hate us

                Cause’ you looking good girl

                Yea you rocking my world

                Yea you never complaining

                Everynight we stay lit

                Member working dayshift

                Now Im making these hits

                (yea x3) I love to ball!

                Yea ill always hold you down

                If you ever need me most

                If you ever feeling down

                Then we need to hit the coast

                When I pull up lose your top

                Take it off right now

                I fell for you when we met

                We had dinner up at catch

                Turn around, ass up

                Face down when we sex

                You get mad if I don’t text

                To you I dont have a next

                Hold me down, I’ll you down

                Baby we girl we our a match


                (Chorus)

                I swear to god I wont change up

                Our bond was so real

                Me and you was gonna build (yea x2)

                Dates on your day off

                Ate you like a meal

                You put me in my feelings


                (Verse 3)

                Throwing money yea to the ceiling

                Look around Im with my day 1s, what a feeling

                Never change, never change

                I’ll never switch up

                If I cut you off you missing me

                I’ll never miss ya

                (yea x3) Never change, Never change

                I’ll never switch up

                If I cut you off you missing me

                I’ll never miss ya

                You aint in the picture

  I hope you get the picture (yea, yea)`
        },

        {
            name: "Shotgun Ring",
            duration: '2:53',
            cover: 'https://res.cloudinary.com/eazzie/image/upload/q_100/v1644355083/Codeboy/Mixtape_small_kl5p0z.webp',
            id: 5,
            status: '/svg/lock.svg',
            src: 'https://res.cloudinary.com/eazzie/video/upload/v1644335933/Codeboy/Shotgun_Ring_zkjqgz.wav',
            lyrics: `(Chorus)

                I swear to god I wont change up

                Our bond was so real

                Me and you was gonna build (yea x2)

                Dates on your day off

                Ate you like a meal

                You put me in my feelings


                (Verse 1)

                Killing them with no makeup

                And I know they hate us

                Cause’ we always shining, always grinding, money makers

                In the hills like lakers

                I ain’t got a contract

                And I need a million plus cause under? I aint signing that

                Working hard, Shining hard

                Remember being in the dark

                Remember when I pushed the cars

                Now the cars is push to start

                And I really need that contract 

                Cause I really like to ball

                Keep my lawyer on retainer

                Cause I cant aint even trust these broads

                I like all types designer

                Im in Cali like a Niner

                Glow em up I got the Midas (Touch)

                Man we got too high with the Pilot (Fuck)


                (Bridge)

                People grow, feelings change, I hope our time ain’t up 

                Don’t compare to anybody, other people aint us

                I know the money wont change me

                Hope the money don’t change ya

                I just wanna stay down, stay low

                Make my money, make love

                We makeup to breakup

                You’d promise that you wait up

                Ima see you later, get back and get this paper


                (Hook)

                Cause I never change, never change

                Girl I never switch up

                If I cut you off you missing me

                I’ll never miss ya

                (Chorus)

                I swear to god I wont change up

                Our bond was so real

                Me and you was gonna build (yea x2)

                Dates on your day off

                Ate you like a meal

                You put me in my feelings


                (Verse 2)

                Killing them with no makeup

                And I know they hate us

                Cause’ you looking good girl

                Yea you rocking my world

                Yea you never complaining

                Everynight we stay lit

                Member working dayshift

                Now Im making these hits

                (yea x3) I love to ball!

                Yea ill always hold you down

                If you ever need me most

                If you ever feeling down

                Then we need to hit the coast

                When I pull up lose your top

                Take it off right now

                I fell for you when we met

                We had dinner up at catch

                Turn around, ass up

                Face down when we sex

                You get mad if I don’t text

                To you I dont have a next

                Hold me down, I’ll you down

                Baby we girl we our a match


                (Chorus)

                I swear to god I wont change up

                Our bond was so real

                Me and you was gonna build (yea x2)

                Dates on your day off

                Ate you like a meal

                You put me in my feelings


                (Verse 3)

                Throwing money yea to the ceiling

                Look around Im with my day 1s, what a feeling

                Never change, never change

                I’ll never switch up

                If I cut you off you missing me

                I’ll never miss ya

                (yea x3) Never change, Never change

                I’ll never switch up

                If I cut you off you missing me

                I’ll never miss ya

                You aint in the picture

  I hope you get the picture (yea, yea)`
        },

        {
            name: "Kelly Logan's House Trolley",
            duration: '4:26',
            cover: 'https://res.cloudinary.com/eazzie/image/upload/q_100/v1644355083/Codeboy/Mixtape_small_kl5p0z.webp',
            id: 6,
            status: '/svg/lock.svg',
            src: 'https://res.cloudinary.com/eazzie/video/upload/v1644335961/Codeboy/Kelly_Logans_House_Trolley_yu48zm.wav',
            lyrics: `(Chorus)

                I swear to god I wont change up

                Our bond was so real

                Me and you was gonna build (yea x2)

                Dates on your day off

                Ate you like a meal

                You put me in my feelings


                (Verse 1)

                Killing them with no makeup

                And I know they hate us

                Cause’ we always shining, always grinding, money makers

                In the hills like lakers

                I ain’t got a contract

                And I need a million plus cause under? I aint signing that

                Working hard, Shining hard

                Remember being in the dark

                Remember when I pushed the cars

                Now the cars is push to start

                And I really need that contract 

                Cause I really like to ball

                Keep my lawyer on retainer

                Cause I cant aint even trust these broads

                I like all types designer

                Im in Cali like a Niner

                Glow em up I got the Midas (Touch)

                Man we got too high with the Pilot (Fuck)


                (Bridge)

                People grow, feelings change, I hope our time ain’t up 

                Don’t compare to anybody, other people aint us

                I know the money wont change me

                Hope the money don’t change ya

                I just wanna stay down, stay low

                Make my money, make love

                We makeup to breakup

                You’d promise that you wait up

                Ima see you later, get back and get this paper


                (Hook)

                Cause I never change, never change

                Girl I never switch up

                If I cut you off you missing me

                I’ll never miss ya

                (Chorus)

                I swear to god I wont change up

                Our bond was so real

                Me and you was gonna build (yea x2)

                Dates on your day off

                Ate you like a meal

                You put me in my feelings


                (Verse 2)

                Killing them with no makeup

                And I know they hate us

                Cause’ you looking good girl

                Yea you rocking my world

                Yea you never complaining

                Everynight we stay lit

                Member working dayshift

                Now Im making these hits

                (yea x3) I love to ball!

                Yea ill always hold you down

                If you ever need me most

                If you ever feeling down

                Then we need to hit the coast

                When I pull up lose your top

                Take it off right now

                I fell for you when we met

                We had dinner up at catch

                Turn around, ass up

                Face down when we sex

                You get mad if I don’t text

                To you I dont have a next

                Hold me down, I’ll you down

                Baby we girl we our a match


                (Chorus)

                I swear to god I wont change up

                Our bond was so real

                Me and you was gonna build (yea x2)

                Dates on your day off

                Ate you like a meal

                You put me in my feelings


                (Verse 3)

                Throwing money yea to the ceiling

                Look around Im with my day 1s, what a feeling

                Never change, never change

                I’ll never switch up

                If I cut you off you missing me

                I’ll never miss ya

                (yea x3) Never change, Never change

                I’ll never switch up

                If I cut you off you missing me

                I’ll never miss ya

                You aint in the picture

  I hope you get the picture (yea, yea)`
        },

        {
            name: "Rough Patches",
            duration: '3:04',
            cover: 'https://res.cloudinary.com/eazzie/image/upload/q_100/v1644355083/Codeboy/Mixtape_small_kl5p0z.webp',
            id: 7,
            src: 'https://res.cloudinary.com/eazzie/video/upload/v1644335984/Codeboy/Rough_Patches_qq6pnh.wav',
            lyrics: `(Chorus)

                I swear to god I wont change up

                Our bond was so real

                Me and you was gonna build (yea x2)

                Dates on your day off

                Ate you like a meal

                You put me in my feelings


                (Verse 1)

                Killing them with no makeup

                And I know they hate us

                Cause’ we always shining, always grinding, money makers

                In the hills like lakers

                I ain’t got a contract

                And I need a million plus cause under? I aint signing that

                Working hard, Shining hard

                Remember being in the dark

                Remember when I pushed the cars

                Now the cars is push to start

                And I really need that contract 

                Cause I really like to ball

                Keep my lawyer on retainer

                Cause I cant aint even trust these broads

                I like all types designer

                Im in Cali like a Niner

                Glow em up I got the Midas (Touch)

                Man we got too high with the Pilot (Fuck)


                (Bridge)

                People grow, feelings change, I hope our time ain’t up 

                Don’t compare to anybody, other people aint us

                I know the money wont change me

                Hope the money don’t change ya

                I just wanna stay down, stay low

                Make my money, make love

                We makeup to breakup

                You’d promise that you wait up

                Ima see you later, get back and get this paper


                (Hook)

                Cause I never change, never change

                Girl I never switch up

                If I cut you off you missing me

                I’ll never miss ya

                (Chorus)

                I swear to god I wont change up

                Our bond was so real

                Me and you was gonna build (yea x2)

                Dates on your day off

                Ate you like a meal

                You put me in my feelings


                (Verse 2)

                Killing them with no makeup

                And I know they hate us

                Cause’ you looking good girl

                Yea you rocking my world

                Yea you never complaining

                Everynight we stay lit

                Member working dayshift

                Now Im making these hits

                (yea x3) I love to ball!

                Yea ill always hold you down

                If you ever need me most

                If you ever feeling down

                Then we need to hit the coast

                When I pull up lose your top

                Take it off right now

                I fell for you when we met

                We had dinner up at catch

                Turn around, ass up

                Face down when we sex

                You get mad if I don’t text

                To you I dont have a next

                Hold me down, I’ll you down

                Baby we girl we our a match


                (Chorus)

                I swear to god I wont change up

                Our bond was so real

                Me and you was gonna build (yea x2)

                Dates on your day off

                Ate you like a meal

                You put me in my feelings


                (Verse 3)

                Throwing money yea to the ceiling

                Look around Im with my day 1s, what a feeling

                Never change, never change

                I’ll never switch up

                If I cut you off you missing me

                I’ll never miss ya

                (yea x3) Never change, Never change

                I’ll never switch up

                If I cut you off you missing me

                I’ll never miss ya

                You aint in the picture

  I hope you get the picture (yea, yea)`
        },

        {
            name: "Caress Me",
            duration: '3:03',
            cover: 'https://res.cloudinary.com/eazzie/image/upload/q_100/v1644355083/Codeboy/Mixtape_small_kl5p0z.webp',
            id: 8,
            status: '/svg/lock.svg',
            src: 'https://res.cloudinary.com/eazzie/video/upload/v1644335993/Codeboy/Caress_Me_hth4u2.wav',
            lyrics: `(Chorus)

                I swear to god I wont change up

                Our bond was so real

                Me and you was gonna build (yea x2)

                Dates on your day off

                Ate you like a meal

                You put me in my feelings


                (Verse 1)

                Killing them with no makeup

                And I know they hate us

                Cause’ we always shining, always grinding, money makers

                In the hills like lakers

                I ain’t got a contract

                And I need a million plus cause under? I aint signing that

                Working hard, Shining hard

                Remember being in the dark

                Remember when I pushed the cars

                Now the cars is push to start

                And I really need that contract 

                Cause I really like to ball

                Keep my lawyer on retainer

                Cause I cant aint even trust these broads

                I like all types designer

                Im in Cali like a Niner

                Glow em up I got the Midas (Touch)

                Man we got too high with the Pilot (Fuck)


                (Bridge)

                People grow, feelings change, I hope our time ain’t up 

                Don’t compare to anybody, other people aint us

                I know the money wont change me

                Hope the money don’t change ya

                I just wanna stay down, stay low

                Make my money, make love

                We makeup to breakup

                You’d promise that you wait up

                Ima see you later, get back and get this paper


                (Hook)

                Cause I never change, never change

                Girl I never switch up

                If I cut you off you missing me

                I’ll never miss ya

                (Chorus)

                I swear to god I wont change up

                Our bond was so real

                Me and you was gonna build (yea x2)

                Dates on your day off

                Ate you like a meal

                You put me in my feelings


                (Verse 2)

                Killing them with no makeup

                And I know they hate us

                Cause’ you looking good girl

                Yea you rocking my world

                Yea you never complaining

                Everynight we stay lit

                Member working dayshift

                Now Im making these hits

                (yea x3) I love to ball!

                Yea ill always hold you down

                If you ever need me most

                If you ever feeling down

                Then we need to hit the coast

                When I pull up lose your top

                Take it off right now

                I fell for you when we met

                We had dinner up at catch

                Turn around, ass up

                Face down when we sex

                You get mad if I don’t text

                To you I dont have a next

                Hold me down, I’ll you down

                Baby we girl we our a match


                (Chorus)

                I swear to god I wont change up

                Our bond was so real

                Me and you was gonna build (yea x2)

                Dates on your day off

                Ate you like a meal

                You put me in my feelings


                (Verse 3)

                Throwing money yea to the ceiling

                Look around Im with my day 1s, what a feeling

                Never change, never change

                I’ll never switch up

                If I cut you off you missing me

                I’ll never miss ya

                (yea x3) Never change, Never change

                I’ll never switch up

                If I cut you off you missing me

                I’ll never miss ya

                You aint in the picture

  I hope you get the picture (yea, yea)`
        },

        {
            name: "Capable",
            duration: '2:36',
            cover: 'https://res.cloudinary.com/eazzie/image/upload/q_100/v1644355083/Codeboy/Mixtape_small_kl5p0z.webp',
            id: 9,
            src: 'https://res.cloudinary.com/eazzie/video/upload/v1644335803/Codeboy/Capable_wmcn4x.wav',
            lyrics: `(Chorus)

                I swear to god I wont change up

                Our bond was so real

                Me and you was gonna build (yea x2)

                Dates on your day off

                Ate you like a meal

                You put me in my feelings


                (Verse 1)

                Killing them with no makeup

                And I know they hate us

                Cause’ we always shining, always grinding, money makers

                In the hills like lakers

                I ain’t got a contract

                And I need a million plus cause under? I aint signing that

                Working hard, Shining hard

                Remember being in the dark

                Remember when I pushed the cars

                Now the cars is push to start

                And I really need that contract 

                Cause I really like to ball

                Keep my lawyer on retainer

                Cause I cant aint even trust these broads

                I like all types designer

                Im in Cali like a Niner

                Glow em up I got the Midas (Touch)

                Man we got too high with the Pilot (Fuck)


                (Bridge)

                People grow, feelings change, I hope our time ain’t up 

                Don’t compare to anybody, other people aint us

                I know the money wont change me

                Hope the money don’t change ya

                I just wanna stay down, stay low

                Make my money, make love

                We makeup to breakup

                You’d promise that you wait up

                Ima see you later, get back and get this paper


                (Hook)

                Cause I never change, never change

                Girl I never switch up

                If I cut you off you missing me

                I’ll never miss ya

                (Chorus)

                I swear to god I wont change up

                Our bond was so real

                Me and you was gonna build (yea x2)

                Dates on your day off

                Ate you like a meal

                You put me in my feelings


                (Verse 2)

                Killing them with no makeup

                And I know they hate us

                Cause’ you looking good girl

                Yea you rocking my world

                Yea you never complaining

                Everynight we stay lit

                Member working dayshift

                Now Im making these hits

                (yea x3) I love to ball!

                Yea ill always hold you down

                If you ever need me most

                If you ever feeling down

                Then we need to hit the coast

                When I pull up lose your top

                Take it off right now

                I fell for you when we met

                We had dinner up at catch

                Turn around, ass up

                Face down when we sex

                You get mad if I don’t text

                To you I dont have a next

                Hold me down, I’ll you down

                Baby we girl we our a match


                (Chorus)

                I swear to god I wont change up

                Our bond was so real

                Me and you was gonna build (yea x2)

                Dates on your day off

                Ate you like a meal

                You put me in my feelings


                (Verse 3)

                Throwing money yea to the ceiling

                Look around Im with my day 1s, what a feeling

                Never change, never change

                I’ll never switch up

                If I cut you off you missing me

                I’ll never miss ya

                (yea x3) Never change, Never change

                I’ll never switch up

                If I cut you off you missing me

                I’ll never miss ya

                You aint in the picture

  I hope you get the picture (yea, yea)`
        },

        {
            name: "Nun To Prove",
            duration: '3:14',
            cover: 'https://res.cloudinary.com/eazzie/image/upload/q_100/v1644355083/Codeboy/Mixtape_small_kl5p0z.webp',
            id: 10,
            status: '/svg/lock.svg',
            src: 'https://res.cloudinary.com/eazzie/video/upload/v1644335777/Codeboy/Nuntoprove_pcvugr.mp3',
            lyrics: `(Chorus)

                I swear to god I wont change up

                Our bond was so real

                Me and you was gonna build (yea x2)

                Dates on your day off

                Ate you like a meal

                You put me in my feelings


                (Verse 1)

                Killing them with no makeup

                And I know they hate us

                Cause’ we always shining, always grinding, money makers

                In the hills like lakers

                I ain’t got a contract

                And I need a million plus cause under? I aint signing that

                Working hard, Shining hard

                Remember being in the dark

                Remember when I pushed the cars

                Now the cars is push to start

                And I really need that contract 

                Cause I really like to ball

                Keep my lawyer on retainer

                Cause I cant aint even trust these broads

                I like all types designer

                Im in Cali like a Niner

                Glow em up I got the Midas (Touch)

                Man we got too high with the Pilot (Fuck)


                (Bridge)

                People grow, feelings change, I hope our time ain’t up 

                Don’t compare to anybody, other people aint us

                I know the money wont change me

                Hope the money don’t change ya

                I just wanna stay down, stay low

                Make my money, make love

                We makeup to breakup

                You’d promise that you wait up

                Ima see you later, get back and get this paper


                (Hook)

                Cause I never change, never change

                Girl I never switch up

                If I cut you off you missing me

                I’ll never miss ya

                (Chorus)

                I swear to god I wont change up

                Our bond was so real

                Me and you was gonna build (yea x2)

                Dates on your day off

                Ate you like a meal

                You put me in my feelings


                (Verse 2)

                Killing them with no makeup

                And I know they hate us

                Cause’ you looking good girl

                Yea you rocking my world

                Yea you never complaining

                Everynight we stay lit

                Member working dayshift

                Now Im making these hits

                (yea x3) I love to ball!

                Yea ill always hold you down

                If you ever need me most

                If you ever feeling down

                Then we need to hit the coast

                When I pull up lose your top

                Take it off right now

                I fell for you when we met

                We had dinner up at catch

                Turn around, ass up

                Face down when we sex

                You get mad if I don’t text

                To you I dont have a next

                Hold me down, I’ll you down

                Baby we girl we our a match


                (Chorus)

                I swear to god I wont change up

                Our bond was so real

                Me and you was gonna build (yea x2)

                Dates on your day off

                Ate you like a meal

                You put me in my feelings


                (Verse 3)

                Throwing money yea to the ceiling

                Look around Im with my day 1s, what a feeling

                Never change, never change

                I’ll never switch up

                If I cut you off you missing me

                I’ll never miss ya

                (yea x3) Never change, Never change

                I’ll never switch up

                If I cut you off you missing me

                I’ll never miss ya

                You aint in the picture

  I hope you get the picture (yea, yea)`
        },

        {
            name: "Kid Chocolate",
            duration: '4:12',
            cover: 'https://res.cloudinary.com/eazzie/image/upload/q_100/v1644355083/Codeboy/Mixtape_small_kl5p0z.webp',
            id: 11,
            status: '/svg/lock.svg',
            src: 'https://res.cloudinary.com/eazzie/video/upload/v1644335983/Codeboy/Kid_Chocolate_lxi4me.wav',
            lyrics: `(Chorus)

                I swear to god I wont change up

                Our bond was so real

                Me and you was gonna build (yea x2)

                Dates on your day off

                Ate you like a meal

                You put me in my feelings


                (Verse 1)

                Killing them with no makeup

                And I know they hate us

                Cause’ we always shining, always grinding, money makers

                In the hills like lakers

                I ain’t got a contract

                And I need a million plus cause under? I aint signing that

                Working hard, Shining hard

                Remember being in the dark

                Remember when I pushed the cars

                Now the cars is push to start

                And I really need that contract 

                Cause I really like to ball

                Keep my lawyer on retainer

                Cause I cant aint even trust these broads

                I like all types designer

                Im in Cali like a Niner

                Glow em up I got the Midas (Touch)

                Man we got too high with the Pilot (Fuck)


                (Bridge)

                People grow, feelings change, I hope our time ain’t up 

                Don’t compare to anybody, other people aint us

                I know the money wont change me

                Hope the money don’t change ya

                I just wanna stay down, stay low

                Make my money, make love

                We makeup to breakup

                You’d promise that you wait up

                Ima see you later, get back and get this paper


                (Hook)

                Cause I never change, never change

                Girl I never switch up

                If I cut you off you missing me

                I’ll never miss ya

                (Chorus)

                I swear to god I wont change up

                Our bond was so real

                Me and you was gonna build (yea x2)

                Dates on your day off

                Ate you like a meal

                You put me in my feelings


                (Verse 2)

                Killing them with no makeup

                And I know they hate us

                Cause’ you looking good girl

                Yea you rocking my world

                Yea you never complaining

                Everynight we stay lit

                Member working dayshift

                Now Im making these hits

                (yea x3) I love to ball!

                Yea ill always hold you down

                If you ever need me most

                If you ever feeling down

                Then we need to hit the coast

                When I pull up lose your top

                Take it off right now

                I fell for you when we met

                We had dinner up at catch

                Turn around, ass up

                Face down when we sex

                You get mad if I don’t text

                To you I dont have a next

                Hold me down, I’ll you down

                Baby we girl we our a match


                (Chorus)

                I swear to god I wont change up

                Our bond was so real

                Me and you was gonna build (yea x2)

                Dates on your day off

                Ate you like a meal

                You put me in my feelings


                (Verse 3)

                Throwing money yea to the ceiling

                Look around Im with my day 1s, what a feeling

                Never change, never change

                I’ll never switch up

                If I cut you off you missing me

                I’ll never miss ya

                (yea x3) Never change, Never change

                I’ll never switch up

                If I cut you off you missing me

                I’ll never miss ya

                You aint in the picture

  I hope you get the picture (yea, yea)`
        },

        {
            name: "Made For This",
            duration: '3:21',
            cover: 'https://res.cloudinary.com/eazzie/image/upload/q_100/v1644355083/Codeboy/Mixtape_small_kl5p0z.webp',
            id: 12,
            src: 'https://res.cloudinary.com/eazzie/video/upload/v1644336005/Codeboy/Made_For_This_omfhxb.wav',
            lyrics: `(Chorus)

                I swear to god I wont change up

                Our bond was so real

                Me and you was gonna build (yea x2)

                Dates on your day off

                Ate you like a meal

                You put me in my feelings


                (Verse 1)

                Killing them with no makeup

                And I know they hate us

                Cause’ we always shining, always grinding, money makers

                In the hills like lakers

                I ain’t got a contract

                And I need a million plus cause under? I aint signing that

                Working hard, Shining hard

                Remember being in the dark

                Remember when I pushed the cars

                Now the cars is push to start

                And I really need that contract 

                Cause I really like to ball

                Keep my lawyer on retainer

                Cause I cant aint even trust these broads

                I like all types designer

                Im in Cali like a Niner

                Glow em up I got the Midas (Touch)

                Man we got too high with the Pilot (Fuck)


                (Bridge)

                People grow, feelings change, I hope our time ain’t up 

                Don’t compare to anybody, other people aint us

                I know the money wont change me

                Hope the money don’t change ya

                I just wanna stay down, stay low

                Make my money, make love

                We makeup to breakup

                You’d promise that you wait up

                Ima see you later, get back and get this paper


                (Hook)

                Cause I never change, never change

                Girl I never switch up

                If I cut you off you missing me

                I’ll never miss ya

                (Chorus)

                I swear to god I wont change up

                Our bond was so real

                Me and you was gonna build (yea x2)

                Dates on your day off

                Ate you like a meal

                You put me in my feelings


                (Verse 2)

                Killing them with no makeup

                And I know they hate us

                Cause’ you looking good girl

                Yea you rocking my world

                Yea you never complaining

                Everynight we stay lit

                Member working dayshift

                Now Im making these hits

                (yea x3) I love to ball!

                Yea ill always hold you down

                If you ever need me most

                If you ever feeling down

                Then we need to hit the coast

                When I pull up lose your top

                Take it off right now

                I fell for you when we met

                We had dinner up at catch

                Turn around, ass up

                Face down when we sex

                You get mad if I don’t text

                To you I dont have a next

                Hold me down, I’ll you down

                Baby we girl we our a match


                (Chorus)

                I swear to god I wont change up

                Our bond was so real

                Me and you was gonna build (yea x2)

                Dates on your day off

                Ate you like a meal

                You put me in my feelings


                (Verse 3)

                Throwing money yea to the ceiling

                Look around Im with my day 1s, what a feeling

                Never change, never change

                I’ll never switch up

                If I cut you off you missing me

                I’ll never miss ya

                (yea x3) Never change, Never change

                I’ll never switch up

                If I cut you off you missing me

                I’ll never miss ya

                You aint in the picture

  I hope you get the picture (yea, yea)`
        },
                
                {
                    name: 'Never Change Up',
                    altName: 'Never Change Up',
                    cover: 'https://res.cloudinary.com/eazzie/image/upload/v1644246687/Codeboy/Never_Change_Up_COVER_ART_jjib4q.webp',
                    duration: '3:30',
                    id: 13,
                    src: 'https://res.cloudinary.com/eazzie/video/upload/q_100/v1642773083/Codeboy/Never_Change_Up_SINGLE_up5mrz.mp3',
                    type: 'singles'
                },
                                
                {
                    name: 'Rough Patches',
                    altName: 'Rough Patches',
                    cover: 'https://res.cloudinary.com/eazzie/image/upload/q_100/v1642773123/Codeboy/Rough_Patches_COVER_ART_bqlmqr.webp',
                    duration: '3:04',
                    id: 14,
                    src: 'https://res.cloudinary.com/eazzie/video/upload/q_100/v1642773087/Codeboy/Rough_Patches_SINGLE_vyvyl7.mp3',
                    type: 'singles'
                },
                
                {
                    name: 'Nun to Prove',
                    altName: 'Nun to prove',
                    cover: 'https://res.cloudinary.com/eazzie/image/upload/q_100/v1642773126/Codeboy/Nothing_2_Prove_COVER_ART_nluixb.webp',
                    duration: '3:14',
                    id: 15,
                    src: 'https://res.cloudinary.com/eazzie/video/upload/q_100/v1642773081/Codeboy/Nothing_2_Prove_SINGLE_ys2oof.mp3',
                    type: 'singles'
                },

                {
                    name: 'Capable',
                    altName: 'Capable',
                    cover: 'https://res.cloudinary.com/eazzie/image/upload/q_100/v1642773120/Codeboy/CAPABLE_COVER_ART_l62y4f.webp',
                    duration: '2:36',
                    id: 16,
                    src: 'https://res.cloudinary.com/eazzie/video/upload/q_100/v1642773117/Codeboy/Capable_SINGLE_s8sumh.wav',
                    type: 'singles'
                },

                {
                    name: 'MPR',
                    altName: 'MPR',
                    cover: 'https://res.cloudinary.com/eazzie/image/upload/q_100/v1642773121/Codeboy/MPR_COVER_ART_wrm1el.webp',
                    duration: '3:13',
                    id: 17,
                    src: 'https://res.cloudinary.com/eazzie/video/upload/q_100/v1642773069/Codeboy/MPR_SINGLE_ge5ssh.mp3',
                    type: 'singles'
                },


                {
                    name: 'Dimes',
                    cover: 'https://res.cloudinary.com/eazzie/image/upload/q_100/v1643853024/Codeboy/CODE_LIFE_ALBUM_COVER_ART_isbmud.webp',
                    duration: '2:35',
                    id: 18,
                    src: 'https://res.cloudinary.com/eazzie/video/upload/q_100/v1643321031/Codeboy/Dimes_uolkhw.mp3'
                },

                {
                    name: 'Feel This',
                    cover: 'https://res.cloudinary.com/eazzie/image/upload/q_100/v1643853024/Codeboy/CODE_LIFE_ALBUM_COVER_ART_isbmud.webp',
                    duration: '3:17',
                    id: 19,
                    src: 'https://res.cloudinary.com/eazzie/video/upload/q_100/v1643321067/Codeboy/Feel_This_qhfdee.mp3'
                },
                
                {
                    name: 'All Up',
                    cover: 'https://res.cloudinary.com/eazzie/image/upload/q_100/v1643853024/Codeboy/CODE_LIFE_ALBUM_COVER_ART_isbmud.webp',
                    duration: '3:03',
                    id: 20,
                    src: 'https://res.cloudinary.com/eazzie/video/upload/q_100/v1643321054/Codeboy/All_Up_Mix_2_mluspe.mp3'
                },
                
                {
                    name: 'Moment',
                    cover: 'https://res.cloudinary.com/eazzie/image/upload/q_100/v1643853024/Codeboy/CODE_LIFE_ALBUM_COVER_ART_isbmud.webp',
                    duration: '3:15',
                    id: 21,
                    src: 'https://res.cloudinary.com/eazzie/video/upload/q_100/v1643321084/Codeboy/Moment_wqtr77.mp3'
                },

                {
                    name: 'Soaring',
                    cover: 'https://res.cloudinary.com/eazzie/image/upload/q_100/v1643853024/Codeboy/CODE_LIFE_ALBUM_COVER_ART_isbmud.webp',
                    duration: '2:31',
                    id: 22,
                    src: 'https://res.cloudinary.com/eazzie/video/upload/v1643321029/Codeboy/Soarin_Mix_1_rbpgkg.mp3'
                },
                
                {
                    name: 'Diddy Skit',
                    cover: 'https://res.cloudinary.com/eazzie/image/upload/q_100/v1643853024/Codeboy/CODE_LIFE_ALBUM_COVER_ART_isbmud.webp',
                    duration: '3:20',
                    id: 23,
                    src: 'https://res.cloudinary.com/eazzie/video/upload/q_100/v1643320986/Codeboy/Diddy_Skit_ygzo3g.mp3'
                },

                {
                    name: 'Throwing Shade',
                    cover: 'https://res.cloudinary.com/eazzie/image/upload/q_100/v1643853024/Codeboy/CODE_LIFE_ALBUM_COVER_ART_isbmud.webp',
                    duration: '3:12',
                    id: 24,
                    src: 'https://res.cloudinary.com/eazzie/video/upload/q_100/v1643320985/Codeboy/Throwin_Shade_Quick_Mix_ih6wgs.mp3'
                },

                {
                    name: 'Banjee',
                    cover: 'https://res.cloudinary.com/eazzie/image/upload/q_100/v1642773122/Codeboy/BANJEE_COVER_ART_vqpnxx.webp',
                    duration: '3:44',
                    id: 25,
                    src: 'https://res.cloudinary.com/eazzie/video/upload/q_100/v1642773073/Codeboy/Banjee_SINGLE_a8uvtn.mp3',
                    lyrics: `(Chorus)

                        I swear to god I wont change up

                        Our bond was so real

                        Me and you was gonna build (yea x2)

                        Dates on your day off

                        Ate you like a meal

                        You put me in my feelings


                        (Verse 1)

                        Killing them with no makeup

                        And I know they hate us

                        Cause’ we always shining, always grinding, money makers

                        In the hills like lakers

                        I ain’t got a contract

                        And I need a million plus cause under? I aint signing that

                        Working hard, Shining hard

                        Remember being in the dark

                        Remember when I pushed the cars

                        Now the cars is push to start

                        And I really need that contract 

                        Cause I really like to ball

                        Keep my lawyer on retainer

                        Cause I cant aint even trust these broads

                        I like all types designer

                        Im in Cali like a Niner

                        Glow em up I got the Midas (Touch)

                        Man we got too high with the Pilot (Fuck)


                        (Bridge)

                        People grow, feelings change, I hope our time ain’t up 

                        Don’t compare to anybody, other people aint us

                        I know the money wont change me

                        Hope the money don’t change ya

                        I just wanna stay down, stay low

                        Make my money, make love

                        We makeup to breakup

                        You’d promise that you wait up

                        Ima see you later, get back and get this paper


                        (Hook)

                        Cause I never change, never change

                        Girl I never switch up

                        If I cut you off you missing me

                        I’ll never miss ya

                        (Chorus)

                        I swear to god I wont change up

                        Our bond was so real

                        Me and you was gonna build (yea x2)

                        Dates on your day off

                        Ate you like a meal

                        You put me in my feelings


                        (Verse 2)

                        Killing them with no makeup

                        And I know they hate us

                        Cause’ you looking good girl

                        Yea you rocking my world

                        Yea you never complaining

                        Everynight we stay lit

                        Member working dayshift

                        Now Im making these hits

                        (yea x3) I love to ball!

                        Yea ill always hold you down

                        If you ever need me most

                        If you ever feeling down

                        Then we need to hit the coast

                        When I pull up lose your top

                        Take it off right now

                        I fell for you when we met

                        We had dinner up at catch

                        Turn around, ass up

                        Face down when we sex

                        You get mad if I don’t text

                        To you I dont have a next

                        Hold me down, I’ll you down

                        Baby we girl we our a match


                        (Chorus)

                        I swear to god I wont change up

                        Our bond was so real

                        Me and you was gonna build (yea x2)

                        Dates on your day off

                        Ate you like a meal

                        You put me in my feelings


                        (Verse 3)

                        Throwing money yea to the ceiling

                        Look around Im with my day 1s, what a feeling

                        Never change, never change

                        I’ll never switch up

                        If I cut you off you missing me

                        I’ll never miss ya

                        (yea x3) Never change, Never change

                        I’ll never switch up

                        If I cut you off you missing me

                        I’ll never miss ya

                        You aint in the picture

    I hope you get the picture (yea, yea)`
                },

                {
                    name: 'Toast Up',
                    cover: 'https://res.cloudinary.com/eazzie/image/upload/q_100/v1643853024/Codeboy/CODE_LIFE_ALBUM_COVER_ART_isbmud.webp',
                    duration: '3:06',
                    id: 26,
                    src: 'https://res.cloudinary.com/eazzie/video/upload/q_100/v1643321058/Codeboy/Toast_Up_Mix_1_dtbjc1.mp3'
                },

                {
                    name: 'Banjee',
                    altName: 'Banjee',
                    cover: 'https://res.cloudinary.com/eazzie/image/upload/q_100/v1642773122/Codeboy/BANJEE_COVER_ART_vqpnxx.webp',
                    duration: '3:44',
                    id: 27,
                    src: 'https://res.cloudinary.com/eazzie/video/upload/q_100/v1642773073/Codeboy/Banjee_SINGLE_a8uvtn.mp3',
                    lyrics: `(Chorus)

                        I swear to god I wont change up

                        Our bond was so real

                        Me and you was gonna build (yea x2)

                        Dates on your day off

                        Ate you like a meal

                        You put me in my feelings


                        (Verse 1)

                        Killing them with no makeup

                        And I know they hate us

                        Cause’ we always shining, always grinding, money makers

                        In the hills like lakers

                        I ain’t got a contract

                        And I need a million plus cause under? I aint signing that

                        Working hard, Shining hard

                        Remember being in the dark

                        Remember when I pushed the cars

                        Now the cars is push to start

                        And I really need that contract 

                        Cause I really like to ball

                        Keep my lawyer on retainer

                        Cause I cant aint even trust these broads

                        I like all types designer

                        Im in Cali like a Niner

                        Glow em up I got the Midas (Touch)

                        Man we got too high with the Pilot (Fuck)


                        (Bridge)

                        People grow, feelings change, I hope our time ain’t up 

                        Don’t compare to anybody, other people aint us

                        I know the money wont change me

                        Hope the money don’t change ya

                        I just wanna stay down, stay low

                        Make my money, make love

                        We makeup to breakup

                        You’d promise that you wait up

                        Ima see you later, get back and get this paper


                        (Hook)

                        Cause I never change, never change

                        Girl I never switch up

                        If I cut you off you missing me

                        I’ll never miss ya

                        (Chorus)

                        I swear to god I wont change up

                        Our bond was so real

                        Me and you was gonna build (yea x2)

                        Dates on your day off

                        Ate you like a meal

                        You put me in my feelings


                        (Verse 2)

                        Killing them with no makeup

                        And I know they hate us

                        Cause’ you looking good girl

                        Yea you rocking my world

                        Yea you never complaining

                        Everynight we stay lit

                        Member working dayshift

                        Now Im making these hits

                        (yea x3) I love to ball!

                        Yea ill always hold you down

                        If you ever need me most

                        If you ever feeling down

                        Then we need to hit the coast

                        When I pull up lose your top

                        Take it off right now

                        I fell for you when we met

                        We had dinner up at catch

                        Turn around, ass up

                        Face down when we sex

                        You get mad if I don’t text

                        To you I dont have a next

                        Hold me down, I’ll you down

                        Baby we girl we our a match


                        (Chorus)

                        I swear to god I wont change up

                        Our bond was so real

                        Me and you was gonna build (yea x2)

                        Dates on your day off

                        Ate you like a meal

                        You put me in my feelings


                        (Verse 3)

                        Throwing money yea to the ceiling

                        Look around Im with my day 1s, what a feeling

                        Never change, never change

                        I’ll never switch up

                        If I cut you off you missing me

                        I’ll never miss ya

                        (yea x3) Never change, Never change

                        I’ll never switch up

                        If I cut you off you missing me

                        I’ll never miss ya

                        You aint in the picture

    I hope you get the picture (yea, yea)`
                },

                {
                    name: 'Tony Parker',
                    altName: 'Tony Parker',
                    cover: 'https://res.cloudinary.com/eazzie/image/upload/q_100/v1642773120/Codeboy/TONY_PARKER_COVER_ART_eddorz.webp',
                    duration: '2:39',
                    id: 28,
                    src: 'https://res.cloudinary.com/eazzie/video/upload/v1642772986/Codeboy/Tony_Parker_SINGLE_feuend.mp3',
                    type: 'singles'
                },

            ],

            singles: [
                {
                name: 'Never Change Up',
                cover: 'https://res.cloudinary.com/eazzie/image/upload/v1644246687/Codeboy/Never_Change_Up_COVER_ART_jjib4q.webp',
                duration: '3:30',
                id: 0,
                src: 'https://res.cloudinary.com/eazzie/video/upload/q_100/v1642773083/Codeboy/Never_Change_Up_SINGLE_up5mrz.mp3',
                type: 'singles'
                },

                {
                name: 'Rough Patches',
                cover: 'https://res.cloudinary.com/eazzie/image/upload/q_100/v1642773123/Codeboy/Rough_Patches_COVER_ART_bqlmqr.webp',
                duration: '3:04',
                id: 1,
                src: 'https://res.cloudinary.com/eazzie/video/upload/q_100/v1642773087/Codeboy/Rough_Patches_SINGLE_vyvyl7.mp3',
                type: 'singles'
                },

                {
                    name: 'Nun to Prove',
                    cover: 'https://res.cloudinary.com/eazzie/image/upload/q_100/v1642773126/Codeboy/Nothing_2_Prove_COVER_ART_nluixb.webp',
                    duration: '3:14',
                    id: 2,
                    src: 'https://res.cloudinary.com/eazzie/video/upload/q_100/v1642773081/Codeboy/Nothing_2_Prove_SINGLE_ys2oof.mp3',
                    type: 'singles'
                },
                
                {
                name: 'Capable',
                cover: 'https://res.cloudinary.com/eazzie/image/upload/q_100/v1642773120/Codeboy/CAPABLE_COVER_ART_l62y4f.webp',
                duration: '2:36',
                id: 3,
                src: 'https://res.cloudinary.com/eazzie/video/upload/q_100/v1642773117/Codeboy/Capable_SINGLE_s8sumh.wav',
                type: 'singles'
                },

                 {
                name: 'MPR',
                cover: 'https://res.cloudinary.com/eazzie/image/upload/q_100/v1642773121/Codeboy/MPR_COVER_ART_wrm1el.webp',
                duration: '3:13',
                id: 4,
                src: 'https://res.cloudinary.com/eazzie/video/upload/q_100/v1642773069/Codeboy/MPR_SINGLE_ge5ssh.mp3',
                type: 'singles'
                },


                {
                name: 'Bangee',
                cover: 'https://res.cloudinary.com/eazzie/image/upload/q_100/v1642773122/Codeboy/BANJEE_COVER_ART_vqpnxx.webp',
                duration: '3:44',
                id: 5,
                src: 'https://res.cloudinary.com/eazzie/video/upload/q_100/v1642773073/Codeboy/Banjee_SINGLE_a8uvtn.mp3',
                
                link: '/lyrics/Bangee'
                },

                {
                name: 'Tony Parker',
                cover: 'https://res.cloudinary.com/eazzie/image/upload/q_100/v1642773120/Codeboy/TONY_PARKER_COVER_ART_eddorz.webp',
                duration: '2:39',
                id: 6,
                src: 'https://res.cloudinary.com/eazzie/video/upload/v1642772986/Codeboy/Tony_Parker_SINGLE_feuend.mp3',
                type: 'singles'
                },
                
                
            ],

            meetings: [
        {
            name: 'Days Amazing',
            duration: '2:39',
            cover: 'https://res.cloudinary.com/eazzie/image/upload/q_100/v1644355083/Codeboy/Mixtape_small_kl5p0z.webp',
            id: 0,
            status: '/svg/lock.svg',
            src: 'https://res.cloudinary.com/eazzie/video/upload/q_100/v1644335810/Codeboy/Days_Amazing_ofmuje.wav',
            lyrics: `(Chorus)

                I swear to god I wont change up

                Our bond was so real

                Me and you was gonna build (yea x2)

                Dates on your day off

                Ate you like a meal

                You put me in my feelings


                (Verse 1)

                Killing them with no makeup

                And I know they hate us

                Cause’ we always shining, always grinding, money makers

                In the hills like lakers

                I ain’t got a contract

                And I need a million plus cause under? I aint signing that

                Working hard, Shining hard

                Remember being in the dark

                Remember when I pushed the cars

                Now the cars is push to start

                And I really need that contract 

                Cause I really like to ball

                Keep my lawyer on retainer

                Cause I cant aint even trust these broads

                I like all types designer

                Im in Cali like a Niner

                Glow em up I got the Midas (Touch)

                Man we got too high with the Pilot (Fuck)


                (Bridge)

                People grow, feelings change, I hope our time ain’t up 

                Don’t compare to anybody, other people aint us

                I know the money wont change me

                Hope the money don’t change ya

                I just wanna stay down, stay low

                Make my money, make love

                We makeup to breakup

                You’d promise that you wait up

                Ima see you later, get back and get this paper


                (Hook)

                Cause I never change, never change

                Girl I never switch up

                If I cut you off you missing me

                I’ll never miss ya

                (Chorus)

                I swear to god I wont change up

                Our bond was so real

                Me and you was gonna build (yea x2)

                Dates on your day off

                Ate you like a meal

                You put me in my feelings


                (Verse 2)

                Killing them with no makeup

                And I know they hate us

                Cause’ you looking good girl

                Yea you rocking my world

                Yea you never complaining

                Everynight we stay lit

                Member working dayshift

                Now Im making these hits

                (yea x3) I love to ball!

                Yea ill always hold you down

                If you ever need me most

                If you ever feeling down

                Then we need to hit the coast

                When I pull up lose your top

                Take it off right now

                I fell for you when we met

                We had dinner up at catch

                Turn around, ass up

                Face down when we sex

                You get mad if I don’t text

                To you I dont have a next

                Hold me down, I’ll you down

                Baby we girl we our a match


                (Chorus)

                I swear to god I wont change up

                Our bond was so real

                Me and you was gonna build (yea x2)

                Dates on your day off

                Ate you like a meal

                You put me in my feelings


                (Verse 3)

                Throwing money yea to the ceiling

                Look around Im with my day 1s, what a feeling

                Never change, never change

                I’ll never switch up

                If I cut you off you missing me

                I’ll never miss ya

                (yea x3) Never change, Never change

                I’ll never switch up

                If I cut you off you missing me

                I’ll never miss ya

                You aint in the picture

  I hope you get the picture (yea, yea)`
        },

        {
            name: 'Never Change Up',
            duration: '3:30',
            cover: 'https://res.cloudinary.com/eazzie/image/upload/q_100/v1644355083/Codeboy/Mixtape_small_kl5p0z.webp',
            id: 1,
            src: 'https://res.cloudinary.com/eazzie/video/upload/q_100/v1644335921/Codeboy/Never_Change_Up_eccwyu.wav',
            lyrics: `(Chorus)

                I swear to god I wont change up

                Our bond was so real

                Me and you was gonna build (yea x2)

                Dates on your day off

                Ate you like a meal

                You put me in my feelings


                (Verse 1)

                Killing them with no makeup

                And I know they hate us

                Cause’ we always shining, always grinding, money makers

                In the hills like lakers

                I ain’t got a contract

                And I need a million plus cause under? I aint signing that

                Working hard, Shining hard

                Remember being in the dark

                Remember when I pushed the cars

                Now the cars is push to start

                And I really need that contract 

                Cause I really like to ball

                Keep my lawyer on retainer

                Cause I cant aint even trust these broads

                I like all types designer

                Im in Cali like a Niner

                Glow em up I got the Midas (Touch)

                Man we got too high with the Pilot (Fuck)


                (Bridge)

                People grow, feelings change, I hope our time ain’t up 

                Don’t compare to anybody, other people aint us

                I know the money wont change me

                Hope the money don’t change ya

                I just wanna stay down, stay low

                Make my money, make love

                We makeup to breakup

                You’d promise that you wait up

                Ima see you later, get back and get this paper


                (Hook)

                Cause I never change, never change

                Girl I never switch up

                If I cut you off you missing me

                I’ll never miss ya

                (Chorus)

                I swear to god I wont change up

                Our bond was so real

                Me and you was gonna build (yea x2)

                Dates on your day off

                Ate you like a meal

                You put me in my feelings


                (Verse 2)

                Killing them with no makeup

                And I know they hate us

                Cause’ you looking good girl

                Yea you rocking my world

                Yea you never complaining

                Everynight we stay lit

                Member working dayshift

                Now Im making these hits

                (yea x3) I love to ball!

                Yea ill always hold you down

                If you ever need me most

                If you ever feeling down

                Then we need to hit the coast

                When I pull up lose your top

                Take it off right now

                I fell for you when we met

                We had dinner up at catch

                Turn around, ass up

                Face down when we sex

                You get mad if I don’t text

                To you I dont have a next

                Hold me down, I’ll you down

                Baby we girl we our a match


                (Chorus)

                I swear to god I wont change up

                Our bond was so real

                Me and you was gonna build (yea x2)

                Dates on your day off

                Ate you like a meal

                You put me in my feelings


                (Verse 3)

                Throwing money yea to the ceiling

                Look around Im with my day 1s, what a feeling

                Never change, never change

                I’ll never switch up

                If I cut you off you missing me

                I’ll never miss ya

                (yea x3) Never change, Never change

                I’ll never switch up

                If I cut you off you missing me

                I’ll never miss ya

                You aint in the picture

  I hope you get the picture (yea, yea)`
        },

        {
            name: "Feelings Can't Fade away",
            duration: '3:34',
            cover: 'https://res.cloudinary.com/eazzie/image/upload/q_100/v1644355083/Codeboy/Mixtape_small_kl5p0z.webp',
            id: 2,
            status: '/svg/lock.svg',
            src: 'https://res.cloudinary.com/eazzie/video/upload/v1644335894/Codeboy/Feelings_Can_t_Fade_Away_niztxc.wav',
            lyrics: `(Chorus)

                I swear to god I wont change up

                Our bond was so real

                Me and you was gonna build (yea x2)

                Dates on your day off

                Ate you like a meal

                You put me in my feelings


                (Verse 1)

                Killing them with no makeup

                And I know they hate us

                Cause’ we always shining, always grinding, money makers

                In the hills like lakers

                I ain’t got a contract

                And I need a million plus cause under? I aint signing that

                Working hard, Shining hard

                Remember being in the dark

                Remember when I pushed the cars

                Now the cars is push to start

                And I really need that contract 

                Cause I really like to ball

                Keep my lawyer on retainer

                Cause I cant aint even trust these broads

                I like all types designer

                Im in Cali like a Niner

                Glow em up I got the Midas (Touch)

                Man we got too high with the Pilot (Fuck)


                (Bridge)

                People grow, feelings change, I hope our time ain’t up 

                Don’t compare to anybody, other people aint us

                I know the money wont change me

                Hope the money don’t change ya

                I just wanna stay down, stay low

                Make my money, make love

                We makeup to breakup

                You’d promise that you wait up

                Ima see you later, get back and get this paper


                (Hook)

                Cause I never change, never change

                Girl I never switch up

                If I cut you off you missing me

                I’ll never miss ya

                (Chorus)

                I swear to god I wont change up

                Our bond was so real

                Me and you was gonna build (yea x2)

                Dates on your day off

                Ate you like a meal

                You put me in my feelings


                (Verse 2)

                Killing them with no makeup

                And I know they hate us

                Cause’ you looking good girl

                Yea you rocking my world

                Yea you never complaining

                Everynight we stay lit

                Member working dayshift

                Now Im making these hits

                (yea x3) I love to ball!

                Yea ill always hold you down

                If you ever need me most

                If you ever feeling down

                Then we need to hit the coast

                When I pull up lose your top

                Take it off right now

                I fell for you when we met

                We had dinner up at catch

                Turn around, ass up

                Face down when we sex

                You get mad if I don’t text

                To you I dont have a next

                Hold me down, I’ll you down

                Baby we girl we our a match


                (Chorus)

                I swear to god I wont change up

                Our bond was so real

                Me and you was gonna build (yea x2)

                Dates on your day off

                Ate you like a meal

                You put me in my feelings


                (Verse 3)

                Throwing money yea to the ceiling

                Look around Im with my day 1s, what a feeling

                Never change, never change

                I’ll never switch up

                If I cut you off you missing me

                I’ll never miss ya

                (yea x3) Never change, Never change

                I’ll never switch up

                If I cut you off you missing me

                I’ll never miss ya

                You aint in the picture

  I hope you get the picture (yea, yea)`
        },

        {
            name: "Hopeless Romantic",
            duration: '3:26',
            cover: 'https://res.cloudinary.com/eazzie/image/upload/q_100/v1644355083/Codeboy/Mixtape_small_kl5p0z.webp',
            id: 3,
            status: '/svg/lock.svg',
            src: 'https://res.cloudinary.com/eazzie/video/upload/v1644335851/Codeboy/HOPELESS_ROMANTIC_ykwpoi.wav',
            lyrics: `(Chorus)

                I swear to god I wont change up

                Our bond was so real

                Me and you was gonna build (yea x2)

                Dates on your day off

                Ate you like a meal

                You put me in my feelings


                (Verse 1)

                Killing them with no makeup

                And I know they hate us

                Cause’ we always shining, always grinding, money makers

                In the hills like lakers

                I ain’t got a contract

                And I need a million plus cause under? I aint signing that

                Working hard, Shining hard

                Remember being in the dark

                Remember when I pushed the cars

                Now the cars is push to start

                And I really need that contract 

                Cause I really like to ball

                Keep my lawyer on retainer

                Cause I cant aint even trust these broads

                I like all types designer

                Im in Cali like a Niner

                Glow em up I got the Midas (Touch)

                Man we got too high with the Pilot (Fuck)


                (Bridge)

                People grow, feelings change, I hope our time ain’t up 

                Don’t compare to anybody, other people aint us

                I know the money wont change me

                Hope the money don’t change ya

                I just wanna stay down, stay low

                Make my money, make love

                We makeup to breakup

                You’d promise that you wait up

                Ima see you later, get back and get this paper


                (Hook)

                Cause I never change, never change

                Girl I never switch up

                If I cut you off you missing me

                I’ll never miss ya

                (Chorus)

                I swear to god I wont change up

                Our bond was so real

                Me and you was gonna build (yea x2)

                Dates on your day off

                Ate you like a meal

                You put me in my feelings


                (Verse 2)

                Killing them with no makeup

                And I know they hate us

                Cause’ you looking good girl

                Yea you rocking my world

                Yea you never complaining

                Everynight we stay lit

                Member working dayshift

                Now Im making these hits

                (yea x3) I love to ball!

                Yea ill always hold you down

                If you ever need me most

                If you ever feeling down

                Then we need to hit the coast

                When I pull up lose your top

                Take it off right now

                I fell for you when we met

                We had dinner up at catch

                Turn around, ass up

                Face down when we sex

                You get mad if I don’t text

                To you I dont have a next

                Hold me down, I’ll you down

                Baby we girl we our a match


                (Chorus)

                I swear to god I wont change up

                Our bond was so real

                Me and you was gonna build (yea x2)

                Dates on your day off

                Ate you like a meal

                You put me in my feelings


                (Verse 3)

                Throwing money yea to the ceiling

                Look around Im with my day 1s, what a feeling

                Never change, never change

                I’ll never switch up

                If I cut you off you missing me

                I’ll never miss ya

                (yea x3) Never change, Never change

                I’ll never switch up

                If I cut you off you missing me

                I’ll never miss ya

                You aint in the picture

  I hope you get the picture (yea, yea)`
        },

        {
            name: "Meetings & Makeups",
            duration: '4:51',
            cover: 'https://res.cloudinary.com/eazzie/image/upload/q_100/v1644355083/Codeboy/Mixtape_small_kl5p0z.webp',
            id: 4,
            status: '/svg/lock.svg',
            src: 'https://res.cloudinary.com/eazzie/video/upload/v1644336025/Codeboy/Meetings_Makeups_zu6du2.wav',
            lyrics: `(Chorus)

                I swear to god I wont change up

                Our bond was so real

                Me and you was gonna build (yea x2)

                Dates on your day off

                Ate you like a meal

                You put me in my feelings


                (Verse 1)

                Killing them with no makeup

                And I know they hate us

                Cause’ we always shining, always grinding, money makers

                In the hills like lakers

                I ain’t got a contract

                And I need a million plus cause under? I aint signing that

                Working hard, Shining hard

                Remember being in the dark

                Remember when I pushed the cars

                Now the cars is push to start

                And I really need that contract 

                Cause I really like to ball

                Keep my lawyer on retainer

                Cause I cant aint even trust these broads

                I like all types designer

                Im in Cali like a Niner

                Glow em up I got the Midas (Touch)

                Man we got too high with the Pilot (Fuck)


                (Bridge)

                People grow, feelings change, I hope our time ain’t up 

                Don’t compare to anybody, other people aint us

                I know the money wont change me

                Hope the money don’t change ya

                I just wanna stay down, stay low

                Make my money, make love

                We makeup to breakup

                You’d promise that you wait up

                Ima see you later, get back and get this paper


                (Hook)

                Cause I never change, never change

                Girl I never switch up

                If I cut you off you missing me

                I’ll never miss ya

                (Chorus)

                I swear to god I wont change up

                Our bond was so real

                Me and you was gonna build (yea x2)

                Dates on your day off

                Ate you like a meal

                You put me in my feelings


                (Verse 2)

                Killing them with no makeup

                And I know they hate us

                Cause’ you looking good girl

                Yea you rocking my world

                Yea you never complaining

                Everynight we stay lit

                Member working dayshift

                Now Im making these hits

                (yea x3) I love to ball!

                Yea ill always hold you down

                If you ever need me most

                If you ever feeling down

                Then we need to hit the coast

                When I pull up lose your top

                Take it off right now

                I fell for you when we met

                We had dinner up at catch

                Turn around, ass up

                Face down when we sex

                You get mad if I don’t text

                To you I dont have a next

                Hold me down, I’ll you down

                Baby we girl we our a match


                (Chorus)

                I swear to god I wont change up

                Our bond was so real

                Me and you was gonna build (yea x2)

                Dates on your day off

                Ate you like a meal

                You put me in my feelings


                (Verse 3)

                Throwing money yea to the ceiling

                Look around Im with my day 1s, what a feeling

                Never change, never change

                I’ll never switch up

                If I cut you off you missing me

                I’ll never miss ya

                (yea x3) Never change, Never change

                I’ll never switch up

                If I cut you off you missing me

                I’ll never miss ya

                You aint in the picture

  I hope you get the picture (yea, yea)`
        },

        {
            name: "Shotgun Ring",
            duration: '2:53',
            cover: 'https://res.cloudinary.com/eazzie/image/upload/q_100/v1644355083/Codeboy/Mixtape_small_kl5p0z.webp',
            id: 5,
            status: '/svg/lock.svg',
            src: 'https://res.cloudinary.com/eazzie/video/upload/v1644335933/Codeboy/Shotgun_Ring_zkjqgz.wav',
            lyrics: `(Chorus)

                I swear to god I wont change up

                Our bond was so real

                Me and you was gonna build (yea x2)

                Dates on your day off

                Ate you like a meal

                You put me in my feelings


                (Verse 1)

                Killing them with no makeup

                And I know they hate us

                Cause’ we always shining, always grinding, money makers

                In the hills like lakers

                I ain’t got a contract

                And I need a million plus cause under? I aint signing that

                Working hard, Shining hard

                Remember being in the dark

                Remember when I pushed the cars

                Now the cars is push to start

                And I really need that contract 

                Cause I really like to ball

                Keep my lawyer on retainer

                Cause I cant aint even trust these broads

                I like all types designer

                Im in Cali like a Niner

                Glow em up I got the Midas (Touch)

                Man we got too high with the Pilot (Fuck)


                (Bridge)

                People grow, feelings change, I hope our time ain’t up 

                Don’t compare to anybody, other people aint us

                I know the money wont change me

                Hope the money don’t change ya

                I just wanna stay down, stay low

                Make my money, make love

                We makeup to breakup

                You’d promise that you wait up

                Ima see you later, get back and get this paper


                (Hook)

                Cause I never change, never change

                Girl I never switch up

                If I cut you off you missing me

                I’ll never miss ya

                (Chorus)

                I swear to god I wont change up

                Our bond was so real

                Me and you was gonna build (yea x2)

                Dates on your day off

                Ate you like a meal

                You put me in my feelings


                (Verse 2)

                Killing them with no makeup

                And I know they hate us

                Cause’ you looking good girl

                Yea you rocking my world

                Yea you never complaining

                Everynight we stay lit

                Member working dayshift

                Now Im making these hits

                (yea x3) I love to ball!

                Yea ill always hold you down

                If you ever need me most

                If you ever feeling down

                Then we need to hit the coast

                When I pull up lose your top

                Take it off right now

                I fell for you when we met

                We had dinner up at catch

                Turn around, ass up

                Face down when we sex

                You get mad if I don’t text

                To you I dont have a next

                Hold me down, I’ll you down

                Baby we girl we our a match


                (Chorus)

                I swear to god I wont change up

                Our bond was so real

                Me and you was gonna build (yea x2)

                Dates on your day off

                Ate you like a meal

                You put me in my feelings


                (Verse 3)

                Throwing money yea to the ceiling

                Look around Im with my day 1s, what a feeling

                Never change, never change

                I’ll never switch up

                If I cut you off you missing me

                I’ll never miss ya

                (yea x3) Never change, Never change

                I’ll never switch up

                If I cut you off you missing me

                I’ll never miss ya

                You aint in the picture

  I hope you get the picture (yea, yea)`
        },

        {
            name: "Kelly Logan's House Trolley",
            duration: '4:26',
            cover: 'https://res.cloudinary.com/eazzie/image/upload/q_100/v1644355083/Codeboy/Mixtape_small_kl5p0z.webp',
            id: 6,
            status: '/svg/lock.svg',
            src: 'https://res.cloudinary.com/eazzie/video/upload/v1644335961/Codeboy/Kelly_Logans_House_Trolley_yu48zm.wav',
            lyrics: `(Chorus)

                I swear to god I wont change up

                Our bond was so real

                Me and you was gonna build (yea x2)

                Dates on your day off

                Ate you like a meal

                You put me in my feelings


                (Verse 1)

                Killing them with no makeup

                And I know they hate us

                Cause’ we always shining, always grinding, money makers

                In the hills like lakers

                I ain’t got a contract

                And I need a million plus cause under? I aint signing that

                Working hard, Shining hard

                Remember being in the dark

                Remember when I pushed the cars

                Now the cars is push to start

                And I really need that contract 

                Cause I really like to ball

                Keep my lawyer on retainer

                Cause I cant aint even trust these broads

                I like all types designer

                Im in Cali like a Niner

                Glow em up I got the Midas (Touch)

                Man we got too high with the Pilot (Fuck)


                (Bridge)

                People grow, feelings change, I hope our time ain’t up 

                Don’t compare to anybody, other people aint us

                I know the money wont change me

                Hope the money don’t change ya

                I just wanna stay down, stay low

                Make my money, make love

                We makeup to breakup

                You’d promise that you wait up

                Ima see you later, get back and get this paper


                (Hook)

                Cause I never change, never change

                Girl I never switch up

                If I cut you off you missing me

                I’ll never miss ya

                (Chorus)

                I swear to god I wont change up

                Our bond was so real

                Me and you was gonna build (yea x2)

                Dates on your day off

                Ate you like a meal

                You put me in my feelings


                (Verse 2)

                Killing them with no makeup

                And I know they hate us

                Cause’ you looking good girl

                Yea you rocking my world

                Yea you never complaining

                Everynight we stay lit

                Member working dayshift

                Now Im making these hits

                (yea x3) I love to ball!

                Yea ill always hold you down

                If you ever need me most

                If you ever feeling down

                Then we need to hit the coast

                When I pull up lose your top

                Take it off right now

                I fell for you when we met

                We had dinner up at catch

                Turn around, ass up

                Face down when we sex

                You get mad if I don’t text

                To you I dont have a next

                Hold me down, I’ll you down

                Baby we girl we our a match


                (Chorus)

                I swear to god I wont change up

                Our bond was so real

                Me and you was gonna build (yea x2)

                Dates on your day off

                Ate you like a meal

                You put me in my feelings


                (Verse 3)

                Throwing money yea to the ceiling

                Look around Im with my day 1s, what a feeling

                Never change, never change

                I’ll never switch up

                If I cut you off you missing me

                I’ll never miss ya

                (yea x3) Never change, Never change

                I’ll never switch up

                If I cut you off you missing me

                I’ll never miss ya

                You aint in the picture

  I hope you get the picture (yea, yea)`
        },

        {
            name: "Rough Patches",
            duration: '3:04',
            cover: 'https://res.cloudinary.com/eazzie/image/upload/q_100/v1644355083/Codeboy/Mixtape_small_kl5p0z.webp',
            id: 7,
            src: 'https://res.cloudinary.com/eazzie/video/upload/v1644335984/Codeboy/Rough_Patches_qq6pnh.wav',
            lyrics: `(Chorus)

                I swear to god I wont change up

                Our bond was so real

                Me and you was gonna build (yea x2)

                Dates on your day off

                Ate you like a meal

                You put me in my feelings


                (Verse 1)

                Killing them with no makeup

                And I know they hate us

                Cause’ we always shining, always grinding, money makers

                In the hills like lakers

                I ain’t got a contract

                And I need a million plus cause under? I aint signing that

                Working hard, Shining hard

                Remember being in the dark

                Remember when I pushed the cars

                Now the cars is push to start

                And I really need that contract 

                Cause I really like to ball

                Keep my lawyer on retainer

                Cause I cant aint even trust these broads

                I like all types designer

                Im in Cali like a Niner

                Glow em up I got the Midas (Touch)

                Man we got too high with the Pilot (Fuck)


                (Bridge)

                People grow, feelings change, I hope our time ain’t up 

                Don’t compare to anybody, other people aint us

                I know the money wont change me

                Hope the money don’t change ya

                I just wanna stay down, stay low

                Make my money, make love

                We makeup to breakup

                You’d promise that you wait up

                Ima see you later, get back and get this paper


                (Hook)

                Cause I never change, never change

                Girl I never switch up

                If I cut you off you missing me

                I’ll never miss ya

                (Chorus)

                I swear to god I wont change up

                Our bond was so real

                Me and you was gonna build (yea x2)

                Dates on your day off

                Ate you like a meal

                You put me in my feelings


                (Verse 2)

                Killing them with no makeup

                And I know they hate us

                Cause’ you looking good girl

                Yea you rocking my world

                Yea you never complaining

                Everynight we stay lit

                Member working dayshift

                Now Im making these hits

                (yea x3) I love to ball!

                Yea ill always hold you down

                If you ever need me most

                If you ever feeling down

                Then we need to hit the coast

                When I pull up lose your top

                Take it off right now

                I fell for you when we met

                We had dinner up at catch

                Turn around, ass up

                Face down when we sex

                You get mad if I don’t text

                To you I dont have a next

                Hold me down, I’ll you down

                Baby we girl we our a match


                (Chorus)

                I swear to god I wont change up

                Our bond was so real

                Me and you was gonna build (yea x2)

                Dates on your day off

                Ate you like a meal

                You put me in my feelings


                (Verse 3)

                Throwing money yea to the ceiling

                Look around Im with my day 1s, what a feeling

                Never change, never change

                I’ll never switch up

                If I cut you off you missing me

                I’ll never miss ya

                (yea x3) Never change, Never change

                I’ll never switch up

                If I cut you off you missing me

                I’ll never miss ya

                You aint in the picture

  I hope you get the picture (yea, yea)`
        },

        {
            name: "Caress Me",
            duration: '3:03',
            cover: 'https://res.cloudinary.com/eazzie/image/upload/q_100/v1644355083/Codeboy/Mixtape_small_kl5p0z.webp',
            id: 8,
            status: '/svg/lock.svg',
            src: 'https://res.cloudinary.com/eazzie/video/upload/v1644335993/Codeboy/Caress_Me_hth4u2.wav',
            lyrics: `(Chorus)

                I swear to god I wont change up

                Our bond was so real

                Me and you was gonna build (yea x2)

                Dates on your day off

                Ate you like a meal

                You put me in my feelings


                (Verse 1)

                Killing them with no makeup

                And I know they hate us

                Cause’ we always shining, always grinding, money makers

                In the hills like lakers

                I ain’t got a contract

                And I need a million plus cause under? I aint signing that

                Working hard, Shining hard

                Remember being in the dark

                Remember when I pushed the cars

                Now the cars is push to start

                And I really need that contract 

                Cause I really like to ball

                Keep my lawyer on retainer

                Cause I cant aint even trust these broads

                I like all types designer

                Im in Cali like a Niner

                Glow em up I got the Midas (Touch)

                Man we got too high with the Pilot (Fuck)


                (Bridge)

                People grow, feelings change, I hope our time ain’t up 

                Don’t compare to anybody, other people aint us

                I know the money wont change me

                Hope the money don’t change ya

                I just wanna stay down, stay low

                Make my money, make love

                We makeup to breakup

                You’d promise that you wait up

                Ima see you later, get back and get this paper


                (Hook)

                Cause I never change, never change

                Girl I never switch up

                If I cut you off you missing me

                I’ll never miss ya

                (Chorus)

                I swear to god I wont change up

                Our bond was so real

                Me and you was gonna build (yea x2)

                Dates on your day off

                Ate you like a meal

                You put me in my feelings


                (Verse 2)

                Killing them with no makeup

                And I know they hate us

                Cause’ you looking good girl

                Yea you rocking my world

                Yea you never complaining

                Everynight we stay lit

                Member working dayshift

                Now Im making these hits

                (yea x3) I love to ball!

                Yea ill always hold you down

                If you ever need me most

                If you ever feeling down

                Then we need to hit the coast

                When I pull up lose your top

                Take it off right now

                I fell for you when we met

                We had dinner up at catch

                Turn around, ass up

                Face down when we sex

                You get mad if I don’t text

                To you I dont have a next

                Hold me down, I’ll you down

                Baby we girl we our a match


                (Chorus)

                I swear to god I wont change up

                Our bond was so real

                Me and you was gonna build (yea x2)

                Dates on your day off

                Ate you like a meal

                You put me in my feelings


                (Verse 3)

                Throwing money yea to the ceiling

                Look around Im with my day 1s, what a feeling

                Never change, never change

                I’ll never switch up

                If I cut you off you missing me

                I’ll never miss ya

                (yea x3) Never change, Never change

                I’ll never switch up

                If I cut you off you missing me

                I’ll never miss ya

                You aint in the picture

  I hope you get the picture (yea, yea)`
        },

        {
            name: "Capable",
            duration: '2:36',
            cover: 'https://res.cloudinary.com/eazzie/image/upload/q_100/v1644355083/Codeboy/Mixtape_small_kl5p0z.webp',
            id: 9,
            src: 'https://res.cloudinary.com/eazzie/video/upload/v1644335803/Codeboy/Capable_wmcn4x.wav',
            lyrics: `(Chorus)

                I swear to god I wont change up

                Our bond was so real

                Me and you was gonna build (yea x2)

                Dates on your day off

                Ate you like a meal

                You put me in my feelings


                (Verse 1)

                Killing them with no makeup

                And I know they hate us

                Cause’ we always shining, always grinding, money makers

                In the hills like lakers

                I ain’t got a contract

                And I need a million plus cause under? I aint signing that

                Working hard, Shining hard

                Remember being in the dark

                Remember when I pushed the cars

                Now the cars is push to start

                And I really need that contract 

                Cause I really like to ball

                Keep my lawyer on retainer

                Cause I cant aint even trust these broads

                I like all types designer

                Im in Cali like a Niner

                Glow em up I got the Midas (Touch)

                Man we got too high with the Pilot (Fuck)


                (Bridge)

                People grow, feelings change, I hope our time ain’t up 

                Don’t compare to anybody, other people aint us

                I know the money wont change me

                Hope the money don’t change ya

                I just wanna stay down, stay low

                Make my money, make love

                We makeup to breakup

                You’d promise that you wait up

                Ima see you later, get back and get this paper


                (Hook)

                Cause I never change, never change

                Girl I never switch up

                If I cut you off you missing me

                I’ll never miss ya

                (Chorus)

                I swear to god I wont change up

                Our bond was so real

                Me and you was gonna build (yea x2)

                Dates on your day off

                Ate you like a meal

                You put me in my feelings


                (Verse 2)

                Killing them with no makeup

                And I know they hate us

                Cause’ you looking good girl

                Yea you rocking my world

                Yea you never complaining

                Everynight we stay lit

                Member working dayshift

                Now Im making these hits

                (yea x3) I love to ball!

                Yea ill always hold you down

                If you ever need me most

                If you ever feeling down

                Then we need to hit the coast

                When I pull up lose your top

                Take it off right now

                I fell for you when we met

                We had dinner up at catch

                Turn around, ass up

                Face down when we sex

                You get mad if I don’t text

                To you I dont have a next

                Hold me down, I’ll you down

                Baby we girl we our a match


                (Chorus)

                I swear to god I wont change up

                Our bond was so real

                Me and you was gonna build (yea x2)

                Dates on your day off

                Ate you like a meal

                You put me in my feelings


                (Verse 3)

                Throwing money yea to the ceiling

                Look around Im with my day 1s, what a feeling

                Never change, never change

                I’ll never switch up

                If I cut you off you missing me

                I’ll never miss ya

                (yea x3) Never change, Never change

                I’ll never switch up

                If I cut you off you missing me

                I’ll never miss ya

                You aint in the picture

  I hope you get the picture (yea, yea)`
        },

        {
            name: "Nun To Prove",
            duration: '3:14',
            cover: 'https://res.cloudinary.com/eazzie/image/upload/q_100/v1644355083/Codeboy/Mixtape_small_kl5p0z.webp',
            id: 10,
            status: '/svg/lock.svg',
            src: 'https://res.cloudinary.com/eazzie/video/upload/v1644335777/Codeboy/Nuntoprove_pcvugr.mp3',
            lyrics: `(Chorus)

                I swear to god I wont change up

                Our bond was so real

                Me and you was gonna build (yea x2)

                Dates on your day off

                Ate you like a meal

                You put me in my feelings


                (Verse 1)

                Killing them with no makeup

                And I know they hate us

                Cause’ we always shining, always grinding, money makers

                In the hills like lakers

                I ain’t got a contract

                And I need a million plus cause under? I aint signing that

                Working hard, Shining hard

                Remember being in the dark

                Remember when I pushed the cars

                Now the cars is push to start

                And I really need that contract 

                Cause I really like to ball

                Keep my lawyer on retainer

                Cause I cant aint even trust these broads

                I like all types designer

                Im in Cali like a Niner

                Glow em up I got the Midas (Touch)

                Man we got too high with the Pilot (Fuck)


                (Bridge)

                People grow, feelings change, I hope our time ain’t up 

                Don’t compare to anybody, other people aint us

                I know the money wont change me

                Hope the money don’t change ya

                I just wanna stay down, stay low

                Make my money, make love

                We makeup to breakup

                You’d promise that you wait up

                Ima see you later, get back and get this paper


                (Hook)

                Cause I never change, never change

                Girl I never switch up

                If I cut you off you missing me

                I’ll never miss ya

                (Chorus)

                I swear to god I wont change up

                Our bond was so real

                Me and you was gonna build (yea x2)

                Dates on your day off

                Ate you like a meal

                You put me in my feelings


                (Verse 2)

                Killing them with no makeup

                And I know they hate us

                Cause’ you looking good girl

                Yea you rocking my world

                Yea you never complaining

                Everynight we stay lit

                Member working dayshift

                Now Im making these hits

                (yea x3) I love to ball!

                Yea ill always hold you down

                If you ever need me most

                If you ever feeling down

                Then we need to hit the coast

                When I pull up lose your top

                Take it off right now

                I fell for you when we met

                We had dinner up at catch

                Turn around, ass up

                Face down when we sex

                You get mad if I don’t text

                To you I dont have a next

                Hold me down, I’ll you down

                Baby we girl we our a match


                (Chorus)

                I swear to god I wont change up

                Our bond was so real

                Me and you was gonna build (yea x2)

                Dates on your day off

                Ate you like a meal

                You put me in my feelings


                (Verse 3)

                Throwing money yea to the ceiling

                Look around Im with my day 1s, what a feeling

                Never change, never change

                I’ll never switch up

                If I cut you off you missing me

                I’ll never miss ya

                (yea x3) Never change, Never change

                I’ll never switch up

                If I cut you off you missing me

                I’ll never miss ya

                You aint in the picture

  I hope you get the picture (yea, yea)`
        },

        {
            name: "Kid Chocolate",
            duration: '4:12',
            cover: 'https://res.cloudinary.com/eazzie/image/upload/q_100/v1644355083/Codeboy/Mixtape_small_kl5p0z.webp',
            id: 11,
            status: '/svg/lock.svg',
            src: 'https://res.cloudinary.com/eazzie/video/upload/v1644335983/Codeboy/Kid_Chocolate_lxi4me.wav',
            lyrics: `(Chorus)

                I swear to god I wont change up

                Our bond was so real

                Me and you was gonna build (yea x2)

                Dates on your day off

                Ate you like a meal

                You put me in my feelings


                (Verse 1)

                Killing them with no makeup

                And I know they hate us

                Cause’ we always shining, always grinding, money makers

                In the hills like lakers

                I ain’t got a contract

                And I need a million plus cause under? I aint signing that

                Working hard, Shining hard

                Remember being in the dark

                Remember when I pushed the cars

                Now the cars is push to start

                And I really need that contract 

                Cause I really like to ball

                Keep my lawyer on retainer

                Cause I cant aint even trust these broads

                I like all types designer

                Im in Cali like a Niner

                Glow em up I got the Midas (Touch)

                Man we got too high with the Pilot (Fuck)


                (Bridge)

                People grow, feelings change, I hope our time ain’t up 

                Don’t compare to anybody, other people aint us

                I know the money wont change me

                Hope the money don’t change ya

                I just wanna stay down, stay low

                Make my money, make love

                We makeup to breakup

                You’d promise that you wait up

                Ima see you later, get back and get this paper


                (Hook)

                Cause I never change, never change

                Girl I never switch up

                If I cut you off you missing me

                I’ll never miss ya

                (Chorus)

                I swear to god I wont change up

                Our bond was so real

                Me and you was gonna build (yea x2)

                Dates on your day off

                Ate you like a meal

                You put me in my feelings


                (Verse 2)

                Killing them with no makeup

                And I know they hate us

                Cause’ you looking good girl

                Yea you rocking my world

                Yea you never complaining

                Everynight we stay lit

                Member working dayshift

                Now Im making these hits

                (yea x3) I love to ball!

                Yea ill always hold you down

                If you ever need me most

                If you ever feeling down

                Then we need to hit the coast

                When I pull up lose your top

                Take it off right now

                I fell for you when we met

                We had dinner up at catch

                Turn around, ass up

                Face down when we sex

                You get mad if I don’t text

                To you I dont have a next

                Hold me down, I’ll you down

                Baby we girl we our a match


                (Chorus)

                I swear to god I wont change up

                Our bond was so real

                Me and you was gonna build (yea x2)

                Dates on your day off

                Ate you like a meal

                You put me in my feelings


                (Verse 3)

                Throwing money yea to the ceiling

                Look around Im with my day 1s, what a feeling

                Never change, never change

                I’ll never switch up

                If I cut you off you missing me

                I’ll never miss ya

                (yea x3) Never change, Never change

                I’ll never switch up

                If I cut you off you missing me

                I’ll never miss ya

                You aint in the picture

  I hope you get the picture (yea, yea)`
        },

        {
            name: "Made For This",
            duration: '3:21',
            cover: 'https://res.cloudinary.com/eazzie/image/upload/q_100/v1644355083/Codeboy/Mixtape_small_kl5p0z.webp',
            id: 12,
            src: 'https://res.cloudinary.com/eazzie/video/upload/v1644336005/Codeboy/Made_For_This_omfhxb.wav',
            lyrics: `(Chorus)

                I swear to god I wont change up

                Our bond was so real

                Me and you was gonna build (yea x2)

                Dates on your day off

                Ate you like a meal

                You put me in my feelings


                (Verse 1)

                Killing them with no makeup

                And I know they hate us

                Cause’ we always shining, always grinding, money makers

                In the hills like lakers

                I ain’t got a contract

                And I need a million plus cause under? I aint signing that

                Working hard, Shining hard

                Remember being in the dark

                Remember when I pushed the cars

                Now the cars is push to start

                And I really need that contract 

                Cause I really like to ball

                Keep my lawyer on retainer

                Cause I cant aint even trust these broads

                I like all types designer

                Im in Cali like a Niner

                Glow em up I got the Midas (Touch)

                Man we got too high with the Pilot (Fuck)


                (Bridge)

                People grow, feelings change, I hope our time ain’t up 

                Don’t compare to anybody, other people aint us

                I know the money wont change me

                Hope the money don’t change ya

                I just wanna stay down, stay low

                Make my money, make love

                We makeup to breakup

                You’d promise that you wait up

                Ima see you later, get back and get this paper


                (Hook)

                Cause I never change, never change

                Girl I never switch up

                If I cut you off you missing me

                I’ll never miss ya

                (Chorus)

                I swear to god I wont change up

                Our bond was so real

                Me and you was gonna build (yea x2)

                Dates on your day off

                Ate you like a meal

                You put me in my feelings


                (Verse 2)

                Killing them with no makeup

                And I know they hate us

                Cause’ you looking good girl

                Yea you rocking my world

                Yea you never complaining

                Everynight we stay lit

                Member working dayshift

                Now Im making these hits

                (yea x3) I love to ball!

                Yea ill always hold you down

                If you ever need me most

                If you ever feeling down

                Then we need to hit the coast

                When I pull up lose your top

                Take it off right now

                I fell for you when we met

                We had dinner up at catch

                Turn around, ass up

                Face down when we sex

                You get mad if I don’t text

                To you I dont have a next

                Hold me down, I’ll you down

                Baby we girl we our a match


                (Chorus)

                I swear to god I wont change up

                Our bond was so real

                Me and you was gonna build (yea x2)

                Dates on your day off

                Ate you like a meal

                You put me in my feelings


                (Verse 3)

                Throwing money yea to the ceiling

                Look around Im with my day 1s, what a feeling

                Never change, never change

                I’ll never switch up

                If I cut you off you missing me

                I’ll never miss ya

                (yea x3) Never change, Never change

                I’ll never switch up

                If I cut you off you missing me

                I’ll never miss ya

                You aint in the picture

  I hope you get the picture (yea, yea)`
        },
            ],

            codeLife: [
                {
                    name: 'Dimes',
                    cover: 'https://res.cloudinary.com/eazzie/image/upload/q_100/v1643853024/Codeboy/CODE_LIFE_ALBUM_COVER_ART_isbmud.webp',
                    duration: '2:35',
                    id: 18,
                    src: 'https://res.cloudinary.com/eazzie/video/upload/q_100/v1643321031/Codeboy/Dimes_uolkhw.mp3'
                },

                {
                    name: 'Feel This',
                    cover: 'https://res.cloudinary.com/eazzie/image/upload/q_100/v1643853024/Codeboy/CODE_LIFE_ALBUM_COVER_ART_isbmud.webp',
                    duration: '3:17',
                    id: 19,
                    src: 'https://res.cloudinary.com/eazzie/video/upload/q_100/v1643321067/Codeboy/Feel_This_qhfdee.mp3'
                },
                
                {
                    name: 'All Up',
                    cover: 'https://res.cloudinary.com/eazzie/image/upload/q_100/v1643853024/Codeboy/CODE_LIFE_ALBUM_COVER_ART_isbmud.webp',
                    duration: '3:03',
                    id: 20,
                    src: 'https://res.cloudinary.com/eazzie/video/upload/q_100/v1643321054/Codeboy/All_Up_Mix_2_mluspe.mp3'
                },
                
                {
                    name: 'Moment',
                    cover: 'https://res.cloudinary.com/eazzie/image/upload/q_100/v1643853024/Codeboy/CODE_LIFE_ALBUM_COVER_ART_isbmud.webp',
                    duration: '3:15',
                    id: 21,
                    src: 'https://res.cloudinary.com/eazzie/video/upload/q_100/v1643321084/Codeboy/Moment_wqtr77.mp3'
                },

                {
                    name: 'Soaring',
                    cover: 'https://res.cloudinary.com/eazzie/image/upload/q_100/v1643853024/Codeboy/CODE_LIFE_ALBUM_COVER_ART_isbmud.webp',
                    duration: '2:31',
                    id: 22,
                    src: 'https://res.cloudinary.com/eazzie/video/upload/v1643321029/Codeboy/Soarin_Mix_1_rbpgkg.mp3'
                },
                
                {
                    name: 'Diddy Skit',
                    cover: 'https://res.cloudinary.com/eazzie/image/upload/q_100/v1643853024/Codeboy/CODE_LIFE_ALBUM_COVER_ART_isbmud.webp',
                    duration: '3:20',
                    id: 23,
                    src: 'https://res.cloudinary.com/eazzie/video/upload/q_100/v1643320986/Codeboy/Diddy_Skit_ygzo3g.mp3'
                },

                {
                    name: 'Throwing Shade',
                    cover: 'https://res.cloudinary.com/eazzie/image/upload/q_100/v1643853024/Codeboy/CODE_LIFE_ALBUM_COVER_ART_isbmud.webp',
                    duration: '3:12',
                    id: 24,
                    src: 'https://res.cloudinary.com/eazzie/video/upload/q_100/v1643320985/Codeboy/Throwin_Shade_Quick_Mix_ih6wgs.mp3'
                },

                {
                    name: 'Banjee',
                    cover: 'https://res.cloudinary.com/eazzie/image/upload/q_100/v1643853024/Codeboy/CODE_LIFE_ALBUM_COVER_ART_isbmud.webp',
                    duration: '3:44',
                    id: 25,
                    src: 'https://res.cloudinary.com/eazzie/video/upload/q_100/v1642773073/Codeboy/Banjee_SINGLE_a8uvtn.mp3',
                    lyrics: `(Chorus)

                        I swear to god I wont change up

                        Our bond was so real

                        Me and you was gonna build (yea x2)

                        Dates on your day off

                        Ate you like a meal

                        You put me in my feelings


                        (Verse 1)

                        Killing them with no makeup

                        And I know they hate us

                        Cause’ we always shining, always grinding, money makers

                        In the hills like lakers

                        I ain’t got a contract

                        And I need a million plus cause under? I aint signing that

                        Working hard, Shining hard

                        Remember being in the dark

                        Remember when I pushed the cars

                        Now the cars is push to start

                        And I really need that contract 

                        Cause I really like to ball

                        Keep my lawyer on retainer

                        Cause I cant aint even trust these broads

                        I like all types designer

                        Im in Cali like a Niner

                        Glow em up I got the Midas (Touch)

                        Man we got too high with the Pilot (Fuck)


                        (Bridge)

                        People grow, feelings change, I hope our time ain’t up 

                        Don’t compare to anybody, other people aint us

                        I know the money wont change me

                        Hope the money don’t change ya

                        I just wanna stay down, stay low

                        Make my money, make love

                        We makeup to breakup

                        You’d promise that you wait up

                        Ima see you later, get back and get this paper


                        (Hook)

                        Cause I never change, never change

                        Girl I never switch up

                        If I cut you off you missing me

                        I’ll never miss ya

                        (Chorus)

                        I swear to god I wont change up

                        Our bond was so real

                        Me and you was gonna build (yea x2)

                        Dates on your day off

                        Ate you like a meal

                        You put me in my feelings


                        (Verse 2)

                        Killing them with no makeup

                        And I know they hate us

                        Cause’ you looking good girl

                        Yea you rocking my world

                        Yea you never complaining

                        Everynight we stay lit

                        Member working dayshift

                        Now Im making these hits

                        (yea x3) I love to ball!

                        Yea ill always hold you down

                        If you ever need me most

                        If you ever feeling down

                        Then we need to hit the coast

                        When I pull up lose your top

                        Take it off right now

                        I fell for you when we met

                        We had dinner up at catch

                        Turn around, ass up

                        Face down when we sex

                        You get mad if I don’t text

                        To you I dont have a next

                        Hold me down, I’ll you down

                        Baby we girl we our a match


                        (Chorus)

                        I swear to god I wont change up

                        Our bond was so real

                        Me and you was gonna build (yea x2)

                        Dates on your day off

                        Ate you like a meal

                        You put me in my feelings


                        (Verse 3)

                        Throwing money yea to the ceiling

                        Look around Im with my day 1s, what a feeling

                        Never change, never change

                        I’ll never switch up

                        If I cut you off you missing me

                        I’ll never miss ya

                        (yea x3) Never change, Never change

                        I’ll never switch up

                        If I cut you off you missing me

                        I’ll never miss ya

                        You aint in the picture

    I hope you get the picture (yea, yea)`
                },

                {
                    name: 'Toast Up',
                    cover: 'https://res.cloudinary.com/eazzie/image/upload/q_100/v1643853024/Codeboy/CODE_LIFE_ALBUM_COVER_ART_isbmud.webp',
                    duration: '3:06',
                    id: 26,
                    src: 'https://res.cloudinary.com/eazzie/video/upload/q_100/v1643321058/Codeboy/Toast_Up_Mix_1_dtbjc1.mp3'
                },
            ]
        }
    },

    computed: {
        ...mapState(["songIndex", "currentSongTitle", "currentSrc", "currentCover", "category", "currentLyrics"]),

        filtered() {
            return this.tracks.filter(track => track.type === 'singles')
        }
    },

    methods: {
        ...mapMutations(["next", "prev", "changeSongIndex", "changeCurrentSongTitle", "changeCurrentSrc", "changeCover", "changeCategory", "changeLyrics"]),

        initSong(id, name) {
            let audio = document.querySelector('.audio')
            const isPlaying = audio.classList.contains('playing')

            if(isPlaying) {
                this.pauseSong()
            } else {
                this.playSong( id, name )
            }
        },

        playSong(id, name) {
            let audio = document.querySelector('.audio')
            const currentTile = document.querySelectorAll('.currentTile')
            let bigPlayIcon = document.querySelector('.big-play-icon')
            let bigPauseIcon = document.querySelector('.big-pause-icon')


        
            if(this.category === 'all') {
                this.tracks.map((item) => {
                    if(item.id === id) {
                        audio.src = item.src
                        this.changeCurrentSrc(item.src)
                        this.changeCover(item.cover)
                        this.changeSongIndex(id)
                        this.changeCurrentSongTitle(item.name)
                        this.changeLyrics(item.lyrics)
                        console.log(item.src)
                        currentTile.forEach((itemTwo, index) => {
                            itemTwo.classList.remove('current')
                            
                            if(index === id) {
                                itemTwo.classList.add('current')
                            }
                    })
                    }
                })
            }

            if(this.category === 'singles') {
                this.singles.map((item) => {
                    if(item.id === id) {
                        audio.src = item.src
                        this.changeCurrentSrc(item.src)
                        this.changeCover(item.cover)
                        this.changeSongIndex(id)
                        this.changeCurrentSongTitle(item.name)
                        this.changeLyrics(item.lyrics)
                        currentTile.forEach((itemTwo, index) => {
                            itemTwo.classList.remove('current')
                            
                            if(index === id) {
                                itemTwo.classList.add('current')
                            }
                    })
                    }
                })
            }

            if(this.category === 'meetings') {
                this.meetings.map((item) => {
                    if(item.id === id) {
                        audio.src = item.src
                        this.changeCurrentSrc(item.src)
                        this.changeCover(item.cover)
                        this.changeSongIndex(id)
                        this.changeCurrentSongTitle(item.name)
                        this.changeLyrics(item.lyrics)
                        console.log(item.src)
                        currentTile.forEach((itemTwo, index) => {
                            itemTwo.classList.remove('current')
                            
                            if(index === id) {
                                itemTwo.classList.add('current')
                            }
                    })
                    }
                })
            }

            if(this.category === 'codeLife') {
                this.codeLife.map((item) => {
                    if(item.id === id) {
                        audio.src = item.src
                        this.changeCurrentSrc(item.src)
                        this.changeCover(item.cover)
                        this.changeSongIndex(id)
                        this.changeCurrentSongTitle(item.name)
                        this.changeLyrics(item.lyrics)
                        console.log(item.src)
                        currentTile.forEach((itemTwo, index) => {
                            itemTwo.classList.remove('current')
                            
                            if(index === id) {
                                itemTwo.classList.add('current')
                            }
                    })
                    }
                })
            }

            console.log(this.category)
            console.log(this.currentSrc)
            bigPlayIcon.classList.add('hide')
            bigPauseIcon.classList.remove('hide')

            audio.classList.add('playing')

            // this.changeCurrentSongTitle(name)
            // console.log(this.changeCurrentSongTitle(name)
            console.log(this.currentSongTitle)
            audio.play()
        },
        
        nextSong() {
            let audio = document.querySelector('.audio')
            
            this.next()

            audio.classList.remove('playing')
            this.playSong(this.songIndex)
        },

        updateProgress(e) {
            const { currentTime, duration } = e.srcElement
            const progressPercent = (currentTime / duration) * 100
            const progress = document.querySelector('.progress')

            // const nodeList = document.querySelectorAll(".example");
            // for (let i = 0; i < progress.length; i++) {
            //     progress[i].value = progressPercent;
            // }
            // progress.value = progressPercent

            // console.log(progressPercent)

            // if(progressPercent === 100) {
            //     this.nextSong()
            // }
            progress.value = progressPercent
        },

        /* Handles */
        handleGoTo(position) {
            this.position = position;
        },

        handleAll() {
            this.position = 0;

            this.changeCategory('all')
            this.$refs.all.classList.add("active");
            this.$refs.mixtapes.classList.remove("active");
            this.$refs.singles.classList.remove("active");
            this.$refs.musicVideo.classList.remove("active");
        },

        handleMixtapes() {  
        this.position = 1;

        this.$refs.mixtapes.classList.add("active");
        this.$refs.all.classList.remove("active");
        this.$refs.singles.classList.remove("active");
        this.$refs.musicVideo.classList.remove("active");
        return this.tracks.filter(track => track.type === 'singles')
        },

        handleSingles() {
        this.position = 2;

        this.changeCategory('singles')
        this.$refs.singles.classList.add("active");
        this.$refs.all.classList.remove("active");
        this.$refs.mixtapes.classList.remove("active");
        this.$refs.musicVideo.classList.remove("active");
        console.log(this.category)

        return this.tracks.filter(track => track.type === 'singles')
        },

        handleMusicVideos() {
        this.position = 3;

        this.$refs.musicVideo.classList.add("active");
        this.$refs.all.classList.remove("active");
        this.$refs.mixtapes.classList.remove("active");
        this.$refs.singles.classList.remove("active");
        },

        handleMeetings() {
            this.position = 4;

            this.changeCategory('meetings')
        },

        handleCodeLife() {
            this.position = 5;

            this.changeCategory('codeLife')
        },
    },

    mounted() {   
        ScrollTrigger.matchMedia({
            "(min-width: 768px)": function() {
                gsap.to('.top-left-container', {
                    scrollTrigger: {
                        trigger: '.top-left-container',
                        endTrigger: '.mini-player',
                        start: 'top 20%',
                        end: '+=1200',
                        pin: true,
                    }
                })
            }
        })
    }
}
</script>

<style scoped>
.active {
    font-family: 'Monument Extended Regular';
    font-weight: 400;
    transition: 800ms;
}

.hide {
    display: none;
}

#range {
    /* -webkit-appearance: none; */
}

#range:focus {
    outline: none;
}
/* 
#range::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: #6837FA;
} */

.font-monument {
  font-family: 'Monument Extended';
}

.font-monument-light {
  font-family: 'Monument Extended light';
  font-weight: 300;
}
.font-monument-regular {
  font-family: 'Monument Extended Regular';
  font-weight: 400;
}

@font-face {
  font-family: 'Monument Extended';
  src: url('../static/font/Monument_Extended_Font/MonumentExtended-Thin.ttf');
  font-weight: 100;
  font-style: normal;
}

@font-face {
  font-family: 'Monument Extended Light';
  src: url('../static/font/Monument_Extended_Font/MonumentExtended-Light.ttf');
  font-weight: 300;
  font-style: normal;
}

@font-face {
  font-family: 'Monument Extended Regular';
  src: url('../static/font/Monument_Extended_Font/MonumentExtended-Regular.ttf');
  font-weight: 400;
  font-style: normal;
}

@font-face {
  font-family: 'Monument Extended';
  src: url('../static/font/Monument_Extended_Font/MonumentExtended-Bold.ttf');
  font-weight: 700;
  font-style: normal;
}

@font-face {
  font-family: 'Monument Extended';
  src: url('../static/font/Monument_Extended_Font/MonumentExtended-Ultrabold.otf');
  font-weight: 900;
  font-style: normal;
}

@font-face {
  font-family: 'Monument Extended';
  src: url('../static/font/Monument_Extended_Font/MonumentExtended-Black.ttf');
  font-weight: normal;
  font-style: normal;
}
</style>