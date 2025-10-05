(function(){
  const toggle = document.getElementById('darkModeToggle');
  const body = document.body;

  function initTheme(){
    const savedTheme = localStorage.getItem('theme');
    if(savedTheme==='dark'){
      body.classList.add('dark');
      toggle.checked=true;
    }
  }

  function toggleTheme(){
    if(toggle.checked){
      body.classList.add('dark');
      localStorage.setItem('theme','dark');
    } else {
      body.classList.remove('dark');
      localStorage.setItem('theme','light');
    }
  }
  initTheme();

  toggle.addEventListener('change',toggleTheme);
})();