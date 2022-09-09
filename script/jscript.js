geld = 0;

function m_geld() {
    document.getElementById("a_geld").innerHTML = geld += 1;

    if (geld >= 10) {
        document.getElementById("miners").style.visibility = "visible";
    }
};

m1_level = 1;
i = 1;

function miner1() {
    if (m1_level * 10 <= geld) {
        geld -= m1_level * 10;
        document.getElementById("level").innerHTML = m1_level += 1;
        while (i >= 1) {
            setTimeout(geld += 1, 1000);
            i++;
        }
    } else {
        alert("Zu wenig Geld");
    }
}