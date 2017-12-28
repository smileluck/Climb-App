//time
var controlStr = "";
timeSet = function (bool) {
    /// <summary>�������</summary>
    var h, m, s, times;
    var mode = sessionStorage.getItem("mode");
    var jsMode;
    if (bool) {
        var isTime = document.getElementById("isTime").checked;
        var isAgain = document.getElementById("isAgain").checked;
        h = document.getElementById("countdown").getElementsByClassName("selected")[0].childNodes[0].innerHTML;
        m = document.getElementById("countdown").getElementsByClassName("selected")[1].childNodes[0].innerHTML;
        s = document.getElementById("countdown").getElementsByClassName("selected")[2].childNodes[0].innerHTML;
        if (isTime) {
            jsMode = "SJAzByD1EdFkGkH0IoJ0Ks";
        } else if (isAgain) { jsMode = "SJAzByD1EdFkGxH0IoJ0Ks"; }
        else {
            jsMode = "SJAzByD1EdFkGoH0IoJ0Ks";
        }
    } else {
        var isCycle = document.getElementById("isCycle").checked;
        h = document.getElementById("just").getElementsByClassName("selected")[0].childNodes[0].innerHTML;
        m = document.getElementById("just").getElementsByClassName("selected")[1].childNodes[0].innerHTML;
        s = document.getElementById("just").getElementsByClassName("selected")[2].childNodes[0].innerHTML;
        if (isCycle) {
            jsMode = "SJAzByD1EuFkGxH0IoJ0Ks";
        }
    }
    times = timeTranslate(h, m, s);
    sessionStorage.setItem("str", jsMode);
    sessionStorage.setItem("times", JSON.stringify(times));
    if (document.getElementById("Obs").childNodes[1].checked) {
        if (mode == 1) {
            var s = "$nPm" + mode + "SJAjByD1EdFkGoH0J0IoKsC" + timeTranslate(0, 0, document.getElementById("Obs").childNodes[3].value) + "#"
            sessionStorage.setItem("Amode", "z");
            mainJObject.socketSend(s);
        }
    }
    controlStr = "$nPm" + mode + jsMode + "C" + times + "#";
    mainJObject.socketSend(controlStr.toString());
    window.location.href = "Timer Mode.html";
}

timeTranslate = function (h, m, s) {
    /// <summary>ת������</summary>
    var num = h * 3600 * 1000 + m * 60 * 1000 + s * 1000;
    return num;
}

checkTimeView = function () {
    var mode = sessionStorage.getItem("mode");
    if (mode == 1) {
        document.getElementById("Obs").style.display = "block"
    } else {
        document.getElementById("Obs").style.display = "none";
    }
}

//mode
addClick = function (mode) {
    var str = mode;
    sessionStorage.setItem("mode", str);
    if (mode == 2) {
        window.location.href = "Timer Mode.html";
    } else {
        window.location.href = "Time.html";
    }
}


//ss
var arr = new Object();
screenSearch = function (_this) {
    if (_this.checked) {
        arr[_this.value] = "$n" + _this.value;
    }
    else {
        arr[_this.value] = "";
    }
}

nextBtn = function () {
    sessionStorage.setItem("arr", JSON.stringify(arr));
    window.location.href = "mode.html";
}

//Time Mode
var times = 0;
setTimes = function () {
    /// <summary>���ó�ʼʱ��</summary>  
    times = JSON.parse(sessionStorage.getItem("times"));
    changeTimes(times);
}
controlTimes = function (sw) {
    /// <summary>����ʱ��</summary>
    var str = sessionStorage.getItem("mode");
    var msg;
    switch (sw) {
        case 0: msg = "$nPm" + str + "Zk#"; break;
        case 1: msg = "$nPm" + str + "Zs#"; break;
        case 2: msg = "$nPm" + str + "Zr#";
            if (str == 1 && sessionStorage.getItem("Amode") != null) {
                var Amode = sessionStorage.getItem("Amode");
                msg += "$nPm" + str + "SJA" + Amode + "By#";
                Amode = Amode == "z" ? "j" : "z";
                sessionStorage.setItem("Amode", Amode);
                msg += "$nPm" + str + "SJA" + Amode + "Bn#";
            } else if (str == 0) {
                msg += "$nPm" + str + "SJAzBy#";
            }
            break;
    }
    mainJObject.socketSend(msg);
}
changeTimes = function (t) {
    /// <summary>����ʱ��</summary>
    var h = 0, m = 0, s = 0;
    t = t / 1000;
    if (t >= 3600) {
        h = parseInt(t / 3600);
        t = t - h * 3600;
    }
    if (t >= 60) {
        m = parseInt(t / 60);
        t = t - m * 60;
    }
    if (t > 0) {
        s = t;
    }
    if (h < 10) {
        h = "0" + h;
    }
    if (m < 10) {
        m = "0" + m;
    }
    if (s < 10) {
        s = "0" + s;
    }

    var timeKeep = document.getElementById("timekeeper").getElementsByClassName("selected");
    timeKeep[0].getElementsByTagName("p")[0].innerHTML = h;
    timeKeep[1].getElementsByTagName("p")[0].innerHTML = m;
    timeKeep[2].getElementsByTagName("p")[0].innerHTML = s;
}