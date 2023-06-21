import {
  Accordion as MuiAccordion,
  AccordionSummary as MuiAccordionSummary,
  AccordionDetails as MuiAccordionDetails,
  Typography,
  IconButton,
  Divider
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { spacing } from 'theme/spacing';

export const AccordionContainer = styled('div')`
  color: ${({ theme }) => theme.palette.primary.dark};
`;

export const Title = styled(Typography)`
  margin-bottom: ${spacing.S64};
  margin-top: ${spacing.S32};
`;

export const Accordion = styled(MuiAccordion)`
  margin-bottom: ${spacing.S20};
  background-color: ${({ theme }) => theme.palette.secondary.light};
`;

export const AccordionSummary = styled(MuiAccordionSummary)`
  padding: ${spacing.S16};
`;

export const AccordionDetails = styled(MuiAccordionDetails)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0;
  gap: ${spacing.S16};
  margin-bottom: ${spacing.S26};
`;

export const QuestionWrapper = styled('div')`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Topic = styled(Typography)`
  font-weight: ${({ theme }) => theme.typography.fontWeightBold};
  display: flex;
  align-items: center;
`;

export const Question = styled(Typography)`
  font-weight: ${({ theme }) => theme.typography.fontWeightBold};
  display: flex;
  align-items: center;
`;

export const Answer = styled(Typography)`
  font-weight: ${({ theme }) => theme.typography.fontWeightRegular};
  margin: ${spacing.S16};
`;

export const AnswerDivider = styled(Divider, {
  shouldForwardProp: (prop) => !['hide'].includes(prop as string)
})<{ hide?: boolean }>`
  width: 95%;
  margin-left: ${spacing.S10};
  visibility: ${({ hide }) => (hide ? 'hidden' : 'visible')};
`;

export const Icon = styled(IconButton)`
  margin-right: ${spacing.S8};
`;
