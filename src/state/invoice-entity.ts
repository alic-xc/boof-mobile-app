import { entity } from "simpler-state";
import { IInvoiceEntity } from "../types/invoice-types";

export const InvoiceEntity = entity<IInvoiceEntity>({
  invoiceSetup: {
    number: "",
    dueDate: "",
  },
  selectedClient: "",
  selectedProducts: [],
  selectedTaxes: [],
  selectedDiscounts: [],
  selectedSignature: "",
  note: "",
  is_form_verified: {
    isInvoiceSetup: false,
    isClientSelected: false,
    isProductsSelected: false,
    isSignatureAdded: false,
    isPaymentAdded: false,
    isNoteAdded: false,
    isTaxesSetup: false,
    isDiscountSetup: false,
  },
});
