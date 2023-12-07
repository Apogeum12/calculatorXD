import { styled } from "solid-styled-components";

// --- Separately Component --- //
const SecondDisplayContainer = styled.div`
  width: 100%;
  height: 10%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const BacklightInputCont = styled.input`
  /* TODO */
`;
const BacklightDisplayCont = styled.div`
  width: 92.25%;
  height: 80%;
  border-radius: 12px; /* This same like buttons */
  background-color: rgba(139, 181, 253, 0.1);
  filter: drop-shadow(3px 4px 3px rgba(187, 198, 219, 0.1)) invert(10%);

  display: flex;
  align-items: center;
  justify-content: flex-start;
`;
const DataDisplayCont = styled.div`
  width: 100%;
  height: 100%;
  margin-left: 0.75rem;

  display: flex;
  justify-content: flex-start;
  align-items: center;
  overflow-x: auto;

  color: rgb(78, 124, 156);
  /* TODO: Configure by displaySize */
  letter-spacing: 0.1rem;
  font-size: 2.25rem;
  font-weight: 600;
  font-style: sans-serif;
  filter: drop-shadow(6px 3px 10px rgba(54, 124, 255, 0.65)) invert(10%);
`;

export const SecondDisplay = () => {
  return (
    <>
      <SecondDisplayContainer>
        <BacklightDisplayCont>
          <DataDisplayCont>PR23KLADO000SDFSDAFSDA</DataDisplayCont>
        </BacklightDisplayCont>
      </SecondDisplayContainer>
    </>
  );
};
