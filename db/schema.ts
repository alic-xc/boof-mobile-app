// db/schema.ts
import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core";

export const legal = sqliteTable("legal", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  title: text("title").notNull(),
  document_type: text("document_type").default(""),
  content: text("content").notNull(),
  risk_score: integer("risk_score").default(0),
  overall_severity: text("overallSeverity").default("medium"),
  overall_rating: integer("overall_rating").default(0),
  fairness_score: integer("fairness_score").default(0),
  date_created: integer("date_created", { mode: "timestamp" }).notNull(),
});

export type Legal = typeof legal.$inferSelect;
export type InsertLegal = typeof legal.$inferInsert;
