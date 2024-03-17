$("#navbar").load("navbar.html");

function loadSidebar(abno) {
    fetch('profile-sidebar.html')
    .then(response => response.text())
    .then(html => {
        document.getElementById("profile-sidebar").innerHTML = html;
        document.getElementById("prof-sidebar-name").innerHTML = abno.name;
        document.getElementById("prof-sidebar-img").src = `../images/portraits/${abno.name} Portrait.png`;
        document.getElementById("prof-sidebar-code").innerHTML = abno.code;
        document.getElementById("prof-sidebar-risk").src = `../images/risks/${abno.risk} Label.png`;
        document.getElementById("prof-sidebar-ego").innerHTML = abno.ego;
    })
}

fetch('abnolist.json')
    .then(response => response.json())
    .then(data => {
        const abno = getAbno(data)[0];

        loadSidebar(abno);
        loadAbnoInfo(abno);        
    })

function getAbno(data) {
    const queryStr = window.location.search;
    const urlParams = new URLSearchParams(queryStr);
    const abnoName = urlParams.get('abno');

    return data.filter(
        function(data) { return data.name === abnoName }
    )
}

function loadAbnoInfo(abno) {
    const abnoName = abno.name;

    fetch(`abnoinfo/${abnoName}.html`)
    .then(response => response.text())
    .then(html => {
        document.getElementById("abno-info-page").innerHTML += html;
        document.getElementById("title-header").classList.add(`risk-box-${abno.risk}`)
        insertAbnoName(abnoName);
    })
}

function insertAbnoName(abnoName) {
    var elements = document.querySelectorAll(".output-abno-name");
    elements.forEach(e => {
        var content = e.innerHTML;
        e.innerHTML = content.replace(/{abnoName}/g, abnoName);
    })
}
