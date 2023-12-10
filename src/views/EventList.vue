<template>
  <div>
    <div class="flex flex-col items-center">
      <EventCard v-for="event in events" :key="event.id" :event="event"   />
    </div>

  </div>
</template>
<script>
import EventCard from '@/assets/components/EventCard.vue';
import  EventService  from '@/services/EventService.js';
export default {
  name:'EventList', 
  components:{
      EventCard
    },
    data(){
      return {
        events: null
      }
    },
    created(){
      EventService.getEvents()
      .then(response => {
        this.events = response.data
        console.log('Events:', response.data )
      })
      .catch(error =>{
        console.log(error)
      })
    }
  }
</script>