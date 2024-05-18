export function loadScript(src, callback) {
  const script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = src;
  script.onload = callback;
  document.head.appendChild(script);
}