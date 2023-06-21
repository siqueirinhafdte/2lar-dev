import { Listing } from './listing';

export interface BestPlace {
  page: {
    current: number;
    total_pages: number;
    total_results: number;
    size: number;
  };
  listings: Listing[];
}
