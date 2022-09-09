geld = 0;

function m_geld() {
    document.getElementById("a_geld").innerHTML = geld += 1;

    if (geld >= 10) {
        document.getElementById("miner1").style.visibility = "visible";
    }

    if (geld >= 100) {
        document.getElementById("miner2").style.visibility = "visible";
    }
};

m1_level = 1;

function miner1() {
    if (m1_level * 10 <= geld) {
        geld -= m1_level * 10;
        document.getElementById("m1_level").innerHTML = m1_level += 1;
        
        setInterval(() => {
            document.getElementById("a_geld").innerHTML = geld += 1;
        }, 1000)
    
    } else {
        alert("Zu wenig Geld");
    }
}

m2_level = 1;

function miner2() {
    if (m2_level * 100 <= geld) {
        geld -= m2_level * 100;
        document.getElementById("m2_level").innerHTML = m2_level += 1;
        
        setInterval(() => {
            document.getElementById("a_geld").innerHTML = geld += 5;
        }, 1000)
    
    } else {
        alert("Zu wenig Geld");
    }
}