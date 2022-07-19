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
  branch feature2
  checkout feature2
  commit
  checkout feature1
  checkout feature1
  commit tag: "feature1 ready"
  checkout main
  merge feature1
  checkout feature2
  merge main
  commit
  commit tag: "feature2 ready"
  checkout main
  merge feature2
  commit
`;

export function TheProblem1() {
  return (
    <Slide>
      <SlideHeader>The solution: Feature Branches?</SlideHeader>
      <Stacked>
        <div className="scale-[2] transform-gpu">
          <Diagram nodes={blockedFeatures} />
        </div>
      </Stacked>
    </Slide>
  );
}
