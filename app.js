const app = Vue.createApp({
  data() {
    return {
      working: "work",
      tasks: [],
      addedTask: "",
      hide: false,
      showButtonCapState: true,
      buttonCap: "Hide",
    };
  },
  methods: {
    addTask() {
      this.tasks.push(this.addedTask);
    },
    buttonState() {
      this.showButtonCapState = !this.showButtonCapState;
    },
    showHide() {
      this.hide = !this.hide;
      this.showButtonCapState = !this.showButtonCapState;
      if (this.showButtonCapState === true) {
        this.buttonCap = "Hide";
      } else {
        this.buttonCap = "Show";
      }
    },
  },
});

app.mount("#assignment");
