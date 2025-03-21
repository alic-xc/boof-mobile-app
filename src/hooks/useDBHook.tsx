// hooks/useDBHook.ts
import { useEffect, useState } from "react";
import { useSQLiteContext } from "expo-sqlite";
import { drizzle } from "drizzle-orm/expo-sqlite";
import { eq } from "drizzle-orm";
import { legal, Legal, InsertLegal } from "../../db/schema";
import { LegalAnalysis } from "../types/app-types";
import { AppEntity } from "../state/app-entity";

const useDBHook = () => {
  const db = useSQLiteContext();
  const query = drizzle(db, { schema: { legal } });
  const [allLegalDocs, setAllLegalDocs] = useState<Legal[]>([]);
  const [singleLegalDoc, setSingleLegalDoc] = useState<Legal | undefined>(
    undefined
  );
  const [analytics, setAnalytics] = useState<Record<string, number>>({});
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const ITEMS_PER_PAGE = 15;

  useEffect(() => {
    getAnalytics();
  }, []);

  const getAnalytics = async () => {
    try {
      setLoading(true);
      const totalReports = await query.$count(legal);
      const lowRiskDocuments = await query.$count(
        legal,
        eq(legal.overall_severity, "low")
      );
      const highRiskDocuments = await query.$count(
        legal,
        eq(legal.overall_severity, "high")
      );
      const mediumRiskDocuments = await query.$count(
        legal,
        eq(legal.overall_severity, "medium")
      );

      setAnalytics({
        totalReports,
        lowRiskDocuments,
        mediumRiskDocuments,
        highRiskDocuments,
      });
    } catch (error) {
      console.error("Get legal analytics error:", error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  // Fetch all legal documents
  const getAllLegalDocs = async () => {
    try {
      setLoading(true);
      const result = await query.query.legal.findMany({
        orderBy: (legal, { desc }) => [desc(legal.date_created)],
        limit: ITEMS_PER_PAGE,
        offset: (page - 1) * ITEMS_PER_PAGE,
      });

      if (page === 1) {
        setAllLegalDocs(result);
      } else {
        setAllLegalDocs((prev) => [...prev, ...result]);
      }
      setHasMore(result.length === ITEMS_PER_PAGE);
    } catch (error) {
      console.error("Get all legal docs error:", error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  // Fetch a single legal document by ID
  const getLegalDoc = async (id: number) => {
    try {
      const legalDoc = await query.query.legal.findFirst({
        where: eq(legal.id, id),
      });
      setSingleLegalDoc(legalDoc);
      return legalDoc;
    } catch (error) {
      console.error("Get legal doc error:", error);
      throw error;
    }
  };

  // Save a new legal document
  const saveLegalDoc = async ( analysis: LegalAnalysis) => {
    try {
      const legalData: InsertLegal = {
        title: analysis.summary.title,
        document_type: analysis.summary.documentType,
        overall_rating: analysis.summary.overallRating,
        overall_severity: analysis.summary.overallSeverity,
        risk_score: analysis.summary.riskScore,
        fairness_score: analysis.fairness.score,
        content: JSON.stringify(analysis), // Store as JSON string
        date_created: new Date(), // Unix timestamp in seconds
      };

      await query.transaction(async (tx) => {
        await tx
          .insert(legal)
          .values(legalData)
          .then((data) => {
            AppEntity.set((state) => {
              return {
                ...state,
                analysis: data.lastInsertRowId,
              };
            });
          });
      });

      return true;
    } catch (error) {
      console.error("Save legal doc error:", error);
      throw error;
    }
  };

  // Update an existing legal document
  const updateLegalDoc = async (
    id: number,
    title: string,
    analysis: LegalAnalysis
  ) => {
    try {
      await query.transaction(async (tx) => {
        await tx
          .update(legal)
          .set({
            title,
            content: JSON.stringify(analysis),
          })
          .where(eq(legal.id, id));
      });
      await getAllLegalDocs(); // Refresh list
      return true;
    } catch (error) {
      console.error("Update legal doc error:", error);
      throw error;
    }
  };

  // Delete a legal document
  const deleteLegalDoc = async (id: number) => {
    try {
      await query.transaction(async (tx) => {
        await tx.delete(legal).where(eq(legal.id, id));
      });
      await getAllLegalDocs(); // Refresh list
      return true;
    } catch (error) {
      console.error("Delete legal doc error:", error);
      throw error;
    }
  };

  // Load more documents for pagination
  const handleLoadMore = () => {
    if (!loading && hasMore) {
      setPage((prev) => prev + 1);
      getAllLegalDocs();
    }
  };

  return {
    saveLegalDoc,
    getAllLegalDocs,
    updateLegalDoc,
    getLegalDoc,
    deleteLegalDoc,
    handleLoadMore,
    analytics,
    allLegalDocs,
    singleLegalDoc,
    loading,
    hasMore,
  };
};

export default useDBHook;
