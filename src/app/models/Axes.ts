const titleDictionary: any = {
  bonus_t: 'Bonus',
  bonus_90: 'Bonus Points Per 90',
  bps_t: 'BPS',
  bps_90: 'BPS Per 90',
  price: 'Price(m)',
  minutes_t: 'Minutes Played',
  npxG_t: 'npxG',
  npxG_90: 'npxG per 90',
  xA_t: 'xA',
  xA_90: 'xA per 90',
  npxGxA_t: '(npxG + xA)',
  npxGxA_90: '(npxG + xA) per 90',
  points_t: 'Points',
  points_90: 'Points per 90',
  goals_t: 'Goals',
  goals_90: 'Goals per 90',
  assists_t: 'Assists',
  assists_90: 'Assists per 90',
  goals_assists_t: '(Goals + Assists)',
  goals_assists_90: '(Goals + Assists) per 90',
  tsb: 'Ownership %',
  shots_t: 'Shots',
  shots_90: 'Shots per 90',
  yellow_cards_t: 'Yellow Cards',
  yellow_cards_90: 'Yellow Cards per 90',
  red_cards_t: 'Red Cards',
  red_cards_90: 'Red Cards per 90',
  npg_difference_t: '(npg - npxG)',
  npg_t: 'np-Goals',
  npg_90: 'np-Goals per 90',
  xG_t: 'xG',
  xG_90: 'xG per 90',
  key_passes_t: 'Key Passes',
  key_passes_90: 'Key Passes per 90',
  xGBuildup_t: 'xG Build up',
  xGBuildup_90: 'xG Build up per 90',
  xGChain_t: 'xG Chain',
  xGChain_90: 'xG Chain per 90',
};

export const roundToNearestDictionary: any = {
  bonus_t: 10,
  bonus_90: 0.5,
  bps_t: 10,
  bps_90: 0.5,
  price: 0.5,
  minutes_t: 100,
  npxG_t: 0.1,
  npxG_90: 0.05,
  xA_t: 0.1,
  xA_90: 0.05,
  npxGxA_t: 0.1,
  npxGxA_90: 0.05,
  points_t: 5,
  points_90: 1,
  goals_t: 1,
  goals_90: 0.05,
  assists_t: 1,
  assists_90: 0.05,
  goals_assists_t: 1,
  goals_assists_90: 0.05,
  tsb: 5,
  shots_t: 5,
  shots_90: 1,
  yellow_cards_t: 1,
  yellow_cards_90: 0.05,
  red_cards_t: 1,
  red_cards_90: 0.05,
  npg_difference_t: 0.5,
  npg_t: 1,
  npg_90: 0.05,
  xG_t: 0.1,
  xG_90: 0.05,
  key_passes_t: 5,
  key_passes_90: 1,
  xGBuildup_t: 0.1,
  xGBuildup_90: 0.05,
  xGChain_t: 0.1,
  xGChain_90: 0.05,
};

export function getAxisTitle(axis: string): string {
  return titleDictionary[axis];
}

export function getAxisKeys(): string[] {
  return Object.keys(titleDictionary);
}

export function getAxisViewValueArray(): {
  value: string;
  viewValue: string;
}[] {
  let viewValueArr = [];
  for (let key of getAxisKeys()) {
    viewValueArr.push({ value: key, viewValue: titleDictionary[key] });
  }
  return viewValueArr;
}
