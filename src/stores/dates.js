import { localLoad, localSave } from '@/helpers/localStorage'
import { getUuid } from '@/helpers/uuid'

export default {
  init() {
    this.list = localLoad();
    this.setTimer();
  },

  now: 0,

  list: [],

  setTimer() {
    this.now = new Date().getTime();

    setInterval(() => {
      this.now = new Date().getTime();
    }, 1000);
  },

  async add(dateObj) {
    dateObj.id = await getUuid();
    this.list.push(dateObj);
    localSave(this.list);
  },

  delete(id) {
    const index = this.list.findIndex((d) => d.id === id);

    if (index < 0) return;
    this.list.splice(index, 1);
    localSave(this.list);
  },

  // get test() {
  //   return this.list.map((item) => {
  //     const dateTime = new Date(`${item.date}T${item.time}`).getTime();
  //     const counter = getTimeDifference(dateTime - $store.dates.now)
  //     return {
  //       ...item,
  //       counter,
  //     };
  //   });
  // }
}
