import React, { useEffect } from "react";
import { getSimpleStorageDataHandler } from "../utils/simple-storage-helper";

const useOnboardingHook = () => {
  const [isDisplayOnboarding, setIsDisplayOnboarding] = React.useState<
    string | boolean | undefined
  >(false);
  const [loading, setIsLoading] = React.useState<boolean>(true);
  useEffect(() => {
    const data = getSimpleStorageDataHandler("onboarding");
    data
      .then((response) => {
        setIsDisplayOnboarding(response);
      })
      .catch(() => {
        setIsDisplayOnboarding(false);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return { loading, isDisplayOnboarding };
};

export default useOnboardingHook;
