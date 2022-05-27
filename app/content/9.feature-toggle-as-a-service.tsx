import { useEffect, useState } from "react";
import * as LDClient from "launchdarkly-js-client-sdk";
import { Slide } from "~/ui/slide";
import { SideBySide } from "~/ui/layout/side-by-side";
import { DotPoints } from "~/ui/typography/dot-points";
import { SlideHeader } from "~/ui/typography/slide-header";
import { Stacked } from "~/ui/layout/stacked";
import { config } from "~/config";

const pros = [
  <>
    Any type of toggles you want out
    <br />
    of the box
  </>,
  <>
    Updating toggles is no longer a<br />
    technical task
  </>,
  <>
    Can enabled even more advanced
    <br />
    toggling strategies
  </>,
];

const cons = [
  "It's quite expensive",
  "No on-premise option"
];

const user = {
  name: "Tech Guild",
  key: "learning-together",
};

enum Feature {
  EXTRA_INFORMATION = 'launch-darkly-extra-information'
}

function useFeatureEnabled(feature: Feature) {
  const [isEnabled, setIsEnabled] = useState<boolean | null>(null);

  useEffect(() => {
    const client = LDClient.initialize(config.launchDarklyEnvKey, user);
    client.on(`change:${feature}`, (isEnabled) => {
      setIsEnabled(isEnabled);
    });

    client.on("ready", () => {
      const isEnabled = client.variation(feature, false);
      setIsEnabled(isEnabled);
    });
  }, [feature]);

  return isEnabled
}

export function FeatureToggleAsAService() {
  const isEnabled = useFeatureEnabled(Feature.EXTRA_INFORMATION);

  if (!isEnabled) {
    return (
      <Slide>
        <SlideHeader>Feature toggle as a service</SlideHeader>
        <SideBySide
          left={<DotPoints points={pros} />}
          right={
            <Stacked>
              <img
                alt="LaunchDarkly logo"
                src="https://swingsearch.com/wp-content/uploads/2019/09/launch-darkly-logo-ffe2fd56201aa3b06b59d81367ca3d03.png"
              />
              <p className="font-data text-5xl leading-relaxed">&nbsp;</p>
            </Stacked>
          }
        />
      </Slide>
    );
  }

  return (
    <Slide>
      <SlideHeader>LaunchDarkly</SlideHeader>
      <SideBySide
        left={<DotPoints points={pros} color="text-slate-600" />}
        right={
          <Stacked>
            <img
              alt="LaunchDarkly logo"
              src="https://swingsearch.com/wp-content/uploads/2019/09/launch-darkly-logo-ffe2fd56201aa3b06b59d81367ca3d03.png"
            />
            <DotPoints points={cons} />
          </Stacked>
        }
      />
    </Slide>
  );
}
