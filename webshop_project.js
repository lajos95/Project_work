let clockElement = document.getElementById("clock");
function clock() {
    let d = new Date();

    let ev = d.getFullYear();

    let honap = d.getMonth();
    if (honap == 0) { honap = "január"; }
    if (honap == 1) { honap = "február"; }
    if (honap == 2) { honap = "március"; }
    if (honap == 3) { honap = "április"; }
    if (honap == 4) { honap = "május"; }
    if (honap == 5) { honap = "június"; }
    if (honap == 6) { honap = "július"; }
    if (honap == 7) { honap = "augusztus"; }
    if (honap == 8) { honap = "szeptember"; }
    if (honap == 9) { honap = "október"; }
    if (honap == 10) { honap = "november"; }
    if (honap == 11) { honap = "december"; }

    let nap = d.getDate();
    if (nap < 10) {
        nap = "0" + nap;
    }

    let hnap = d.getDay();
    if (hnap == 0) { hnap = "vasárnap"; }
    if (hnap == 1) { hnap = "hétfő"; }
    if (hnap == 2) { hnap = "kedd"; }
    if (hnap == 3) { hnap = "szerda"; }
    if (hnap == 4) { hnap = "csütörtök"; }
    if (hnap == 5) { hnap = "péntek"; }
    if (hnap == 6) { hnap = "szombat"; }

    let ora = d.getHours();

    let perc = d.getMinutes();
    if (perc < 10) {
        perc = "0" + perc;
    }

    let masodperc = d.getSeconds();
    if (masodperc < 10) {
        masodperc = "0" + masodperc;
    }
    clockElement.textContent = ("Ma " + ev + ". " + honap + " " + nap + "., " + hnap + " " + ora + ":" + perc + ":" + masodperc + " van.")
};
clock();
setInterval(clock, 1000);

$(document).ready(function () {
    $("#takaras").delay(3000).fadeIn(1000);
    $("#popup").delay(3000).fadeIn(1000);

    $("#btn1").click(function () {
        $("#takaras").fadeOut();
        $("#popup").fadeOut();
    })
})

document.getElementById("takaras2").addEventListener("click", () => {
    let kiemelt = document.getElementById("kartya_kiemelt");
    let takaras2 = document.getElementById("takaras2");

    kiemelt.classList.add("display_none");
    kiemelt.classList.replace("opacity_1", "opacity_0");
    takaras2.style.display = "none";
});

$(document).ready(function () {
    $("#cookies").delay(6000).fadeIn(2000);
    $("#btnCookies").click(function () {
        $("#cookies").fadeOut(1000);
    })
});

