import { Schema, model, Document } from "mongoose";
import { IPortfolio } from "../interfaces/IPortfolio";

export type PortfolioModelInterface = IPortfolio & Document;

const PorfolioSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },

    url: {
      type: String,
      required: true,
    },

    description: {
      type: String,
    },

    languages: {
      type: Schema.Types.Array,
    },

    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

export default model<PortfolioModelInterface>("Portfolio", PorfolioSchema);
