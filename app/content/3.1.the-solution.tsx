import { Diagram } from "~/ui/diagram";
import { Stacked } from "~/ui/layout/stacked";
import { Slide } from "~/ui/slide";
import { SlideHeader } from "~/ui/typography/slide-header";

const blockedFeatures = `
gitGraph
  commit
  commit
  branch feature1
  checkout feature1
  commit
  commit
  checkout main
  merge feature1
  branch feature2
  checkout feature2
  commit
  checkout main
  merge feature2
  checkout feature1
  merge main
  commit
  checkout main
  merge feature1 tag: "feature1 released"
  checkout feature2
  merge main
  commit
  commit
  checkout main
  merge feature2 tag: "feature2 released"
  commit
`;

export function TheSolution1() {
  return (
    <Slide>
      <SlideHeader>Keeping main releasable</SlideHeader>
      <Stacked>
        <div className="scale-[2] transform-gpu">
          <Diagram nodes={blockedFeatures} />
        </div>
      </Stacked>
    </Slide>
  );
}
