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
        content = content.replace(/{abnoName}/g, abnoName);

        content = content.replace(/{RED}/g, `<img class="icon-image" src="../images/icons/RED Damage.png"> <span style="color: var(--red);">RED</span>`);
        content = content.replace(/{WHITE}/g, `<img class="icon-image" src="../images/icons/WHITE Damage.png"> <span style="color: var(--white);">WHITE</span>`);
        content = content.replace(/{BLACK}/g, `<img class="icon-image" src="../images/icons/BLACK Damage.png"> <span style="color: var(--black);">BLACK</span>`);
        content = content.replace(/{PALE}/g, `<img class="icon-image" src="../images/icons/PALE Damage.png"> <span style="color: var(--pale);">PALE</span>`);

        content = content.replace(/{Instinct}/g, `<img class="icon-image instinct-icon" src="../images/icons/Instinct.png"> <span style="color: var(--red);">Instinct</span>`);
        content = content.replace(/{Insight}/g, `<img class="icon-image" src="../images/icons/Insight.png"> <span style="color: var(--white);">Insight</span>`);
        content = content.replace(/{Attachment}/g, `<img class="icon-image" src="../images/icons/Attachment.png"> <span style="color: var(--black);">Attachment</span>`);
        content = content.replace(/{Repression}/g, `<img class="icon-image" src="../images/icons/Repression.png"> <span style="color: var(--pale);">Repression</span>`);

        content = content.replace(/{Good}/g, `<img class="icon-image" src="../images/icons/Good.png"> <span style="color: var(--good);">Good</span>`);
        content = content.replace(/{Normal}/g, `<img class="icon-image" src="../images/icons/Normal.png"> <span style="color: var(--normal);">Normal</span>`);
        content = content.replace(/{Bad}/g, `<img class="icon-image" src="../images/icons/Bad.png"> <span style="color: var(--bad);">Bad</span>`);

        content = content.replace(/{First Warning}/g, `<img class="icon-image" src="../images/icons/First Warning.png"> <span style="color: var(--warning1);">First Warning</span>`);
        content = content.replace(/{Second Warning}/g, `<img class="icon-image" src="../images/icons/Second Warning.png"> <span style="color: var(--warning2);">Second Warning</span>`);
        content = content.replace(/{Third Warning}/g, `<img class="icon-image" src="../images/icons/Third Warning.png"> <span style="color: var(--warning3);">Third Warning</span>`);

        content = content.replace(/{E-Boxes}/g, `<img class="icon-image enk-icon" src="../images/icons/Enkephalin.png"> <span style="color: var(--enk);">E-Boxes</span>`);

        content = content.replace(/{Light}/g, `<img class="icon-image light-icon" src="../images/icons/Light.png"> <span style="color: var(--light);">Light</span>`);

        var cardName = /{(Awakening|Breakdown)\s([^}]+)}/g;
        content = content.replace(cardName, function(match, type, name) {
            return `<img class="icon-image card-type-icon" src="../images/icons/${type}.png"> <span style="color: var(--${type});">${name}</span>`;
        })

        content = content.replace(/{Floor of History}/g, `<img class="icon-image floor-icon" src="../images/icons/Floor of History.png"> <span style="color: var(--histfloor);">Floor of History</span>`);
        content = content.replace(/{Floor of Technology}/g, `<img class="icon-image floor-icon" src="../images/icons/Floor of Technology.png"> <span style="color: var(--techfloor);">Floor of Technological Sciences</span>`);
        content = content.replace(/{Floor of Literature}/g, `<img class="icon-image floor-icon" src="../images/icons/Floor of Literature.png"> <span style="color: var(--litfloor);">Floor of Literature</span>`);
        content = content.replace(/{Floor of Art}/g, `<img class="icon-image floor-icon" src="../images/icons/Floor of Art.png"> <span style="color: var(--artfloor);">Floor of Art</span>`);
        content = content.replace(/{Floor of Natural Sciences}/g, `<img class="icon-image floor-icon" src="../images/icons/Floor of Natural Sciences.png"> <span style="color: var(--natscifloor);">Floor of Natural Sciences</span>`);
        content = content.replace(/{Floor of Language}/g, `<img class="icon-image floor-icon" src="../images/icons/Floor of Language.png"> <span style="color: var(--langfloor);">Floor of Language</span>`);
        content = content.replace(/{Floor of Social Sciences}/g, `<img class="icon-image floor-icon" src="../images/icons/Floor of Social Sciences.png"> <span style="color: var(--scoscifloor);">Floor of Social Sciences</span>`);
        content = content.replace(/{Floor of Philosophy}/g, `<img class="icon-image floor-icon" src="../images/icons/Floor of Philosophy.png"> <span style="color: var(--philofloor);">Floor of Philosophy</span>`);
        content = content.replace(/{Floor of Religion}/g, `<img class="icon-image floor-icon" src="../images/icons/Floor of Religion.png"> <span style="color: var(--religionfloor);">Floor of Religion</span>`);
        content = content.replace(/{Floor of General Works}/g, `<img class="icon-image floor-icon" src="../images/icons/Floor of General Works.png"> <span style="color: var(--generalfloor);">Floor of General Works</span>`);

        content = content.replace(/{Melee}/g, `<img class="icon-image card-range-icon" src="../images/icons/Melee.png">`);
        content = content.replace(/{Ranged}/g, `<img class="icon-image card-range-icon" src="../images/icons/Ranged.png">`);
        content = content.replace(/{Mass}/g, `<img class="icon-image card-range-icon" src="../images/icons/Mass.png">`);

        content = content.replace(/{Slash Dice}/g, `<img class="icon-image" src="../images/icons/Slash Dice.png">`);
        content = content.replace(/{Pierce Dice}/g, `<img class="icon-image" src="../images/icons/Pierce Dice.png">`);
        content = content.replace(/{Blunt Dice}/g, `<img class="icon-image" src="../images/icons/Blunt Dice.png">`);
        content = content.replace(/{Block Dice}/g, `<img class="icon-image" src="../images/icons/Block Dice.png">`);
        content = content.replace(/{Evade Dice}/g, `<img class="icon-image" src="../images/icons/Evade Dice.png">`);

        var diceroll = /{(dmg|def|ctr)roll\s([^}]+)\s([^}]+)}/g;
        content = content.replace(diceroll, function(match, type, lower, upper) {
            return `<span style="color: var(--${type}roll);">${lower}-${upper}</span>`;
        })

        var statusEffect = /{(LoR|LCB)\sSE\s(d|b|r)\s([^}]+)}/g;
        content = content.replace(statusEffect, function(match, game, type, name) {
            return `<img class="icon-image" src="../images/icons/statuseffects/${game}/${name}.png"> <span style="color: var(--SE-${type});">${name}</span>`;
        })

        e.innerHTML = content;
    })
}

var slideIndex = [1,1,1,1,1,1,1,1,1,1];

function nextSlide(n, grp) {
    showSlides(slideIndex[grp] += n, grp);
}

function showSlides(n, grp) {
    let slides = document.getElementsByClassName(`slides${grp}`);
    if (n > slides.length) {slideIndex[grp] = 1}
    if (n < 1) {slideIndex[grp] = slides.length}
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex[grp] - 1].style.display = "block";
}

function toggleCollapse(button) {
    button.classList.toggle("active");
    var content = button.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
      content.classList.remove("expanded-content");
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
      content.classList.add("expanded-content");
    }
  }

