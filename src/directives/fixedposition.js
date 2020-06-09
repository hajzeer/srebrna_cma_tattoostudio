const animatedScrollOvserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fixed');
        animatedScrollOvserver.unobserve(entry.target);
      }
    });
  },
);

export default {
  bind(el) {
    el.classList.add('before-fixed');
    animatedScrollOvserver.observe(el);
  },
};
