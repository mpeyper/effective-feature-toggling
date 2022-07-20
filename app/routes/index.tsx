import lexiconLogo from "../images/lexicon-logo.png";
import { Title } from "~/content/0.title";
import { Agenda } from "~/content/1.0.agenda";
import { Categories } from "~/content/1.1.categories";
import { TheProblem0 } from "~/content/2.0.the-problem";
import { TheProblem1 } from "~/content/2.1.the-problem";
import { TheSolution0 } from "~/content/3.0.the-solution";
import { TheSolution1 } from "~/content/3.1.the-solution";
import { EnablingCICD } from "~/content/3.2.enabling-cicd";
import { SettingToggles } from "~/content/4.0.setting-toggles";
import { HandlingEnvironments } from "~/content/4.1.handling-environments";
import { EncapsulateChecks } from "~/content/5.encapsulate-check";
import { WhenNotToFeatureToggles0 } from "~/content/6.0.when-not-to-use-feature-toggles";
import { WhenNotToFeatureToggles1 } from "~/content/6.1.when-not-to-use-feature-toggles";
import { TypesOfToggles } from "~/content/7.0.types";
import { FeatureToggleAsAService } from "~/content/8.feature-toggle-as-a-service";
import { TestingToggles } from "~/content/9.testing-toggles";
import { HowManyToggles0 } from "~/content/10.0.how-many-toggles";
import { HowManyToggles1 } from "~/content/10.1.how-many-toggles";
import { CleaningUp } from "~/content/11.0.cleaning-up";
import { OptimiseCleanup0 } from "~/content/11.1.optimise-cleanup";
import { OptimiseCleanup1 } from "~/content/11.2.optimise-cleanup";
import { OptimiseCleanup2 } from "~/content/11.3.optimise-cleanup";
import { WhyUseFeatureToggles } from "~/content/12.why-use-feature-toggles";
import { References } from "~/content/13.references";
import { Hiring } from "~/content/14.hiring";
import { Questions } from "~/content/15.questions";

export default function Index() {
  return (
    <>
      <main className="h-screen overflow-scroll scroll-smooth snap-mandatory snap-y">
        <Title />
        <Agenda />
        <Categories />
        <TheProblem0 />
        <TheProblem1 />
        <TheSolution0 />
        <TheSolution1 />
        <EnablingCICD />
        <SettingToggles />
        <HandlingEnvironments />
        <EncapsulateChecks />
        <WhenNotToFeatureToggles0 />
        <WhenNotToFeatureToggles1 />
        <TypesOfToggles />
        <FeatureToggleAsAService />
        <TestingToggles />
        <HowManyToggles0 />
        <HowManyToggles1 />
        <CleaningUp />
        <OptimiseCleanup0 />
        <OptimiseCleanup1 />
        <OptimiseCleanup2 />
        <WhyUseFeatureToggles />
        <References />
        <Hiring />
        <Questions />
      </main>
      <footer className="absolute z-10 right-0 bottom-0 mr-2 flex flex-row gap-2">
        <img className="w-32" src={lexiconLogo} alt="Lexicon" />
      </footer>
    </>
  );
}
