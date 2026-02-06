import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: "cnt7gxzs", // Lo encuentras en tu panel de Sanity
  dataset: "production",
  useCdn: true,
  apiVersion: "2024-03-01",
});