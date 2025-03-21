import { View, Text, TouchableOpacity, Dimensions } from "react-native";
import React, { useState, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  GestureHandlerRootView,
  ScrollView,
} from "react-native-gesture-handler";
import tw from "twrnc";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";
import Svg, { Circle } from "react-native-svg";
import { AppEntity } from "../state/app-entity";
import useDBHook from "../hooks/useDBHook";
import Header from "../components/Header";
import BottomSheet from "../components/BottomSheet";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { LegalAnalysis } from "../types/app-types";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../types/navigation-types";

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

const Details = () => {
  const { analysis: id } = AppEntity.use();
  const { getLegalDoc, singleLegalDoc } = useDBHook();
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const [analysis, setAnalysis] = useState<LegalAnalysis | null>(null);
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [selectedPoint, setSelectedPoint] = useState<
    LegalAnalysis["analysis"]["keyPoints"][0] | null
  >(null);

  // Animated values for risk and fairness
  const riskPercent = useSharedValue(0);
  const fairnessPercent = useSharedValue(0);

  useEffect(() => {
    if (id) getLegalDoc(id as number);
  }, [id]);

  useEffect(() => {
    if (singleLegalDoc) {
      const parsedAnalysis = JSON.parse(singleLegalDoc.content);
      setAnalysis(parsedAnalysis);
      riskPercent.value = withTiming(parsedAnalysis.summary.riskScore, {
        duration: 1000,
      });
      fairnessPercent.value = withTiming(parsedAnalysis.fairness.score, {
        duration: 1000,
      });
    }
  }, [singleLegalDoc]);

  const animatedRiskStyle = useAnimatedStyle(() => ({
    opacity: withTiming(analysis ? 1 : 0, { duration: 500 }),
  }));
  const animatedFairnessStyle = useAnimatedStyle(() => ({
    opacity: withTiming(analysis ? 1 : 0, { duration: 500 }),
  }));

  const handleKeyPointPress = (
    point: LegalAnalysis["analysis"]["keyPoints"][0]
  ) => {
    setSelectedPoint(point);
    setModalVisible(true);
  };

  if (!analysis) return <Text style={tw`text-center mt-10`}>Loading...</Text>;

  const {
    summary,
    keyPoints,
    fairness,
    complianceSummary,
    blindSpots,
    metrics,
  } = analysis;

  const getSeverityColor = (level: string) => {
    switch (level) {
      case "high":
        return "red-500";
      case "medium":
        return "amber-500";
      case "low":
        return "green-500";
      default:
        return "gray-500";
    }
  };

  // Custom Animated Ring Component
  const AnimatedRing = ({
    percent,
    label,
    isRisk,
  }: {
    percent: Animated.SharedValue<number>;
    label: string;
    isRisk: boolean;
  }) => {
    const circumference = 2 * Math.PI * 80; // Radius = 80
    const strokeDashoffset = useAnimatedStyle(() => {
      const offset = circumference * (1 - percent.value / 100);
      return {
        strokeDashoffset: offset,
      };
    });

    const color = isRisk
      ? percent.value > 70
        ? "#ff0000"
        : percent.value > 30
        ? "#ffff00"
        : "#00ff00"
      : percent.value > 70
      ? "#00ff00"
      : percent.value > 30
      ? "#ffff00"
      : "#ff0000";

    return (
      <View style={tw`items-center`}>
        <View
          style={{
            position: "relative",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Svg width="100" height="100" viewBox="0 0 200 200">
            {/* Background Circle */}
            <Circle
              cx="100"
              cy="100"
              r="80"
              stroke="#e0e0e0"
              strokeWidth="30"
              fill="transparent"
            />
            {/* Animated Foreground Circle */}
            <AnimatedCircle
              cx="100"
              cy="100"
              r="80"
              stroke={color}
              strokeWidth="20"
              fill="transparent"
              strokeDasharray={circumference}
              style={strokeDashoffset}
              strokeLinecap="round"
            />
          </Svg>
          {/* Position text absolutely over the SVG */}
          <View
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 18, fontWeight: "bold" }}>
              {Math.round(percent.value)}%
            </Text>
          </View>
        </View>
        <Text style={tw`mt-2`}>{label}</Text>
      </View>
    );
  };

  return (
    <GestureHandlerRootView>
      <BottomSheetModalProvider>
        <SafeAreaView style={tw`flex-1 bg-white px-1`}>
          <Header
            title="Back"
            onPress={() => {
              navigation.navigate("Dashboard");
            }}
          />
          <ScrollView>
            <View style={tw`px-4 py-2`}>
              <Text style={tw`text-2xl font-light text-center`}>Report</Text>

              {/* Summary */}
              <View style={tw`flex flex-row justify-center gap-10`}>
                <Animated.View
                  style={[tw`items-center mt-4`, animatedRiskStyle]}
                >
                  <AnimatedRing
                    percent={riskPercent}
                    label="Risk Score"
                    isRisk={true}
                  />
                </Animated.View>
                <Animated.View
                  style={[tw`items-center mt-4`, animatedFairnessStyle]}
                >
                  <AnimatedRing
                    percent={fairnessPercent}
                    label="Fairness"
                    isRisk={false}
                  />
                </Animated.View>
              </View>
              <Text style={tw`text-xl mt-4`}>Summary</Text>
              <Text style={tw`mt-2 text-justify leading-5`}>
                {summary.overview}
              </Text>
              <Text style={tw`mt-1 font-bold`}>
                Clauses: {summary.totalClauses}
              </Text>

              {/* Key Points */}
              <Text style={tw`text-xl mt-6`}>Key Points</Text>
              {keyPoints.map((point, index) => (
                <TouchableOpacity
                  key={index}
                  style={tw`flex-row justify-between items-center p-3 bg-gray-100 rounded-lg mt-2`}
                  onPress={() => handleKeyPointPress(point)}
                >
                  <Text style={tw`text-base flex-1`}>{point.title}</Text>
                  <Text
                    style={tw`text-lg text-${getSeverityColor(
                      point.riskLevel
                    )}`}
                  >
                    {point.riskLevel}
                  </Text>
                </TouchableOpacity>
              ))}

              {/* Fairness */}
              <Text style={tw`text-xl mt-6`}>Fairness</Text>

              {fairness.issues.map((issue, index) => (
                <Text key={index} style={tw`mt-2`}>
                  {issue.description} ({issue.partyFavored})
                </Text>
              ))}

              {/* Compliance Summary */}
              <Text style={tw`text-xl mt-6`}>Compliance Summary</Text>
              <Text style={tw`mt-2`}>{complianceSummary.details}</Text>
              <Text style={tw`mt-1`}>
                Issues: {complianceSummary.issuesCount}
              </Text>

              {/* Blind Spots */}
              <Text style={tw`text-xl mt-6`}>Blind Spots</Text>
              {blindSpots.map((spot, index) => (
                <View key={index} style={tw`mt-2`}>
                  <Text>{spot.description}</Text>
                  <Text style={tw`text-gray-600`}>
                    Recommendation: {spot.recommendation}
                  </Text>
                </View>
              ))}

              {/* Metrics */}
              <Text style={tw`text-xl mt-6`}>Metrics</Text>
              <View style={tw`px-2`}>
                <Text style={tw`mt-5 font-bold`}>Risk Distribution</Text>
                <View style={tw`flex-row justify-around mb-5`}>
                  <View style={tw`flex flex-col items-center `}>
                    <Text
                      style={tw`mt-1 text-2xl font-semibold text-green-500`}
                    >
                      {metrics.riskDistribution.low}
                    </Text>
                    <Text
                      style={tw`text-center font-light text-lg text-green-500`}
                    >
                      Low
                    </Text>
                  </View>
                  <View style={tw`flex flex-col items-center`}>
                    <Text
                      style={tw`mt-1 text-2xl font-semibold text-yellow-500`}
                    >
                      {metrics.riskDistribution.medium}
                    </Text>
                    <Text
                      style={tw`text-center font-light text-lg text-yellow-500`}
                    >
                      Medium
                    </Text>
                  </View>
                  <View style={tw`flex flex-col items-center `}>
                    <Text style={tw`mt-1 text-2xl font-semibold text-red-500`}>
                      {metrics.riskDistribution.high}
                    </Text>
                    <Text
                      style={tw`text-center font-light text-lg text-red-500`}
                    >
                      High
                    </Text>
                  </View>
                </View>
                <Text style={tw`mt-2 mb-2 font-bold`}>Clause Types</Text>
                <View
                  style={tw`flex flex-row flex-wrap justify-between items-center gap-3 px-2`}
                >
                  {metrics.clauseTypes.map((type, index) => (
                    <View
                      key={index}
                      style={tw`flex flex-row justify-between items-center w-full `}
                    >
                      <Text style={tw`text-center font-light text-lg`}>
                        {type.type}
                      </Text>
                      <Text
                        style={tw`text-lg leading-9 font-bold w-8 h-8 rounded-full bg-[#f1f1f1] text-center flex flex-row items-center justify-center `}
                      >
                        {type.count}
                      </Text>
                    </View>
                  ))}
                </View>
              </View>
            </View>
          </ScrollView>

          {/* BottomSheet for Key Point Details */}
          <BottomSheet
            isActive={modalVisible}
            height={"45%"}
            closeModal={() => setModalVisible(false)}
          >
            {selectedPoint && (
              <View style={tw`flex flex-col gap-2 flex-1 px-4 py-2`}>
                <Text style={tw`text-2xl font-bold mb-3`}>
                  {selectedPoint.title}
                </Text>
                <View
                  style={tw`px-3 py-1 self-start rounded-full bg-${getSeverityColor(
                    selectedPoint.riskLevel
                  )} bg-opacity-20 mb-2`}
                >
                  <Text
                    style={tw`text-${getSeverityColor(
                      selectedPoint.riskLevel
                    )} font-medium`}
                  >
                    {selectedPoint.riskLevel.toUpperCase()} RISK
                  </Text>
                </View>
                <Text style={tw`text-base leading-6 mb-3`}>
                  {selectedPoint.description}
                </Text>
                <View style={tw`bg-gray-50 p-3 rounded-lg mb-2`}>
                  <Text style={tw`text-base font-medium mb-1`}>
                    Compliance:{" "}
                    {selectedPoint.compliance.isCompliant
                      ? "Compliant"
                      : "Non-Compliant"}
                  </Text>
                  <Text style={tw`text-gray-700`}>
                    {selectedPoint.compliance.notes}
                  </Text>
                </View>
              </View>
            )}
          </BottomSheet>
        </SafeAreaView>
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  );
};

export default Details;
