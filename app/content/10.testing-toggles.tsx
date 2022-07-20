import { Slide } from "~/ui/slide";
import { SlideHeader } from "~/ui/typography/slide-header";
import { CodeExample } from "~/ui/code-example";
import { SideBySide } from "~/ui/layout/side-by-side";
import { DotPoints } from "~/ui/typography/dot-points";

const points = [
  <>Test functionality with the<br />toggle is enabled <strong>AND</strong><br />disabled</>,
];

const example = `
describe('the feature tests', () => {
  describe('toggled on', () => {
    beforeEach(() => {
      jest.spyOn(utils, 'isFeatureEnabled')
        .mockImplementation(() => true);
    });

    test('works as expected', () => {
      // ...
    });
  });

  describe('toggled off', () => {
    beforeEach(() => {
      jest.spyOn(utils, 'isFeatureEnabled')
        .mockImplementation(() => false);
    });

    test('works as expected', () => {
      // ...
    });
  });
});
`;

export function TestingToggles() {
  return (
    <Slide>
      <SlideHeader>Tip — Testing Toggles</SlideHeader>
      <div className="w-full mt-20">
        <SideBySide
          columns={10}
          leftSpan={4}
          rightSpan={6}
          left={<DotPoints points={points} />}
          right={<CodeExample code={example} language="javascript" />}
        />
      </div>
    </Slide>
  );
}
