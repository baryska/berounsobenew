// Díly podcastu Beroun tobě — zdroj pravdy pro stránku /podcast.

export interface PodcastEpisode {
  id: string;
  number: number;
  title: string;
  description: string;
  speakers: string[];
  src: string;
  spotifyUrl?: string;
  appleUrl?: string;
  youtubeUrl?: string;
  chapterLabel?: string;
  chapterHref?: string;
}

export const PODCAST_SHOW_URL =
  "https://open.spotify.com/show/5IJyRDm6FBcBa0trvk1FE3?si=2697036db0bf4231";

export const PODCAST_APPLE_SHOW_URL =
  "https://podcasts.apple.com/cz/podcast/beroun-tob%C4%9B/id6792550119";

export const PODCAST_YOUTUBE_SHOW_URL = "https://www.youtube.com/@Berountob%C4%9B";

// Řazeno od prvního dílu.
export const PODCAST_EPISODES: PodcastEpisode[] = [
  {
    id: "uvod",
    number: 1,
    title: "Úvodní díl: Beroun může fungovat lépe",
    description:
      "Proč vstoupila do komunální politiky? Jakou vizi má pro Beroun? Odpovídá berounská zastupitelka a kandidátka na starostku Barbora Skálová, která už deset let bojuje za vodovod v Hostímě.",
    speakers: ["Barbora Skálová"],
    src: "/01-barbora-v2.mp3",
    spotifyUrl: "https://open.spotify.com/episode/5nNgcNxTmpbH98XXSIYkyJ?si=5301e6d37c1449ca",
    appleUrl:
      "https://podcasts.apple.com/cz/podcast/beroun-m%C5%AF%C5%BEe-fungovat-l%C3%A9pe/id6792550119?i=1000777456723",
    youtubeUrl: "https://youtu.be/k0cYTKJ6FGY?si=Kd0tjCn8wJvvSByN",
    chapterLabel: "Volební program",
    chapterHref: "/program",
  },
  {
    id: "sidliste",
    number: 2,
    title: "Sídliště zpět v centru pozornosti",
    description:
      "Co by se dalo vylepšit na prostranství u Hvězdy na berounském koupališti? Je parkování na sídlišti neřešitelný problém? A kam se obyvatelé sídliště (ne)dostanou veřejnou dopravou?",
    speakers: ["Kristýna Kymličková", "Tomáš Procházka"],
    src: "/Sidliste-final-upraveny.mp3",
    spotifyUrl: "https://open.spotify.com/episode/2OOGPGN4I7pUy4q0TSfmbm?si=255811dc3e12476d",
    appleUrl:
      "https://podcasts.apple.com/cz/podcast/s%C3%ADdli%C5%A1t%C4%9B-zp%C4%9Bt-v-centru-pozornosti/id6792550119?i=1000777456722",
    youtubeUrl: "https://www.youtube.com/watch?v=bRDx32XTVmg",
    chapterLabel: "Beroun zeleně",
    chapterHref: "/program#zelene",
  },
  {
    id: "mhd",
    number: 3,
    title: "Smysluplná veřejná doprava",
    description:
      "Jak ovlivní přidání expresních spojů do Prahy a lepší spojení s nádražím dopravu v Berouně? Proč chceme v Berouně zavést PID Haló? A co je to tzv. berounský tarif?",
    speakers: ["Tomáš Procházka"],
    src: "/MHD.mp3",
    spotifyUrl: "https://open.spotify.com/episode/7ETgf0neSd2wYYhlI7iayw?si=2d530d4c1f2742e9",
    appleUrl:
      "https://podcasts.apple.com/cz/podcast/smyslupln%C3%A1-ve%C5%99ejn%C3%A1-doprava/id6792550119?i=1000777456821",
    youtubeUrl: "https://www.youtube.com/watch?v=zfrcygrNyjo",
    chapterLabel: "Beroun dostupně",
    chapterHref: "/program#dostupne",
  },
  {
    id: "verejny-prostor",
    number: 4,
    title: "Veřejný prostor pro lidi, s úctou k přírodě",
    description:
      "Jak chceme oživit berounskou náplavku a proč nejde jen o lavičky? Co je potřeba udělat, aby se Městská hora konečně stala centrálním parkem Berouna? A jak zpříjemníme cestu od nádraží, aby se na ní lidé cítili bezpečně?",
    speakers: ["Václav Kovář", "Martin Veselý"],
    src: "/Verejny-prostor-final.mp3",
    spotifyUrl: "https://open.spotify.com/episode/1dbZjIrtYOk3YVv9m8xKz3?si=215625e870294097",
    appleUrl:
      "https://podcasts.apple.com/cz/podcast/ve%C5%99ejn%C3%BD-prostor-pro-lidi-s-%C3%BActou-k-p%C5%99%C3%ADrod%C4%9B/id6792550119?i=1000777825732",
    youtubeUrl: "https://www.youtube.com/watch?v=e38rUGDDufQ&t=1s",
    chapterLabel: "Beroun zeleně",
    chapterHref: "/program#zelene",
  },
  {
    id: "otevrena-radnice",
    number: 5,
    title: "Otevřená radnice",
    description:
      "Proč chceme, aby se o důležitých rozhodnutích diskutovalo s lidmi už před zahájením projektů? Jak chceme dostat radnici blíž k mladým lidem? A co uděláme pro to, aby radnice komunikovala srozumitelně a včas?",
    speakers: ["Barbora Skálová", "Václav Kovář"],
    src: "/Otevrena-radnice-final.mp3",
    spotifyUrl: "https://open.spotify.com/episode/0tWShHXewfJU29ilFhT4VU?si=03425832eabd4a76",
    appleUrl:
      "https://podcasts.apple.com/cz/podcast/radnice-jako-partner-se-kter%C3%BDm-si-rozum%C3%ADte/id6792550119?i=1000778815250",
    youtubeUrl: "https://youtu.be/IYY0CmvQHbI?si=dZ6OyZ9A4o1uj9eT",
    chapterLabel: "Beroun otevřeně",
    chapterHref: "/program#transparentne",
  },
];
