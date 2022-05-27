import { config } from "~/config";

type FeatureKey = keyof typeof config["features"];

export function isFeatureEnabled(feature: FeatureKey): boolean {
  return !!config.features[feature];
}
