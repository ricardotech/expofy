import React, { useEffect } from "react";
import {
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import * as Haptics from "expo-haptics";
import Toast from "react-native-toast-message";

import { Ionicons, Feather, FontAwesome5 } from "@expo/vector-icons";
import { fetchProducts, useCart } from "../../contexts/CartContext";
import { HorizontalScroll } from "../../components/Listing";
import { Product } from "../../utils/types";

export default function Home() {
  const { addProductToCart } = useCart();

  const products = fetchProducts();

  const [searchTerm, setSearchTerm] = React.useState<string>("");
  const [searchResults, setSearchResults] = React.useState<Product[]>();

  const handleSearchTerm = (term: string): void => {
    const uniqueProductIds = new Set<number>();

    products.forEach((product) => {
      if (
        product.produto.includes(term) ||
        product.descricao.includes(term) ||
        product.marca.includes(term)
      ) {
        uniqueProductIds.add(product.id);
      }
    });

    const results: Product[] = [];

    Array.from(uniqueProductIds).forEach((productId) => {
      const product = products.find((p) => p.id === productId);
      if (product) {
        results.push(product);
      }
    });

    setSearchResults(results);
  };

  useEffect(() => {
    try {
      handleSearchTerm(searchTerm);
    } catch (error) {
      console.log(error);
    }
  }, [searchTerm]);

  function Header() {
    return (
      <View
        style={{
          paddingHorizontal: 20,
          paddingBottom: 20,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Feather name="github" color="#AAA" size={36} />
        <View style={{ marginLeft: 10 }}>
          <Text
            style={{
              color: "#FFF",
              fontSize: 24,
            }}
          >
            @ricardofsdomene/expofy
          </Text>
          <Text
            style={{
              color: "#AAA",
              fontSize: 16,
            }}
          >
            Disponível no Github ☝️
          </Text>
        </View>
      </View>
    );
  }

  function Navigator() {
    function NavigatorHref({ name = "" }) {
      return (
        <View
          style={{
            marginRight: 6,
            borderRadius: 20,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#555",
            paddingHorizontal: 20,
            paddingVertical: 10,
          }}
        >
          <Ionicons
            name={name === "Favoritos" ? "heart" : "pricetag"}
            color="#FFF"
            size={14}
          />
          <Text
            style={{
              marginLeft: 5,
              color: "#FFF",
              fontSize: 14,
            }}
          >
            {name}
          </Text>
        </View>
      );
    }

    return (
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          paddingHorizontal: 20,
        }}
      >
        <NavigatorHref name="Favoritos" />
        <NavigatorHref name="Promoção" />
      </View>
    );
  }

  function Display({
    label = "",
    size = "sm",
    data = [],
  }: {
    data: Product[];
    label: string;
    size: "sm" | "md" | "lg";
  }) {
    function Product({ product }: { product: Product }) {
      return (
        <View
          style={{
            marginRight: 10,
            backgroundColor: "#333",
            width: size === "lg" ? 170 : size === "md" ? 160 : 130,
            borderRadius: 10,
          }}
        >
          <View
            style={{
              padding: 10,
              borderTopRightRadius: 10,
              borderTopLeftRadius: 10,
              backgroundColor: "#FFF",
            }}
          >
            <Image
              resizeMode="contain"
              source={{
                uri: product.img,
              }}
              style={{
                height: size === "lg" ? 130 : size === "md" ? 80 : 80,
                width: "100%",
              }}
            />
          </View>
          <View
            style={{
              paddingVertical: 15,
              paddingHorizontal: 20,
            }}
          >
            <Text
              style={{
                fontSize: 14,
                color: "#FFF",
                fontFamily: "Poppins_400Regular",
              }}
            >
              {product.produto}
            </Text>
            <Text
              style={{
                fontSize: 12,
                color: "#999",
                fontFamily: "Poppins_400Regular",
              }}
            >
              {product.marca}
            </Text>
            <View
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  marginTop: 5,
                  fontSize: 14,
                  color: "#FFF",
                  fontFamily: "Poppins_700Bold",
                }}
              >
                {product.preco.toLocaleString("pt-br", {
                  style: "currency",
                  currency: "BRL",
                })}
              </Text>
              <TouchableOpacity
                onPress={() => {
                  Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);
                  addProductToCart(product);
                  Toast.show({
                    type: "success",
                    text1: "Boa escolha!",
                    text2: `${product.produto} adicionado ao carrinho`,
                  });
                  if (label === "Resultados") {
                    setSearchTerm("");
                  }
                }}
                style={{
                  backgroundColor: "#202123",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: 30,
                  width: 30,
                  borderRadius: 30,
                }}
              >
                <Ionicons
                  name="add"
                  color="#FFF"
                  size={18}
                  style={{
                    marginLeft: 2,
                  }}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      );
    }

    return (
      <View>
        <Text
          style={{
            margin: 20,
            marginBottom: 10,
            color: "#FFF",
            fontSize: 22,
            fontFamily: "Poppins_700Bold",
          }}
        >
          {label}
        </Text>
        <HorizontalScroll>
          {size === "lg" &&
            data.map((product, i) => {
              if (i < 4) {
                return <Product product={product} key={i} />;
              }
            })}
          {size === "md" &&
            data.map((product, i) => {
              if (i >= 4) {
                return <Product product={product} key={i} />;
              }
            })}
        </HorizontalScroll>
      </View>
    );
  }

  return (
    <View
      style={{
        height: "100%",
        width: "100%",
        backgroundColor: "#202123",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <SafeAreaView>
        <Header />
        <ScrollView>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              paddingHorizontal: 20,
              width: "100%",
            }}
          >
            <View
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                backgroundColor: "#333",
                padding: 10,
                borderRadius: 20,
                height: 40,
              }}
            >
              <Feather name="search" color="#EEE" size={20} />
              <TextInput
                value={searchTerm}
                onChangeText={(text) => setSearchTerm(text)}
                placeholderTextColor="#EEE"
                style={{
                  marginLeft: 10,
                  color: "#EEE",
                  fontFamily: "Poppins_400Regular",
                }}
                placeholder="Search"
              />
            </View>
          </View>
          {/* <Navigator /> */}
        </ScrollView>
        {searchTerm.length > 0 && (
          <View>
            <Display
              data={searchResults ? searchResults : []}
              label="Resultados"
              size="lg"
            />
          </View>
        )}
        {searchTerm.length === 0 && (
          <View>
            <Display data={products} label="Recomendados" size="lg" />
            <Display data={products} label="Mais buscados" size="md" />
          </View>
        )}
      </SafeAreaView>
      <Toast bottomOffset={10} position="bottom" visibilityTime={1000} />
    </View>
  );
}
