import { Diagram } from "~/ui/diagram";
import { Slide } from "~/ui/slide";
import { SlideHeader } from "~/ui/typography/slide-header";

const diagram = `
flowchart LR
  A(Pull Request)
  B([Merge])
  C(Main Branch)
  D([Deployments])
  E(Dev)
  F(Test)
  G(Staging)
  H(Production)
  I[Feature toggles control<br />which features are<br />available in each environment]
  A --> B
  B --> C
  C --> D
  D --> E
  D --> F
  D --> G
  D --> H
  I -.- D
`;

export function EnablingCICD() {
  return (
    <Slide>
      <SlideHeader>Enabling CI/CD</SlideHeader>
      <div className="scale-125 transform-gpu">
        <Diagram nodes={diagram} />
      </div>
    </Slide>
  );
}
