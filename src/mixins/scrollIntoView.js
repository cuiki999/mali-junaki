export default {

  methods: {
    scroll(el, anim) {
      const child = this.$refs[el];
      const vh = window.innerHeight;

      if (document.documentElement.scrollTop + vh / 1.3 >= child.offsetTop) {
        child.style.animation = anim;
        child.style.visibility = "visible";
      }
    }
  }
}
