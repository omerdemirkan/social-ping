export interface KeywordPopularity {
  date: Date;
  value: number;
  nWeekLow?: number;
  nWeekHigh?: number;
}

export interface KeywordAudit {
  keyword: string;
  timeline: KeywordPopularity[];
  nWeekLow: number;
  nWeekHigh: number;
}

export interface FetchKeywordPopularityTimelineOptions {
  weeks?: number;
  trendWeekClearance?: number;
}
