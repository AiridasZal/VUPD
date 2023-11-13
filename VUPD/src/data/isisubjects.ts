export interface Subject {
  name: string;
  slug: string;
}

export interface Semester {
  name: string;
  subjects: Subject[] | string;
}

export interface Year {
  name: string;
  semesters: Semester[];
}

export interface Course {
  name: string;
  slug: string;
  count: number;
  results: Year[];
}

const courseData: Course = {
  name: "Informacinių sistemų inžinerija",
  slug: "informaciniu-sistemu-inzinerija",
  count: 4,
  results: [
    {
      name: "Pirmas kursas",
      semesters: [
        {
          name: "Rudens semestras",
          subjects: "Nėra pasirenkamųjų dalykų",
        },
        {
          name: "Pavasario semestras",
          subjects: "Nėra pasirenkamųjų dalykų",
        },
      ],
    },
    {
      name: "Antras kursas",
      semesters: [
        {
          name: "Rudens semestras",
          subjects: [
            {
              name: "Blokų grandinių technologijos",
              slug: "bloku-grandiniu-technologijos",
            },
            {
              name: "Duomenų bazių projektavimas",
              slug: "duomenu-baziu-projektavimas",
            },
            {
              name: "Duomenų bazių užklausų kalbos",
              slug: "duomenu-baziu-uzklausu-kalbos",
            },
          ],
        },
        {
          name: "Pavasario semestras",
          subjects: [
            { name: "Projektų valdymas", slug: "projektu-valdymas" },
            { name: "Rinkodara", slug: "rinkodara" },
            { name: "Vadybos pagrindai", slug: "vadybos-pagrindai" },
            { name: "Verslo analitika", slug: "verslo-analitika" },
            {
              name: "Verslo procesų robotizavimas",
              slug: "verslo-procesu-robotizavimas",
            },
          ],
        },
      ],
    },
    {
      name: "Trečias kursas",
      semesters: [
        {
          name: "Rudens semestras",
          subjects: [
            {
              name: "Finansų inžinerija ir modeliavimas",
              slug: "finansu-inzinerija-ir-modeliavimas",
            },
            {
              name: "Įvadas į duomenų tyrybą ir mašininį mokymąsi",
              slug: "ivadas-i-duomenu-tyryba-ir-masinini-mokymasis",
            },
            {
              name: "Natūralios kalbos apdorojimas",
              slug: "naturalios-kalbos-apdorojimas",
            },
            {
              name: "Darbu grįstų blokų grandinių technologijos",
              slug: "darbu-gristu-bloku-grandiniu-technologijos",
            },
            {
              name: "Nereliacinės duomenų bazės",
              slug: "nereliacines-duomenu-bazes",
            },
            {
              name: "Humanoidų robotikos pagrindai",
              slug: "humanoidu-robotikos-pagrindai",
            },
            { name: "Informacijos teorija", slug: "informacijos-teorija" },
            { name: "Įvadas į robotiką", slug: "ivadas-i-robotika" },
            {
              name: ".NET platforma informacinėms sistemoms",
              slug: "net-platforma-informacines-sistemoms",
            },
          ],
        },
        {
          name: "Pavasario semestras",
          subjects: [
            {
              name: "Didžiųjų duomenų analitika",
              slug: "didziuju-duomenu-analitika",
            },
            {
              name: "Dirbtinio intelekto pagrindai",
              slug: "dirbtinio-intelekto-pagrindai",
            },
            {
              name: "Architektūriniai programų sistemų stiliai",
              slug: "architekturiniai-programu-sistemu-stiliai",
            },
            {
              name: "Humanoidų robotikos pagrindai",
              slug: "humanoidu-robotikos-pagrindai",
            },
            {
              name: "Išmaniųjų įrenginių programavimas",
              slug: "ismaniuju-irenginiu-programavimas",
            },
            { name: "Našieji skaičiavimai", slug: "nasieji-skaiciavimai" },
            {
              name: "Skriptinis programavimas",
              slug: "skriptinis-programavimas",
            },
          ],
        },
      ],
    },
    {
      name: "Ketvirtas kursas",
      semesters: [
        {
          name: "Rudens semestras",
          subjects: [
            {
              name: "Garso signalų apdorojimas",
              slug: "garso-signalu-apdorojimas",
            },
            {
              name: "Natūralios kalbos apdorojimas",
              slug: "naturalios-kalbos-apdorojimas",
            },
            {
              name: "Vaizdo signalų apdorojimas",
              slug: "vaizdo-signalu-apdorojimas",
            },
            {
              name: "Duomenų saugyklų architektūra",
              slug: "duomenu-saugyklu-architektura",
            },
            {
              name: "Įterptinių sistemų programavimas",
              slug: "iterptiniu-sistemu-programavimas",
            },
            { name: "Projektavimo šablonai", slug: "projektavimo-sablonai" },
          ],
        },
        {
          name: "Pavasario semestras",
          subjects: "Nėra pasirenkamųjų dalykų",
        },
      ],
    },
  ],
};

export default courseData;
