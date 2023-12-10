<template>
     <RouterLink :to="{ name:'EventDetailes', params: { id: event.id } }">
        <div class="border py-5 px-3 rounded-md text-center border-green-700 hover:shadow w-60 my-3 hover:scale-105 cursor-pointer transition-all duration-100">
                <span>@ {{ event.time }} on {{ event.date }}</span>
                <h4 class="text-md font-bold">{{ event.title }}</h4>
            </div>
    </RouterLink>
</template>
<script>
    export default {
        name:'EventCard',
        props:{
            event:{
                type: Object,
                required: true    
            }
        }
    }
</script>