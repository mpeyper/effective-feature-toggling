import { Slide } from "~/ui/slide";
import { SlideHeader } from "~/ui/typography/slide-header";
import { CodeExample } from "~/ui/code-example";
import { SideBySide } from "~/ui/layout/side-by-side";
import { DotPoints } from "~/ui/typography/dot-points";
import { Stacked } from "~/ui/layout/stacked";

const points = [
  "Improves readability of the code",
  "Can change implementation more easily",
  "Typed feature keys prevent mistakes and make cleanup easier",
];

const isFeatureEnabledExample = `
const features = {
  MY_COOL_FEATURE: true,
};

type FeatureKey = keyof typeof features;

function isFeatureEnabled(feature: FeatureKey): boolean {
  return !!features[feature];
}
`;

const usageExample = `
if (isFeatureEnabled('MY_COOL_FEATURE')) {
  // do the cool thing
} else {
  // do the clunky thing
}
`;

export function EncapsulateChecks() {
  return (
    <Slide>
      <SlideHeader>Tip — Encapsulate checks</SlideHeader>
      <SideBySide
        columns={10}
        leftSpan={4}
        rightSpan={6}
        left={<DotPoints points={points} />}
        right={
          <Stacked>
            <CodeExample code={isFeatureEnabledExample} />
            <CodeExample code={usageExample} />
          </Stacked>
        }
      />
    </Slide>
  );
}
