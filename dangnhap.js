let user=prompt("Nhập tên đăng nhập");
password=prompt("Nhập mật khẩu");
if (user == "Admin"){
    if (password == "TheMaster"){
        alert("Welcome");
    }
    else if (password == "null"){
        alert("Canceled");
    }
    else {
        alert("Wrong password")
    }
}
else if (user == "null"){
    alert("Canceled");
}
else {
    alert("I don’t know you");
}