const termekAdatok = [
    { id: 1, nev: "5000 Ft értékű ajándékutalvány", ar: 5000, kep: "img/ajandek1.png", leiras: "Ajándékozd oda a sebesség élményét! Nem tudod, melyik pólót vagy modellautót választaná a szeretted? Válaszd a biztos utat a Ferrari FanShop ajándékutalvánnyal. Ezzel az 5000 forintos kártyával a megajándékozott saját maga válogathatja össze a kedvenc Scuderia Ferrari kiegészítőit, legyen szó Hamilton vagy Leclerc relikviákról. A vörös szenvedély most egyetlen utalványba sűrítve várja, hogy valóra váltsa egy rajongó álmát.", filter: "filterItem gift" },
    { id: 2, nev: "10000 Ft értékű ajándékutalvány", ar: 10000, kep: "img/ajandek2.png", leiras: "Ajándékozd oda a sebesség élményét! Nem tudod, melyik pólót vagy modellautót választaná a szeretted? Válaszd a biztos utat a Ferrari FanShop ajándékutalvánnyal. Ezzel a 10000 forintos kártyával a megajándékozott saját maga válogathatja össze a kedvenc Scuderia Ferrari kiegészítőit, legyen szó Hamilton vagy Leclerc relikviákról. A vörös szenvedély most egyetlen utalványba sűrítve várja, hogy valóra váltsa egy rajongó álmát.", filter: "filterItem gift" },
    { id: 3, nev: "20000 Ft értékű ajándékutalvány", ar: 20000, kep: "img/ajandek3.png", leiras: "Ajándékozd oda a sebesség élményét! Nem tudod, melyik pólót vagy modellautót választaná a szeretted? Válaszd a biztos utat a Ferrari FanShop ajándékutalvánnyal. Ezzel a 20000 forintos kártyával a megajándékozott saját maga válogathatja össze a kedvenc Scuderia Ferrari kiegészítőit, legyen szó Hamilton vagy Leclerc relikviákról. A vörös szenvedély most egyetlen utalványba sűrítve várja, hogy valóra váltsa egy rajongó álmát.", filter: "filterItem gift" },
    { id: 4, nev: "Ferrari galléros póló", ar: 39000, kep: "img/ferrari_shirt_1.png", kep2: "img/ferrari_shirt_2.png", leiras: "Maranello szelleme beköltözik a szekrényedbe. Ez a 2026-os hivatalos Scuderia Ferrari csapatpóló a PUMA tervezőasztaláról érkezett, hogy ötvözze a versenypályák hangulatát a hétköznapi eleganciával. A prémium anyaghasználat egész napos komfortot ad, az eredeti logók pedig büszkén hirdetik: te is a család tagja vagy. Tökéletes választás a versenynapokra, és azon túl is.", filter: "filterItem shirt" },
    { id: 5, nev: "Ferrari SF-25 modellautó - Charles Leclerc", ar: 8000, kep: "img/ferrari_sf_25_leclerc_1.png", kep2: "img/ferrari_sf_25_leclerc_2.png", leiras: "Vidd haza a versenypályák precizitását! Charles Leclerc 2025-ös Ferrari Forma 1-es versenyautója most 1/43-as méretarányban érkezhet meg a gyűjteményedbe. A Bburago mérnöki pontossággal kidolgozott modellje hűen tükrözi az eredeti gép minden vonalát. Hogy a látvány teljes legyen, egy stílusosan elegáns díszdobozba csomagoltuk számodra, így azonnal a polcod ékkövévé válhat. Kompakt méret (13,4 x 4,8 x 3,2 cm), hatalmas motorsport-élmény.", filter: "filterItem car leclerc" },
    { id: 6, nev: "2026-os Scuderia Ferrari falinaptár", ar: 7500, kep: "img/ferrari_naptar_2026_1.png", kep2: "img/ferrari_naptar_2026_2.png", leiras: "Tedd teljessé a 2026-os évedet a Scuderia Ferrari hivatalos falinaptárával! Ez nem csupán egy naptár, hanem egy limitált kiadású műalkotás: világszerte összesen 2026 sorszámozott darab készült belőle. A 60x30 cm-es, prémium papírra nyomtatott naptárban lenyűgöző, nagy felbontású fotók hozzák el a maranellói életérzést az otthonodba, irodádba vagy akár a garázsodba, hogy egyetlen pillanatról se maradj le. A 2026-os szezon összes versenyhétvégéjét előre bejelöltük neked. Siess, mert ez a sorozat gyorsabban fogy, mint egy kerékcsere!", filter: "filterItem calendar" },
    { id: 7, nev: "Ferrari-Hamilton hálós sapka", ar: 22000, kep: "img/ferrari_ham_cap_1.png", kep2: "img/ferrari_ham_cap_2.png", leiras: "Vágj bele a 2026-os szezonba Lewis Hamilton hivatalos csapat trucker sapkájával! A PUMA által megálmodott fejfedő a prémium megjelenést ötvözi a maximális szellőzéssel, így a legforróbb nagydíjak alatt is hűvös marad a fejed. A jellegzetes hálós hátoldal és az állítható pánt egész napos kényelmet biztosít, míg a hiteles Scuderia Ferrari részletek büszkén hirdetik a hovatartozásodat. Stílus és komfort egyetlen sapkába sűrítve.", filter: "filterItem hamilton cap" },
    { id: 8, nev: "Ferrari gallér nélküli póló", ar: 33000, kep: "img/ferrari_2026_polo_gallernelkul_1.png", kep2: "img/ferrari_2026_polo_gallernelkul_2.png", leiras: "Több mint egy szurkolói póló: ez a hivatalos 2026-os Scuderia Ferrari csapatpóló a PUMA műhelyéből. Amint felveszed, a részletgazdag szponzori logók és az ikonikus Ferrari emblémák azonnal a paddock világába repítenek – itt nem csak szurkoló, hanem a csapat valódi tagja vagy. A vállakon és a háton futó kontrasztos fehér betétek modern, dinamikus megjelenést kölcsönöznek, míg a 100% tiszta pamut anyag gondoskodik a maximális kényelemről, legyen szó egy izgalmas futamról vagy a hétköznapokról.", filter: "filterItem shirt" },
    { id: 9, nev: "Ferrari fekete póló", ar: 23000, kep: "img/ferrari_fekete_gallernelkul_shirt_1.png", kep2: "img/ferrari_fekete_gallernelkul_shirt_2.png", leiras: "Vidd magaddal a versenypályák hangulatát! Ez a prémium pamutpóló az ikonikus Ferrari modellek mintájával tiszteleg a sebesség és az olasz elegancia előtt. A sportos szabás és a tartós anyaghasználat garantálja a maximális kényelmet, akár az utcán, akár a lelátón szurkolsz. Stílus, minőség és vörös szenvedély – minden autórajongó alapdarabja.", filter: "filterItem shirt" },
    { id: 10, nev: "Ferrari-Leclerc sapka", ar: 22000, kep: "img/Leclerc-Baseball-Cap-1.jpg", kep2: "img/Leclerc-Baseball-Cap-2.jpg", leiras: "Vidd magaddal a versenypályák hangulatát! Ez a prémium pamutpóló az ikonikus Ferrari modellek mintájával tiszteleg a sebesség és az olasz elegancia előtt. A sportos szabás és a tartós anyaghasználat garantálja a maximális kényelmet, akár az utcán, akár a lelátón szurkolsz. Stílus, minőség és vörös szenvedély – minden autórajongó alapdarabja.", filter: "filterItem cap leclerc" },
    { id: 11, nev: "Ferrari póló - Driver Oversized", ar: 37000, kep: "img/ferrari_2026_polo_oversized_1.png", kep2: "img/ferrari_2026_polo_oversized_2.png", leiras: "Öltsd magadra a Scuderia hivatalos 2025-ös viseletét! Ezt a prémium Puma csapatpólót Lewis Hamilton és Charles Leclerc is büszkén viseli a nagydíjak hétvégéjén. Az autentikus szponzorfeliratok és az ikonikus Ferrari embléma mellett a nyaki díszítőcsíkok teszik igazán különlegessé. <b>Figyelem:</b> Modern, oversized (bő) fazon – vékonyabb testalkathoz érdemes egy számmal kisebb méretet választani!", filter: "filterItem shirt" },
    { id: 12, nev: "Ferrari SF-25 modellautó - Lewis Hamilton", ar: 8000, kep: "img/ferrari_sf-25_hamilton_1.jpg", kep2: "img/ferrari_sf-25_hamilton_2.jpg", leiras: "Vidd haza a versenypályák precizitását! Lewis Hamilton 2025-ös Ferrari Forma 1-es versenyautója most 1/43-as méretarányban érkezhet meg a gyűjteményedbe. A Bburago mérnöki pontossággal kidolgozott modellje hűen tükrözi az eredeti gép minden vonalát. Hogy a látvány teljes legyen, egy stílusosan elegáns díszdobozba csomagoltuk számodra, így azonnal a polcod ékkövévé válhat. Kompakt méret (13,4 x 4,8 x 3,2 cm), hatalmas motorsport-élmény.", filter: "filterItem car hamilton" },
    { id: 13, nev: "Ferrari SF-25 modellautó - Lewis Hamilton aláírásával", ar: 14000, kep: "img/ferrari_sf-25_hamilton_signature-1.jpg", kep2: "img/ferrari_sf-25_hamilton_signature-2.jpg", leiras: "A sebesség művészete kicsiben! Ez az 1/43-as méretarányú Lewis Hamilton modell a Bburago Signature széria csúcsdarabja, amely garantálja a tökéletesen élethű, aprólékos kidolgozást. A készlet tartalmazza a versenyző figuráját is, az autó pedig egy elegáns talapzaton, kristálytiszta akril vitrinben pihen. Az exkluzív díszdoboz a pilóta aláírásával teszi teljessé ezt a páratlan relikviát minden gyűjtő számára.", filter: "filterItem car hamilton" },
];

