import styled from "styled-components/native";

export const HorizontalScroll = styled.ScrollView.attrs(() => ({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: {
    paddingLeft: 20,
    paddingRight: 20,
  },
}))``;
