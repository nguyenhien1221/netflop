export interface IPaginationMeta {
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

export interface IPaginatedResponse<T> extends IPaginationMeta {
  data: T[];
}
