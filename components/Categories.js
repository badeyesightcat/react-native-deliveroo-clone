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
        imgUrl="https://images.unsplash.com/photo-1597699401474-e8714c1b7879?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title="food image testing"
      />
      <CategoryCard
        imgUrl="https://images.unsplash.com/photo-1597699401474-e8714c1b7879?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title="food image testing"
      />
      <CategoryCard
        imgUrl="https://images.unsplash.com/photo-1597699401474-e8714c1b7879?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title="food image testing"
      />
      <CategoryCard
        imgUrl="https://images.unsplash.com/photo-1597699401474-e8714c1b7879?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title="food image testing"
      />
      <CategoryCard
        imgUrl="https://images.unsplash.com/photo-1597699401474-e8714c1b7879?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title="food image testing"
      />
      <CategoryCard
        imgUrl="https://images.unsplash.com/photo-1597699401474-e8714c1b7879?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title="food image testing"
      />
    </ScrollView>
  );
};

export default Categories;
