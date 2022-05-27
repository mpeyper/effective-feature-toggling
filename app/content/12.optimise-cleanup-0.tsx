import { Slide } from "~/ui/slide";
import { SlideHeader } from "~/ui/typography/slide-header";
import { DiffExample } from "~/ui/diff-example";

const originalExample = `
function AccountBalance({ account, navigate, openModal }) {
  const navigateToOffers = () => {
    if (isFeatureEnabled("OFFER_MODAL")) {
      openModal("offers");
    } else {
      navigate("/offers");
    }
  };
  return (
    <div>
      {!isFeatureEnabled("OFFER_MODAL") ? (
        <Button onClick={navigateToOffers}>Offers</Button>
      ) : undefined}
      <Balance>\${account.balance}</Balance>
      {account.offers.length > 0 && isFeatureEnabled("OFFER_MODAL") ? (
        <OfferIndicator onClick={navigateToOffers} />
      ) : undefined}
    </div>
  );
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

export function OptimiseCleanup0() {
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
