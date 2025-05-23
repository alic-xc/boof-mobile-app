import {
  adapty,
  AdaptyError,
  AdaptyProfile,
  ErrorCode,
  getErrorCode,
} from "react-native-adapty";
import { createPaywallView } from "@adapty/react-native-ui";
import { Alert } from "react-native";
import * as SecureStore from "expo-secure-store";
import { AppEntity } from "../state/app-entity";
import { BASE_URL } from "./constants";
import { Adapty } from "react-native-adapty/dist/adapty-handler";

interface SubscriptionStatus {
  type: "weekly" | "monthly" | "yearly" | "none";
  isActive: boolean;
  expiryDate?: string;
  isTrial?: boolean;
  credit_remaining: number;
}

// Fetch subscription status from server
export const getSubscriptionStatus = async () => {
  try {
    const { session } = AppEntity.get();
    const token = session?.access_token;
    if (!token) {
      console.log("No auth token found, user may not be logged in.");
      return { type: "none", isActive: false };
    }
    const url = BASE_URL + "/api/user/subscription";
    const response = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) throw new Error("Failed to fetch subscription status");
    const data = await response.json();
    console.log("iopop", data);
    return {
      credit_remaining: data.credits_remaining,
      type:
        data.subscriptions.length > 0
          ? data.subscriptions[0].product_id.split(".").pop().toLowerCase()
          : "none",
      isActive:
        data.subscriptions.length > 0 &&
        data.subscriptions[0].status === "active",
      expiryDate:
        data.subscriptions.length > 0
          ? data.subscriptions[0].end_date
          : undefined,
      isTrial:
        data.subscriptions.length > 0 ? data.subscriptions[0].is_trial : false,
    };
  } catch (error) {
    console.error("Failed to get subscription status:", error);
    return { type: "none", isActive: false };
  }
};

