import { apiUrl } from "@/constants/enviroment.constant";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const getMovieDetails = async (id: string) => {
  const response = await axios.get(`${apiUrl}/movies/${id}`);
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
