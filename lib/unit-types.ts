export type LocalizedString = { ar?: string; en?: string };

export interface Unit {
  schema_version: string;
  policies?: Record<string, any>;
  project_slug: string;
  unit_code: string;
  building_slug?: string;
  typology_slug?: string;
  unit_no?: string | number;
  floor_no?: string | number;
  status?: string;
  title?: LocalizedString;
  area?: {
    net?: { sqft?: number | string; sqm?: number | string };
    gross?: { sqft?: number | string; sqm?: number | string };
  };
  pricing?: {
    currency?: string;
    list_price?: number | string;
    last_sold_price?: number | string;
    promo_price?: number | string;
    payment_plan?: string;
  };
  views?: string[];
  media?: { images?: string[]; floorplan?: string[] };
  documents?: { brochure?: string[]; floorplan_pdf?: string[] };
  contact_points?: Array<{ phone?: string; email?: string }>;
  coordinates?: { lat?: number; lng?: number };
  meta?: Record<string, any>;
}

