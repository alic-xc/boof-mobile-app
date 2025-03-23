import { View, Text, TouchableOpacity } from "react-native";
import PagerView from "react-native-pager-view";
import React, { useRef, useState, useEffect } from "react";
import tw from "twrnc";
import { SafeAreaView } from "react-native-safe-area-context";
import colors from "../../constant/Color";
import { subscriber } from "../../utils/paywall";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { HAS_SEEN_ONBOARDING } from "../../utils/constants";

interface QuizOption {
  text: string;
  score: number;
}

interface QuizPageProps {
  question: string;
  options: QuizOption[];
  hookText: string;
  pageIndex: number;
  totalPages: number;
  onSelectOption: (score: number, optionIndex: number) => void;
  selectedOption: number | null;
}

interface QuizResultProps {
  score: number;
  maxScore: number;
  onSubscribe: () => void;
  onSkip: () => void;
}

const SubscriptionQuiz = ({ navigation }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [quizResponses, setQuizResponses] = useState<{ [key: number]: number }>(
    {}
  );
  const [selectedOptions, setSelectedOptions] = useState<{
    [key: number]: number;
  }>({});
  const [totalScore, setTotalScore] = useState(0);
  const pagerRef = useRef<PagerView>(null);

  const handleGetStarted = async () => {
    try {
      await AsyncStorage.setItem(HAS_SEEN_ONBOARDING, "true");
      subscriber().finally(() => {
        navigation.navigate("Registration");
      });
    } catch (error) {
      console.error("Failed to show paywall:", error);
    }
  };

  const handleSelectOption = (
    pageIndex: number,
    score: number,
    optionIndex: number
  ) => {
    setSelectedOptions((prev) => ({ ...prev, [pageIndex]: optionIndex }));
    setQuizResponses((prev) => ({ ...prev, [pageIndex]: score }));

    // Wait a bit to show the selection before moving to next page
    setTimeout(() => {
      if (pageIndex < 4) {
        pagerRef.current?.setPage(pageIndex + 1);
      } else {
        // Explicitly move to the results page when the last question is answered
        pagerRef.current?.setPage(5);
      }
    }, 500);
  };

  useEffect(() => {
    // Calculate total score when responses change
    const score = Object.values(quizResponses).reduce(
      (sum, score) => sum + score,
      0
    );
    setTotalScore(score);
  }, [quizResponses]);

  const pages = [
    {
      question: "What's your biggest legal worry?",
      options: [
        { text: "Missing contract risks", score: 8 },
        { text: "Understanding legal jargon", score: 7 },
        { text: "Reviewing documents takes too long", score: 9 },
        { text: "Lack of legal expertise", score: 10 },
      ],
      hookText:
        "Your concerns are valid. 78% of professionals miss critical legal details.",
      pageIndex: 0,
      totalPages: 5,
    },
    {
      question: "How often do you deal with legal agreements?",
      options: [
        { text: "Daily", score: 10 },
        { text: "Weekly", score: 8 },
        { text: "Monthly", score: 6 },
        { text: "Rarely", score: 4 },
      ],
      hookText: "Imagine saving hours every week with Boof's instant analysis.",
      pageIndex: 1,
      totalPages: 5,
    },
    {
      question: "How do you currently handle legal documents?",
      options: [
        { text: "Pay expensive lawyers", score: 9 },
        { text: "Try to read them myself", score: 7 },
        { text: "Skip the fine print", score: 10 },
        { text: "Ask a colleague", score: 6 },
      ],
      hookText:
        "Boof offers expert-level analysis at a fraction of traditional costs.",
      pageIndex: 2,
      totalPages: 5,
    },
    {
      question: "What happens if you miss a legal detail?",
      options: [
        { text: "Financial penalties", score: 9 },
        { text: "Contract disputes", score: 8 },
        { text: "Compliance issues", score: 10 },
        { text: "Loss of opportunities", score: 7 },
      ],
      hookText:
        "You've worked too hard to let legal oversights derail your success.",
      pageIndex: 3,
      totalPages: 5,
    },
    {
      question: "How important is reducing legal risk to you?",
      options: [
        { text: "Extremely important", score: 10 },
        { text: "Very important", score: 8 },
        { text: "Somewhat important", score: 6 },
        { text: "Not very important", score: 3 },
      ],
      hookText:
        "Peace of mind isn't just nice to have—it's essential for growth.",
      pageIndex: 4,
      totalPages: 5,
    },
  ];

  const QuizPage = ({
    question,
    options,
    hookText,
    pageIndex,
    totalPages,
    onSelectOption,
    selectedOption,
  }: QuizPageProps) => (
    <View style={tw`flex-1 justify-between bg-white px-4 py-10`}>
      <View style={tw`flex-1 justify-center items-center`}>
        <Text style={tw`text-3xl font-bold text-center text-[#1e2424]`}>
          {question}
        </Text>
        <Text style={tw`text-lg text-center mt-4 text-gray-600`}>
          {hookText}
        </Text>
      </View>
      <View style={tw`mb-10`}>
        {options.map((option, index) => (
          <TouchableOpacity
            key={index}
            style={tw`py-3 mt-3 rounded-6 ${
              selectedOption === index
                ? `bg-[${colors.secondary}]`
                : `bg-[${colors.primary}]`
            }`}
            onPress={() => onSelectOption(option.score, index)}
          >
            <Text style={tw`text-white text-lg text-center font-bold`}>
              {option.text}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      {/* Pagination Dots */}
      <View style={tw`flex-row justify-center mt-6`}>
        {Array(totalPages)
          .fill(0)
          .map((_, i) => (
            <View
              key={i}
              style={tw`w-2 h-2 rounded-full mx-1 ${
                i === pageIndex ? `bg-[${colors.primary}]` : "bg-gray-300"
              }`}
            />
          ))}
      </View>
    </View>
  );

  const QuizResult = ({
    score,
    maxScore,
    onSubscribe,
    onSkip,
  }: QuizResultProps) => {
    const percentage = Math.round((score / maxScore) * 100);

    let resultText = "";
    let recommendationText = "";

    if (percentage >= 85) {
      resultText = "High Risk Legal Profile";
      recommendationText =
        "Your legal risk exposure is significant. Boof Assistant would provide critical protection for your legal needs.";
    } else if (percentage >= 65) {
      resultText = "Moderate Risk Legal Profile";
      recommendationText =
        "You face notable legal challenges. Boof Assistant would help you navigate these complex issues efficiently.";
    } else {
      resultText = "Baseline Risk Legal Profile";
      recommendationText =
        "Even with lower risk, Boof Assistant would help you prevent potential legal issues before they occur.";
    }

    return (
      <View style={tw`flex-1 justify-between bg-white px-4 py-10`}>
        <View style={tw`flex-1 justify-center items-center`}>
          <Text style={tw`text-3xl font-bold text-center text-[#1e2424]`}>
            Your Results
          </Text>

          <View style={tw`mt-8 items-center`}>
            <Text style={tw`text-2xl font-bold text-[${colors.primary}]`}>
              {resultText}
            </Text>
            <Text
              style={tw`text-5xl font-bold my-4 text-[${colors.secondary}]`}
            >
              {percentage}%
            </Text>
            <Text style={tw`text-lg text-center mt-2 mb-6 text-gray-700`}>
              {recommendationText}
            </Text>
            <Text style={tw`text-lg text-center mt-2 text-gray-600 italic`}>
              "93% of users with your profile saved an average of 7 hours per
              week with Boof Assistant."
            </Text>
          </View>
        </View>

        <View style={tw`mb-6`}>
          <TouchableOpacity
            style={tw`py-4 rounded-6 bg-[${colors.primary}]`}
            onPress={onSubscribe}
          >
            <Text style={tw`text-white text-lg font-bold text-center`}>
              Get Started
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={tw`flex-1`}>
      <PagerView
        style={tw`flex-1`}
        initialPage={0}
        ref={pagerRef}
        scrollEnabled={false}
        onPageSelected={(e) => setCurrentPage(e.nativeEvent.position)}
      >
        {pages.map((page, index) => (
          <View key={`page-${index}`} style={tw`flex-1`}>
            <QuizPage
              {...page}
              onSelectOption={(score, optionIndex) =>
                handleSelectOption(page.pageIndex, score, optionIndex)
              }
              selectedOption={
                selectedOptions[page.pageIndex] !== undefined
                  ? selectedOptions[page.pageIndex]
                  : null
              }
            />
          </View>
        ))}

        <View key="results" style={tw`flex-1`}>
          <QuizResult
            score={totalScore}
            maxScore={50} // Maximum possible score (10 points × 5 questions)
            onSubscribe={() => handleGetStarted()}
            onSkip={() => navigation.navigate("Home")}
          />
        </View>
      </PagerView>
    </SafeAreaView>
  );
};

export default SubscriptionQuiz;
