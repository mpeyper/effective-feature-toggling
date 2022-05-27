import { json } from "@remix-run/node";
import { Title } from "~/content/0.title";
import { Agenda, getAgendaData } from "~/content/1.agenda";
import { TheProblem } from "~/content/2.the-problem";
import { TheSolution } from "~/content/3.the-solution";
import { SettingToggles } from "~/content/4.setting-toggles";
import { EncapsulateChecks } from "~/content/5.encapsulate-check";
import { HandlingEnvironments } from "~/content/7.handling-environments";
import { EnablingCICD } from "~/content/6.enabling-cicd";
import { TypesOfToggles } from "~/content/8.0.types";
import { FeatureToggleAsAService } from "~/content/9.feature-toggle-as-a-service";
import { TestingToggles } from "~/content/10.testing-toggles";
import { CleaningUp } from "~/content/11.cleaning-up";
import { OptimiseCleanup0 } from "~/content/12.optimise-cleanup-0";
import { OptimiseCleanup1 } from "~/content/13.optimise-cleanup-1";
import { WhyUseFeatureToggles } from "~/content/14.why-use-feature-toggles";
import { Questions } from "~/content/15.questions";
import { HowManyToggles } from "~/content/11.0.how-many-toggles";
import { WhenToFeatureToggle } from "~/content/3.1.when-to-use-feature-toggles";

export async function loader() {
  return json({ ...getAgendaData() });
}

export default function Index() {
  return (
    <main className="h-screen overflow-scroll scroll-smooth snap-mandatory snap-y">
      <Title />
      <Agenda />
      <TheProblem />
      <TheSolution />
      <WhenToFeatureToggle />
      <SettingToggles />
      <EncapsulateChecks />
      <EnablingCICD />
      <HandlingEnvironments />
      <TypesOfToggles />
      <FeatureToggleAsAService />
      <TestingToggles />
      <HowManyToggles />
      <CleaningUp />
      <OptimiseCleanup0 />
      <OptimiseCleanup1 />
      <WhyUseFeatureToggles />
      <Questions />
    </main>
  );
}
