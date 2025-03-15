import { View, Text, Alert } from "react-native";
import React, { useLayoutEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import tw from "twrnc";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import BottomSheet from "../components/BottomSheet";
import ListItem from "../components/ListItem";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { ListItemProps } from "../types/dashboard";
import { AddIcon, CameraIcon, LinkIcon, PDFIcon } from "../icons";
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

const HAS_SHOWN_RATING_KEY = "hasShownRating";
const HAS_CONVERTED_PDF_KEY = "hasConvertedPDF";

const Dashboard = () => {
  const { session } = AppEntity.use();
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const [modalVisible, setModalVisible] = React.useState<boolean>(false);
  const [isLoading, setIsLoading] = React.useState(false);

  const [isCompletionModalVisible, setIsCompletionModalVisible] =
    React.useState(false);
  const [selectedImages, setSelectedImages] = React.useState<
    ImagePickerAsset[]
  >([]);
  const [selectedImage, setSelectedImage] =
    React.useState<ImagePickerAsset | null>();
  const [fileSize, setFileSize] = React.useState<number>(0);
  const [refreshing, setRefreshing] = React.useState(false);
  const [selectedPdf, setSelectedPdf] = React.useState(null);
  const [selectedPdfToSend, setSelectedPdfToSend] = React.useState([]);
  const [pdfPages, setPdfPages] = React.useState([]);
  const [showForm, setShowForm] = React.useState(false);
  const [isProcessing, setIsProcessing] = React.useState(false);
  const [capturedPages, setCapturedPages] = React.useState([]);
  const [canExport, setCanExport] = React.useState<boolean>(false);

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
        navigation.navigate("Img-converter");
        setModalVisible(false);
      },
      icon: <PDFIcon width={30} height={30} />,
    },
    {
      component: (
        <View style={tw``}>
          <Text style={tw`text-xl`}>Scan Document</Text>
          <Text style={tw`text-sm mt-1 `}>
            You can scan Document in Image format
          </Text>
        </View>
      ),
      containerStyle: "bg-[#f1f1f1]",
      onPress: () => {
        setModalVisible(false);
      },
      icon: <CameraIcon color={colors.primary} width={30} height={30} />,
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
        setModalVisible(false);
      },
      icon: <LinkIcon color={colors.primary} width={30} height={30} />,
    },
  ];

  const captureAndProcessImage = async () => {
    try {
      const { scannedImages } = await DocumentScanner.scanDocument({
        croppedImageQuality: 100,
        maxNumDocuments: imageSelectLimitPerMonth,
      });

      if (!scannedImages || scannedImages.length === 0) {
        console.log("No document scanned.");
        return;
      }

      const newImages = await Promise.all(
        scannedImages.map(async (imageUri, index) => {
          const fileName = `scanned_doc_${Date.now()}_${index}.jpg`;
          const metadata = await FileSystem.getInfoAsync(imageUri);
          const cachedUri = `${FileSystem.cacheDirectory}${fileName}`;
          // Copy to cache directory
          await FileSystem.copyAsync({ from: imageUri, to: cachedUri });
          const imageInfo = await ImageManipulator.manipulateAsync(cachedUri);

          return {
            uri: cachedUri,
            fileName,
            type: "image",
            width: imageInfo.width, // Default width if not available
            height: imageInfo.height, // Default height if not available
            fileSize: metadata.size,
          };
        })
      );

      setSelectedImages((prevImages) => [...prevImages, ...newImages]);

      console.log("Scanned Images added:", newImages);
    } catch (error) {
      console.error("Error scanning document:", error);
    }
  };

  const pickPDF = async () => {
    try {
      const result = await pick({
        type: [types.pdf],
      });

      if (result[0]) {
        const fileName = `uploaded_doc_${Date.now()}.pdf`;
        const cachedUri = `${FileSystem.cacheDirectory}${fileName}`;
        await FileSystem.copyAsync({ from: result[0].uri, to: cachedUri });
        setSelectedPdf({
          uri: cachedUri,
          name: fileName,
        });
      }
    } catch (error) {
      Alert.alert("Error", "Failed to pick PDF file");
      console.error(error);
    }
  };

  const onRefresh = React.useCallback(async () => {
    setRefreshing(true);
    setRefreshing(false);
  }, []);

  return (
    <GestureHandlerRootView>
      <BottomSheetModalProvider>
        <SafeAreaView style={tw`flex flex-1 grow pb-4  px-2 bg-white`}>
          <HeaderWidget />
          <View style={tw`flex flex-1 bg-white rounded-md p-2 mt-2`}></View>
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
            isActive={}
            height={"65%"}
            enableDynamicSizing={false}
            closeModal={() => {
              setSetupFormModal(false);
            }}
          >
            <View style={tw`flex flex-col gap-2 flex-1 px-4 py-2`}>
              <Text style={tw`text-2xl  mb-3`}>Quick Product Setup</Text>
              <Formik
                initialValues={{
                  title: "",
                  description: "",
                  type: "mobile_app",
                  tone: "marketing",
                }}
                validationSchema={ProductSetupSchema}
                validateOnBlur={true}
                enableReinitialize={true}
                onSubmit={async (values, { resetForm, setSubmitting }) => {
                  const response = createProduct({
                    ...values,
                    userId: session?.user.id as string,
                  });
                  response
                    .then((res) => {
                      if (res) {
                      }
                    })
                    .finally(() => {
                      setSubmitting(false);
                    });
                }}
              >
                {({ handleSubmit, values }) => (
                  <View
                    style={tw`flex flex-1 grow gap-2 flex-col justify-between`}
                  >
                    <View
                      style={tw`flex flex-1 grow gap-3 flex-col justify-start`}
                    >
                      {/* Title Input */}
                      <TextInput
                        title="Title"
                        name="title"
                        placeholder="Https://"
                        style="bg-gray-100 rounded-md border-[transparent]"
                        containerStyle="h-[45px] rounded-[0px]"
                      />
                    </View>

                    {/* Proceed Button */}
                    <Button style="rounded-md mt-3 py-2" onPress={handleSubmit}>
                      <View style={tw`text-center`}>
                        <Text style={tw`text-white text-center text-lg`}>
                          Continue
                        </Text>
                      </View>
                    </Button>

                    <SafeAreaView />
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
