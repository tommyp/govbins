export interface Bin {
  slug: string;
  data: {
    title: string;
    councilName: string;
    collectionDate: string;
    contributorHandle?: string;
    contributorURL?: string;
  };
  collection: 'bins';
}
