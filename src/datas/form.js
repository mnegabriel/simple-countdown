export default () => ({
  init() {
    const now = new Date();
    const tomorrow = new Date(now.getTime());

    tomorrow.setDate(tomorrow.getDate() + 1);
    this.minDate = tomorrow.toISOString().split("T")[0];
  },

  minDate: "",

  handleSubmit(e) {
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    this.$store.dates.add(data);
    e.target.reset();
  }
})
