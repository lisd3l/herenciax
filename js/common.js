(function() {
    // https://dashboard.emailjs.com/admin/account
    emailjs.init('pVga9FTrVle7hw-Gz');
})();
        
window.onload = function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        // these IDs from the previous steps
        emailjs.sendForm('gmail', 'gmailtest', this)
            .then(function() {
                alert('send success！');
                location.reload();
            }, function(error) {
                alert('send fail！')
            });
    });
    
    $('a').click(function(){
        $('html, body').animate({
            scrollTop: $( $.attr(this, 'href') ).offset().top
        }, 500);
        return false;
    });
    
    document.addEventListener('DOMContentLoaded', domFinished);
}

function domFinished(){
    alert('DOMContentLoaded');
}

function clickDisplay() {
  const list = document.getElementsByName('serviceId');
  if (list[0].className.indexOf('_isClose') == -1) {
     for (let i = 0; i < list.length; ++i) {
        list[i].className = list[i].className + ' _isClose';
     }
  } else {
     for (let i = 0; i < list.length; ++i) {
        list[i].className = list[i].className.replaceAll(' _isClose','');
     }
  }

}
