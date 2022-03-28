import Alpine from 'alpinejs'

import '@/styles/reset.css'
import '@/styles/main.css'

import datesStore from '@/stores/dates'
import formData from '@/datas/form'
import datesListing from '@/datas/dates-listing'

window.Alpine = Alpine

document.addEventListener("alpine:init", () => {


  Alpine.data("form", formData);
  Alpine.data("datesListing", datesListing);

  Alpine.store("dates", datesStore);
})

Alpine.start()
