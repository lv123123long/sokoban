<template>
    <div class="absolute" :style="position">
        <img :src="keeperImg" alt="" />
    </div>
</template>


<script setup lang="ts">

import { computed } from "vue";
import keeperImg from '../../assets/keeper.png';
import { usePlayerStore } from '../../store/player'
const { player, movePlayerToLeft, movePlayerToRight, movePlayerToDown, movePlayerToUp } = usePlayerStore();

window.addEventListener("keyup", (e: KeyboardEvent) => {
    switch (e.code) {
        case "ArrowLeft":
            console.log("left");
            movePlayerToLeft();
            break;
        case "ArrowRight":
            console.log("right");
            movePlayerToRight();
            break;
        case "ArrowUp":
            console.log("up")
            movePlayerToUp();
            break;
        case "ArrowDown":
            console.log("down");
            movePlayerToDown();
            break;
    }
});

const STEP = 32;
const position = computed(() => {
    return {
        left: player.x * STEP + "px",
        top: player.y * STEP + "px",
    };
});

</script>

<style scoped>
</style>