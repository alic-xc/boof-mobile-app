import { View, Text, ActivityIndicator, Alert } from "react-native";
import React, { useState, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import tw from "twrnc";
import Animated, { FadeIn, FadeOut } from "react-native-reanimated";
import { AppEntity } from "../state/app-entity";
import Button from "../components/Button";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../types/navigation-types";
import useLegalHook from "../hooks/useLegalHook";
import { BASE_URL } from "../utils/constants";

const LoadingScreen = () => {
  // State for each step with four phases
  const [uploadStatus, setUploadStatus] = useState<
    "pending" | "loading" | "active" | "error"
  >("pending");
  const [analyseStatus, setAnalyseStatus] = useState<
    "pending" | "loading" | "active" | "error"
  >("pending");
  const [summaryStatus, setSummaryStatus] = useState<
    "pending" | "loading" | "active" | "error"
  >("pending");
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const [pdfText, setPdfText] = React.useState<string>("");
  const { data, session } = AppEntity.use(); // Assuming data[0] is the PDF URI
  const token = session?.access_token;
  const country = "US"; // Example; make dynamic based on user input
  const { generateLegalSummary } = useLegalHook();
  // Helper to render each step
  const renderStep = (status: string, text: string) => {
    const isLoading = status === "loading";
    const isActive = status === "active";
    const isError = status === "error";

    return (
      <Animated.View
        entering={FadeIn.duration(500)}
        exiting={FadeOut.duration(500)}
        style={tw`flex flex-row gap-2 items-center justify-center bg-[black] rounded-md`}
      >
        {isLoading && <ActivityIndicator size="small" color="white" />}
        {isActive && <Text style={tw`text-green-500 text-lg py-2`}>✓</Text>}
        {isError && <Text style={tw`text-red-500 text-lg py-2`}>✗</Text>}
        <Text
          style={tw`text-lg py-1 text-white ${
            isActive ? "text-green-500" : isError ? "text-red-500" : ""
          }`}
        >
          {isActive ? `${text} - Done` : isError ? `${text} - Failed` : text}
        </Text>
      </Animated.View>
    );
  };

  const pollJobStatus = async (
    jobId: string,
    maxAttempts = 30,
    interval = 2000
  ): Promise<string> => {
    let attempts = 0;

    const checkStatus = async (): Promise<string> => {
      try {
        const response = await fetch(
          `${BASE_URL}/api/legal/status/extract-text/${jobId}`,
          {
            method: "GET",
            headers: {
              accept: "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );
        const statusData = await response.json();
        if (!response.ok)
          throw new Error(statusData.error || "Status check failed");

        if (statusData.status === "SUCCESS") {
          return statusData.text || "";
        } else if (statusData.status === "ERROR") {
          throw new Error(statusData.error || "Parsing failed");
        } else if (attempts >= maxAttempts) {
          throw new Error("Timeout: Parsing took too long");
        }

        attempts++;
        await new Promise((resolve) => setTimeout(resolve, interval));
        return checkStatus();
      } catch (error) {
        throw error;
      }
    };

    return checkStatus();
  };
  // Upload PDF to LlamaIndex and extract text
  const uploadPdfToLlamaIndex = async () => {
    if (!data || data.length < 1) {
      setUploadStatus("error");
      Alert.alert("Error", "Please select a PDF file first");
      return "";
    }

    setUploadStatus("loading");

    try {
      const formData = new FormData();
      formData.append("file", {
        uri: data[0],
        name: "agreement.pdf",
        type: "application/pdf",
      });

      const response = await fetch(`${BASE_URL}/api/legal/extract-text`, {
        method: "POST",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
        body: formData,
        
      });

      const responseData = await response.json();
      if (!response.ok) {
        throw new Error(responseData.message || "Upload failed");
      }
      const jobId = responseData.id; // Assuming job_id is returned
      if (!jobId) throw new Error("No job ID returned");

      // Poll for completion
      const markdownText = await pollJobStatus(jobId);
      setPdfText(markdownText);
      setUploadStatus("active");
      return markdownText;
    } catch (error) {
      console.log(error);
      setUploadStatus("error");
      Alert.alert("Upload Error", error.message || "Failed to upload PDF");
      console.error("Upload error:", error);
      return "";
    }
  };

  // const uploadPdfToLlamaIndex = async () => {
  //   if (!data || data.length < 1) {
  //     setUploadStatus("error");
  //     Alert.alert("Error", "Please select a PDF file first");
  //     return "";
  //   }

  //   setUploadStatus("loading");

  //   try {
  //     const formData = new FormData();
  //     formData.append("file", {
  //       uri: data[0],
  //       name: "agreement.pdf",
  //       type: "application/pdf",
  //     });

  //     const response = await fetch(
  //       "https://api.cloud.llamaindex.ai/api/parsing/upload",
  //       {
  //         method: "POST",
  //         headers: {
  //           accept: "application/json",
  //           Authorization: `Bearer ${LLAMA_CLOUD_API_KEY}`,
  //           "Content-Type": "multipart/form-data",
  //         },
  //         body: formData,
  //       }
  //     );

  //     const responseData = await response.json();
  //     if (!response.ok) {
  //       throw new Error(responseData.message || "Upload failed");
  //     }
  //     const jobId = responseData.id; // Assuming job_id is returned
  //     if (!jobId) throw new Error("No job ID returned");

  //     // Poll for completion
  //     const markdownText = await pollJobStatus(jobId);
  //     setPdfText(markdownText);
  //     setUploadStatus("active");
  //     return markdownText;
  //   } catch (error) {
  //     console.log("error");
  //     setUploadStatus("error");
  //     Alert.alert("Upload Error", error.message || "Failed to upload PDF");
  //     console.error("Upload error:", error);
  //     return "";
  //   }
  // };

  // Start the process on mount
  useEffect(() => {
    const processDocument = async () => {
      const extractedText = await uploadPdfToLlamaIndex();
    };

    processDocument();
  }, [data]);

  useEffect(() => {
    const processDocument = async () => {
      await generateLegalSummary(
        pdfText,
        setSummaryStatus,
        setAnalyseStatus,
        country
      );
    };

    if (pdfText.length > 1) {
      processDocument();
    }
  }, [pdfText]);

  return (
    <SafeAreaView style={tw`flex-1`}>
      <View style={tw`flex flex-1 items-center justify-center`}>
        <View style={tw`w-[65%] flex flex-col gap-2`}>
          {uploadStatus !== "pending" &&
            renderStep(uploadStatus, "Uploading Data")}
          {analyseStatus !== "pending" &&
            renderStep(analyseStatus, "Analysing Data")}
          {summaryStatus !== "pending" &&
            renderStep(summaryStatus, "Generating Summary")}
          {summaryStatus === "error" ||
            analyseStatus == "error" ||
            (uploadStatus == "error" && (
              <Button onPress={() => navigation.goBack()}>
                <Text>Close</Text>
              </Button>
            ))}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LoadingScreen;
