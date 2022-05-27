import { Slide } from "~/ui/slide";
import { SlideHeader } from "~/ui/typography/slide-header";
import { CodeExample } from "~/ui/code-example";

const localConfig = `
ENVIRONMENT_NAME=local

FEATURE_RELEASED=true
FEATURE_SIGNED_OFF=true
FEATURE_PASSED_QA=true
FEATURE_IN_DEV=true
`;

const devConfig = `
ENVIRONMENT_NAME=dev

FEATURE_RELEASED=true
FEATURE_SIGNED_OFF=true
FEATURE_PASSED_QA=true
FEATURE_IN_DEV=true
`;

const qaConfig = `
ENVIRONMENT_NAME=qa

FEATURE_RELEASED=true
FEATURE_SIGNED_OFF=true
FEATURE_PASSED_QA=true
FEATURE_IN_DEV=false
`;

const uatConfig = `
ENVIRONMENT_NAME=uat

FEATURE_RELEASED=true
FEATURE_SIGNED_OFF=true
FEATURE_PASSED_QA=false
FEATURE_IN_DEV=false
`;

const stagingConfig = `
ENVIRONMENT_NAME=staging

FEATURE_RELEASED=true
FEATURE_SIGNED_OFF=false
FEATURE_PASSED_QA=false
FEATURE_IN_DEV=false
`;

const prodConfig = `
ENVIRONMENT_NAME=production

FEATURE_RELEASED=true
FEATURE_SIGNED_OFF=false
FEATURE_PASSED_QA=false
FEATURE_IN_DEV=false
`;

export function HandlingEnvironments() {
  return (
    <Slide>
      <SlideHeader>Rolling features through environments</SlideHeader>
        <div className="grid grid-cols-3 gap-5 w-full p-20">
          <CodeExample code={localConfig} language='ini' />
          <CodeExample code={devConfig} language='ini' />
          <CodeExample code={qaConfig} language='ini' />
          <CodeExample code={uatConfig} language='ini' />
          <CodeExample code={stagingConfig} language='ini' />
          <CodeExample code={prodConfig} language='ini' />
        </div>
    </Slide>
  );
}
