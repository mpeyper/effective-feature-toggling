import { Slide } from "~/ui/slide";
import { SlideHeader } from "~/ui/typography/slide-header";
import { CodeExample } from "~/ui/code-example";
import { DiffExample } from "~/ui/diff-example";
import { ToggleTab } from "~/ui/toggle-tab";

const originalExample = `
export function AccountBalance({ account }) {
  if (isFeatureEnabled("OFFER_MODAL")) {
    return <AccountBalanceWithOffersModal account={account} />;
  } else {
    return <AccountBalanceWithOffersButton account={account} />;
  }
}

function AccountBalanceWithOffersModal({ account }) {
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

function AccountBalanceWithOffersButton({ account }) {
  const navigate = useNavigate();
  return (
    <div>
      <Button onClick={() => navigate("/offers")}>Offers</Button>
      <Balance>\${account.balance}</Balance>
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

export function OptimiseCleanup2() {
  return (
    <Slide>
      <SlideHeader>Tip — Optimise for cleanup<br />Branch by abstraction</SlideHeader>
      <ToggleTab feature="FEATURE_DIFF_VIEW">
        {(diffViewEnabled) => (
          <div className="w-full h-full scale-75 mt-20 flex flex-col items-center justify-center">
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
