// Origin ver.
const JUST_DO_IT = 'https://www.youtube.com/watch?v=ZXsQAXx_ao0'

// Shirakami Fubuki ver.
// const JUST_DO_IT = 'https://www.youtube.com/watch?v=KR-8jGfVIQo'

var monitor = function(){
  if (window.location.href != JUST_DO_IT) {
    window.location.href = JUST_DO_IT
  }
}
setInterval(monitor, 1000)