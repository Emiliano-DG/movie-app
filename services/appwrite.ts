//seguimiento de las búsquedas realizadas por un usuario
import { Client, Databases, ID, Query } from "appwrite";

const DATABASE_ID = process.env.EXPO_PUBLIC_APPWRITE_DATABASE_ID!;
const TABLE_ID = process.env.EXPO_PUBLIC_APPWRITE_TABLE_ID!;

const client = new Client()
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject(process.env.EXPO_PUBLIC_APPWRITE_PROYECT_ID!);

const database = new Databases(client);

export const updateSearchCount = async (query: string, movie: Movie) => {
  try {
    const result = await database.listDocuments(DATABASE_ID, TABLE_ID, [
      Query.equal("searchTerm", query),
    ]);

    if (result.documents.length > 0) {
      const existingMovie = result.documents[0];

      await database.updateDocument(DATABASE_ID, TABLE_ID, existingMovie.$id, {
        count: existingMovie.count + 1,
      });
    } else {
      await database.createDocument(DATABASE_ID, TABLE_ID, ID.unique(), {
        searchTerm: query,
        movie_id: movie.id,
        count: 1,
        title: movie.title,
        poster_url: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
      });
    }
  } catch (error) {
    console.log(error);
    throw error;
  }

  //comprobar si hay un registro de esa busqueda almacenada
  // si se encuentra la busqueda aumentar count
  // si no se encuentra ninguna busqueda se crea el registro en appwrite
};
export const getTrendingMovies = async (): Promise<
  TrendingMovie[] | undefined
> => {
  try {
    const result = await database.listDocuments(DATABASE_ID, TABLE_ID, [
      Query.limit(5),
      Query.orderDesc("count"),
    ]);
    return result.documents as unknown as TrendingMovie[];
  } catch (error) {
    return undefined;
  }
};