termekAdatok.forEach((t, index) => {
    if (index > 2) {
        t.eredetiAr = t.ar;
        t.ar = Math.round(t.ar * 0.8);
    }
});

const searchBtn = document.getElementById("searchBtn");
const keresesInput = document.getElementById("search-input");
const jelenlegiOldal = window.location.pathname;

const termekekListaDiv = document.getElementById("termekek-lista");
const kartyaKiemeltDiv = document.getElementById("kartya_kiemelt");

const kosarTartalomDiv = document.getElementById("kosartartalom");
const kosarElem = document.getElementById("kosar-elem-lista");
const orderBtn = document.getElementById("orderbtn");

let kosarTartalom = [];
let kosarDarab = 0;

function termekListaGen(lista) {
    termekekListaDiv.textContent = "";

    lista.forEach((termek) => {
        const kartya = createTermekKartya(termek);
        termekekListaDiv.appendChild(kartya);
    });
};

$(document).ready(function () {
    let mentettKosar = JSON.parse(localStorage.getItem('local_kosar'));

    if (mentettKosar && mentettKosar.length > 0) {
        kosarTartalom = mentettKosar;
        kosarDarab = kosarTartalom.length;
        
        const szamlalo = document.getElementById("kosar_szamlalo");
        if (szamlalo) {
            szamlalo.textContent = kosarDarab;
        };
    }
});

