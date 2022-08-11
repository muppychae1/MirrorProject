function createLoginMessage(user){
    var messageDiv = document.getElementById("message");
    //이미지 생성
    if(user != 0){
        messageDiv.innerHTML="<span style='color:#789fa3;'>" + user + "</span>님 환영합니다.";
    }
    else{
        messageDiv.innerHTML="<h3>등록된 사용자가 아닙니다.</h3>";
        messageDiv.setAttribute("style","color: red;");
    }
}

function createMessage(msg){
    var messageDiv = document.getElementById("message");
    messageDiv.innerHTML=  '<h3>' + msg + '</h3>';
}

module.exports = {createLoginMessage, createMessage}
