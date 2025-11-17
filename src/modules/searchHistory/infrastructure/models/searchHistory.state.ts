import { SearchHistory } from "../../domain/entities";

export interface SearchHistoryState extends SearchHistory {
  _hasHydrated: boolean;
}