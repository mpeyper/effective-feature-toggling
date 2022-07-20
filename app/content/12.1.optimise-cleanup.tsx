import { useMemo, useState } from "react";
import * as ini from "ini";
import { Slide } from "~/ui/slide";
import { SlideHeader } from "~/ui/typography/slide-header";
import { CodeExample } from "~/ui/code-example";
import { Drawer } from "~/ui/layout/drawers";
import { DiffExample } from "~/ui/diff-example";

const originalExample = `
export function AccountBalance({ account }) {
  const openModal = useModal();
  const navigate = useNavigate();

  if (isFeatureEnabled("OFFER_MODAL")) {
    return (
      <div>
        <Balance>\${account.balance}</Balance>
        {account.offers.length > 0 && (
          <OfferIndicator onClick={() => openModal("offers")} />
        )}
      </div>
    );
  } else {
    return (
      <div>
        <Button onClick={() => navigate("/offers")}>Offers</Button>
        <Balance>\${account.balance}</Balance>
      </div>
    );
  }
}
`;

const modifiedExample = `
export function AccountBalance({ account }) {
  const openModal = useModal();

  return (
    <div>
      <Balance>\${account.balance}</Balance>
      {account.offers.length > 0 && (
        <OfferIndicator onClick={() => openModal("offers")} />
      )}
    </div>
  );
}
`;

const initialFeatures = `
SHOW_DIFF=false
`;

function useFeatureEnabled(key: string) {
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

export function OptimiseCleanup1() {
  const [showDiff, config] = useFeatureEnabled("SHOW_DIFF");

  return (
    <Slide>
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
      <SlideHeader>Tip — Optimise for cleanup</SlideHeader>
      <div className="w-full h-full scale-90 mt-20 flex flex-col items-center justify-center">
        {showDiff ? (
          <DiffExample
            original={originalExample}
            modified={modifiedExample}
            language="javascript"
            width="85%"
          />
        ) : (
          <CodeExample
            code={originalExample}
            language="javascript"
            width="85%"
          />
        )}
      </div>
    </Slide>
  );
}
