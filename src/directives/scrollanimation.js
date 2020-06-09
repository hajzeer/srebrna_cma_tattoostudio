const animatedScrollOvserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('enter');
        animatedScrollOvserver.unobserve(entry.target);
      }
    });
  },
);

export default {
  bind(el) {
    el.classList.add('before-enter');
    animatedScrollOvserver.observe(el);
  },
};
