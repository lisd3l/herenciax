(function () {
    // https://dashboard.emailjs.com/admin/account
    emailjs.init('pVga9FTrVle7hw-Gz');
})();

window.onload = function () {
    document.getElementById('contact-form').addEventListener('submit', function (event) {
        event.preventDefault();
        // these IDs from the previous steps
        emailjs.sendForm('gmail', 'gmailtest', this)
            .then(function () {
                alert('send success！');
                location.reload();
            }, function (error) {
                alert('send fail！')
            });
    });

    $('a').click(function () {
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 500);
        return false;
    });
    // var elements1 = document.querySelectorAll('[data-s-67642eaf-5eb8-4cd2-a057-77227c37df1a]');
    // var elements2 = document.querySelectorAll('[data-s-521aed6b-f9f5-4e09-ac71-b3974f28207b]');
    // var elements3 = document.querySelectorAll('[data-s-03df60f1-2cde-4c4c-99c1-fe3a67b603d1]');
    // var elements4 = document.querySelectorAll('[data-s-e45d0071-d846-4c1f-8c89-5ba26c8b81ad]');
    // var elements5 = document.querySelectorAll('[data-s-578bc3a3-56c4-4951-95a7-56d79105d4f9]');
    // var elements6 = document.querySelectorAll('[data-s-0ca648b4-5ec7-4749-8165-3e09ec0e78fd]');
    // var elements7 = document.querySelectorAll('[data-s-7faec4ca-1d2e-4d5a-9cf1-93148ffa45e3]');
    // var elements8 = document.querySelectorAll('[data-s-7db24ca4-7bcd-42bd-88f1-db479e60ec24]');
    // var elements9 = document.querySelectorAll('[data-s-9323ae2a-ba5a-48b7-bc2a-36726503a21e]');

    // elements1[0].style.display = "none"
    // elements2[0].style.display = "none"
    // elements3[0].style.display = "none"
    // elements4[0].style.display = "none"
    // elements5[0].style.display = "none"
    // elements6[0].style.display = "none"
    // elements7[0].style.display = "none"
    // elements8[0].style.display = "none"
    // elements9[0].style.display = "none"

    // setTimeout(() => {
    // elements1[0].style.display = ""
    // elements1[0].style.animationName = "dots-dd2c3b0c"; // 设置动画名称
    // elements1[0].style.animationDuration = "3.5s"; // 设置动画持续时间
    // elements1[0].style.animationIterationCount = "1"; // 设置动画重复次数
    // elements2[0].style.display = ""
    // elements3[0].style.display = ""
    // elements4[0].style.display = ""
    // elements5[0].style.display = ""
    // elements6[0].style.display = ""
    // elements7[0].style.display = ""
    // elements8[0].style.display = ""
    // elements9[0].style.display = ""
    // }, "1000");
}

function clickDisplay() {
    const list = document.getElementsByName('serviceId');
    if (list[0].className.indexOf('_isClose') == -1) {
        for (let i = 0; i < list.length; ++i) {
            list[i].className = list[i].className + ' _isClose';
        }
    } else {
        for (let i = 0; i < list.length; ++i) {
            list[i].className = list[i].className.replaceAll(' _isClose', '');
        }
    }

}
