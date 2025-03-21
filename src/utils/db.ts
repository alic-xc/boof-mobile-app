import * as SQLite from "expo-sqlite";
import { drizzle, ExpoSQLiteDatabase } from "drizzle-orm/expo-sqlite";
import * as schema from "../../db/schema";

// Singleton pattern for the SQLite database instance
let db:
  | (ExpoSQLiteDatabase<Record<string, never>> & {
      $client: SQLite.SQLiteDatabase;
    })
  | null = null;

// Function to get the database instance
export const getDbInstance = () => {
  if (!db) {
    // Open the database if it's not already initialized
    const expo = SQLite.openDatabaseSync("boof-assistant");
    db = drizzle(expo);
  }
  return db;
};
