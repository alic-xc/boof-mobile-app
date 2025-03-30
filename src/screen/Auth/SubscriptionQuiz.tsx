import { View, Text, TouchableOpacity, ActivityIndicator } from "react-native";
import PagerView from "react-native-pager-view";
import React, { useRef, useState, useEffect } from "react";
import tw from "twrnc";
import { SafeAreaView } from "react-native-safe-area-context";
import colors from "../../constant/Color";
import { subscriber } from "../../utils/paywall";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { HAS_SEEN_ONBOARDING } from "../../utils/constants";
import AppText from "../../components/AppText";

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
  const [isPaywall, setIsPaywall] = useState<boolean>(false);
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
      setIsPaywall(true);
      subscriber()
        .then(async (data) => {
          await AsyncStorage.setItem(HAS_SEEN_ONBOARDING, "true");
          navigation.navigate("Registration");
        })
        .finally(() => {
          setIsPaywall(false);
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
      question: "What slows your contract review?",
      options: [
        { text: "Hidden risks", score: 8 },
        { text: "Complex terms", score: 7 },
        { text: "Too much time", score: 9 },
        { text: "Unsure what’s key", score: 10 },
      ],
      hookText:
        "Most pros miss costly details. LegalBoof spots them fast—try it now.",
      pageIndex: 0,
      totalPages: 5,
    },
    {
      question: "How often do you review agreements?",
      options: [
        { text: "Daily", score: 10 },
        { text: "Weekly", score: 8 },
        { text: "Monthly", score: 6 },
        { text: "Rarely", score: 4 },
      ],
      hookText:
        "Frequent reviews mean higher stakes. Speed up with LegalBoof’s scan.",
      pageIndex: 1,
      totalPages: 5,
    },
    {
      question: "How do you check legal docs?",
      options: [
        { text: "Hire costly help", score: 9 },
        { text: "Read it myself", score: 7 },
        { text: "Skim quickly", score: 10 },
        { text: "Guess and hope", score: 6 },
      ],
      hookText:
        "DIY risks errors; pros cost more. LegalBoof reviews smarter, cheaper.",
      pageIndex: 2,
      totalPages: 5,
    },
    {
      question: "What’s your worst review fear?",
      options: [
        { text: "Costly oversights", score: 9 },
        { text: "Dispute surprises", score: 8 },
        { text: "Rule breaches", score: 10 },
        { text: "Missed chances", score: 7 },
      ],
      hookText:
        "One missed term can hurt. LegalBoof flags risks before you sign.",
      pageIndex: 3,
      totalPages: 5,
    },
    {
      question: "Value quick document checks?",
      options: [
        { text: "Top priority", score: 10 },
        { text: "Quite useful", score: 8 },
        { text: "Nice to have", score: 6 },
        { text: "Not a focus", score: 3 },
      ],
      hookText:
        "Smart reviews save time and worry. Start with LegalBoof today.",
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
        <AppText style={tw`text-3xl font-bold text-center text-[#1e2424]`}>
          {question}
        </AppText>
        <AppText style={tw`text-lg text-center mt-4 text-gray-600`}>
          {hookText}
        </AppText>
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
            <AppText style={tw`text-white text-lg text-center font-bold`}>
              {option.text}
            </AppText>
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
      resultText = "🚨 Elevated Risk Profile";
      recommendationText =
        "Great job spotting this! Your contracts hide costly traps—missed terms could sting soon. **Boof Assistant scans fast, catching risks so you don’t.** Imagine signing with total confidence.";
    } else if (percentage >= 65) {
      resultText = "⚠️ Notable Risk Profile";
      recommendationText =
        "Smart move checking in! You’re juggling tricky clauses—delays or oversights add up. **Boof Assistant simplifies reviews, saving you time and worry.** Picture stress-free agreements.";
    } else {
      resultText = "✅ Steady Risk Profile";
      recommendationText =
        "Nice work staying aware! Even small gaps in contracts can grow costly. **Boof Assistant keeps you sharp, spotting issues instantly.** See how easy reviews could be.";
    }

    return (
      <View style={tw`flex-1 justify-between bg-white px-4 py-10`}>
        <View style={tw`flex-1 justify-center items-center`}>
          <AppText style={tw`text-3xl font-bold text-center text-[#1e2424]`}>
            Your Results
          </AppText>

          <View style={tw`mt-8 items-center`}>
            <AppText style={tw`text-2xl font-bold text-[${colors.primary}]`}>
              {resultText}
            </AppText>
            <AppText
              style={tw`text-5xl font-bold my-4 text-[${colors.secondary}]`}
            >
              {percentage}%
            </AppText>
            <AppText style={tw`text-lg text-center mt-2 mb-6 text-gray-700`}>
              {recommendationText}
            </AppText>
            <AppText style={tw`text-lg text-center mt-2 text-gray-600 italic`}>
              "93% of users with your profile saved an average of 7 hours per
              week with Boof Assistant."
            </AppText>
          </View>
        </View>

        <View style={tw`mb-6`}>
          <TouchableOpacity
            style={tw` flex flex-row items-center gap-2  justify-center py-4 rounded-6 bg-[${colors.primary}]`}
            onPress={onSubscribe}
          >
            {isPaywall && <ActivityIndicator size="small" color="#fff" />}
            <AppText style={tw`text-white text-lg font-bold text-center`}>
              Get Started
            </AppText>
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
