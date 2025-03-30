import React from "react";
import { View, Text, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import tw from "twrnc";
import Header from "../components/Header";
import AppText from "../components/AppText";


export const AboutUsScreen = () => {
  return (
    <SafeAreaView style={tw`flex flex-1`}>
      <Header title="Back" />
      <ScrollView style={tw`flex-1 bg-white p-4`}>
        <AppText style={tw`text-2xl font-bold mb-4`}>
          About LegalBoof: Review AI
        </AppText>

        <View style={tw`mb-6`}>
          <AppText style={tw`text-lg font-medium mb-3`}>What We Do</AppText>
          <AppText style={tw`text-base leading-6 mb-4`}>
            LegalBoof: Review AI is a powerful tool designed to simplify legal
            document analysis. Whether you’re reviewing contracts, agreements,
            or other legal texts, our app helps you identify key points,
            potential risks, and compliance issues with ease. Using advanced AI
            technology, we provide detailed summaries and insights to empower
            you in making informed decisions about your legal documents.
          </AppText>
        </View>

        <View style={tw`mb-6`}>
          <AppText style={tw`text-lg font-medium mb-3`}>Our Mission</AppText>
          <AppText style={tw`text-base leading-6 mb-4`}>
            Our mission is to make legal document review accessible, efficient,
            and reliable for everyone. We aim to bridge the gap between complex
            legal texts and actionable understanding, delivering a seamless
            experience that saves you time and reduces uncertainty.
          </AppText>
        </View>

        <View style={tw`mb-6`}>
          <AppText style={tw`text-lg font-medium mb-3`}>Contact Us</AppText>
          <AppText style={tw`text-base leading-6`}>
            Have questions or suggestions? We’d love to hear from you.{"\n"}
            Email: support@alicsystems.com
          </AppText>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
