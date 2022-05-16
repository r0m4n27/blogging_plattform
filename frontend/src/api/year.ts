export interface Year {
  value: number;
  articleCount: number;
}

const mockYears: Year[] = [
  {
    value: 2022,
    articleCount: 1,
  },
  {
    value: 2021,
    articleCount: 15,
  },
  {
    value: 2020,
    articleCount: 15,
  },
  {
    value: 2019,
    articleCount: 15,
  },
  {
    value: 2018,
    articleCount: 15,
  },
  {
    value: 2017,
    articleCount: 15,
  },
];

export const fetchYears = async (): Promise<Year[]> => {
  return mockYears;
};
