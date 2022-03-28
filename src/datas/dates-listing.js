import { getTimeDifference } from "@/helpers/time";

const padded = number => String(number).padStart(2, '0')

export default () => ({
  get test() {
    if (!this.$store?.dates?.list?.length) return []

    return this.$store.dates.list.map((item) => {

      const dateTime = new Date(`${item.date}T${item.time}`).getTime();
      const counterObject = getTimeDifference(dateTime - this.$store.dates.now)
      const { days, hours, minutes, seconds } = counterObject


      return {
        ...item,
        days,
        clock: `${padded(hours)}:${padded(minutes)}:${padded(seconds)}`
      };
    });
  },
})
