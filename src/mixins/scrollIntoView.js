export default {
  methods: {
    animate() {
      const data = [
        {
          name: "fav-books-grid",
          anim: "scroll-up 0.5s"
        },
        {
          name: "present-bg",
          anim: "scroll-left 0.5s"
        }
      ];
      const vh = window.innerHeight;

      data.forEach((el) => {
        const scrollTop = document.documentElement.scrollTop;
        const component = document.getElementById(el.name);
        
        if (scrollTop + vh / 1.3 >= component.offsetTop) {
          component.style.animation = el.anim;
          component.style.visibility = "visible";
        }
      });
    }
  }
}
