import type { CampsiteConfig } from "../types";

const IMG = "/campsites/auwerk-camping";

const auwerkCamping: CampsiteConfig = {
  name: "Auwerk Camping",
  shortName: "Auwerk",
  slug: "auwerk-camping",
  ort: "Gölsen bei Hainfeld",
  region: "Niederösterreich",
  brandKind: "Camping & Mobilheime",
  regionLong: "Gölsental · Mostviertel · Niederösterreich",

  heroVariant: "center",

  claim: "Dein eigenes Stück Natur an der Gölsen",
  claimEmphasis: "an der Gölsen",
  emailDetail: "euer eigenes Kleinwasserkraftwerk für den Öko-Strom",
  intro:
    "Auf über 60.000 m² zwischen der naturbelassenen Gölsen und den bewaldeten Voralpen findest du Ruhe, alten Baumbestand und einen ganzjährig geöffneten Platz, der ganz dir gehört.",

  statement: {
    text: "Bei uns ist Ankommen kein Wochenende lang, sondern das ganze Jahr.",
    emphasis: "das ganze Jahr",
  },

  pillars: [
    {
      title: "Direkt an der Gölsen",
      text: "Die naturbelassene Gölsen fließt am Platz vorbei — mit malerischem Teich und altem Baumbestand.",
      image: { src: `${IMG}/accommodation-88945bc858.webp`, alt: "Die Gölsen beim Auwerk Camping mit Blick auf die Voralpen" },
    },
    {
      title: "Eingebettet in die Voralpen",
      text: "Grüne Hügel ringsum: Hainfeld liegt im waldreichsten Bezirk Österreichs, an der Grenze zum Wienerwald.",
      image: { src: `${IMG}/gallery-26bab1a520.webp`, alt: "Bewaldete Voralpen rund um Hainfeld" },
    },
    {
      title: "Ein Familienbetrieb",
      text: "Familiär geführt — vom ersten Hallo am Tor bis zum Rundum-Service für dein Mobilheim.",
      image: { src: `${IMG}/gallery-969a35ee73.webp`, alt: "Eingang zum Auwerk Camping Gölsen" },
    },
  ],

  usps: [
    "Über 60.000 m² Naturareal",
    "Ganzjährig geöffnet",
    "Öko-Strom & Quellwasser",
    "Beheiztes Sanitärgebäude",
    "Parzellen 180–240 m²",
    "Eigener Kinderspielplatz",
  ],

  trust: {
    heading: "Womit dich der Auwerk überrascht",
    headingEmphasis: "überrascht",
    intro:
      "Eigener Öko-Strom aus dem Kleinwasserkraftwerk, feinstes Quellwasser, ein ganzjährig beheiztes Sanitärgebäude und gut beleuchtete Wege bis in die Nacht — hier ist an alles gedacht.",
  },

  awards: [],

  hero: {
    aerial: { src: `${IMG}/gallery-1d49b7b768.webp`, alt: "Wiesen, alter Baumbestand und die Gölsen beim Auwerk Camping vor den Voralpen" },
  },

  breather: {
    image: { src: `${IMG}/accommodation-37e1a0b108.webp`, alt: "Luftaufnahme des Auwerk Camping zwischen Gölsen und Wald" },
    line: "Über 60.000 m² Natur, eingebettet zwischen Fluss und Wald.",
  },

  camping: {
    heading: "Camping am Auwerk",
    intro:
      "Zwischen Fluss, Teich und altem Baumbestand findest du deinen Platz im Grünen — ruhig, gepflegt und das ganze Jahr geöffnet.",
    features: [
      {
        title: "Sonnenplatz an der Gölsen",
        text: "Setz dich ans naturbelassene Flussufer und genieße erholsame Sonnenstunden im Schatten alter Bäume.",
        image: { src: `${IMG}/accommodation-369d6c3397.webp`, alt: "Sitzplatz am Ufer der Gölsen" },
      },
      {
        title: "Der malerische Teich",
        text: "Mitten am Platz liegt ein stiller Teich mit altem Baumbestand — ein Lieblingsplatz nicht nur für Enten.",
        image: { src: `${IMG}/gallery-87db673eb8.webp`, alt: "Malerischer Teich am Auwerk Camping" },
      },
      {
        title: "Alter Baumbestand",
        text: "Schattige Alleen und gewachsene Bäume prägen das weitläufige Areal und sorgen für angenehme Sommertage.",
        image: { src: `${IMG}/gallery-9c7fc59708.webp`, alt: "Baumallee mit Wiese am Auwerk Camping" },
      },
      {
        title: "Natürliches Flussufer",
        text: "Das Ufer der Gölsen ist naturbelassen — mit jungem Baumbestand und stiller, grüner Kulisse direkt am Campingplatz.",
        image: { src: `${IMG}/gallery-81c5f91273.webp`, alt: "Naturbelassenes Ufer der Gölsen mit jungem Baum im Frühling" },
      },
      {
        title: "Ruhige Lage am Wasser",
        text: "Kein Durchzugsverkehr, nur das Rauschen der Gölsen — abseits der Großstadt und doch nur 55 km von Wien.",
        image: { src: `${IMG}/gallery-5d6fb44887.webp`, alt: "Ruhiger Flussabschnitt der Gölsen mit grünen Ufern" },
      },
      {
        title: "Wildromantische Gölsen",
        text: "Wo der Fluss über Steine rauscht, wird aus einem Spaziergang schnell ein kleines Naturerlebnis.",
        image: { src: `${IMG}/gallery-9731204579.webp`, alt: "Über Steine rauschende Gölsen im Wald" },
      },
    ],
  },

  mobilheime: {
    heading: "Wohnen mitten in der Natur",
    intro:
      "Ob neues Mobilheim oder das gemütliche Holzhäuschen — bei uns findest du dein eigenes, winterfestes Zuhause im Grünen.",
    items: [
      {
        name: "Holzhäuschen zur Miete",
        kind: "für 1–2 Personen",
        text: "Ein schnuckeliges, winterfestes Holzhaus unter altem Laubbaum — mit kleiner Küche, Bad und Terrasse.",
        image: { src: `${IMG}/gallery-e1ac6646c9.webp`, alt: "Holzhäuschen zur Miete am Auwerk Camping" },
        features: ["für 1–2 Personen", "möblierte Kleinküche", "überdachte Terrasse", "€ 650 / Monat inkl. BK"],
      },
    ],
  },

  aktivitaeten: {
    heading: "Rund um die Gölsen",
    intro:
      "Vom Sprung in den Fluss bis zur Radtour durchs Gölsental — vor der Haustür warten Wandern, Radfahren und stille Plätze am Wasser.",
    items: [
      {
        title: "Im Fluss erfrischen",
        text: "An warmen Tagen lädt die seichte Gölsen zum Abkühlen zwischen Steinen und Kiesbänken ein.",
        image: { src: `${IMG}/accommodation-a487a518ed.webp`, alt: "Erfrischung in der seichten Gölsen" },
      },
      {
        title: "Rad- & Wanderwege",
        text: "Direkt am Platz starten Wege zum Wandern, Radfahren und Nordic Walking entlang des Flusses.",
        image: { src: `${IMG}/gallery-9509e7477d.webp`, alt: "Rad- und Wanderweg entlang der Gölsen" },
      },
      {
        title: "Stille Plätze am Wasser",
        text: "Abseits gelegene Uferstellen laden zum Innehalten, Lesen oder einfach nur Zuhören ein.",
        image: { src: `${IMG}/gallery-19a1f4bc87.webp`, alt: "Ruhiger Uferabschnitt der Gölsen im Wald" },
      },
    ],
  },

  anreise: {
    heading: "Dein Weg ins Gölsental",
    modes: [
      { title: "Mit dem Auto", text: "Von Wien rund 55 km über die A21 und die B18 Richtung Hainfeld — von dort ist der Platz ausgeschildert." },
      { title: "Mit der Bahn", text: "Der Bahnhof Hainfeld liegt wenige Minuten entfernt; die Traisentalbahn verbindet dich mit St. Pölten." },
      { title: "Mit dem Flugzeug", text: "Der Flughafen Wien-Schwechat ist in gut einer Stunde mit dem Auto erreichbar." },
    ],
  },

  galerie: {
    heading: "Eindrücke vom Auwerk",
    headingEmphasis: "Auwerk",
    intro: "Fluss, Teich und Wald rund ums Jahr — ein paar Eindrücke von unserem Naturareal an der Gölsen.",
    tag: "Ganzjährig geöffnet",
    moreCount: 24,
    images: [
      { src: `${IMG}/gallery-7b75fdbd28.webp`, alt: "Teich mit blühendem Baum und Voralpen am Auwerk Camping" },
      { src: `${IMG}/gallery-67611fa536.webp`, alt: "Allee mit blühenden Kastanien am Auwerk Camping" },
      { src: `${IMG}/gallery-97c5cb303c.webp`, alt: "Eingang des Holzhäuschens am Auwerk Camping" },
      { src: `${IMG}/gallery-c52ed325a4.webp`, alt: "Frühling am Teich beim Auwerk Camping — Enten am Ufer und Birkenallee" },
    ],
  },

  booking: {
    heading: "Sichere dir deinen Platz im Gölsental",
    headingEmphasis: "im Gölsental",
    intro:
      "Sag uns, woran du Interesse hast — die Familie meldet sich persönlich mit Verfügbarkeit und einem Angebot für dich.",
    pricesArePlaceholder: false,
    priceNote:
      "Keine Übernachtungspreise — der Auwerk vermietet langfristig: Jahrespacht ab € 3.840, Holzhäuschen € 650 / Monat inkl. Betriebskosten. Persönliches Angebot auf Anfrage.",
    highlight: { title: "Ganzjährig geöffnet", text: "Dein Platz im Grünen ist das ganze Jahr da — auch im Winter beheizt." },
    categories: [
      { id: "stellplatz", label: "Stellplatz / Parzelle" },
      { id: "mobilheim", label: "Mobilheim mieten" },
      { id: "holzhaus", label: "Holzhäuschen" },
    ],
  },

  kontakt: {
    coords: { lat: 48.041821, lng: 15.753018 },
    tel: "+43 676 7390031",
    telHref: "tel:+436767390031",
    mail: "office@auwerk-camping.at",
    adresse: "Gölsen 39 · 3170 Hainfeld · Niederösterreich",
  },

  languages: ["DE"],

  nav: [
    { label: "Der Platz", href: "#camping", children: [
      { label: "Natur & Lage", href: "#camping" },
      { label: "Galerie", href: "#galerie" },
    ]},
    { label: "Wohnen", href: "#mobilheime" },
    { label: "Aktiv", href: "#aktivitaeten" },
    { label: "Preise & Lage", href: "#booking", children: [
      { label: "Anfrage", href: "#booking" },
      { label: "Anreise", href: "#anreise" },
    ]},
  ],
};

export default auwerkCamping;
