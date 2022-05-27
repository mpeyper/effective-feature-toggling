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
  F(QA)
  G(UAT)
  H(Staging)
  I(Production)
  J[Feature toggles control<br />which features are<br />available in each environment]
  A --> B
  B --> C
  C --> D
  J -.- D
  D --> E
  D --> F
  D --> G
  D --> H
  D --> I
`;

export function EnablingCICD() {
  return (
    <Slide>
      <SlideHeader>Enabling CI/CD</SlideHeader>
      <Diagram nodes={diagram} />
    </Slide>
  );
}
