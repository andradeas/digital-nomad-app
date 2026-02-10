import { PropsWithChildren } from "react";
import { KeyboardAvoidingView, Platform, ScrollView } from "react-native";
import { Box, BoxProps } from "./Box";

export function Screen({
  children,
  scrollable = false,
  ...boxProps
}: PropsWithChildren & BoxProps & { scrollable?: boolean }) {
  // const Container = scrollable ? ScrollView : View;
  const Container = scrollable ? ScrollView : Box;

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <Box
        flex={1}
        backgroundColor="background"
        paddingHorizontal="padding"
        {...boxProps}
      >
        <Container showsVerticalScrollIndicator={false}>{children}</Container>
      </Box>
    </KeyboardAvoidingView>
  );
}
