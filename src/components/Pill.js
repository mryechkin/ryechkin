import { styled } from 'wtf-design-system';

const PillOutline = styled('span', {
  background: 'linear-gradient(to right, $cyan9, $sky9, $indigo9)',
  borderRadius: '$full',
  padding: '0.125rem',
  fontSize: '$xs',
});

const PillContainer = styled('span', {
  backgroundColor: '$slate1',
  borderRadius: '$full',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexShrink: '0',
  color: '$cyan11',
  fontWeight: '$semibold',
  py: '$1',
  px: '$4',
});

export default function Pill({ css, innerCss, children }) {
  return (
    <PillOutline css={css}>
      <PillContainer className="tracking-wider" css={innerCss}>
        {children}
      </PillContainer>
    </PillOutline>
  );
}
