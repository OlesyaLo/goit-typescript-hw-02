import axios from "axios";


const baseURL: string = "https://api.unsplash.com/";
const API_KEY: string = "4MoWKk3EwDxLdHu7iYFCl-M2_FKh17wjeWzz6Hg5kMU";

export type Image = {
  id: string;
  description: string | null;
  alt_description: string | null;
  urls: {
    raw: string;
    full: string;
    regular: string;
    small: string;
    thumb: string;
  };
}

// export interface ApiServiceType {
//   query: string;
//   page: number;
// }

type ReturnType = {
  results: Image[];
  total: number;
  total_pages: number;
};

interface ParamsType {
  client_id: string;
  query: string;
  per_page: number;
  page: number;
}

const fetchImagesWithData = async (
  query: string,
  page: number
): Promise<Image[]> => {
  try {
    const params: ParamsType = {
      query,
      client_id: API_KEY,
      page,
      per_page: 12,
    };

    const response = await axios.get<ReturnType>(`${baseURL}/search/photos`, {
      params,
    });

    return response.data.results;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      console.error("Error fetching articles:", error.message);
    } else {
      console.error("Error fetching articles:", error);
    }
    throw error;
  }
};

export default fetchImagesWithData;