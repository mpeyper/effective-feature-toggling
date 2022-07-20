import { Slide } from "~/ui/slide";
import { SlideHeader } from "~/ui/typography/slide-header";
import { CodeExample } from "~/ui/code-example";
import { DiffExample } from "~/ui/diff-example";
import { ToggleTab } from "~/ui/toggle-tab";

const originalExample = `
export function AccountBalance({ account }) {
  const openModal = useModal();
  const navigate = useNavigate();

  const navigateToOffers = () => {
    if (isFeatureEnabled("OFFER_MODAL")) {
      openModal("offers");
    } else {
      navigate("/offers");
    }
  };

  return (
    <div>
      {!isFeatureEnabled("OFFER_MODAL") && (
        <Button onClick={navigateToOffers}>Offers</Button>
      )}
      <Balance>\${account.balance}</Balance>
      {isFeatureEnabled("OFFER_MODAL") && account.offers.length > 0 && (
        <OfferIndicator onClick={navigateToOffers} />
      )}
    </div>
  );
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

export function OptimiseCleanup0() {
  return (
    <Slide>
      <SlideHeader>Tip — Optimise for cleanup</SlideHeader>
      <ToggleTab feature="FEATURE_DIFF_VIEW">
        {(diffViewEnabled) => (
          <div className="w-full h-full scale-90 mt-20 flex flex-col items-center justify-center">
            {diffViewEnabled ? (
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
        )}
      </ToggleTab>
    </Slide>
  );
}
