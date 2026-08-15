(() => {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const body = document.body;

  if (!body) return;

  if (reduceMotion || !('IntersectionObserver' in window)) return;

  const selector = [
    '.hero > *',
    '.section-title > *',
    '.project',
    '.offer-row',
    '.cta > *',
    '.page-hero > *',
    '.portfolio-case',
    '.service-line',
    '.note-box',
    '.about-copy > *',
    '.bio-portrait',
    '.bio-photo',
    '.bio-gallery-note',
    '.collab-intro > *',
    '.collab-form > *',
    '.social-strip > a',
    '.footer > *'
  ].join(',');

  const items = [...document.querySelectorAll(selector)];
  const groupIndexes = new Map();

  items.forEach((item) => {
    const parent = item.parentElement;
    const index = groupIndexes.get(parent) || 0;
    groupIndexes.set(parent, index + 1);
    item.classList.add('motion-item');
    item.style.setProperty('--motion-delay', `${Math.min(index, 5) * 60}ms`);
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -6% 0px'
  });

  items.forEach((item) => observer.observe(item));

  window.setTimeout(() => {
    items.forEach((item) => item.classList.add('is-visible'));
  }, 2400);
})();