export const syncSubscriptionWithServer = async () => {
  try {
    const { session } = AppEntity.get();
    const token = session?.access_token;
    if (!token) throw new Error("User not logged in, cannot sync subscription");

    const profile = await adapty.getProfile();
    await adapty.identify(profile.profileId);
    const activeAccessLevel = Object.values(profile?.accessLevels).find(
      (level: any) => level.isActive
    );

    if (!activeAccessLevel) {
      console.log("No active subscription to sync");
      return;
    }

    const isSubscribed = activeAccessLevel.isActive || false;
    const isTrial =
      activeAccessLevel.isLifetime === false &&
      activeAccessLevel.isInTrialPeriod === true;
    const productId = activeAccessLevel.vendorProductId;

    if (!isSubscribed || !productId) {
      console.log("No active subscription to sync");
      return;
    }

    const url = BASE_URL + "/api/user/verify-subscription";
    const response = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        adapty_profile_id: profile.profileId,
        is_trial: isTrial,
      }),
    });
    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Failed to sync subscription with server: ${errorText}`);
    }

    console.log("Subscription synced successfully");
  } catch (error) {
    console.error("Failed to sync subscription:", error);
  }
};
// Trigger paywall (to be called from dashboard)
// export const subscriber = async () => {
//   try {
//     const placementId = "boof";
//     const paywall = await adapty.getPaywall(placementId, "EN");
//     if (paywall.hasViewConfiguration) {
//       const view = await createPaywallView(paywall);
//       view.registerEventHandlers({
//         onPurchaseStarted: async (product) => {
//           try {
//             const payment = await adapty.makePurchase(product, {});
//             if (payment) {
//               console.log(
//                 "Purchase Successful",
//                 "Thank you for your purchase!"
//               );
//               const { session } = AppEntity.get();
//               const token = session?.access_token;
//               if (token) {
//                 // If user is logged in, notify server immediately
//                 const profile = await adapty.getProfile();
//                 await adapty.identify(profile.profileId);
//                 profile.profileId;

//                 const activeAccessLevel = Object.values(
//                   profile?.accessLevels
//                 ).find((level: any) => level.isActive);
//                 const isTrial = activeAccessLevel.isInGracePeriod || false;
//                 const productId = activeAccessLevel.vendorProductId;
//                 await notifyServer(profile.profileId, isTrial);
//               } else {
//                 // If not logged in, sync will happen later
//                 console.log(
//                   "User not logged in, subscription will sync on login"
//                 );
//               }
//               const result = await getSubscriptionStatus();
//               if (result.isActive) view.dismiss();
//             }
//           } catch (error) {
//             if (
//               error instanceof AdaptyError &&
//               error.adaptyCode === getErrorCode(ErrorCode["2"])
//             ) {
//               // Payment cancelled
//             } else {
//               console.error("Purchase error:", error);
//             }
//           }
//         },
//         onRestoreCompleted: async () => {
//           const result = await getSubscriptionStatus();
//           if (result.isActive) {
//             console.log(
//               "Purchase Restored",
//               "Your previous purchases have been restored successfully."
//             );
//           } else {
//             console.log("No active subscription found after restore");
//           }
//         },
//       });
//       await view.present();
//     }
//   } catch (error) {
//     Alert.alert("Error", "Failed to load paywall. Please try again.");
//     console.error("Paywall error:", error);
//   }
// };

export const subscriber = async () => {
  return new Promise(async (resolve, reject) => {
    try {
      const placementId = "boof";
      const paywall = await adapty.getPaywall(placementId, "EN");

      if (paywall.hasViewConfiguration) {
        const view = await createPaywallView(paywall);

        view.registerEventHandlers({
          onPurchaseStarted: async (product) => {
            try {
              const payment = await adapty.makePurchase(product, {});
              if (payment) {
                console.log(
                  "Purchase Successful",
                  "Thank you for your purchase!"
                );

                const { session } = AppEntity.get();
                const token = session?.access_token;

                if (token) {
                  // If user is logged in, notify the server immediately
                  const profile = await adapty.getProfile();
                  await adapty.identify(profile.profileId);

                  const activeAccessLevel = Object.values(
                    profile?.accessLevels
                  ).find((level) => level.isActive);

                  const isTrial = activeAccessLevel.isInGracePeriod || false;
                  await notifyServer(profile.profileId, isTrial);
                } else {
                  console.log(
                    "User not logged in, subscription will sync on login"
                  );
                }
                const result = await getSubscriptionStatus();
                if (result.isActive) {
                  view.dismiss();
                  // ✅ Resolve only if payment is successful
                }
                resolve(true);
              }
            } catch (error) {
              if (
                error instanceof AdaptyError &&
                error.adaptyCode === getErrorCode(ErrorCode["2"])
              ) {
                console.log("Payment cancelled by user");
                resolve(false); // ✅ Resolve, but indicate failure
              } else {
                console.error("Purchase error:", error);
                resolve(false); // ❌ Reject on other errors
              }
            }
          },
          onRestoreCompleted: async () => {
            const result = await getSubscriptionStatus();
            if (result.isActive) {
              console.log(
                "Purchase Restored",
                "Your purchases have been restored."
              );
              resolve(true); // ✅ Resolve after restoration
            } else {
              console.log("No active subscription found after restore");
              resolve(false);
            }
          },
          onCloseButtonPress: async () => {
            resolve(false);
          },
        });

        await view.present();
      }
    } catch (error) {
      Alert.alert("Error", "Failed to load paywall. Please try again.");
      console.error("Paywall error:", error);
      reject(error);
    }
  });
};

// Notify server about purchase (only if user is logged in)
const notifyServer = async (productId: string, isTrial: boolean) => {
  try {
    const { session } = AppEntity.get();
    const token = session?.access_token;
    if (!token) {
      console.log("User not logged in, skipping server notification");
      return;
    }

    const purchaseType = productId.split(".").pop().toLowerCase();
    const response = await fetch(BASE_URL + "/api/user/verify-subscription", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        adapty_profile_id: await adapty.getProfile().then((p) => p.profileId),
        purchase_type: purchaseType,
        is_trial: isTrial,
      }),
    });

    if (!response.ok) throw new Error("Failed to notify server");
    console.log("Server notified of purchase");
  } catch (error) {
    console.error("Failed to notify server:", error);
  }
};

// Check if user has active subscription
export const checkActiveSubscription = async (
  activateSub = true
): Promise<SubscriptionStatus> => {
  try {
    const status = await getSubscriptionStatus();
    if (!status.isActive && activateSub) {
      await subscriber();
      return await getSubscriptionStatus(); // Check again after attempting subscription
    }
    return status;
  } catch (error) {
    console.error("Error checking subscription status:", error);
    return { type: "none", isActive: false };
  }
};
