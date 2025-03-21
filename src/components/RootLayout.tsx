import { View, Text, ActivityIndicator } from "react-native";
import React, { Suspense } from "react";
import { SQLiteProvider } from "expo-sqlite";
import { useMigrations } from "drizzle-orm/expo-sqlite/migrator";
import migrations from "../../drizzle/migrations";
import { getDbInstance } from "../utils/db";

const RootLayout = (props: any) => {
  const db = getDbInstance();
  const { success, error } = useMigrations(db, migrations);
 
  return (
    <Suspense fallback={<ActivityIndicator size="large" />}>
      <SQLiteProvider
        databaseName="boof-assistant"
        options={{ enableChangeListener: true }}
        useSuspense
      >
        {props.children}
      </SQLiteProvider>
    </Suspense>
  );
};

export default RootLayout;