function kosarbaHelyez(termekId) {
    const termek = termekAdatok.find(t => t.id === termekId);

    if (termek) {
        kosarTartalom.push(termek);
        localStorage.setItem('local_kosar', JSON.stringify(kosarTartalom));
        kosarDarab++;
        document.getElementById("kosar_szamlalo").textContent = kosarDarab;
        alert("A termék a kosaradba került!")
    }
};

function kosarmegjelenites() {
    const listaDiv = document.getElementById("kosar-elem-lista");
    const vegosszegSpan = document.getElementById("kosar-vegosszeg");
    let osszeg = 0;
    listaDiv.innerHTML = "";

    if (kosarTartalom.length === 0) {
        listaDiv.innerHTML = "<p>A kosarad jelen pillanatban üres!</p>"
    }

    else {
        kosarTartalom.forEach((termek, index) => {
            const elem = document.createElement("div");
            elem.className = "kosar-termek d-flex justify-content-between align-items-center border-bottom py-2";
            elem.innerHTML = `
        <span>${termek.nev}</span>
        <div>
            <span class="me-3">${termek.ar.toLocaleString()} Ft</span>
            <button class="btn btn-danger btn-sm" onclick="kosarelemtorles(${index})">
                <i class="bi bi-trash"></i>
            </button>
        </div>
            `;
            listaDiv.appendChild(elem);
            osszeg += termek.ar;
        });
    }

    vegosszegSpan.textContent = osszeg;

    kosarTartalomDiv.classList.remove("display_none");
    document.getElementById("takaras2").style.display = "block";
};

function kosarelemtorles(index) {
    kosarTartalom.splice(index, 1);
    kosarDarab--;
    document.getElementById("kosar_szamlalo").textContent = kosarDarab;
    kosarmegjelenites();
    localStorage.setItem('local_kosar', JSON.stringify(kosarTartalom));
};

$(document).ready(function () {
    $("#kosar-icon").click(function () {
        kosarmegjelenites();
    });
    $("#kosar-bezar, #takaras2").click(function () {
        $("#kosartartalom").addClass("display_none");
        $("#takaras2").hide();
    });
});

orderBtn.addEventListener("click", () => {
    const listaDiv = document.getElementById("kosar-elem-lista");
    kosarTartalom = [];
    kosarDarab = 0;
    localStorage.removeItem('local_kosar');
    if (kosarTartalom.length === 0) {
        listaDiv.innerHTML = "<p>A kosarad jelen pillanatban üres!</p>"
    }

    const szamlalo = document.getElementById("kosar_szamlalo");
    if (szamlalo) szamlalo.textContent = "0";

    const vegosszeg = document.getElementById("kosar-vegosszeg");
    if (vegosszeg) vegosszeg.textContent = "0";

    alert("Köszönjük megrendelését!");
});

