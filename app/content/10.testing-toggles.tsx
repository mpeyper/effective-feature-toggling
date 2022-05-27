import { Slide } from "~/ui/slide";
import { SlideHeader } from "~/ui/typography/slide-header";
import { CodeExample } from "~/ui/code-example";
import { SideBySide } from "~/ui/layout/side-by-side";
import { DotPoints } from "~/ui/typography/dot-points";

const points = [
  <>Test functionality with the<br />toggle is enabled <strong>AND</strong><br />disabled</>,
];

const example = `
describe.each([
  { features: { THE_FEATURE: true } },
  { features: { THE_FEATURE: false } },
])('the feature tests', ({ features }) => {
  beforeEach(() => {
    jest.spyOn(utils, 'isFeatureEnabled')
      .mockImplementation((key => features[key]))
  })

  test('works as expected', () => {
    // ...
  })
})
`;

export function TestingToggles() {
  return (
    <Slide>
      <SlideHeader>Tip — Testing Toggles</SlideHeader>
      <SideBySide
        columns={10}
        leftSpan={4}
        rightSpan={6}
        left={<DotPoints points={points} />}
        right={<CodeExample code={example} language="javascript" />}
      />
    </Slide>
  );
}
