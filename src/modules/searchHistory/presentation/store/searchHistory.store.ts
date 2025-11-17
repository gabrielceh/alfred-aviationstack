import { create } from "zustand";
import { persist } from "zustand/middleware";
import { SearchHistoryState } from "./searchHistory.state";
import { SearchHistoryActions } from "./searchHistory.actions";


export const useSearchHistoryStore = create<SearchHistoryState & SearchHistoryActions>()(
  persist((set, get)=>({
    items:[],
    limit: 10,
    _hasHydrated: false,

    addItem: (item) => {
      const {items: oldItems} = get();
      if(oldItems.includes(item)) return ;

      const newItems = [...oldItems];
      if(oldItems.length >= 10){
        newItems.shift();
      };

      set({ items: [...newItems, item] });
    },

    deleteItems: (item) => {
      const {items: oldItems} = get();
      if(!oldItems.length || !oldItems.includes(item)) return;

      const newItems = oldItems.filter((i) => i !== item);
      set({ items: newItems });
    },

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



