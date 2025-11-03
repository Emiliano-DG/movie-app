import { icons } from "@/constants/icons";
import { fetchMovieDetails } from "@/services/api";
import useFetch from "@/services/setFetch";
import { useLocalSearchParams } from "expo-router";
import React from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";

interface MovieInfoProps {
  label: string;
  value: string | number | null | undefined;
}

const MovieInfo = ({ label, value }: MovieInfoProps) => (
  <View className="flex-col items-start justify-center mt-5">
    <Text className="text-light-200 font-normal text-sm">{label}</Text>
    <Text className="text-light-100 font-bold text-sm mt-2">
      {value || "N/A"}
    </Text>
  </View>
);

const MovieDetails = () => {
  const { id } = useLocalSearchParams();
  // Aquí puedes usar el ID para obtener los detalles de la película desde una API o base de datos
  const { data: movie, loading } = useFetch(() =>
    fetchMovieDetails(id as string)
  );
  return (
    <View className="bg-primary flex-1">
      <ScrollView contentContainerStyle={{ paddingBottom: 80 }}>
        <View>
          <Image
            source={{
              uri: `https://image.tmdb.org/t/p/w500${movie?.poster_path}`,
            }}
            className="w-full h-[550px]"
            resizeMode="stretch"
          />
        </View>
        <View className="flex-col items-start justify-center mt-5 px-5">
          {/* Titulo de la película */}
          <Text className="text-white font-bold text-xl">{movie?.title}</Text>
          {/* Detalles de la película */}
          <View className="flex-row items-center gap-x-1 mt-2">
            {/* Fecha de estreno */}
            <Text className="text-light-200 text-sm">
              {movie?.release_date?.split("-")[0]}
            </Text>
            {/* Tiempo de duracion */}
            <Text className="text-light-200 text-sm">{movie?.runtime}min.</Text>
          </View>
          {/* Puntuacion */}
          <View className="bg-dark-100 px-2 py-1 rounded-md mt-2 gap-x-1 flex-row items-center">
            <Image source={icons.star} className="size-4" />
            <Text className="text-white text-sm font-bold">
              {Math.round(movie?.vote_average ?? 0)}/10
            </Text>
            <Text className="text-light-200 text-sm">
              ({movie?.vote_count} votess)
            </Text>
          </View>
          {/* Overview */}
          <MovieInfo label="Overview" value={movie?.overview} />
          {/* Genres */}
          <MovieInfo
            label="Genres"
            value={movie?.genres.map((g) => g.name).join(" - ") || "N/A"}
          />
        </View>
      </ScrollView>
      <TouchableOpacity>
        <Image source={icons.arrow} />
        <Text>Go back</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MovieDetails;
