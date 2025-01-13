<script setup>
 const items = [
    {
        img : 'https://cdn3.pixelcut.app/7/20/uncrop_hero_bdf08a8ca6.jpg',
        title:'The Coldest Sunset',
        description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.',

    },
    {
        img : 'https://cdn3.pixelcut.app/7/20/uncrop_hero_bdf08a8ca6.jpg',
        title:'The Coldest Sunset',
        description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.',

    },
    {
        img : 'https://cdn3.pixelcut.app/7/20/uncrop_hero_bdf08a8ca6.jpg',
        title:'The Coldest Sunset',
        description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.',

    }

]
</script>

<template>
    <div v-for="(item,index) in items" :key="index">
        <div class=" rounded overflow-hidden shadow-lg my-10">
        <img class="w-full h-auto" :src="item.img" alt="Sunset in the mountains">
        <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">{{ item.title }}</div>
            <p class="text-gray-700 text-base">
                {{ item.description }}
            </p>
        </div>
    </div>
    </div>
</template>