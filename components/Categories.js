import { ScrollView, Text } from "react-native";
import React from "react";
import CategoryCard from "./CategoryCard";

const Categories = () => {
  return (
    <ScrollView
      horizontal
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
      }}
      showsHorizontalScrollIndicator={false}
    >
      {/* Category card */}
      <CategoryCard
        imgUrl="https://axwwgrkdco.cloudimg.io/v7/__gmpics__/16408276d3cc4f87a8520b67abfd8792?"
        title="food image testing"
      />
      <CategoryCard
        imgUrl="https://axwwgrkdco.cloudimg.io/v7/__gmpics__/16408276d3cc4f87a8520b67abfd8792?"
        title="food image testing"
      />
      <CategoryCard
        imgUrl="https://axwwgrkdco.cloudimg.io/v7/__gmpics__/16408276d3cc4f87a8520b67abfd8792?"
        title="food image testing"
      />
      <CategoryCard
        imgUrl="https://axwwgrkdco.cloudimg.io/v7/__gmpics__/16408276d3cc4f87a8520b67abfd8792?"
        title="food image testing"
      />
      <CategoryCard
        imgUrl="https://axwwgrkdco.cloudimg.io/v7/__gmpics__/16408276d3cc4f87a8520b67abfd8792?"
        title="food image testing"
      />
      <CategoryCard
        imgUrl="https://axwwgrkdco.cloudimg.io/v7/__gmpics__/16408276d3cc4f87a8520b67abfd8792?"
        title="food image testing"
      />
    </ScrollView>
  );
};

export default Categories;
