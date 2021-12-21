import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { PoemCardProps } from "../Common/PoemCard";

export const usePoem = () => {
  const [data, setData] = useState<Partial<PoemCardProps>>({});
  const { query } = useRouter();
  const id = query.poemId as string;
  const getData = () => {
    try {
      // const res =
      setData({
        title: "Marcel e prost",
        content: `jbfjhbdsbdfbgfdsasdfghjgfdsdfghjkjhgfdsdfghjkjhgfds
    hnbdjbjsdfghgfdsdfghgfdfhbgfdfh
    ncjhjdkhfbhvjdbsclksdnlcds
    knhkjdbhfjkcvbvkjsbckvfdbvxcfvghjjhgvfcx
    jdbcjdbcjd
    ndjbcjdbvkdsnckdfnb
    dfjkhsjak;kdfhjdksla;
    sdkvjkcdlsakdjhcdkslasdjhcbxnkdlsdcjvhbdskl
    jbvkdsldjhvckdlscbhxnjmk
    kmdl,sa
    vncms
    jnsnjcv
    hbcjndcvh
    hcjsdcbvhcnjk
    hbvcjnscvbcnjks
    jnjmk,l`,
        authorName: "Marcel Marcel",
        id: id,
      });
    } catch (e) {
      console.log;
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return { data };
};
