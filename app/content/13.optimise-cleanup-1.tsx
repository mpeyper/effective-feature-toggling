import { Slide } from "~/ui/slide";
import { SlideHeader } from "~/ui/typography/slide-header";
import { DiffExample } from "~/ui/diff-example";

const originalExample = `
function AccountBalance({ account, navigate, openModal }) {
  if (isFeatureEnabled("OFFER_MODAL")) {
    return (
      <div>
        <Balance>\${account.balance}</Balance>
        {account.offers.length > 0 ? (
          <OfferIndicator onClick={() => openModal("offers")} />
        ) : undefined}
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
function AccountBalance({ account, openModal }) {
  return (
    <div>
      <Balance>\${account.balance}</Balance>
      {account.offers.length > 0 ? (
        <OfferIndicator onClick={() => openModal("offers")} />
      ) : undefined}
    </div>
  );
}
`;

export function OptimiseCleanup1() {
  return (
    <Slide>
      <SlideHeader>Tip — Optimise for cleanup</SlideHeader>
      <DiffExample
        original={originalExample}
        modified={modifiedExample}
        language="javascript"
        width="85%"
      />
    </Slide>
  );
}
