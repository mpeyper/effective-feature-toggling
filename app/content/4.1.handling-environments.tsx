import { Slide } from "~/ui/slide";
import { SlideHeader } from "~/ui/typography/slide-header";
import { CodeExample } from "~/ui/code-example";

const localConfig = `
ENVIRONMENT_NAME=local

FEATURE_ALREADY_RELEASED=true
FEATURE_SOMETHING_NEW=true
`;

const devConfig = `
ENVIRONMENT_NAME=dev

FEATURE_ALREADY_RELEASED=true
FEATURE_SOMETHING_NEW=false
`;

const testConfig = `
ENVIRONMENT_NAME=test

FEATURE_ALREADY_RELEASED=true
FEATURE_SOMETHING_NEW=false
`;

const stagingConfig = `
ENVIRONMENT_NAME=staging

FEATURE_ALREADY_RELEASED=true
FEATURE_SOMETHING_NEW=false
`;

const demoConfig = `
ENVIRONMENT_NAME=demo

FEATURE_ALREADY_RELEASED=true
FEATURE_SOMETHING_NEW=false
`;

const prodConfig = `
ENVIRONMENT_NAME=production

FEATURE_ALREADY_RELEASED=true
FEATURE_SOMETHING_NEW=false
`;

export function HandlingEnvironments() {
  return (
    <Slide>
      <SlideHeader>Rolling features through environments</SlideHeader>
        <div className="grid grid-cols-2 gap-5 w-full p-20">
          <CodeExample code={localConfig} language='ini' />
          <CodeExample code={devConfig} language='ini' />
          <CodeExample code={testConfig} language='ini' />
          <CodeExample code={demoConfig} language='ini' />
          <CodeExample code={stagingConfig} language='ini' />
          <CodeExample code={prodConfig} language='ini' />
        </div>
    </Slide>
  );
}
