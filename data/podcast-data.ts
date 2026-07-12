// Díly podcastu Beroun tobě — zdroj pravdy pro stránku /podcast.

export interface PodcastEpisode {
  id: string;
  number: number;
  title: string;
  description: string;
  src: string;
  spotifyUrl?: string;
  chapterLabel?: string;
  chapterHref?: string;
}

export const PODCAST_SHOW_URL =
  "https://open.spotify.com/show/5IJyRDm6FBcBa0trvk1FE3?si=2697036db0bf4231";

// Řazeno od prvního dílu.
export const PODCAST_EPISODES: PodcastEpisode[] = [
  {
    id: "uvod",
    number: 1,
    title: "Úvodní díl: Beroun může fungovat lépe",
    description:
      "Proč vstoupila do komunální politiky? Jakou vizi má pro Beroun? Odpovídá berounská zastupitelka a kandidátka na starostku Barbora Skálová, která už deset let bojuje za vodovod v Hostímě.",
    src: "/01-barbora-v2.mp3",
    spotifyUrl: "https://open.spotify.com/episode/5nNgcNxTmpbH98XXSIYkyJ?si=5301e6d37c1449ca",
    chapterLabel: "Volební program",
    chapterHref: "/program",
  },
  {
    id: "sidliste",
    number: 2,
    title: "Sídliště zpět v centru pozornosti",
    description:
      "Co by se dalo vylepšit na prostranství u Hvězdy na berounském koupališti? Je parkování na sídlišti neřešitelný problém? A kam se obyvatelé sídliště (ne)dostanou veřejnou dopravou?",
    src: "/Sidliste-final-upraveny.mp3",
    spotifyUrl: "https://open.spotify.com/episode/2OOGPGN4I7pUy4q0TSfmbm?si=255811dc3e12476d",
    chapterLabel: "Beroun zeleně",
    chapterHref: "/program#zelene",
  },
];
