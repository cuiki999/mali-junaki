export default {
  methods: {
    animate() {
      const data = ["fav-books-grid", "present-bg"];
      const vh = window.innerHeight;

      data.forEach((el) => {
        const scrollTop = document.documentElement.scrollTop;
        const component = document.getElementById(el);
        
        if (scrollTop + vh / 1.3 >= component.offsetTop) {
          component.classList.add("animate");
        }
      });
    }
  }
}
