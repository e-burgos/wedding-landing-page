import { useEffect, useState } from "react";
import { IPosts, FormatPost } from "../data/picturesSection";

export function useInstagraApi(
  url: string,
  options: boolean,
  intervalTime: number
) {
  const [state, setState] = useState<{
    data: null | IPosts[];
    response: null | any[];
    error: boolean;
    loading: boolean;
  }>({ data: null, error: false, loading: true, response: null });

  const header = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "26496942d1msh975fcb8f3965c14p19bfb9jsnce8c17126755",
      "X-RapidAPI-Host": "instagram47.p.rapidapi.com",
    },
  };

  const config = () => {
    if (options) return header;
    return {};
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setState((state) => ({
        data: state.data,
        response: state.response,
        error: false,
        loading: true,
      }));
      fetch(url, config())
        .then((data) => data.json())
        .then((newData) =>
          setState({
            data: newData.body.edge_hashtag_to_top_posts.edges,
            response: newData,
            error: false,
            loading: false,
          })
        )
        .catch(function (error) {
          console.log(error);
          setState({ data: null, response: null, error: true, loading: false });
        });
    }, intervalTime);
    return () => clearInterval(intervalId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url]);

  let formatData: FormatPost[] = [];
  if (state.data !== null) {
    for (let i = 0; i < state.data.length; i++) {
      const item = state.data[i];
      formatData.push({
        id: item.node.id,
        description: item.node.edge_media_to_caption.edges[0].node.text,
        link: `https://www.instagram.com/p/${item.node.shortcode}/`,
        image: item.node.thumbnail_src,
      });
    }
  }

  return {
    data: formatData,
    response: state.response,
    isError: state.error,
    isLoading: state.loading,
    dataSuccess: state.data !== null ? true : false,
  };
}
