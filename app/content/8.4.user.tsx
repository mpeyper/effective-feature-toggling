import { Slide } from "~/ui/slide";
import { SlideHeader } from "~/ui/typography/slide-header";
import { CodeExample } from "~/ui/code-example";
import { SideBySide } from "~/ui/layout/side-by-side";
import { DotPoints } from "~/ui/typography/dot-points";
import { Stacked } from "~/ui/layout/stacked";

const points = [
  <>Incremental rollout reduces<br />risk</>,
  "Get feedback earlier",
];

const toggleConfig = `
ALPHA_FEATURE=user1@coolco.io,user2@coolco.io
BETA_FEATURE=*@coolco.io
`;

const usageExample = `
const user = {
  username: 'user1@coolco.io'
};

if (isFeatureEnabled('ALPHA_FEATURE', user)) {
  // super secret functionality
}
`

export function UserToggles() {
  return (
    <Slide>
      <SlideHeader>User toggles</SlideHeader>
      <SideBySide
        left={<DotPoints points={points} />}
        right={
          <Stacked>
            <CodeExample code={toggleConfig} language='ini' />
            <CodeExample code={usageExample} language='javascript' />
          </Stacked>
        }
      />
    </Slide>
  );
}
