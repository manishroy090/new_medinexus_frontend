export type CountryTax = {
  tax_name: string;               // local name of the main consumption tax
  tax_type: "VAT" | "GST" | "SALES" | "CONSUMPTION" | "OTHER";
  tax_rate: number | null;        // standard national rate in %, null if not a single flat rate
  tax_inclusive_pricing: boolean; // true if consumer prices are normally shown tax-inclusive
  tax_id_label: string;           // what the business tax ID is called locally
  tax_id_format: string;          // 9 = digit, A = letter, other characters literal
};

export const countryTaxes: Record<string, CountryTax> = {
  NP: { tax_name: "VAT", tax_type: "VAT", tax_rate: 13, tax_inclusive_pricing: true, tax_id_label: "PAN / VAT No.", tax_id_format: "999999999" },
  IN: { tax_name: "GST", tax_type: "GST", tax_rate: 18, tax_inclusive_pricing: true, tax_id_label: "GSTIN", tax_id_format: "99AAAAA9999A9A9" },
  TH: { tax_name: "VAT", tax_type: "VAT", tax_rate: 7, tax_inclusive_pricing: true, tax_id_label: "Tax ID", tax_id_format: "9999999999999" },
  GB: { tax_name: "VAT", tax_type: "VAT", tax_rate: 20, tax_inclusive_pricing: true, tax_id_label: "VAT Number", tax_id_format: "GB999999999" },
  PH: { tax_name: "VAT", tax_type: "VAT", tax_rate: 12, tax_inclusive_pricing: true, tax_id_label: "TIN", tax_id_format: "999-999-999-999" },
  CA: { tax_name: "GST/HST", tax_type: "GST", tax_rate: 5, tax_inclusive_pricing: false, tax_id_label: "Business Number (GST/HST)", tax_id_format: "999999999RT9999" },
  DE: { tax_name: "MwSt (VAT)", tax_type: "VAT", tax_rate: 19, tax_inclusive_pricing: true, tax_id_label: "USt-IdNr.", tax_id_format: "DE999999999" },
  NA: { tax_name: "VAT", tax_type: "VAT", tax_rate: 15, tax_inclusive_pricing: true, tax_id_label: "VAT Registration No.", tax_id_format: "" },
  SS: { tax_name: "", tax_type: "OTHER", tax_rate: null, tax_inclusive_pricing: false, tax_id_label: "TIN", tax_id_format: "" },
  BR: { tax_name: "ICMS / ISS / IPI", tax_type: "OTHER", tax_rate: null, tax_inclusive_pricing: true, tax_id_label: "CNPJ", tax_id_format: "99.999.999/9999-99" },
  AU: { tax_name: "GST", tax_type: "GST", tax_rate: 10, tax_inclusive_pricing: true, tax_id_label: "ABN", tax_id_format: "99 999 999 999" },
  ES: { tax_name: "IVA (VAT)", tax_type: "VAT", tax_rate: 21, tax_inclusive_pricing: true, tax_id_label: "NIF / CIF", tax_id_format: "A99999999" },
  AR: { tax_name: "IVA (VAT)", tax_type: "VAT", tax_rate: 21, tax_inclusive_pricing: true, tax_id_label: "CUIT", tax_id_format: "99-99999999-9" },
  JP: { tax_name: "Consumption Tax", tax_type: "CONSUMPTION", tax_rate: 10, tax_inclusive_pricing: true, tax_id_label: "Invoice Registration No.", tax_id_format: "T9999999999999" },
  KR: { tax_name: "VAT", tax_type: "VAT", tax_rate: 10, tax_inclusive_pricing: true, tax_id_label: "Business Registration No.", tax_id_format: "999-99-99999" },
};