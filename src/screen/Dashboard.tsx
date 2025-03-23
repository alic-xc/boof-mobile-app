import {
  View,
  Text,
  Alert,
  RefreshControl,
  Pressable,
  ActivityIndicator,
} from "react-native";
import React, { useLayoutEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import tw from "twrnc";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import BottomSheet from "../components/BottomSheet";
import ListItem from "../components/ListItem";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { ListItemProps } from "../types/dashboard";
import {
  AddIcon,
  BadDocumentIcon,
  CameraIcon,
  CreditIcon,
  DocumentIcon,
  GoodDocumentIcon,
  LinkIcon,
  NoteBookIcon,
  PDFIcon,
  TextIcon,
} from "../icons";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../types/navigation-types";
import colors from "../constant/Color";
import FloatingButton from "../components/FloatingButton";
import { AppEntity } from "../state/app-entity";
import HeaderWidget from "../components/HeaderWidget";
import { Session } from "@supabase/supabase-js";
import { pick, types } from "@react-native-documents/picker";
import TextInput from "../components/TextInput";
import Button from "../components/Button";
import { Formik } from "formik";
import * as FileSystem from "expo-file-system";
import { ImagePickerAsset } from "expo-image-picker";
import useDBHook from "../hooks/useDBHook";
import { FlashList } from "@shopify/flash-list";
import { formatDate, formatDateOnly } from "../utils/dateFormatter";
import Widget from "../components/Widget";
import {
  getSubscriptionStatus,
  subscriber,
  syncSubscriptionWithServer,
} from "../utils/paywall";
import { TextInputSchema, UrlSchema } from "../schema/Dashboard";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { HAS_SEEN_ONBOARDING } from "../utils/constants";

const HAS_SHOWN_RATING_KEY = "hasShownRating";
const HAS_CONVERTED_PDF_KEY = "hasConvertedPDF";

const Dashboard = () => {
  const { session } = AppEntity.use();
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const [modalVisible, setModalVisible] = React.useState<boolean>(false);
  const [textModalVisible, setTextModalVisible] =
    React.useState<boolean>(false);
  const [urlModalVisible, setUrlModalVisible] = React.useState<boolean>(false);
  const [isLoading, setIsLoading] = React.useState(false);

  const [isCompletionModalVisible, setIsCompletionModalVisible] =
    React.useState(false);
  const [selectedImages, setSelectedImages] = React.useState<
    ImagePickerAsset[]
  >([]);
  const [selectedImage, setSelectedImage] =
    React.useState<ImagePickerAsset | null>();
  const [refreshing, setRefreshing] = React.useState(false);
  const [selectedPdf, setSelectedPdf] = React.useState(null);
  const [showForm, setShowForm] = React.useState(false);
  const [isProcessing, setIsProcessing] = React.useState(false);
  const [capturedPages, setCapturedPages] = React.useState([]);
  const [canExport, setCanExport] = React.useState<boolean>(false);
  const { getAllLegalDocs, allLegalDocs, handleLoadMore, analytics } =
    useDBHook();

  const actions: ListItemProps[] = [
    {
      component: (
        <View style={tw``}>
          <Text style={tw`text-xl`}>Upload Document</Text>
          <Text style={tw`text-sm mt-1 `}>Upload document in PDF</Text>
        </View>
      ),
      containerStyle: "bg-[#f1f1f1]",
      onPress: () => {
        pickPDF();
        setModalVisible(false);
      },
      icon: <PDFIcon width={30} height={30} />,
    },
    // {
    //   component: (
    //     <View style={tw``}>
    //       <Text style={tw`text-xl`}>Scan Document</Text>
    //       <Text style={tw`text-sm mt-1 `}>
    //         You can scan Document in Image format
    //       </Text>
    //     </View>
    //   ),
    //   containerStyle: "bg-[#f1f1f1]",
    //   onPress: () => {
    //     setModalVisible(false);
    //   },
    //   icon: <CameraIcon color={colors.primary} width={30} height={30} />,
    // },
    {
      component: (
        <View style={tw``}>
          <Text style={tw`text-xl`}>Enter Text</Text>
          <Text style={tw`text-sm mt-1 `}>Insert link to agreement</Text>
        </View>
      ),
      containerStyle: "bg-[#f1f1f1]",
      onPress: () => {
        setTextModalVisible(true);
      },
      icon: <TextIcon color={colors.primary} width={30} height={30} />,
    },
    {
      component: (
        <View style={tw``}>
          <Text style={tw`text-xl`}>Enter URL</Text>
          <Text style={tw`text-sm mt-1 `}>Insert link to agreement</Text>
        </View>
      ),
      containerStyle: "bg-[#f1f1f1]",
      onPress: () => {
        setUrlModalVisible(true);
      },
      icon: <LinkIcon color={colors.primary} width={30} height={30} />,
    },
  ];

  React.useEffect(() => {
    getAllLegalDocs();
  }, []);

  React.useEffect(() => {
    getSubscriptionStatus().then((response) => {
      const sub = response;
      if (!sub.isActive) {
        syncSubscriptionWithServer();
      }
    });
  }, []);

  const onRefresh = React.useCallback(async () => {

    setRefreshing(true);
    await getAllLegalDocs();
    setRefreshing(false);
  }, []);

  // const captureAndProcessImage = async () => {
  //   try {
  //     const { scannedImages } = await DocumentScanner.scanDocument({
  //       croppedImageQuality: 100,
  //       maxNumDocuments: imageSelectLimitPerMonth,
  //     });

  //     if (!scannedImages || scannedImages.length === 0) {
  //       console.log("No document scanned.");
  //       return;
  //     }

  //     const newImages = await Promise.all(
  //       scannedImages.map(async (imageUri, index) => {
  //         const fileName = `scanned_doc_${Date.now()}_${index}.jpg`;
  //         const metadata = await FileSystem.getInfoAsync(imageUri);
  //         const cachedUri = `${FileSystem.cacheDirectory}${fileName}`;
  //         // Copy to cache directory
  //         await FileSystem.copyAsync({ from: imageUri, to: cachedUri });
  //         const imageInfo = await ImageManipulator.manipulateAsync(cachedUri);

  //         return {
  //           uri: cachedUri,
  //           fileName,
  //           type: "image",
  //           width: imageInfo.width, // Default width if not available
  //           height: imageInfo.height, // Default height if not available
  //           fileSize: metadata.size,
  //         };
  //       })
  //     );

  //     setSelectedImages((prevImages) => [...prevImages, ...newImages]);

  //     console.log("Scanned Images added:", newImages);
  //   } catch (error) {
  //     console.error("Error scanning document:", error);
  //   }
  // };

  const pickPDF = async () => {
    try {
      const result = await pick({
        type: [types.pdf],
      });
      if (result[0]) {
        const fileName = `uploaded_doc_${Date.now()}.pdf`;
        const cachedUri = `${FileSystem.cacheDirectory}${fileName}`;
        await FileSystem.copyAsync({ from: result[0].uri, to: cachedUri });

        Alert.alert(
          `${result[0].name}.`,
          `Do you wish to proceed this document?`,
          [
            {
              style: "cancel",
              text: "Cancel",
            },
            {
              style: "default",
              text: "Proceed",
              onPress: () => {
                AppEntity.set((state) => {
                  return {
                    ...state,
                    format: "pdf",
                    data: [cachedUri],
                  };
                });
                navigation.navigate("Loading");
              },
            },
          ]
        );
      }
    } catch (error) {
      Alert.alert("Error", "Failed to pick PDF file");
      console.error(error);
    }
  };

  const data = [
    {
      title: (
        <View>
          <Text style={tw`text-lg font-bold`}>Total </Text>
          <Text> Docs</Text>
        </View>
      ),
      icon: (
        <Text style={tw`font-bold text-lg`}>{analytics?.totalReports}</Text>
      ),
    },
    {
      title: (
        <View>
          <Text style={tw`text-lg font-bold text-green-500`}>Low </Text>
          <Text>Risk Docs</Text>
        </View>
      ),
      icon: (
        <Text style={tw`font-bold text-lg`}>{analytics?.lowRiskDocuments}</Text>
      ),
    },
    {
      title: (
        <View>
          <Text style={tw`text-lg font-bold text-red-500`}>High </Text>
          <Text>Risk Docs</Text>
        </View>
      ),
      total: analytics?.highRiskDocuments,
      icon: (
        <Text style={tw`font-bold text-lg`}>
          {analytics?.highRiskDocuments}
        </Text>
      ),
    },

    {
      title: (
        <View>
          <Text style={tw`text-lg font-bold text-yellow-600`}>Medium </Text>
          <Text>Risk Docs</Text>
        </View>
      ),
      icon: (
        <Text style={tw`font-bold text-lg`}>
          {analytics?.mediumRiskDocuments}
        </Text>
      ),
    },
  ];

  return (
    <GestureHandlerRootView>
      <BottomSheetModalProvider>
        <SafeAreaView style={tw`flex flex-1 grow pb-4  px-2 bg-white`}>
          <HeaderWidget />
          <View style={tw`flex-row  flex-wrap justify-between`}>
            {data.map((item) => {
              return (
                <View style={tw`w-[49%] py-2 rounded-xl`}>
                  <Widget icon={item.icon} title={item.title} />
                </View>
              );
            })}
          </View>
          <View style={tw`flex flex-1 bg-white rounded-md p-2 mt-2`}>
            <View style={tw`grow`}>
              <Text style={tw`text-xl font-light `}>Recent Reports</Text>
              <View style={tw`flex grow bg-white py-2`}>
                {allLegalDocs.length < 1 && (
                  <View
                    style={tw`flex flex-col flex-1 justify-center items-center`}
                  >
                    <NoteBookIcon width={40} height={40} color="#1e2424" />
                    <Text style={tw`font-semibold text-xl text-center`}>
                      No Reports Yet.
                    </Text>
                  </View>
                )}
                {allLegalDocs.length > 0 && (
                  <FlashList
                    refreshControl={
                      <RefreshControl
                        refreshing={refreshing}
                        onRefresh={onRefresh}
                      />
                    }
                    data={allLegalDocs}
                    renderItem={({ item }) => (
                      <Pressable
                        style={tw`flex flex-1 flex-row justify-start gap-2 items-center mb-3 bg-[#f2f2f2] p-2 rounded-md`}
                        onPress={() => {
                          AppEntity.set((state) => {
                            return {
                              ...state,
                              analysis: item.id,
                            };
                          });
                          navigation.navigate("Details");
                        }}
                      >
                        <View style={tw`flex w-full`}>
                          <Text style={tw`text-xl font-light`}>
                            {item.title}
                          </Text>
                          <Text style={tw`font-semibold`}>
                            {formatDateOnly(item.date_created)}
                          </Text>
                        </View>
                      </Pressable>
                    )}
                    contentContainerStyle={tw`border-2 flex flex-1`}
                    estimatedItemSize={15}
                    onEndReached={handleLoadMore}
                    onEndReachedThreshold={0.5}
                  />
                )}
              </View>
            </View>
          </View>
          <FloatingButton
            onPress={() => {
              setModalVisible(true);
            }}
            content={<AddIcon color={"white"} width={24} height={24} />}
          />
          <BottomSheet
            isActive={modalVisible}
            height={"45%"}
            closeModal={() => setModalVisible(false)}
          >
            <View style={tw`flex flex-col gap-2 flex-1 px-4 py-2`}>
              <Text style={tw`text-2xl  mb-3`}>Quick Actions</Text>

              {actions.map((item, index) => (
                <ListItem
                  key={index}
                  containerStyle={item.containerStyle}
                  component={item.component}
                  icon={item.icon}
                  onPress={item.onPress}
                />
              ))}
            </View>
          </BottomSheet>
          <BottomSheet
            isActive={textModalVisible}
            height={"65%"}
            enableDynamicSizing={false}
            enableSnap={true}
            closeModal={() => setTextModalVisible(false)}
          >
            <View style={tw`flex flex-col gap-2 flex-1 px-4 py-2`}>
              <Text style={tw`text-2xl  mb-3`}>Quick Actions</Text>

              <Formik
                initialValues={{ text: "" }}
                validationSchema={TextInputSchema}
                onSubmit={(values, { setSubmitting }) => {
                  AppEntity.set((state) => {
                    return {
                      ...state,
                      format: "text",
                      data: values.text,
                    };
                  });
                  navigation.navigate("Loading");
                }}
              >
                {({
                  handleChange,
                  handleBlur,
                  handleSubmit,
                  isSubmitting,
                  errors,
                  touched,
                }) => (
                  <View style={tw`mb-4`}>
                    <TextInput
                      title="Paste Legal Text"
                      name="text"
                      placeholder="Enter up to 5000 characters"
                      containerStyle="h-20 bg-[#f1f1f1] rounded-lg p-2"
                      style="border-0 border-[transparent] bg-[#f1f1f1] rounded-lg p-2"
                      multiline={true}
                      maxLength={5000}
                      onChangeText={handleChange("text")}
                      onBlur={handleBlur("text")}
                    />
                    {touched.text && errors.text && (
                      <Text style={tw`text-red-500 text-sm`}>
                        {errors.text}
                      </Text>
                    )}
                    <Button
                      style="mt-2 rounded-lg"
                      onPress={handleSubmit}
                      isDisabled={isSubmitting}
                    >
                      <View
                        style={tw`flex flex-row items-center px-5 gap-2 py-2 justify-center`}
                      >
                        {isSubmitting && (
                          <ActivityIndicator size="small" color="#fff" />
                        )}
                        <Text style={tw`text-white text-lg`}>Submit Text</Text>
                      </View>
                    </Button>
                  </View>
                )}
              </Formik>
            </View>
          </BottomSheet>
          <BottomSheet
            isActive={urlModalVisible}
            height={"45%"}
            enableDynamicSizing={false}
            enableSnap={true}
            closeModal={() => setUrlModalVisible(false)}
          >
            <View style={tw`flex flex-col gap-2 flex-1 px-4 py-2`}>
              <Text style={tw`text-2xl  mb-3`}>Quick Actions</Text>
              <Formik
                initialValues={{ url: "" }}
                validationSchema={UrlSchema}
                onSubmit={(values, { setSubmitting }) => {
                  AppEntity.set((state) => {
                    return {
                      ...state,
                      format: "url",
                      data: values.url,
                    };
                  });
                  navigation.navigate("Loading");
                }}
              >
                {({
                  handleChange,
                  handleBlur,
                  handleSubmit,
                  isSubmitting,
                  errors,
                  touched,
                }) => (
                  <View style={tw`mb-4`}>
                    <TextInput
                      title="Enter URL"
                      name="url"
                      placeholder="https://example.com/terms"
                      containerStyle="bg-[#f1f1f1] rounded-lg p-2"
                      style="border-0 border-[transparent] bg-[#f1f1f1] rounded-lg p-2"
                      onChangeText={handleChange("url")}
                      onBlur={handleBlur("url")}
                    />
                    {touched.url && errors.url && (
                      <Text style={tw`text-red-500 text-sm`}>{errors.url}</Text>
                    )}
                    <Button
                      style="mt-2 rounded-lg"
                      onPress={handleSubmit}
                      isDisabled={isSubmitting}
                    >
                      <View
                        style={tw`flex flex-row items-center px-5 gap-2 py-2 justify-center`}
                      >
                        {isSubmitting && (
                          <ActivityIndicator size="small" color="#fff" />
                        )}
                        <Text style={tw`text-white text-lg`}>Submit URL</Text>
                      </View>
                    </Button>
                  </View>
                )}
              </Formik>
            </View>
          </BottomSheet>
        </SafeAreaView>
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  );
};

export default Dashboard;