function createTermekKartya(termek) {
    const col = document.createElement("div");
    col.className = "col-sm-6 col-md-6 col-lg-4 col-xxl-3";
    const kartya = document.createElement("div");
    kartya.className = 'card w-100 h-100 rounded-5 position-relative shadow-lg';
    const kartya2 = document.createElement("div");
    kartya2.className = 'card-body position-relative';

    let arMegjelenites = "";
    if (termek.eredetiAr) {
        arMegjelenites = `
            <p class="text-decoration-line-through text-muted mb-0">Eredeti ár: ${termek.eredetiAr.toLocaleString()} Ft </p>
            <p class="fw-bold text-danger fs-4">Akciós ár: ${termek.ar.toLocaleString()} Ft</p>
        `;
    } else {
        arMegjelenites = `<p class="fw-bold fs-4">Ár: ${termek.ar.toLocaleString()} Ft</p>`;
    }

    kartya2.innerHTML = `
        <img src="${termek.kep}" data-hover="${termek.kep2}" alt="${termek.nev}" class="webshop_termek border border-black bg-light" ${termek.filter}>
        <h6 class="product-name">${termek.nev}</h6>
        ${arMegjelenites}
        <button class="btn btn-dark p-2 card-btn-info">Részletek <i class="bi bi-info fs-6"></i></button>
        <button data-id="${termek.id}" class="btn btn-dark p-2 card-btn">Kosárba</button>
    `;

    col.appendChild(kartya);
    kartya.appendChild(kartya2);

    const ikon = kartya2.querySelector(".card-btn-info");

    ikon.addEventListener("click", () => {
        kartyaKiemeltDiv.classList.remove("display_none");
        kartyaKiemeltDiv.classList.add("display_block");
        setTimeout(() => { kartyaKiemeltDiv.classList.add("opacity_1"); }, 300);
        document.getElementById("takaras2").style.display = "block";
        const ujKiemeltElem = createTermekKartya2(termek);
        kartyaKiemeltDiv.innerHTML = "";
        kartyaKiemeltDiv.appendChild(ujKiemeltElem);
    })

    const kosarGomb = kartya2.querySelector(".card-btn");
    kosarGomb.addEventListener("click", () => {
        kosarbaHelyez(termek.id);
    })

    return col;
};

function filterSelection(c) {
    if (c === 'all') {
        termekListaGen(termekAdatok);
    }
    else {
        const szurt = termekAdatok.filter(t => t.filter.includes(c));
        termekListaGen(szurt);
    }
};

$(document).ready(function () {
    const btnContainer = document.getElementById("myBtnBox");
    const gombok = btnContainer.getElementsByClassName("btn");
    for (let i = 0; i < gombok.length; i++) {
        gombok[i].addEventListener("click", function () {
            let current = btnContainer.getElementsByClassName("active");
            if (current.length > 0) {
                current[0].className = current[0].className.replace("active", "");
            };
            this.className += " active";
        });
    };
});

