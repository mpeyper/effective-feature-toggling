import { Slide } from "~/ui/slide";
import { SlideHeader } from "~/ui/typography/slide-header";
import { CodeExample } from "~/ui/code-example";
import { SideBySide } from "~/ui/layout/side-by-side";
import { DotPoints } from "~/ui/typography/dot-points";

const points = [
  "Simple",
  "The smallest unit of toggle",
];

const toggleConfig = `
MY_COOL_FEATURE=true
MY_OTHER_COOL_FEATURE=false
`;

export function BooleanToggles() {
  return (
    <Slide>
      <SlideHeader>Boolean toggles</SlideHeader>
      <SideBySide
        left={<DotPoints points={points} />}
        right={<CodeExample code={toggleConfig} language='ini' />}
      />
    </Slide>
  );
}
