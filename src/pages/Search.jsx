import style from "../styles/Search.module.css";

export const Search = () => {
  const cards = [
    {
      image: "https://i.scdn.co/image/567158eb895ad26718a814345af0fc43ee785ec5",
      name: "Podcasts",
    },
    {
      image: "https://t.scdn.co/images/ea364e99656e46a096ea1df50f581efe",
      name: "Made for you",
    },
    {
      image:
        "https://charts-images.scdn.co/assets/locale_en/regional/weekly/region_global_default.jpg",
      name: "Charts",
    },
    {
      image: "https://i.scdn.co/image/ab67706f000000027ea4d505212b9de1f72c5112",
      name: "New Realeses",
    },
    {
      image: "https://t.scdn.co/images/d0fb2ab104dc4846bdc56d72b0b0d785.jpeg",
      name: "Discover",
    },
    {
      image:
        "https://concerts.spotifycdn.com/images/live-events_category-image.jpg",
      name: "Live events",
    },
    {
      image:
        "https://t.scdn.co/media/derived/pop-274x274_447148649685019f5e2a03a39e78ba52_0_0_274_274.jpg",
      name: "Pop",
    },
    {
      image: "https://i.scdn.co/image/ab67706f0000000284a1ec26f589f0d569805a07",
      name: "EQUAL",
    },
    {
      image:
        "https://t.scdn.co/media/original/mood-274x274_976986a31ac8c49794cbdc7246fd5ad7_274x274.jpg",
      name: "Mood",
    },
    {
      image: "https://t.scdn.co/images/4c8b58ab42b54296ad5379514d36edac",
      name: "Decades",
    },
    {
      image:
        "https://t.scdn.co/media/original/hip-274_0a661854d61e29eace5fe63f73495e68_274x274.jpg",
      name: "Hip-Hop",
    },
    {
      image: "https://i.scdn.co/image/ab67706f00000002ffa215be1a4c64e3cbf59d1e",
      name: "In The Car",
    },
    {
      image: "https://i.scdn.co/image/ab67706f0000000221a2087747d946f16704b8af",
      name: "Gaming",
    },
    {
      image: "https://t.scdn.co/images/3710b68657574bc79df14bd74629e5ac",
      name: "Wellness",
    },
    {
      image: "https://i.scdn.co/image/ab67706f000000025f0ff9251e3cfe641160dc31",
      name: "League of legends",
    },
    {
      image: "https://i.scdn.co/image/ab67706f000000029249b35f23fb596b6f006a15",
      name: "Workout",
    },
    {
      image:
        "https://t.scdn.co/media/derived/chill-274x274_4c46374f007813dd10b37e8d8fd35b4b_0_0_274_274.jpg",
      name: "Chill",
    },
    {
      image: "https://i.scdn.co/image/ab67706f00000002e4eadd417a05b2546e866934",
      name: "Focus",
    },
    {
      image: "https://i.scdn.co/image/ab67706f00000002b70e0223f544b1faa2e95ed0",
      name: "Sleep",
    },
    {
      image: "https://t.scdn.co/images/fada056dcfd54cd28faf80d62b7059c6.jpeg",
      name: "Party",
    },
    {
      image: "https://t.scdn.co/images/fe06caf056474bc58862591cd60b57fc.jpeg",
      name: "Indie",
    },
    {
      image: "https://i.scdn.co/image/ab67706f0000000285704160b49125ac95099ec8",
      name: "Metal",
    },
    {
      image:
        "https://t.scdn.co/media/derived/rock_9ce79e0a4ef901bbd10494f5b855d3cc_0_0_274_274.jpg",
      name: "Rock",
    },
    {
      image:
        "https://t.scdn.co/media/derived/edm-274x274_0ef612604200a9c14995432994455a6d_0_0_274_274.jpg",
      name: "Dance/Electronic",
    },
    {
      image: "https://i.scdn.co/image/ab67706f000000025a051b0271d3e98edfdc4c09",
      name: "Cooking&Dinner",
    },
    {
      image: "https://t.scdn.co/images/568f37f1cab54136939d63bd1f59d40c",
      name: "Jazz",
    },
    {
      image: "https://i.scdn.co/image/ab67706f000000023c5a4aaf5df054a9beeb3d82",
      name: "R&B",
    },
    {
      image: "https://i.scdn.co/image/ab67706f000000028ed1a5002b96c2ea882541b2",
      name: "Instrumental",
    },
    {
      image: "https://i.scdn.co/image/ab67706f0000000213601d4833623a4d6b328e38",
      name: "Romance",
    },
    {
      image: "https://i.scdn.co/image/ab67706f000000026e1034ebd7b7c86546c6acca",
      name: "Soul",
    },
    {
      image: "https://t.scdn.co/images/15a38c44c4484cc3a078aaab5bd4e828",
      name: "Kids&Family",
    },
    {
      image: "https://i.scdn.co/image/ab67706f000000023e0130fcd5d106f1402b4707",
      name: "Classical",
    },
  ];

  return (
      <div className={style.header}>
        <div className={style.section}>
          {cards.map((card, index) => (
            <div>
              <h4>{card.name}</h4>
              <img
                style={{
                  width: "50px",
                  height: "50px",
                  borderRadius: "50%",
                }}
                src={card.image}
              />
            </div>
          ))}
        </div>
      </div>
  );
};
