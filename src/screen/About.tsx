import React from "react";
import { View, Text, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import tw from "twrnc";
import Header from "../components/Header";

export const AboutUsScreen = () => {
  return (
    <SafeAreaView style={tw`flex flex-1`}>
      <Header title="Back" />
      <ScrollView style={tw`flex-1 bg-white p-4`}>
        <Text style={tw`text-2xl font-bold mb-4`}>
          About LegalBoof: Review AI
        </Text>

        <View style={tw`mb-6`}>
          <Text style={tw`text-lg font-medium mb-3`}>What We Do</Text>
          <Text style={tw`text-base leading-6 mb-4`}>
            LegalBoof: Review AI is a powerful tool designed to
            simplify legal document analysis. Whether you’re reviewing
            contracts, agreements, or other legal texts, our app helps you
            identify key points, potential risks, and compliance issues with
            ease. Using advanced AI technology, we provide detailed summaries
            and insights to empower you in making informed decisions about your
            legal documents.
          </Text>
        </View>

        <View style={tw`mb-6`}>
          <Text style={tw`text-lg font-medium mb-3`}>Our Mission</Text>
          <Text style={tw`text-base leading-6 mb-4`}>
            Our mission is to make legal document review accessible, efficient,
            and reliable for everyone. We aim to bridge the gap between complex
            legal texts and actionable understanding, delivering a seamless
            experience that saves you time and reduces uncertainty.
          </Text>
        </View>

        <View style={tw`mb-6`}>
          <Text style={tw`text-lg font-medium mb-3`}>Contact Us</Text>
          <Text style={tw`text-base leading-6`}>
            Have questions or suggestions? We’d love to hear from you.{"\n"}
            Email: support@alicsystems.com
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
