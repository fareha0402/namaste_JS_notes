function throttle(fn, delay) {
  let lastcall = 0
  return function (...args) {
    const now = Date.now()
    if (now - lastcall >= delay) {
      lastcall = now
      fn.apply(this, args)
    }
  }
}

const logScroll = () => console.log("scroll event at", Date.now())
const throttledScroll = throttle(logScroll, 500)
window.addEventListener("scroll", throttledScroll)


// <div style="height:2000px">Scroll Down</div>
