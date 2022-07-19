import { SideBySide } from "~/ui/layout/side-by-side";
import { Slide } from "~/ui/slide";
import { SlideHeader } from "~/ui/typography/slide-header";
import { Text } from "~/ui/typography/text";
import lexiconLogo from "../images/lexicon-logo.png";
import lexiconTeam from "../images/lexicon-team.webp";

export function Hiring() {
  return (
    <Slide>
      <SlideHeader>We're hiring!</SlideHeader>
      <SideBySide
        columns={10}
        leftSpan={6}
        rightSpan={4}
        left={
          <div className="flex flex-col items-center justify-center ">
            <img src={lexiconLogo} alt="Lexicon" />
            <Text>https://www.lexicon.com.au/careers</Text>
            <Text>Or come chat with me</Text>
          </div>
        }
        right={<img src={lexiconTeam} alt="Lexicon team" />}
      />
    </Slide>
  );
}
