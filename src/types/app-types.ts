import { Session } from "@supabase/supabase-js";

export interface IAppEntity {
  email: string;
  step: "otp" | "none";
  session: Session | null;
  onboarding: boolean;
  format: "url" | "pdf" | "text" | "default";
  data: string[];
  url: "";
  analysis: number | null;
}

export interface IUser {
  email: string;
  password: string;
  fullName: string;
  business: string;
}

// LegalAnalysis.ts (or wherever you store types)
export interface LegalAnalysis {
  analysis: {
    summary: {
      overview: string;
      totalClauses: number;
      riskScore: number;
      overallSeverity: "low" | "medium" | "high";
      overallRating: number;
      title: string;
      documentType: string;
    };
    keyPoints: {
      title: string;
      description: string;
      riskLevel: "low" | "medium" | "high";
      compliance: {
        isCompliant: boolean;
        notes: string;
      };
    }[];
    fairness: {
      score: number;
      issues: {
        description: string;
        partyFavored: string;
      }[];
    };
    complianceSummary: {
      country: string;
      issuesCount: number;
      details: string;
    };
    blindSpots: {
      description: string;
      recommendation: string;
    }[];
    metrics: {
      clauseTypes: {
        type: string;
        count: number;
      }[];
      riskDistribution: {
        low: number;
        medium: number;
        high: number;
      };
    };
  };
}
