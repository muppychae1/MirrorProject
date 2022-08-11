function createLoginMessage(user){
    var messageDiv = document.getElementById("message");
    //이미지 생성
    if(user != 0){
        messageDiv.innerHTML="<span style='color:#789fa3;'>" + user + "</span>님 환영합니다.";
    }
    else{
        messageDiv.innerHTML="등록된 사용자가 아닙니다.";
        messageDiv.setAttribute("style","color: red;");
    }
}

function createMessage(user){
    var messageDiv = document.getElementById("message");
    messageDiv.innerHTML= "<span style='color:#789fa3;'>" + user + "</span>님은 이미 가입된 유저입니다.";
}

module.exports = {createLoginMessage, createMessage}