console.log("JS connected");

let contact = document.getElementsByClassName('post-article')

contact.innerHTML = "https://www.linkedin.com/in/danilo-mendes-/" 
contact.innerHTML = "Instagram @college.pro" 
contact.innerHTML = "https://facebook.com/coll3g3pro"



const app = Vue.createApp({
  data() {
    return {
      enteredTask: "",
      tasks: [],
      taskIsVisible: true,
    };
  },
  computed: {
    buttonCaption() {
      return this.taskIsVisible ? "Hide List" : "Show List";
    },
  },
  methods: {
    toggleTaskVisibility() {
      this.taskIsVisible = !this.taskIsVisible;
    },
    addTask() {
      this.tasks.push(this.enteredTask);
    },
    removeTask() {
      this.tasks.splice(-1);
    },
    resetInput() {
      this.enteredTask = "";
    },
  },
});

app.mount("#comment");