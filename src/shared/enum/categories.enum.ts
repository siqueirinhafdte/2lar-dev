export const categoriesEnum = Object.freeze({
  HOUSES: 'houses',
  MANSIONS: 'mansions',
  INNS: 'inns',
  HOME_OFFICE: 'home_office',
  FLATS: 'flats',
  FARM: 'farm',
  LAKES: 'lakes',
  COUNTRYSIDE: 'countryside',
  FRONT_BEACH: 'front_beach',
  ISLAND: 'island',
  POOLS: 'pools',
  BEACHES: 'beaches'
});

export type TCategories = keyof typeof categoriesEnum;
