import React from "react";
import {
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useCart } from "../../contexts/CartContext";
import { Product } from "../../utils/types";
import { Ionicons, Feather, FontAwesome5 } from "@expo/vector-icons";
import * as Haptics from "expo-haptics";
import { useNavigation } from "@react-navigation/native";

export default function CartScreen() {
  const navigation = useNavigation();

  const { getCartData, addProductToCart, removeProductFromCart } = useCart();

  const cartData: any = getCartData();

  function Product({ product }: { product: Product }) {
    return (
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          marginTop: 20,
          marginRight: 10,
          backgroundColor: "#333",
          width: "100%",
          borderRadius: 10,
        }}
      >
        <View
          style={{
            width: 120,
            padding: 10,
            borderBottomLeftRadius: 10,
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
              height: 80,
              width: "100%",
            }}
          />
        </View>
        <View
          style={{
            paddingRight: 20,
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <View
            style={{
              width: 140,
              paddingVertical: 15,
              paddingHorizontal: 20,
            }}
          >
            <Text
              style={{
                fontSize: 13,
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
          </View>
          <View
            style={{
              borderRadius: 5,
              backgroundColor: "#333",
              padding: 5,
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <TouchableOpacity
              onPress={() => {
                Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
                removeProductFromCart(product.id);
              }}
            >
              <Feather name="minus" color="#FFF" size={18} />
            </TouchableOpacity>
            <Text
              style={{
                marginHorizontal: 15,
                color: "#FFF",
                fontFamily: "Poppins_400Regular",
              }}
            >
              {product.quantidade}
            </Text>
            <TouchableOpacity
              onPress={() => {
                Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);
                addProductToCart(product);
              }}
            >
              <Feather name="plus" color="#FFF" size={18} />
            </TouchableOpacity>
          </View>
        </View>
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
        <View
          style={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <View
            style={{
              paddingHorizontal: 20,
            }}
          >
            <View
              style={{
                paddingBottom: 10,
              }}
            >
              <Text
                style={{
                  color: "#FFF",
                  fontSize: 24,
                }}
              >
                Carrinho
              </Text>
              {cartData && cartData.products && cartData.products.length > 0 ? (
                <Text
                  style={{
                    color: "#AAA",
                    fontSize: 16,
                  }}
                >
                  {cartData && cartData.products && cartData.products.length}{" "}
                  item no seu carrinho
                </Text>
              ) : (
                <Text
                  style={{
                    color: "#AAA",
                    fontSize: 16,
                  }}
                >
                  Ainda não possui items no seu carrinho
                </Text>
              )}
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
              {cartData &&
                cartData.products &&
                cartData.products.map((product: Product, i: number) => {
                  return <Product product={product} key={i} />;
                })}
              <View
                style={{
                  height: 80,
                }}
              />
            </ScrollView>
          </View>
          <View
            style={{
              padding: 20,
            }}
          >
            {cartData && cartData.products && cartData.products.length > 0 ? (
              <TouchableOpacity
                onPress={() => {
                  Haptics.notificationAsync(
                    Haptics.NotificationFeedbackType.Error
                  );
                }}
                style={{
                  height: 45,
                  width: "100%",
                  borderRadius: 10,
                  backgroundColor: "#333",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text
                  style={{
                    color: "#FFF",
                    fontFamily: "Poppins_400Regular",
                  }}
                >
                  Finalizar compra
                </Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                onPress={() => {
                  Haptics.notificationAsync(
                    Haptics.NotificationFeedbackType.Error
                  );
                  navigation.navigate("Home" as never);
                }}
                style={{
                  height: 45,
                  width: "100%",
                  borderRadius: 10,
                  backgroundColor: "#333",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text
                  style={{
                    color: "#FFF",
                    fontFamily: "Poppins_400Regular",
                  }}
                >
                  Adicionar items ao carrinho
                </Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
}
