import React, { useState } from 'react';

import AddIcon from '@mui/icons-material/Add';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import RemoveIcon from '@mui/icons-material/Remove';
import { useResponsive } from 'shared/hooks';

import * as S from './styles';
import { FaqAccordionProps, FaqQuestion } from './types';

export const FaqAccordion = ({ faqs }: FaqAccordionProps) => {
  const { isMobile } = useResponsive();

  const [expandedQuestion, setExpandedQuestion] = useState<number | false>(false);
  const [expandedAnswer, setExpandedAnswer] = useState<{ [key: number]: number | false }>({});

  const handleQuestionClick = (index: number) => {
    if (expandedQuestion === index) {
      setExpandedQuestion(false);
    } else {
      setExpandedQuestion(index);
    }
  };

  const handleAnswerClick = (questionIndex: number, answerIndex: number) => {
    setExpandedAnswer((prevState) => ({
      ...prevState,
      [questionIndex]: prevState[questionIndex] === answerIndex ? false : answerIndex
    }));
  };

  const title = isMobile ? 'Olá, como podemos ajudar você?' : 'Perguntas comuns';

  return (
    <S.AccordionContainer>
      <S.Title variant="h2">{title}</S.Title>
      {faqs.map((faq, index) => (
        <S.Accordion
          key={faq.topic}
          expanded={expandedQuestion === index}
          onChange={() => handleQuestionClick(index)}
        >
          <S.AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <S.Topic variant="h6">{faq.topic}</S.Topic>
          </S.AccordionSummary>
          <S.AccordionDetails>
            {faq.questions.map((question: FaqQuestion, qIndex: number) => (
              <div key={question.question}>
                <S.QuestionWrapper onClick={() => handleAnswerClick(index, qIndex)}>
                  <S.Icon>{expandedAnswer[index] === qIndex ? <RemoveIcon /> : <AddIcon />}</S.Icon>
                  <S.Question variant="h6">{question.question}</S.Question>
                </S.QuestionWrapper>
                {expandedQuestion === index && expandedAnswer[index] === qIndex && (
                  <S.Answer>{question.answer}</S.Answer>
                )}

                <S.AnswerDivider hide={qIndex === faq.questions.length - 1} />
              </div>
            ))}
          </S.AccordionDetails>
        </S.Accordion>
      ))}
    </S.AccordionContainer>
  );
};
