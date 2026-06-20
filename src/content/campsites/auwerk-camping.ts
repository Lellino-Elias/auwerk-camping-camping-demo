import type { CampsiteConfig } from "../types";

/**
 * Auwerk Camping — Gölsen 39, 3170 Hainfeld (Niederösterreich).
 * Inhalte zu 100 % aus raw/digest abgeleitet. Bilder provenance-gebunden an diesen Platz.
 * Design: Original-Palette (kein theme), heroVariant "center".
 */
const IMG = "/campsites/auwerk-camping";

const auwerkCamping: CampsiteConfig = {
  name: "Auwerk Camping",
  shortName: "Auwerk",
  slug: "auwerk-camping",
  ort: "Hainfeld",
  region: "Niederösterreich",
  brandKind: "Naturcamping",
  regionLong: "Wienerwald · Mostviertel · Voralpen · Niederösterreich",

  heroVariant: "center",

  claim: "Naturidylle an der Gölsen, nur 55 km von Wien",
  claimEmphasis: "an der Gölsen",
  emailDetail: "euer eigenes Kleinwasserkraftwerk für Öko-Strom",
  intro:
    "An den naturbelassenen Ufern der Gölsen, im waldreichsten Bezirk Österreichs und doch nur 55 km von Wien: ein Familienbetrieb auf über 60.000 m² — mit Platz für Zelt, Wohnwagen und dein eigenes Mobilheim.",

  statement: {
    text: "Über 60.000 m² Ruhe und Erholung an den naturbelassenen Ufern der Gölsen.",
    emphasis: "Ruhe und Erholung",
  },

  pillars: [
    {
      title: "Direkt an der Gölsen",
      text: "Sonnige, ruhige Lage an den naturbelassenen Ufern der Gölsen — mit Teich und altem Baumbestand.",
      image: { src: `${IMG}/goelsen-fluss.webp`, alt: "Die naturbelassene Gölsen beim Auwerk Camping" },
    },
    {
      title: "Waldreichster Bezirk",
      text: "Du atmest die frische Luft von Österreichs waldreichstem Bezirk — und bist doch nur 55 km von Wien.",
      image: { src: `${IMG}/voralpen-tal.webp`, alt: "Bewaldete Hügellandschaft rund um Hainfeld" },
    },
    {
      title: "Familiär geführt",
      text: "Unser Familienbetrieb kümmert sich um alles — vom Öko-Strom bis zum schlüsselfertigen Stellplatz.",
      image: { src: `${IMG}/eingang.webp`, alt: "Eingang zum Auwerk Camping: Brücke mit blühendem Baum im Frühling" },
    },
  ],

  usps: [
    "Über 60.000 m²",
    "Ganzjährig geöffnet",
    "Eigener Öko-Strom",
    "Beheiztes Sanitärgebäude",
    "Nur 55 km von Wien",
    "Eigenes Quellwasser",
  ],

  trust: {
    heading: "Ein Platz, der das ganze Jahr für dich da ist",
    headingEmphasis: "das ganze Jahr",
    intro:
      "Ganzjährig geöffnet und winterfest, mit beheiztem Sanitärgebäude, Öko-Strom aus dem eigenen Kleinwasserkraftwerk und Trinkwasser aus der eigenen Quelle — bei uns ist alles da, damit du dich um nichts kümmern musst.",
  },

  awards: [],

  hero: {
    aerial: { src: `${IMG}/hero-luft.webp`, alt: "Luftaufnahme: Auwerk Camping an der Gölsen bei Hainfeld" },
  },

  breather: {
    image: { src: `${IMG}/bruecke.webp`, alt: "Ruhige Gölsen im Frühlingsgrün beim Auwerk Camping" },
    line: "Wo das Wasser still wird und der Tag langsamer.",
  },

  camping: {
    heading: "Dein Platz an der Gölsen",
    intro:
      "Vom Zelt über den Wohnwagen bis zum eigenen Mobilheim — auf über 60.000 m² findest du großzügige, ruhige Parzellen mitten in der Natur.",
    features: [
      {
        title: "Ein Naturparadies an der Gölsen",
        text: "Sonnige Wiesen, der Fluss und sanfte Hügel ringsum — hier beginnt die Natur direkt vor deinem Vorzelt.",
        image: { src: `${IMG}/naturparadies.webp`, alt: "Wiesen und Baumallee an der Gölsen beim Auwerk Camping" },
      },
      {
        title: "Der malerische Teich",
        text: "Am stillen Teich mit altem Baumbestand sammelst du erholsame Sonnenstunden mit der ganzen Familie.",
        image: { src: `${IMG}/teich-weit.webp`, alt: "Der stille Campingteich am Auwerk mit Enten und Baumspiegelung" },
      },
      {
        title: "Alter Baumbestand",
        text: "Schattige Wege unter mächtigen, alten Bäumen laden zu langen Spaziergängen über den Platz ein.",
        image: { src: `${IMG}/baumbestand.webp`, alt: "Weg unter altem Baumbestand am Auwerk Camping" },
      },
      {
        title: "Lebendiges Flusswasser",
        text: "Die Gölsen treibt unser eigenes Kleinwasserkraftwerk an — dein Strom hier ist sauberer Öko-Strom.",
        image: { src: `${IMG}/wehr.webp`, alt: "Wehr an der Gölsen, das das Kleinwasserkraftwerk speist" },
      },
      {
        title: "Weite Wiesen am Waldrand",
        text: "Großzügige Parzellen von 180 bis 240 m² mit Strom, Wasser und Kanal — viel Platz für dich und dein Heim.",
        image: { src: `${IMG}/wiesen.webp`, alt: "Weite Wiesen und Baumreihe am Auwerk Camping" },
      },
      {
        title: "Sonnige Plätze am Ufer",
        text: "Ganzjährig geöffnet und winterfest, mit modernem, beheiztem Sanitärgebäude — ruhig gelegen am Wasser.",
        image: { src: `${IMG}/ufer.webp`, alt: "Sonniger Uferplatz an der Gölsen beim Auwerk Camping" },
      },
    ],
  },

  mobilheime: {
    heading: "Wohnen am Auwerk",
    intro:
      "Du musst kein eigenes Mobilheim mitbringen — bei uns kannst du mieten oder kaufen, schlüsselfertig an unsere Netze angeschlossen.",
    items: [
      {
        name: "Tiny House zum Kauf",
        kind: "Tiny House",
        text: "Nagelneues, bisher unbewohntes Tiny House mit 70 m² Wohnfläche, Küche, Bad, Wohn- und Schlafzimmer — schlüsselfertig auf ca. 320 m² Parzelle.",
        image: { src: `${IMG}/mobilheim-neu.webp`, alt: "Tiny House mit Holzfassade und Terrasse am Auwerk Camping" },
        features: ["70 m² Wohnfläche", "Schlüsselfertig", "Parzelle ca. 320 m²"],
      },
      {
        name: "Gemütliches Holzhäuschen",
        kind: "Häuschen zur Miete",
        text: "Möbliertes Häuschen für ein bis zwei Personen mit Terrasse und Kleinküche — zur Miete ab € 650 im Monat.",
        image: { src: `${IMG}/holzhaeuschen.webp`, alt: "Holzhäuschen mit Balkon am Auwerk Camping" },
        features: ["Für 1–2 Personen", "Möbliert & winterfest", "Inkl. Betriebskosten"],
      },
    ],
  },

  aktivitaeten: {
    heading: "Rund um Hainfeld",
    intro:
      "Hainfeld liegt an der Grenze von Wienerwald, Mostviertel und Voralpen — Wandern, Baden und Ausflüge starten direkt vor der Tür.",
    items: [
      {
        title: "Wandern & Nordic Walking",
        text: "Wander- und Spazierwege entlang der Gölsen führen dich direkt vom Platz ins Grüne.",
        image: { src: `${IMG}/wandern.webp`, alt: "Spazierweg entlang der Gölsen bei Hainfeld" },
      },
      {
        title: "Baden & Flusswandern",
        text: "Im Sommer locken Flusswanderungen und ein Sprung ins kühle Wasser der naturbelassenen Gölsen.",
        image: { src: `${IMG}/baden-fluss.webp`, alt: "Menschen in der flachen Gölsen beim Auwerk Camping" },
      },
      {
        title: "Ausflug zur Araburg",
        text: "Die Ruine Araburg und der Aussichtsturm Bergfried sind lohnende Ziele für kleine Wanderungen.",
        image: { src: `${IMG}/araburg.webp`, alt: "Ruine Araburg in den Wäldern bei Hainfeld" },
      },
    ],
  },

  anreise: {
    heading: "Dein Weg an die Gölsen",
    modes: [
      {
        title: "Mit dem Auto",
        text: "Von Wien über die A21 und die B18 ins Gölsental — in rund einer Stunde stehst du bei uns in Gölsen 39.",
      },
      {
        title: "Mit der Bahn",
        text: "Bahnhof Hainfeld, nur wenige Minuten vom Platz entfernt — der Rest ist ein kurzer Spaziergang.",
      },
    ],
  },

  galerie: {
    heading: "Auwerk in Bildern",
    headingEmphasis: "Auwerk",
    intro:
      "Fluss, Teich und alter Baumbestand — ein paar Eindrücke von unserem Naturparadies im Gölsental.",
    tag: "Ganzjährig geöffnet",
    moreCount: 20,
    images: [
      { src: `${IMG}/wasserkraft.webp`, alt: "Die wilde Gölsen beim Auwerk Camping" },
      { src: `${IMG}/holzhaus-terrasse.webp`, alt: "Überdachte Terrasse des Holzhäuschens am Auwerk Camping" },
      { src: `${IMG}/herbstweg.webp`, alt: "Sommerliche Bäume und Holzhütte am Auwerk Camping" },
    ],
  },

  booking: {
    heading: "Lust auf deinen Platz an der Gölsen?",
    headingEmphasis: "an der Gölsen",
    intro:
      "Sag uns, was du suchst — Stellplatz, Miet-Häuschen oder eigenes Mobilheim. Wir melden uns persönlich mit allen Details.",
    pricesArePlaceholder: false,
    priceNote:
      "Auwerk vermietet und verpachtet vor allem Parzellen und Häuschen — Holzhäuschen ab € 650 / Monat, Mobilheim-Pacht ab € 3.850 / Jahr. Tagespreise für Zelt und Wohnwagen auf Anfrage.",
    highlight: {
      title: "Schlüsselfertig",
      text: "Wir schließen dein Mobilheim oder Häuschen komplett an Wasser, Strom und Kanal an.",
    },
    categories: [
      { id: "stellplatz", label: "Stellplatz (Zelt / Wohnwagen)" },
      { id: "mobilheim", label: "Mobilheim-Parzelle" },
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
    {
      label: "Camping",
      href: "#camping",
      children: [
        { label: "Stellplätze", href: "#camping" },
        { label: "Lage", href: "#camping" },
      ],
    },
    { label: "Wohnen", href: "#mobilheime" },
    { label: "Aktiv", href: "#aktivitaeten" },
    {
      label: "Preise & Lage",
      href: "#booking",
      children: [
        { label: "Preise", href: "#booking" },
        { label: "Anreise", href: "#anreise" },
      ],
    },
  ],
};

export default auwerkCamping;
