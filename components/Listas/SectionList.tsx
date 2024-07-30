import { Text, View, SectionList } from "react-native";
import { Item } from "./Item";

type Data = {
  title: string;
  data: string[];
};

const DATA: Data[] = [
  {
    title: "Main dishes",
    data: ["Pizza", "Burger", "Risotto"],
  },
  {
    title: "Sides",
    data: ["French Fries", "Onion Rings"],
  },
  {
    title: "Drinks",
    data: ["Water", "Coke", "Beer"],
  },
  {
    title: "Desserts",
    data: ["Cheese Cake", "Ice Cream"],
  },
];

type SectionHeaderProps = {
  section: Data;
};

const SectionHeader = ({ section }: SectionHeaderProps) => (
  <Text style={{ fontSize: 32, backgroundColor: "#fff" }}>{section.title}</Text>
);

export const SectionListExample = () => (
  <View
    style={{
      flex: 1,
      marginHorizontal: 16,
    }}
  >
    <SectionList
      sections={DATA}
      keyExtractor={(item, index) => item + index}
      renderItem={({ item }) => <Item title={item} />}
      renderSectionHeader={({ section }) => <SectionHeader section={section} />}
    />
  </View>
);
