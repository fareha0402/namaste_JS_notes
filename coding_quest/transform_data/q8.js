const items = [
  { id: 1, info: { score: 90 } },
  { id: 2, info: { score: 70 } },
];
// Sort by `info.score` ascending

items.sort((a,b) => a.info.score - b.info.score)