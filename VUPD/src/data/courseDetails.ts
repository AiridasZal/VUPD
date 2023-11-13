export interface CourseDetailResult {
  name: string;
  slug: string;
  coordinators: string[];
  summary: string;
}

export interface CourseDetail {
  count: number;
  results: CourseDetailResult[];
}

export const courseDetails: CourseDetail = {
  count: 33,
  results: [
    {
      name: "Blokų grandinių technologijos",
      slug: "bloku-grandiniu-technologijos",
      coordinators: ["dr. Remigijus Paulavičius", "dr. Ernestas Filatovas"],
      summary:
        "Dalyko tikslas - įsigilinti į blokų grandinių technologijos (angl. blockchain) pagrindus ir veikimo principus bei taikyti juos realizuojant „blockchain“ paremtus sprendimus.",
    },
    {
      name: "Duomenų bazių projektavimas",
      slug: "duomenu-baziu-projektavimas",
      coordinators: ["Dr. Povilas Treigys", "Dr. Remigijus Paulavičius"],
      summary:
        "Dalyko tikslas – siekiama, kad studentai išsiugdytų gebėjimus projektuoti ir kurti duomenų bazes, taikant duomenų bazių projektavimo metodus ir kompiuterines vizualaus projektavimo priemones bei duomenų bazės modelių kūrimo metodologijas. Formuotų duomenų bazių projektavimo metodologijos taikymo praktinėje veikloje įgūdžius. Išsiugdytų gebėjimus analizuoti vartotojų reikalavimus, kuriant duomenų bazių projektus, pasitelkti informacinių sistemų struktūrinius elementus, objektinio vizualaus projektavimo principus, nustatyti saugos reikalavimus duomenų bazėms ir diegti duomenų saugos priemones.",
    },
    {
      name: "Duomenų bazių užklausų kalbos",
      slug: "duomenu-baziu-uzklausu-kalbos",
      coordinators: ["doc. dr. Kęstutis Žilinskas", "Sandra Virbukaitė"],
      summary:
        "Dalyko tikslas – siekiama, kad studentai pagilintų procedūrinio programavimo taikymo ir duomenų bazių valdymo sistemų žinias; išmoktų struktūrizuotosios užklausų kalbos (SQL) funkcinius elementus, sąryšių algebrą; ugdytų SQL kalbos taikymo dalykinėje srityje gebėjimus. Praktinių užsiėmimų metu išmoktų pritaikyti SQL kalbą duomenų bazių valdymo sistemose.",
    },
    {
      name: "Projektų valdymas",
      slug: "projektu-valdymas",
      coordinators: ["Vytautas Pugačevskis"],
      summary:
        "Dalyko tikslas – siekiama, kad studentai įgytų žinių apie klasikinį projektų valdymą ir ugdytų gebėjimą praktikoje taikyti projekto valdymo kompetencijas",
    },
    {
      name: "Rinkodara",
      slug: "rinkodara",
      coordinators: ["lekt. dr. Lina Markevičiūtė"],
      summary:
        "Dalyko tikslas - Sėkmingai veiklai rinkoje yra būtinos rinkodaros teorijos žinios, sąlygojančios efektyvų informacinių technologijų (IT) produkto, atitinkančio vartotojo/užsakovo poreikius, vystymą, kainodarą, pardavimą ir rėmimą (iškomunikavimą/pozicionavimą). Šio dalyko tikslas yra sudaryti studijuojantiems galimybę įsisavinti teorinius rinkodaros aspektus, pritaikyti teorines žinias rinkos santykių analizei bei praktinių įgūdžių informacinių produktų rinkoje formavimui.",
    },
    {
      name: "Vadybos pagrindai",
      slug: "vadybos-pagrindai",
      coordinators: ["dr. Giedrė Dzemydaitė"],
      summary:
        "Dalyko tikslas – siekiama, kad studentai turėtų teorinį ir praktinį pagrindą vykdyti profesinės srities (informacinių technologijų, inžinerinės informatikos) procesų valdymą, planavimą, organizavimą ir kontrolę, pagrįstą naujausiais vadybos metodais ir gerąja praktika, sukauptų teorinių žinių sinteze šiuolaikinių organizacijų valdyme, atsižvelgiant į kintančią verslo aplinką.",
    },
    {
      name: "Verslo analitika",
      slug: "verslo-analitika",
      coordinators: [
        "dr. Giedrė Dzemydaitė",
        "Tomas Pranckevičius",
        "prof. dr. Dalia Krikščiūnienė",
      ],
      summary:
        "Dalyko tikslas – siekiama, kad studentai plėtotų verslo duomenų analizės įgūdžius, technikas ir žinias, taikant statistinius ir vadybos mokslo modelius verslo sprendimų pagrindimui. Kritiškai vertintų duomenis ir analizes, paremtas tais duomenimis, identifikuotų verslo analitikos galimybes, kurios prisidėtų prie įmonės veiklos rezultatų gerėjimo ir svarbių sprendimų paramos.",
    },
    {
      name: "Verslo procesų robotizavimas",
      slug: "verslo-procesu-robotizavimas",
      coordinators: ["dr. Laura Ringienė"],
      summary:
        "Dalyko tikslas – siekiama, kad studentai įgytų žinių apie verslo procesų robotizavimą bei ugdytųsi praktinius gebėjimus taikyti užduočių automatizavimą naudojantis RPA (robotic process automation) sistemomis, bei paaiškintų šių sistemų strateginę reikšmę įmonėse. Kurso dalyviai komandoje atliks praktinį projektą, kurio metu nagrinės verslo procesus, verslo informacines sistemas, taikys verslo procesų projektavimo metodus ir sieks realizuoti verslo procesų automatizavimo sprendimus, teiks rekomendacijas.",
    },
    {
      name: "Finansų inžinerija ir modeliavimas",
      slug: "finansu-inzinerija-ir-modeliavimas",
      coordinators: ["doc. dr. Igoris Belovas"],
      summary:
        "Finansų inžinerijos ir modeliavimo dalyko tikslas – suteikti žinių apie stabiliųjų dėsnių teorijos pagrindus ir stabiliojo modeliavimo taikymus finansų inžinerijoje, ugdyti gebėjimą savarankiškai tyrinėti ekonominius reiškinius, aprašyti juos, taikant stabiliuosius skirstinius, įvertinti modeliavimo adekvatumą, atlikti tokių modelių analizę.",
    },
    {
      name: "Įvadas į duomenų tyrybą ir mašininį mokymąsi",
      slug: "ivadas-i-duomenu-tyryba-ir-masinini-mokymasis",
      coordinators: [
        "prof. habil. dr. Gintautas Dzemyda",
        "dr. Jolita Bernatavičienė",
      ],
      summary:
        "Dalyko tikslas – siekiama, kad studentai įgytų žinių apie mašininį mokymąsi, duomenų tyrybą ir vizualizavimą, susipažintų su daugiamačių duomenų vizualizavimo galimybėmis, daugiamačių duomenų struktūra, ugdytų praktinius gebėjimus taikyti mašininio mokymosi, duomenų tyrybos ir vizualizavimo metodus, ugdytų gebėjimą vizualiai tirti ir interpretuoti duomenis, suprastų ir analizuotų sudėtingus duomenų tyrybos uždavinius.",
    },
    {
      name: "Natūralios kalbos apdorojimas",
      slug: "naturalios-kalbos-apdorojimas",
      coordinators: ["dr. Gražina Korvel", "dr. Gintautas Tamulevičius"],
      summary:
        "Dalyko tikslas – siekiama, kad studentai susipažintų su pagrindiniais natūralios kalbos apdorojimo principais ir teoriniais aspektais, ugdytų gebėjimus taikyti natūralios kalbos apdorojimo metodus sprendžiant praktinius uždavinius. Studentų dėmesys sutelkiamas į kompiuterio panaudojimą natūralios kalbos procesams valdyti. Modulis apima gramatinį kalbos nagrinėjimą, sintaksės analizę, semantinę interpretaciją ir kalbos pragmatiką. Apžvelgiami metodai ir jų naudojimo sritys. Studentų atliekami laboratoriniai darbai atspindi pagrindinius natūralios kalbos apdorojimo tikslus. Projektinė užduotis leidžia giliau įvertinti atskirą kurso temą.",
    },
    {
      name: "Darbu grįstų blokų grandinių technologijos",
      slug: "darbu-gristu-bloku-grandiniu-technologijos",
      coordinators: ["dr. Ernestas Filatovas"],
      summary:
        "Dalyko tikslas - išmokyti darbo įrodymu (PoW) pagrįstų blokų grandinių veikimo principų ir technologijų bei pritaikyti jas realiame pasaulyje. „Proof-of-Work“ blokų grandinės pagrįsti sprendimai.",
    },
    {
      name: "Nereliacinės duomenų bazės",
      slug: "nereliacines-duomenu-bazes",
      coordinators: ["dr. Jolita Bernatavičienė"],
      summary:
        "Dalyko tikslas – siekiama, kad studentai susipažintų su nereliacinėmis duomenų bazėmis, ugdytų gebėjimus įvertinti, pasirinkti ir pritaikyti geriausią duomenų bazių sistemos sprendimą modeliuojamos dalykinės srities duomenims saugoti.",
    },
    {
      name: "Humanoidų robotikos pagrindai",
      slug: "humanoidu-robotikos-pagrindai",
      coordinators: ["dr. Mindaugas Kurmis"],
      summary:
        "Dalyko tikslas - ugdyti studentų kompetencijas, įgyti pagrindus teorinių ir praktinių žinių bei įgūdžių apie robotų humanoidų sudedamąsias dalis, jų veikimą, sąveiką tarp jų, sužinoti humanoidų robotų, bendraujančių su žmonėmis šnekant, kūrimo dėsningumus.",
    },
    {
      name: "Informacijos teorija",
      slug: "informacijos-teorija",
      coordinators: ["doc. dr. Kęstutis Žilinskas", "dr. Mindaugas Kurmis"],
      summary:
        "Dalyko tikslas - suteikti žinių apie pagrindinius informacijos teorijos metodus ir rezultatus. Išugdyti gebėjimus taikyti juos informacijos perdavimo ir duomenų kompresijos algoritmų kūrimui ir analizei.",
    },
    {
      name: "Įvadas į robotiką",
      slug: "ivadas-i-robotika",
      coordinators: ["dr. Mindaugas Kurmis"],
      summary:
        "Dalyko tikslas: suteikti studentams bazines elektronikos žinias, supažindinti su robotika, jos veikimo ir programavimo principais, suteikti praktinius robotinės įrangos projektavimo ir kūrimo įgūdžius.",
    },
    {
      name: ".NET platforma informacinėms sistemoms",
      slug: "net-platforma-informacines-sistemoms",
      coordinators: ["dr. Julius Griškevičius"],
      summary:
        "Dalyko tikslas – suteikti žinių apie .NET platformą, jos pagrindinius komponentus ir technologijas, ugdyti gebėjimus kurti informacines sistemas, taikant .NET platformą.",
    },
    {
      name: "Didžiųjų duomenų analitika",
      slug: "didziuju-duomenu-analitika",
      coordinators: [
        "dr. Gražina Korvel",
        "prof. habil. dr. Gintautas Dzemyda",
      ],
      summary:
        "Dalyko tikslas – siekiama, kad studentai įgytų žinių apie didžiuosius duomenis, duomenų analizę ir vizualizavimą, susipažintų su didžiųjų duomenų apdorojimo galimybėmis, ugdytų praktinius gebėjimus taikyti duomenų analizės ir vizualizavimo metodus, ugdytų gebėjimą vizualiai tirti ir interpretuoti duomenis, suprastų ir analizuotų sudėtingus duomenų tyrybos uždavinius.",
    },
    {
      name: "Dirbtinio intelekto pagrindai",
      slug: "dirbtinio-intelekto-pagrindai",
      coordinators: [
        "prof. habil. dr. Gintautas Dzemyda",
        "dr. Jolita Bernatavičienė",
      ],
      summary:
        "Dalyko tikslas – siekiama, kad studentai įgytų žinių apie dirbtinį intelektą, jo pagrindus ir taikymo galimybes, ugdytų praktinius gebėjimus taikyti dirbtinio intelekto metodus sprendžiant praktinius uždavinius.",
    },
    {
      name: "Architektūriniai programų sistemų stiliai",
      slug: "architekturiniai-programu-sistemu-stiliai",
      coordinators: ["dr. Julius Griškevičius"],
      summary:
        "Dalyko tikslas – suteikti žinių apie architektūrinius programų sistemų stilius, jų taikymo galimybes, ugdyti gebėjimus taikyti architektūrinius programų sistemų stilius sprendžiant praktinius uždavinius.",
    },
    {
      name: "Išmaniųjų įrenginių programavimas",
      slug: "ismaniuju-irenginiu-programavimas",
      coordinators: ["lekt. dr. Karolis Petrauskas"],
      summary:
        "Dalyko tikslas – suteikti žinių apie išmaniuosius įrenginius, jų programavimo galimybes, ugdyti gebėjimus kurti programinę įrangą išmaniems įrenginiams.",
    },
    {
      name: "Našieji skaičiavimai",
      slug: "nasieji-skaiciavimai",
      coordinators: ["prof. habil. dr. Gintautas Dzemyda"],
      summary:
        "Dalyko tikslas – siekiama, kad studentai įgytų žinių apie našiuosius skaičiavimus, jų pagrindus ir taikymo galimybes, ugdytų praktinius gebėjimus taikyti našiuosius skaičiavimus sprendžiant praktinius uždavinius.",
    },
    {
      name: "Skriptinis programavimas",
      slug: "skriptinis-programavimas",
      coordinators: ["lekt. dr. Karolis Petrauskas"],
      summary:
        "Dalyko tikslas – suteikti žinių apie skriptinį programavimą, jo taikymo galimybes, ugdyti gebėjimus kurti programinę įrangą skriptiniu programavimu.",
    },
    {
      name: "Garso signalų apdorojimas",
      slug: "garso-signalu-apdorojimas",
      coordinators: ["dr. Gintautas Tamulevičius"],
      summary:
        "Dalyko tikslas – siekiama, kad studentai įgytų žinių apie garso signalų apdorojimą, jo pagrindus ir taikymo galimybes, ugdytų praktinius gebėjimus taikyti garso signalų apdorojimo metodus sprendžiant praktinius uždavinius.",
    },
    {
      name: "Vaizdo signalų apdorojimas",
      slug: "vaizdo-signalu-apdorojimas",
      coordinators: ["dr. Gintautas Tamulevičius"],
      summary:
        "Dalyko tikslas – siekiama, kad studentai įgytų žinių apie vaizdo signalų apdorojimą, jo pagrindus ir taikymo galimybes, ugdytų praktinius gebėjimus taikyti vaizdo signalų apdorojimo metodus sprendžiant praktinius uždavinius.",
    },
    {
      name: "Duomenų saugyklų architektūra",
      slug: "duomenu-saugyklu-architektura",
      coordinators: ["dr. Julius Griškevičius"],
      summary:
        "Dalyko tikslas – suteikti žinių apie duomenų saugyklų architektūrą, jos pagrindinius komponentus ir technologijas, ugdyti gebėjimus kurti informacines sistemas, taikant duomenų saugyklų architektūrą.",
    },
    {
      name: "Įterptinių sistemų programavimas",
      slug: "iterptiniu-sistemu-programavimas",
      coordinators: ["lekt. dr. Karolis Petrauskas"],
      summary:
        "Dalyko tikslas – suteikti žinių apie įterptinių sistemų programavimą, jo taikymo galimybes, ugdyti gebėjimus kurti programinę įrangą įterptinėms sistemoms.",
    },
    {
      name: "Projektavimo šablonai",
      slug: "projektavimo-sablonai",
      coordinators: ["lekt. dr. Karolis Petrauskas"],
      summary:
        "Dalyko tikslas – suteikti žinių apie projektavimo šablonus, jų taikymo galimybes, ugdyti gebėjimus taikyti projektavimo šablonus sprendžiant praktinius uždavinius.",
    },
  ],
};
