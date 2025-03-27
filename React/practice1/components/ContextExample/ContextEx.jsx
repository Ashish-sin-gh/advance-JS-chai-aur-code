import { useContext } from "react";
import SubTitle from "./SubTitle";
import Title from "./Title";
import LevelContext from "./LevelContext";

function ContextEx() {
  return (
    <>
      <LevelContext.Provider value={0}>
        <Title>
          <SubTitle>INDIA</SubTitle>
          <LevelContext.Provider value={2}>
            <Title>
              <SubTitle>UP</SubTitle>
              <LevelContext.Provider value={4}>
                <Title>
                  <SubTitle>Allahabad</SubTitle>
                </Title>
              </LevelContext.Provider>
            </Title>
          </LevelContext.Provider>
        </Title>
      </LevelContext.Provider>
    </>
  );
}

export default ContextEx;
