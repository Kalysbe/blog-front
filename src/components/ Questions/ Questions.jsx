import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

const dataQuestions = [
    {
        question:'Что такое аудит и зачем моя компания нуждается в услугах аудиторской фирмы?',
        answer:'Аудит - это проверка финансовой отчётности компании для подтверждения её достоверности. Ваша компания может требовать услуги аудита для обеспечения прозрачности финансовых данных перед стейкхолдерами.'
    },
    {
        question:'Какой опыт у вашей компании в проведении аудита?',
        answer:'Наша компания имеет многолетний опыт в области аудита различных компаний и отраслей.'
    },
    {
        question:'Какие услуги предоставляет ваша аудиторская компания помимо обычного финансового аудита?',
        answer:'Мы предоставляем услуги налогового консультирования, проверки эффективности бизнес-процессов и другие финансовые консультации.'
    },
    {
        question:'Какие этапы включает в себя процесс аудита у вас в компании?',
        answer:'Этапы включают сбор информации, анализ данных, проверку внутренних контрольных процедур, составление отчётности.'
    },
    {
        question:'Какие меры предосторожности вы предпринимаете для обеспечения конфиденциальности информации нашей компании во время аудита?',
        answer:'Мы соблюдаем строгие политики конфиденциальности и используем защищенные системы хранения данных.'
    },
    {
        question:'Какова стоимость услуг вашей аудиторской компании и как она формируется?',
        answer:'Стоимость зависит от масштаба проекта и необходимого объема работы. Мы формируем индивидуальные предложения для каждого клиента.'
    },
    {
        question:'Какие рекомендации вы можете предоставить для улучшения финансовых процессов в нашей компании на основе результатов аудита?',
        answer:'Наши рекомендации будут зависеть от особенностей вашего бизнеса, но обычно они направлены на улучшение внутренних контрольных процедур и оптимизацию финансовых операций.'
    }
]

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, .05)'
      : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

export default function CustomizedAccordions() {
  const [expanded, setExpanded] = React.useState('panel0');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div>
        <Typography variant='h4' sx={{ mt: 4, mb: 2, fontWeight: 600,textAlign:'center' }}>Часто задаваемые вопросы</Typography>
        {dataQuestions.map((item,index) => (
               <Accordion expanded={expanded === `panel${index}`} onChange={handleChange(`panel${index}`)}>
               <AccordionSummary aria-controls = {`panel${index}d-content`}  id={`panel${index}d-header`}>
                 <Typography>{item.question}</Typography>
               </AccordionSummary>
               <AccordionDetails>
                 <Typography>
                    {item.answer}
                </Typography>
               </AccordionDetails>
             </Accordion>
        ))}
   
    </div>
  );
}