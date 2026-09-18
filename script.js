// mobile nav toggle
  var navToggle = document.getElementById('navToggle');
  var navLinks = document.getElementById('navLinks');
  navToggle.addEventListener('click', function(){
    navLinks.classList.toggle('open');
  });
  navLinks.querySelectorAll('a').forEach(function(a){
    a.addEventListener('click', function(){ navLinks.classList.remove('open'); });
  });

  // gallery tabs
  var tabs = document.querySelectorAll('.tab-btn');
  var panels = document.querySelectorAll('.gallery-panel');
  tabs.forEach(function(btn){
    btn.addEventListener('click', function(){
      tabs.forEach(function(b){ b.classList.remove('active'); });
      panels.forEach(function(p){ p.classList.remove('active'); });
      btn.classList.add('active');
      document.querySelector('.gallery-panel[data-panel="'+btn.dataset.tab+'"]').classList.add('active');
    });
  });

  // enquiry form -> WhatsApp (only present on contact.html)
  var enquiryForm = document.getElementById('enquiryForm');
  if (enquiryForm) {
    enquiryForm.addEventListener('submit', function(e){
      e.preventDefault();
      var name = document.getElementById('fname').value.trim();
      var phone = document.getElementById('fphone').value.trim();
      var service = document.getElementById('fservice').value;
      var msg = document.getElementById('fmsg').value.trim();
      var text = "Hi PNR Architecture, I'm " + name + " (" + phone + "). I'm interested in " + service + "." + (msg ? " Details: " + msg : "");
      window.open("https://wa.me/919652447849?text=" + encodeURIComponent(text), "_blank");
    });
  }
