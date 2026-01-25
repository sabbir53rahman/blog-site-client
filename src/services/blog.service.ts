import { env } from "@/env";

const API_URL = env.API_URL;

interface GetBlogsParams {
  isFeatured?: boolean;
  search?: string;
}

export const blogService = {
  getBlogPosts: async function (params?: GetBlogsParams) {
    try {
      const url = new URL(`${API_URL}/posts`);
      const res = await fetch(url.toString(), { next: { revalidate: 20 } });

      const data = await res.json();
      return { data: data, error: null };
    } catch (err) {
      return {
        data: null,
        error: {
          message: "Something went wrong",
        },
      };
    }
  },
};
