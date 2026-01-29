<script>
/* منع التمرير أثناء الانتقال */
function lockScroll(lock){
  document.body.style.overflow = lock ? "hidden" : "auto";
}

/* فتح تطبيق مع انتقال سينمائي */
function openApp(e, url, favicon){
  e.preventDefault();
  lockScroll(true);

  const wrapper = document.querySelector('.wrapper');
  const viewer  = document.getElementById('appViewer');
  const frame   = document.getElementById('appFrame');

  wrapper.style.display = 'none';
  viewer.style.display  = 'flex';
  viewer.classList.remove('cinematic-enter');
  void viewer.offsetWidth; // reset animation
  viewer.classList.add('cinematic-enter');

  frame.src = url;

  // تغيير favicon
  if(favicon){
    document.getElementById('dynamicFavicon').href = favicon;
  }
}

/* رجوع سينمائي */
function closeApp(){
  const viewer  = document.getElementById('appViewer');
  const wrapper = document.querySelector('.wrapper');
  const frame   = document.getElementById('appFrame');

  viewer.style.opacity = '0';
  setTimeout(()=>{
    frame.src = '';
    viewer.style.display = 'none';
    viewer.style.opacity = '1';
    wrapper.style.display = 'flex';
    lockScroll(false);
  },300);
}

/* تحسين اللمس للجوال */
document.addEventListener('touchstart',()=>{}, {passive:true});
</script>
