import { MutatingDots, Audio, TailSpin } from 'react-loader-spinner';
import styled from 'styled-components';

const MutatingDotsStyled = styled.div`
  margin-left: 40%;
`;

const AudioSpinStyled = styled.div`
  /* margin-left: 40%; */
`;

const TailSpinStyled = styled.div`
  margin-left: 40%;
  margin-top: 50%;
`;

export const SpinnerMutatingDots = () => {
  return (
    <MutatingDotsStyled>
      <MutatingDots heigth="50" width="100" color="#3f51b5" />
    </MutatingDotsStyled>
  );
};

export const SpinnerAudio = () => {
  return (
    <AudioSpinStyled>
      <Audio color="#3f51b5" height={20} width={20} />
    </AudioSpinStyled>
  );
};

export const SpinnerTailSpin = () => {
  return (
    <TailSpinStyled>
      <TailSpin color="#3f51b5" height={80} width={80} mt={200} />;
    </TailSpinStyled>
  );
};
