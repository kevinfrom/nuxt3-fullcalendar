import { EventInput } from '@fullcalendar/core'

type Event = Required<Pick<EventInput, 'id' | 'title' | 'start' | 'end'>>

export default defineEventHandler(async (): Promise<Event[]> => {
    const today = new Date()
    const tomorrow = new Date()

    tomorrow.setDate(today.getDate() + 1)

    const zeroPad = (str: string, length = 2) => {
        let result = str

        while (result.length < length)
            result = `0${result}`

        return result
    }

    return [
        {
            id: 'oij2oh11231eu2ih12eiuh4',
            title: 'Test 1',
            start: `${today.getFullYear()}-${zeroPad(String(today.getMonth() + 1))}-${zeroPad(String(today.getDate()))}T19:00:00`,
            end: `${today.getFullYear()}-${zeroPad(String(today.getMonth() + 1))}-${zeroPad(String(today.getDate()))}T21:00:00`
        },
        {
            id: 'jf901o2nnda98hsd8912',
            title: 'Test 2',
            start: `${tomorrow.getFullYear()}-${zeroPad(String(tomorrow.getMonth() + 1))}-${zeroPad(String(tomorrow.getDate()))}T12:30:00`,
            end: `${tomorrow.getFullYear()}-${zeroPad(String(tomorrow.getMonth() + 1))}-${zeroPad(String(tomorrow.getDate()))}T15:30:00`
        },
    ]
})
