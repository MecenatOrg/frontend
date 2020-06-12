import React from 'react';
import { useTranslation } from 'react-i18next';
import { ContactFormWrapper, FormWrapper, SendButtonWrapper } from './styles';
import { Container, Row, Col } from 'react-bootstrap';
import { H4 } from 'shared/Typography';
import Input from 'shared/components/Input';
import Select from 'shared/components/Select';
import { SelectItem } from 'shared/types';
import { Button } from 'shared/components';
import { ButtonVariant } from 'shared/components/Button/component';

const ContactForm: React.FC = () => {
  const { t } = useTranslation();
  const selectItems: Array<SelectItem> = [
    {
      value: '1',
      name: 'Тема №1',
    },
    {
      value: '2',
      name: 'Тема №2',
    },
    {
      value: '3',
      name: 'Тема №3',
    },
  ];

  const themeSelected = (value: string): void => {
    console.log('selected', value);
  };

  return (
    <ContactFormWrapper>
      <Container>
        <Row>
          <Col md={{ span: 8, offset: 2 }}>
            <H4>{t('contactForm.HEADING')}</H4>
          </Col>
        </Row>
      </Container>
      <FormWrapper>
        <Container>
          <Row>
            <Col md={3} sm={12}>
              <Select placeholder={t('contactForm.THEME_PLACEHOLDER')} options={selectItems} onSelect={themeSelected} />
            </Col>
            <Col md={3} sm={12}>
              <Input
                placeholder={t('contactForm.NAME_PLACEHOLDER')}
                inputType={'text'}
                validationState={false}
                validationMessage={''}
              />
            </Col>
            <Col md={3} sm={12}>
              <Input
                placeholder={'+38 (___) ___ ___ ___ '}
                inputType={'phone'}
                validationState={false}
                validationMessage={''}
              />
            </Col>
            <Col md={3} sm={12}>
              <Input placeholder={'Email'} inputType={'email'} validationState={false} validationMessage={''} />
            </Col>
          </Row>
          <SendButtonWrapper>
            <Button variant={ButtonVariant.DARK} title={t('contactForm.SEND')} />
          </SendButtonWrapper>
        </Container>
      </FormWrapper>
    </ContactFormWrapper>
  );
};
export default ContactForm;
