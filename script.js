const risks = ["ZAYIN", "TETH", "HE", "WAW", "ALEPH", "UNKNOWN"]

$("#navbar").load("navbar.html");

function calcAbnoNums (abnoList) {
    document.getElementById("sidebar-abno-num").innerHTML += abnoList.length;
    for (let risk of risks) {
        document.getElementById(`sidebar-abno-num-${risk}`).innerHTML += abnoList.filter(x => (x.risk == risk)).length;
    }
}

function loadSidebar(data) {
    fetch('sidebar.html')
    .then(response => response.text())
    .then(html => {
        document.getElementById("sidebar").innerHTML = html;
        calcAbnoNums(data);
    })
}

fetch('abnolist.json')
    .then(response => response.json())
    .then(data => {
        listAbnos(data);
        loadSidebar(data);        
    })

function listAbnos(data) {
    var abnoRes = "";
    var count = 0;
    var colNum = 8;

    data.forEach(abnoObj => {
        count += 1;
        if(count == 1) {
            abnoRes += `<div class="row abno-card-row g-1">`;
        }

        abnoRes += `<div class="col-md-8r col-sm-3 col-3 mb-1 abno-card-col">
                        <div class="card abno-card h-100">
                        <div class="bg-image hover-overlay">
                            <img src="images/portraits/${abnoObj.name} Portrait.png" class="img-fluid abno-card-portrait" />
                        </div>
                        <hr class="abno-card-seperator">
                        <span class="abno-risk-box risk-box-${abnoObj.risk}">${abnoObj.risk}</span>
                        <hr class="abno-card-seperator">
                        <div class="card-body abno-card-name">${abnoObj.name}</div>
                        </div>        
                    </div>`;
        
        if(count == colNum) {
            abnoRes += `</div>`;
            count = 0;
        }
    });

    while(count != 0) {
        abnoRes += `<div class="col-sm"></div>`;
        count += 1;
        if(count == colNum) {
            abnoRes += `</div>`;
            break;
        }
    }

    document.getElementById("abno-card-grid").innerHTML = abnoRes;
}
