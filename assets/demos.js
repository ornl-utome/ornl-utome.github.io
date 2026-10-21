(() => {
  const videos = [...document.querySelectorAll('video[data-motion]')];
  const toggle = document.getElementById('motion-toggle');
  const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
  const visible = new Set();
  let paused = preference.matches;

  function sync() {
    document.documentElement.dataset.motionPaused = String(paused);
    toggle.setAttribute('aria-pressed', String(paused));
    toggle.setAttribute('aria-label', paused ? 'Play animations' : 'Pause animations');
    toggle.title = paused ? 'Play animations' : 'Pause animations';
    for (const video of videos) {
      if (!paused && !document.hidden && visible.has(video)) {
        video.play().catch(() => { /* Keep the poster if autoplay is unavailable. */ });
      } else {
        video.pause();
      }
    }
  }

  for (const video of videos) {
    video.muted = true;
    // Visibility, motion preferences and the shared pause button own playback.
    video.autoplay = false;
    video.pause();
  }

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => {
      for (const entry of entries) {
        if (entry.isIntersecting && entry.intersectionRatio >= .15) visible.add(entry.target);
        else visible.delete(entry.target);
      }
      sync();
    }, { threshold: [0, .15] });
    videos.forEach(video => observer.observe(video));
  } else {
    videos.forEach(video => visible.add(video));
  }

  toggle.addEventListener('click', () => { paused = !paused; sync(); });
  preference.addEventListener('change', () => { paused = preference.matches; sync(); });
  document.addEventListener('visibilitychange', sync);
  sync();
})();
