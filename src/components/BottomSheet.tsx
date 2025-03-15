import {
  BottomSheetBackdrop,
  BottomSheetModal,
  BottomSheetScrollView,
} from "@gorhom/bottom-sheet";
import React, {
  ReactNode,
  RefObject,
  useCallback,
  useEffect,
  useMemo,
  useRef,
} from "react";
import { View } from "react-native";
import tw from "twrnc";

const BottomSheet = ({
  children,
  closeModal,
  disableBackDrop = false,
  height = "50%",
  ref,
  isActive = false,
  removeTopHandle = false,
  disableScroll = false,
  enableSnap = false,
  enableDynamicSizing = true,
}: {
  enableDynamicSizing?: boolean;
  children: ReactNode;
  closeModal?: Function;
  isActive?: boolean;
  disableBackDrop?: boolean;
  height?: string | number;
  ref?: RefObject<BottomSheetModal>;
  removeTopHandle?: boolean;
  disableScroll?: boolean;
  enableSnap?: boolean;
}) => {
  const internalModalRef = useRef<BottomSheetModal>(null);
  const effectiveModalRef = ref ?? internalModalRef;
  // variables
  const snapPoints = useMemo(() => ["1%", height], [height]);

  useEffect(() => {
    if (isActive) {
      effectiveModalRef?.current?.present();
    } else {
      effectiveModalRef?.current?.forceClose();
    }
  }, [isActive]);

  // callbacks
  const handleSheetChanges = useCallback(
    (index: number) => {
      if (index === -1) {
        closeModal?.();
      }
    },
    [closeModal]
  );

  // renders
  const renderBackdrop = useCallback(
    (props: any) => (
      <BottomSheetBackdrop
        {...props}
        appearsOnIndex={1}
        opacity={0.3}
        enableTouchThrough={disableBackDrop}
        pressBehavior={disableBackDrop ? "none" : closeModal ? "close" : "none"}
      />
    ),
    [disableBackDrop, closeModal]
  );

  // renders
  return (
    <BottomSheetModal
      detached={true}
      enableDynamicSizing={enableDynamicSizing}
      onDismiss={() => {
        closeModal?.();
      }}
      style={{
        backgroundColor: "#fff",
        elevation: 10,
        flex: 1,
      }}
      containerStyle={{
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        flex: 1,
      }}
      //@ts-ignore
      ref={effectiveModalRef}
      backdropComponent={renderBackdrop}
      snapPoints={snapPoints}
      onChange={handleSheetChanges}
      enableOverDrag={false}
      index={1}
      enableContentPanningGesture={enableSnap}
      enableHandlePanningGesture={enableSnap}
      keyboardBehavior="interactive"
      keyboardBlurBehavior="restore"
      android_keyboardInputMode="adjustPan"
      handleIndicatorStyle={
        removeTopHandle
          ? { height: 0, width: 0, backgroundColor: "transparent" }
          : undefined
      }
    >
      {disableScroll ? (
        <View style={tw``}>{children}</View>
      ) : (
        <BottomSheetScrollView style={tw`bg-white flex-1 grow`}>
          {children}
        </BottomSheetScrollView>
      )}
    </BottomSheetModal>
  );
};

export default BottomSheet;
