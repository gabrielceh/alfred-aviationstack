import { SearchHistoryRepository } from "../../domain/repositories";

export class DeleteFromSearchHistoryUsecase {
  private repository: SearchHistoryRepository;

  constructor(repository: SearchHistoryRepository) {
    this.repository = repository;
  }

  async execute(item: string): Promise<void> {
    return this.repository.deleteFromHistory(item);
  }
}