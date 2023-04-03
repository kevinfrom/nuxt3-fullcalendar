<script lang="ts" setup>
import { Calendar, CalendarOptions } from '@fullcalendar/core'
import FullCalendar from '@fullcalendar/vue3'
import timeGridPlugin from '@fullcalendar/timeGrid'
import listPlugin from '@fullcalendar/list'
import daLocale from '@fullcalendar/core/locales/da'

const fullCalendar = ref<{
  getApi(): Calendar
}>()

const getViewForWindowSize = () => {
  if (typeof window === 'undefined') return 'timeGridWeek'
  return window.innerWidth < 1100 ? 'listWeek' : 'timeGridWeek'
}

const calendarOptions = reactive<CalendarOptions>({
  locale: daLocale,
  plugins: [timeGridPlugin, listPlugin],
  allDaySlot: false,
  slotMinTime: '09:00:00',
  slotMaxTime: '23:00:00',
  slotDuration: '00:30:00',
  height: 'auto',
  nowIndicator: true,
  weekNumbers: true,
  dayHeaderFormat: {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
  },
  initialView: getViewForWindowSize(),
  events: '/api/events',
  eventClick({ event }) {
    console.log(JSON.stringify(event, undefined, 4))
  },
  windowResize() {
    if (!fullCalendar.value)
      return

    fullCalendar.value.getApi().changeView(getViewForWindowSize())
  }
})
</script>

<template>
  <div>
    <ClientOnly>
      <FullCalendar ref="fullCalendar" :options="calendarOptions"></FullCalendar>
    </ClientOnly>
  </div>
</template>
