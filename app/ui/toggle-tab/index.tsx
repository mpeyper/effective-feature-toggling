import type { ReactNode } from "react";
import { useState, useMemo } from "react";
import * as ini from "ini";
import { Drawer } from "~/ui/layout/drawers";
import { CodeExample } from "~/ui/code-example";

function useFeatureEnabled(key: string, initialFeatures: string) {
  const [featuresIni, setFeaturesIni] = useState(initialFeatures);

  const features = useMemo(() => {
    return ini.parse(featuresIni);
  }, [featuresIni]);

  const config = useMemo(
    () => ({
      text: featuresIni,
      setText: setFeaturesIni,
    }),
    [featuresIni]
  );

  return [features[key] === true, config] as const;
}

type Props = {
  feature: string;
  children: (enabled: boolean) => ReactNode;
};

export function ToggleTab({ feature, children }: Props) {
  const [enabled, config] = useFeatureEnabled(feature, `${feature}=false`);

  return (
    <>
      <Drawer>
        <div>
          <div className="w-1/2 h-full bg-[#1e1e1e] absolute" aria-hidden />
          <div
            className="w-full h-1/2 bottom-0 bg-[#1e1e1e] absolute"
            aria-hidden
          />
          <CodeExample
            code={config.text}
            language="ini"
            suggestions={false}
            onChange={config.setText}
          />
        </div>
      </Drawer>
      {children(enabled)}
    </>
  );
}
