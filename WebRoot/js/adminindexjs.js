// 确认是否delete
$('.isDelete').click(function (e) {
    // e.preventDefault();
    var isDelete = confirm("你敢？");
    if (isDelete == true) {
        return true;
    } else {
        return false;
    }
});