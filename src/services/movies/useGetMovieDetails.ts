import { apiClient } from "@/configs/axios";
import { useQuery } from "@tanstack/react-query";
import type { IMovie } from "@/types/movie";

export const getMovieDetails = async (id: string): Promise<IMovie> => {
  const response = await apiClient.get<IMovie>(`/movies/${id}`);
  return response.data;
};

export const useGetMovieDetails = (id: string) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["movieDetails", id],
    queryFn: () => getMovieDetails(id),
    enabled: !!id,
  });

  return {
    MovieDetails: data,
    isLoadingMovieDetails: isLoading,
    error,
  };
};
