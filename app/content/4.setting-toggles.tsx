import { Slide } from "~/ui/slide";
import { SlideHeader } from "~/ui/typography/slide-header";
import { CodeExample } from "~/ui/code-example";
import { Text } from "~/ui/typography/text";
import { DotPoints } from "~/ui/typography/dot-points";
import { SideBySide } from "~/ui/layout/side-by-side";

const configFile = `
export const config = {
  features: {
    AMAZING_NEW_PAGE: true,
    SWEET_PERFORMANCE_IMPROVEMENT: false
  }
};
`;

const envVariables = `
FEATURE_AMAZING_NEW_PAGE=true
FEATURE_SWEET_PERFORMANCE_IMPROVEMENT=false
`;

const dbTable = `
CREATE TABLE \`features\` (
  \`name\` VARCHAR(256),
  \`enabled\` BOOLEAN DEFAULT FALSE,
  PRIMARY KEY (\`name\`)
);
`;

export function SettingToggles() {
  return (
    <Slide>
      <SlideHeader>Setting feature toggles</SlideHeader>
      <div className="grid grid-cols-2 gap-10 w-full p-20">
        <div>
          <Text>Config file</Text>
          <CodeExample code={configFile} language="javascript" />
        </div>
        <div>
          <Text>Database</Text>
          <CodeExample code={dbTable} language="mysql" />
        </div>
        <div>
          <Text>Environment variables</Text>
          <CodeExample code={envVariables} language="ini" />
        </div>
        <div>
          <Text>Or your favourite key-value store</Text>
          <SideBySide
            left={<DotPoints points={["etcd", "Consul"]} />}
            right={<DotPoints points={["ZooKeeper", "whatever"]} />}
          />
        </div>
      </div>
    </Slide>
  );
}
