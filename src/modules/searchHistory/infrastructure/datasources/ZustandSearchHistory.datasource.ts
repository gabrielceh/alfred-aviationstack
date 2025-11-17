import { create } from "zustand";
import { SearchHistoryActions, SearchHistoryState } from "../models";
import { persist } from "zustand/middleware";
import { SearchHistoryDatasource } from "../../domain/datasources";

const useSearchHistoryStore = create<SearchHistoryState & SearchHistoryActions>()(
  persist((set)=>({
    items:[],
    limit: 10,
    _hasHydrated: false,

    setItems: (items) => set({ items }),

    setHasHydrated: (value) => set({ _hasHydrated: value }),
  }),
  {
    name: "search-history",
    onRehydrateStorage: () => (state:(SearchHistoryState & SearchHistoryActions) | undefined) => {
      if(state){
        state.setHasHydrated(true);
      }
    }
  })
)


export class ZustandSearchHistoryDatasource implements SearchHistoryDatasource {
  
  async getHistory(): Promise<string[]> {
    return Promise.resolve(useSearchHistoryStore.getState().items);
  }

  async addToHistory(item: string): Promise<void> {
    useSearchHistoryStore.setState((state) => ({
      items: [...state.items, item],
    }));

    return Promise.resolve();
  }

  async deleteFromHistory(item: string): Promise<void> {
    useSearchHistoryStore.setState((state) => ({
      items: state.items.filter((i) => i !== item),
    }));

    return Promise.resolve();
  }
}
