import { Flex } from "@chakra-ui/core";
import { PoemCard, PoemCardProps } from "../components/Common/PoemCard";
import { LayoutWrapper } from "../components/LayoutWrapper";
import Sidebar from "../components/Sidebar";

const poems: PoemCardProps[] = [
  {
    title: "Poem1",
    content: `fgtfvdcsfgb
    sdfgfd
    dfgbvcdxdcfvgf
    fvgvfcx
    fghfcdfvgbhgvc
    vgbvfcdvb
    cvbvcvbnhbgvfcgbhnbf
    dxcfghgvcvbnbvcxvbnbvcvbnbv`,
    authorName: "Mari Barbu",
    id: "123456789098765432345",
  },
  {
    title: "Poem1",
    content: `fgtfvdcsfgb
    sdfgfd
    dfgbvcdxdcfvgf
    fvgvfcx
    fghfcdfvgbhgvc
    vgbvfcdvb
    cvbvcvbnhbgvfcgbhnbf
    dxcfghgvcvbnbvcxvbnbvcvbnbv`,
    authorName: "Mari Barbu",
    id: "123456789098765432345",
  },
  {
    title: "Poem1",
    content: `fgtfvdcsfgb
    sdfgfd
    dfgbvcdxdcfvgf
    fvgvfcx
    fghfcdfvgbhgvc
    vgbvfcdvb
    cvbvcvbnhbgvfcgbhnbf
    dxcfghgvcvbnbvcxvbnbvcvbnbv`,
    authorName: "Mari Barbu",
    id: "123456789098765432345",
  },
  {
    title: "Poem1",
    content: `fgtfvdcsfgb
    sdfgfd
    dfgbvcdxdcfvgf
    fvgvfcx
    fghfcdfvgbhgvc
    vgbvfcdvb
    cvbvcvbnhbgvfcgbhnbf
    dxcfghgvcvbnbvcxvbnbvcvbnbv`,
    authorName: "Mari Barbu",
    id: "123456789098765432345",
  },
  {
    title: "Poem1",
    content: `fgtfvdcsfgb
    sdfgfd
    dfgbvcdxdcfvgf
    fvgvfcx
    fghfcdfvgbhgvc
    vgbvfcdvb
    cvbvcvbnhbgvfcgbhnbf
    dxcfghgvcvbnbvcxvbnbvcvbnbv`,
    authorName: "Mari Barbu",
    id: "123456789098765432345",
  },
  {
    title: "Poem1",
    content: `fgtfvdcsfgb
    sdfgfd
    dfgbvcdxdcfvgf
    fvgvfcx
    fghfcdfvgbhgvc
    vgbvfcdvb
    cvbvcvbnhbgvfcgbhnbf
    dxcfghgvcvbnbvcxvbnbvcvbnbv`,
    authorName: "Mari Barbu",
    id: "123456789098765432345",
  },
  {
    title: "Poem1",
    content: `fgtfvdcsfgb
    sdfgfd
    dfgbvcdxdcfvgf
    fvgvfcx
    fghfcdfvgbhgvc
    vgbvfcdvb
    cvbvcvbnhbgvfcgbhnbf
    dxcfghgvcvbnbvcxvbnbvcvbnbv`,
    authorName: "Mari Barbu",
    id: "123456789098765432345",
  },
  {
    title: "Poem1",
    content: `fgtfvdcsfgb
    sdfgfd
    dfgbvcdxdcfvgf
    fvgvfcx
    fghfcdfvgbhgvc
    vgbvfcdvb
    cvbvcvbnhbgvfcgbhnbf
    dxcfghgvcvbnbvcxvbnbvcvbnbv`,
    authorName: "Mari Barbu",
    id: "123456789098765432345",
  },
  {
    title: "Poem1",
    content: `fgtfvdcsfgb
    sdfgfd
    dfgbvcdxdcfvgf
    fvgvfcx
    fghfcdfvgbhgvc
    vgbvfcdvb
    cvbvcvbnhbgvfcgbhnbf
    dxcfghgvcvbnbvcxvbnbvcvbnbv`,
    authorName: "Mari Barbu",
    id: "123456789098765432345",
  },
];

export default function Home() {
  return (
    <LayoutWrapper>
      <Flex flexWrap="wrap" flex={1} overflow={"auto"}>
        {poems.map((poem, key) => (
          <PoemCard key={key} {...poem}></PoemCard>
        ))}
      </Flex>
    </LayoutWrapper>
  );
}