function createTermekKartya2(termek) {
    const kartya = document.createElement("div");
    const kartya2 = document.createElement("div");
    kartya.className = 'card_kiemelt position-fixed rounded-5 p-5 overflow-auto';
    kartya2.className = 'card-body position-relative';

    let arMegjelenites = "";
    if (termek.eredetiAr) {
        arMegjelenites = `
            <p class="text-decoration-line-through text-muted mb-0">Eredeti ár: ${termek.eredetiAr.toLocaleString()} Ft </p>
            <p class="fw-bold text-danger fs-4">Akciós ár: ${termek.ar.toLocaleString()} Ft</p>
        `;
    } else {
        arMegjelenites = `<p class="fw-bold fs-4">Ár: ${termek.ar.toLocaleString()} Ft</p>`;
    }

    const masodikKepHTML = termek.kep2 ? `
        <div class="mySlides" style="display:none;">
            <div class="numbertext">2 / 2</div>
            <img src="${termek.kep2}" class="gallery_img">
        </div>` : "";

    const thumbnailHTML = termek.kep2 ? `
        <div class="row mt-2">
            <div class="column col-6">
                <img class="demo img_cursor w-100 opacity-100" src="${termek.kep}" alt="${termek.nev}">
            </div>
            <div class="column col-6">
                <img class="demo img_cursor w-100 opacity-50" src="${termek.kep2}" alt="${termek.nev}">
            </div>
        </div>` : "";

    kartya2.innerHTML = `
        <i class="bi bi-x-circle fs-3 pt-1 ps-5 position-absolute top-0 start-100 translate-middle infoicon pointer"></i>
        
        <div class="img_container rounded-5">
            <div class="mySlides" style="display:block;">
                <div class="numbertext">1 / ${termek.kep2 ? 2 : 1}</div>
                <img src="${termek.kep}" class="gallery_img">
            </div>
            ${masodikKepHTML}

            ${termek.kep2 ? `
            <a class="prev" style="left:0;">&#10094;</a>
            <a class="next" style="right:0;">&#10095;</a>
            ` : ""}

            <div class="caption-container mt-2 border rounded-5">
                <p id="caption" class="m-0">${termek.nev}</p>
            </div>
            ${thumbnailHTML}
        </div>

        ${arMegjelenites}
        <p style="text-align: justify; max-height: 120px; overflow-y: auto;">${termek.leiras}</p>
        <button data-id="${termek.id}" class="btn btn-dark p-2 card-btn w-100">Kosárba</button>
    `;

    kartya.appendChild(kartya2);

    let slideIndex = 1;
    const slides = kartya2.getElementsByClassName("mySlides");
    const dots = kartya2.getElementsByClassName("demo");

    function showSlides(n) {
        if (slides.length === 0) return;
        if (n > slides.length) { slideIndex = 1; }
        if (n < 1) { slideIndex = slides.length; }

        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (let i = 0; i < dots.length; i++) {
            dots[i].classList.remove("opacity-100");
            dots[i].classList.add("opacity-50");
        }

        slides[slideIndex - 1].style.display = "block";
        if (dots[slideIndex - 1]) {
            dots[slideIndex - 1].classList.remove("opacity-50");
            dots[slideIndex - 1].classList.add("opacity-100");
        }
    }

    if (termek.kep2) {
        kartya2.querySelector(".prev").addEventListener("click", () => showSlides(slideIndex -= 1));
        kartya2.querySelector(".next").addEventListener("click", () => showSlides(slideIndex += 1));

        const thumbs = kartya2.querySelectorAll(".demo");
        thumbs[0].addEventListener("click", () => showSlides(slideIndex = 1));
        thumbs[1].addEventListener("click", () => showSlides(slideIndex = 2));
    }

    const ikon = kartya2.querySelector(".infoicon");
    ikon.addEventListener("click", () => {
        kartyaKiemeltDiv.classList.add("display_none");
        kartyaKiemeltDiv.classList.remove("display_block");
        document.getElementById("takaras2").style.display = "none";
    });

    const kosarGomb = kartya2.querySelector(".card-btn");
    kosarGomb.addEventListener("click", () => {
        kosarbaHelyez(termek.id);
    });

    return kartya;
};

if (jelenlegiOldal.includes("results.html")) {
    const urlParams = new URLSearchParams(window.location.search);
    const keresoSzo = urlParams.get('query');

    if (keresoSzo) {
        const szurtAdatok = termekAdatok.filter(termek =>
            termek.nev.toLowerCase().includes(keresoSzo.toLowerCase())
        );
        termekListaGen(szurtAdatok);
        keresesInput.value = keresoSzo;
    } else {
        termekListaGen(termekAdatok);
    }
} else {
    termekListaGen(termekAdatok);
};

searchBtn.addEventListener("click", () => {
    const keresoSzo = keresesInput.value.toLowerCase().trim();

    if (keresoSzo !== "") {
        window.open(`results.html?query=${encodeURIComponent(keresoSzo)}`, "_blank");
    }

    else {
        termekListaGen(szurtAdatok);
    }
});

keresesInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        searchBtn.click();
    }
});

$(document).ready(function () {
    $(".question").on("click", function () {
        const $nextAnswer = $(this).next(".answer");

        if ($nextAnswer.is(":visible")) {
            $nextAnswer.slideUp();
            $(this).removeClass("active").find("span").text("+");
        }

        else {
            $(".answer").slideUp();
            $(".question").removeClass("active").find("span").text("+")
            $nextAnswer.slideDown();
            $(this).addClass("active").find("span").text("-");
        }
    })

})

$(document).ready(function () {
    let jelszo1 = $("#jelszo");
    let jelszo2 = $("#jelszo2");
    
    jelszo1.on("input", function () {
        if ( $(this).val().length > 10 ) {
            $(jelszo2).prop("disabled", false);
        }
        else {
            $(jelszo2).prop("disabled", true);
        }
    })

});

