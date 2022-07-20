import lexiconLogo from "../images/lexicon-logo.png";
import { Title } from "~/content/0.title";
import { Agenda } from "~/content/1.0.agenda";
import { Categories } from "~/content/1.1.categories";
import { TheProblem0 } from "~/content/2.0.the-problem";
import { TheProblem1 } from "~/content/2.1.the-problem";
import { TheSolution } from "~/content/3.0.the-solution";
import { WhenNotToFeatureToggle } from "~/content/3.1.when-not-to-use-feature-toggles";
import { WhenNotToFeatureToggleAnswers } from "~/content/3.2.when-not-to-use-feature-toggles-answers";
import { SettingToggles } from "~/content/4.setting-toggles";
import { EncapsulateChecks } from "~/content/5.encapsulate-check";
import { EnablingCICD } from "~/content/6.enabling-cicd";
import { HandlingEnvironments } from "~/content/7.handling-environments";
import { TypesOfToggles } from "~/content/8.0.types";
import { FeatureToggleAsAService } from "~/content/9.feature-toggle-as-a-service";
import { TestingToggles } from "~/content/10.testing-toggles";
import { HowManyToggles } from "~/content/11.0.how-many-toggles";
import { HowManyTogglesAnswers } from "~/content/11.1.how-many-toggles-answers";
import { CleaningUp } from "~/content/11.2.cleaning-up";
import { OptimiseCleanup0 } from "~/content/12.optimise-cleanup-0";
import { OptimiseCleanup1 } from "~/content/13.optimise-cleanup-1";
import { WhyUseFeatureToggles } from "~/content/14.why-use-feature-toggles";
import { References } from "~/content/15.references";
import { Hiring } from "~/content/16.hiring";
import { Questions } from "~/content/17.questions";

export default function Index() {
  return (
    <>
      <main className="h-screen overflow-scroll scroll-smooth snap-mandatory snap-y">
        <Title />
        <Agenda />
        <Categories />
        <TheProblem0 />
        <TheProblem1 />
        <TheSolution />
        <WhenNotToFeatureToggle />
        <WhenNotToFeatureToggleAnswers />
        <SettingToggles />
        <EncapsulateChecks />
        <EnablingCICD />
        <HandlingEnvironments />
        <TypesOfToggles />
        <FeatureToggleAsAService />
        <TestingToggles />
        <HowManyToggles />
        <HowManyTogglesAnswers />
        <CleaningUp />
        <OptimiseCleanup0 />
        <OptimiseCleanup1 />
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
