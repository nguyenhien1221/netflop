import axios from "axios";
import { apiUrl } from "@/constants/enviroment.constant";
import { useQuery } from "@tanstack/react-query";
import type { IMovie } from "@/types/movie";
import type { IPaginatedResponse } from "@/types/pagination.types";

export interface GetMoviesParams {
  category?: string;
  page: number;
  limit: number;
}

export const getMovies = async ({
  category,
  page,
  limit,
}: GetMoviesParams): Promise<IPaginatedResponse<IMovie>> => {
  const response = await axios.get<IPaginatedResponse<IMovie>>(
    `${apiUrl}/movies`,
    {
      params: {
        page,
        limit,
        category,
      },
    },
  );
  return response.data;
};

export const useGetMovies = ({ category, page, limit }: GetMoviesParams) => {
  const { data, isLoading, error } = useQuery<IPaginatedResponse<IMovie>>({
    queryKey: ["movies", category, page, limit],
    queryFn: () => getMovies({ category, page, limit }),
  });

  return {
    Movies: data?.data ?? [],
    pagination: data
      ? {
          total: data.total,
          page: data.page,
          limit: data.limit,
          totalPages: data.totalPages,
        }
      : undefined,
    isLoadingMovies: isLoading,
    error,
  };
};
