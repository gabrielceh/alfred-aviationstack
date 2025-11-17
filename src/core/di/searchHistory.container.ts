import { AddToSearchHistoryUsecase, DeleteFromSearchHistoryUsecase, GetSearchHistoryUsecase } from "@/modules/searchHistory/application/usecases";
import { ZustandSearchHistoryDatasource } from "@/modules/searchHistory/infrastructure/datasources";
import { SearchHistoryRepositoryImpl } from "@/modules/searchHistory/infrastructure/repositories";

const searchHistoryDatasource = new ZustandSearchHistoryDatasource();

const searchHistoryRepository = new SearchHistoryRepositoryImpl(searchHistoryDatasource);

const getSearchHistoryUseCase = new GetSearchHistoryUsecase(searchHistoryRepository);
const addToSearchHistoryUseCase = new AddToSearchHistoryUsecase(searchHistoryRepository);
const deleteFromSearchHistoryUseCase = new DeleteFromSearchHistoryUsecase(searchHistoryRepository);

export const searchHistoryContainer = {
  usecases:{
    getSearchHistoryUseCase,
    addToSearchHistoryUseCase,
    deleteFromSearchHistoryUseCase,
  },
  datasources:{
    searchHistoryDatasource,
  },
  repositories:{
    searchHistoryRepository,
  }
} as const;