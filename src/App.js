import React from "react";
import Content from "./components/Content";
import styled from "styled-components";

const AppContaienr = styled.div`
  max-width: 800px;
`;
const Main = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

function App() {
  return (
    <Main>
      <AppContaienr>
        <Content
          inside={{
            name: "Vegeta",
            url: "https://a.allegroimg.com/s512/11cd1e/b3fcb404447d907f52516eaa5ae0/Dragon-Ball-Vegeta-podkladka-pod-mysz-anime",
            description:
              "Regal, egotistical, and full of pride, Vegeta was once a ruthless, cold-blooded warrior and outright killer, but later abandons his role in the Frieza Force, instead opting to remain and live on Earth. His character evolves from villain, to anti-hero, then to hero through the course of the series, repeatedly fighting alongside the universe's most powerful warriors in order to protect his new home and surpass Goku in power.",
            type: "Sayjanin",
            extra: "He have son Trunks",
          }}
        />

        <Content
          inside={{
            name: "Son Goku",
            url: "https://bi.im-g.pl/im/a1/51/14/z21307041Q,Son-Goku.jpg",
            description:
              " Goku is a Saiyan male originally sent to destroy Earth as an infant. However, a head injury at an early age alters his memory, ridding him of his initial destructive nature and allowing him to grow up to become one of Earth s greatest defenders. He constantly strives and trains to be the greatest warrior possible, which has kept the Earth and the universe safe from destruction many times.",
            type: "Sayjanin",
            extra: "He have son Gohan",
          }}
        />

        <Content
          inside={{
            name: "Krilin",
            url: "https://pbs.twimg.com/media/CmOlaIdXIAAvDTS.jpg",
            description:
              "Krillin had a brief rivalry with Goku when they first met and trained under Master Roshi, but they quickly became lifelong best friends. One of the most powerful and talented martial artists on Earth, Krillin is courageous, faithful, and good-natured. He is a prominent Z Fighter, despite usually being overpowered by the major enemies. His short stature and baldness (with the exception of when he grows out his hair in the Majin Buu Saga onwards, although he occasionally shaves his head in several sagas in Dragon Ball Super) aid him in his ability to provide comic relief during tense moments. During the latter half of Dragon Ball Z, he largely retires from fighting, opting to settle down with his family instead, becoming the husband of Android 18 and the father of Marron. However, he returns to his lifestyle as a warrior later on in Dragon Ball",
            extra: "Special Kienzan atack",
          }}
        />
      </AppContaienr>
    </Main>
  );
}

export default App;
