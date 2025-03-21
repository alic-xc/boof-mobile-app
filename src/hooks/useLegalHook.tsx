import { View, Text, Alert } from "react-native";
import React from "react";
import { AppEntity } from "../state/app-entity";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../types/navigation-types";
import useDBHook from "./useDBHook";
import { BASE_URL } from "../utils/constants";

const useLegalHook = () => {
  // Inside LoadingScreen component
  const { saveLegalDoc } = useDBHook();
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const { session } = AppEntity.use(); // Assuming data[0] is the PDF URI
  const token = session?.access_token;
  // const generateLegalSummary = async (
  //   text: string,
  //   setSummaryStatus: React.Dispatch<
  //     React.SetStateAction<"pending" | "loading" | "active" | "error">
  //   >,
  //   setAnalyseStatus: React.Dispatch<
  //     React.SetStateAction<"pending" | "loading" | "active" | "error">
  //   >,
  //   country: string
  // ) => {
  //   if (!text) {
  //     setAnalyseStatus("error");
  //     setSummaryStatus("error");
  //     return;
  //   }

  //   setAnalyseStatus("loading");

  //   const API_URL = "https://openrouter.ai/api/v1/chat/completions";
  //   const API_KEY =
  //     "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"; // Securely store this

  //   try {
  //     const response = await fetch(API_URL, {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //         Authorization: `Bearer ${API_KEY}`,
  //       },
  //       body: JSON.stringify({
  //         model: "openai/gpt-4o-mini",
  //         messages: [
  //           {
  //             role: "system",
  //             content: `
  //                 You are an expert legal analyst tasked with analyzing a contract, agreement, or legal document to identify key points, potential issues, and compliance considerations. Your analysis should assist users in understanding blind spots, fairness, compliance with local laws, and overall risk before validating the document. The document text and country are provided by the user.

  //                 **Instructions:**
  //                 First, identify the document type (e.g., employment contract, NDA, lease agreement).
  //                 Analyze the document and provide a structured JSON response adhering to the schema defined in the response_format. Cover key legal aspects such as obligations, risks, fairness, compliance, and ambiguous language. Include quantifiable metrics (e.g., risk scores, clause counts) for visualization and detailed textual summaries.

  //                 IMPORTANT: This analysis is meant as a helpful tool and not a substitute for professional legal advice.
  //               `,
  //           },
  //           {
  //             role: "user",
  //             content: `
  //                 **Document Text**: ${text}
  //                 **Country**: ${country}
  //                 Please analyze this document and return the result in the specified JSON schema.
  //               `,
  //           },
  //         ],
  //         response_format: {
  //           type: "json_schema",
  //           json_schema: {
  //             name: "legal_analysis",
  //             strict: true,
  //             schema: {
  //               type: "object",
  //               properties: {
  //                 analysis: {
  //                   type: "object",
  //                   properties: {
  //                     summary: {
  //                       type: "object",
  //                       properties: {
  //                         overview: {
  //                           type: "string",
  //                           description: "Brief summary of the document",
  //                         },
  //                         totalClauses: {
  //                           type: "number",
  //                           description: "Total number of clauses",
  //                         },
  //                         riskScore: {
  //                           type: "number",
  //                           description: "Overall risk score (0-100)",
  //                         },
  //                         overallSeverity: {
  //                           type: "string",
  //                           enum: ["low", "medium", "high"],
  //                           description: "Overall document severity rating",
  //                         },
  //                         overallRating: {
  //                           type: "number",
  //                           description: "Overall document rating",
  //                         },
  //                         documentType: {
  //                           type: "string",
  //                           description: "Type of legal document identified",
  //                         },
  //                         title: {
  //                           type: "string",
  //                           description:
  //                             "Title given to this document, must include client name. (max. 20 characters)",
  //                         },
  //                       },
  //                       required: [
  //                         "overview",
  //                         "totalClauses",
  //                         "riskScore",
  //                         "overallSeverity",
  //                         "overallRating",
  //                         "documentType",
  //                         "title",
  //                       ],
  //                       additionalProperties: false,
  //                     },

  //                     keyPoints: {
  //                       type: "array",
  //                       items: {
  //                         type: "object",
  //                         properties: {
  //                           title: {
  //                             type: "string",
  //                             description: "Clause title",
  //                           },
  //                           description: {
  //                             type: "string",
  //                             description: "Clause explanation",
  //                           },
  //                           riskLevel: {
  //                             type: "string",
  //                             enum: ["low", "medium", "high"],
  //                             description: "Risk assessment",
  //                           },
  //                           compliance: {
  //                             type: "object",
  //                             properties: {
  //                               isCompliant: {
  //                                 type: "boolean",
  //                                 description: "Compliant with country laws",
  //                               },
  //                               notes: {
  //                                 type: "string",
  //                                 description: "Compliance notes",
  //                               },
  //                             },
  //                             required: ["isCompliant", "notes"],
  //                             additionalProperties: false,
  //                           },
  //                         },
  //                         required: [
  //                           "title",
  //                           "description",
  //                           "riskLevel",
  //                           "compliance",
  //                         ],
  //                         additionalProperties: false,
  //                       },
  //                     },
  //                     fairness: {
  //                       type: "object",
  //                       properties: {
  //                         score: {
  //                           type: "number",
  //                           description: "Fairness score (0-100)",
  //                         },
  //                         issues: {
  //                           type: "array",
  //                           items: {
  //                             type: "object",
  //                             properties: {
  //                               description: {
  //                                 type: "string",
  //                                 description: "Fairness issue",
  //                               },
  //                               partyFavored: {
  //                                 type: "string",
  //                                 description: "Party favored",
  //                               },
  //                             },
  //                             required: ["description", "partyFavored"],
  //                             additionalProperties: false,
  //                           },
  //                         },
  //                       },
  //                       required: ["score", "issues"],
  //                       additionalProperties: false,
  //                     },
  //                     complianceSummary: {
  //                       type: "object",
  //                       properties: {
  //                         country: {
  //                           type: "string",
  //                           description: "Country analyzed",
  //                         },
  //                         issuesCount: {
  //                           type: "number",
  //                           description: "Number of compliance issues",
  //                         },
  //                         details: {
  //                           type: "string",
  //                           description: "Compliance findings",
  //                         },
  //                       },
  //                       required: ["country", "issuesCount", "details"],
  //                       additionalProperties: false,
  //                     },
  //                     blindSpots: {
  //                       type: "array",
  //                       items: {
  //                         type: "object",
  //                         properties: {
  //                           description: {
  //                             type: "string",
  //                             description: "Blind spot description",
  //                           },
  //                           recommendation: {
  //                             type: "string",
  //                             description: "Suggested fix",
  //                           },
  //                         },
  //                         required: ["description", "recommendation"],
  //                         additionalProperties: false,
  //                       },
  //                     },
  //                     metrics: {
  //                       type: "object",
  //                       properties: {
  //                         clauseTypes: {
  //                           type: "array",
  //                           items: {
  //                             type: "object",
  //                             properties: {
  //                               type: {
  //                                 type: "string",
  //                                 description: "Clause type",
  //                               },
  //                               count: {
  //                                 type: "number",
  //                                 description: "Number of clauses",
  //                               },
  //                             },
  //                             required: ["type", "count"],
  //                             additionalProperties: false,
  //                           },
  //                         },
  //                         riskDistribution: {
  //                           type: "object",
  //                           properties: {
  //                             low: {
  //                               type: "number",
  //                               description: "Low-risk clause count",
  //                             },
  //                             medium: {
  //                               type: "number",
  //                               description: "Medium-risk clause count",
  //                             },
  //                             high: {
  //                               type: "number",
  //                               description: "High-risk clause count",
  //                             },
  //                           },
  //                           required: ["low", "medium", "high"],
  //                           additionalProperties: false,
  //                         },
  //                       },
  //                       required: ["clauseTypes", "riskDistribution"],
  //                       additionalProperties: false,
  //                     },
  //                   },
  //                   required: [
  //                     "summary",
  //                     "keyPoints",
  //                     "fairness",
  //                     "complianceSummary",
  //                     "blindSpots",
  //                     "metrics",
  //                   ],
  //                   additionalProperties: false,
  //                 },
  //               },
  //               required: ["analysis"],
  //               additionalProperties: false,
  //             },
  //           },
  //         },
  //       }),
  //     });

  //     const data = await response.json();
  //     if (!response.ok)
  //       throw new Error(data.error?.message || "Analysis failed");

  //     const parsedContent = JSON.parse(data.choices[0].message.content); // Structured JSON
  //     saveLegalDoc("Title", parsedContent.analysis);

  //     setAnalyseStatus("active");
  //     setSummaryStatus("loading");
  //     setTimeout(() => {
  //       setSummaryStatus("active");

  //       navigation.navigate("Details");
  //       Alert.alert("Summary", "Legal analysis complete");
  //     }, 2000);
  //   } catch (error) {
  //     setAnalyseStatus("error");
  //     setSummaryStatus("error");
  //     Alert.alert("Error", error.message || "Failed to generate summary");
  //     console.error("Summary error:", error);
  //   }
  // };
  const generateLegalSummary = async (
    text: string,
    setSummaryStatus: React.Dispatch<
      React.SetStateAction<"pending" | "loading" | "active" | "error">
    >,
    setAnalyseStatus: React.Dispatch<
      React.SetStateAction<"pending" | "loading" | "active" | "error">
    >,
    country: string,
    navigation: any // Assuming navigation prop is passed
  ) => {
    if (!text) {
      setAnalyseStatus("error");
      setSummaryStatus("error");
      return;
    }

    setAnalyseStatus("loading");

    try {
      if (!token) throw new Error("User not authenticated");

      const response = await fetch(`${BASE_URL}/api/legal/generate-summary`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          text,
          country,
        }),
      });

      const data = await response.json();
      if (!response.ok) {
        if (response.status === 403) {
          throw new Error("Active subscription required");
        }
        throw new Error(data.error || "Analysis failed");
      }

      const analysis = data.analysis;
      saveLegalDoc(analysis);

      setAnalyseStatus("active");
      setSummaryStatus("loading");
      setTimeout(() => {
        setSummaryStatus("active");
        navigation.navigate("Details");
        Alert.alert("Summary", "Legal analysis complete");
      }, 2000);
    } catch (error) {
      setAnalyseStatus("error");
      setSummaryStatus("error");
      Alert.alert("Error", error.message || "Failed to generate summary");
      console.error("Summary error:", error);
    }
  };

  return {
    generateLegalSummary,
  };
};

export default useLegalHook;
