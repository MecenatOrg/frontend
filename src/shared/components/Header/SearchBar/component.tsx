import React, { useRef, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

import { SearchIcon, CloseIcon } from 'shared/icons';
import { ToggleHandlerType } from 'shared/components/Header/component';

import { SearchBarWrapper, LabelIcon, FormWrapper, Form, ButtonClose } from './styles';

type SearchBarProps = {
  isOpenSearch: boolean;
  onToggle(type: ToggleHandlerType): void;
};

const SearchBar: React.FC<SearchBarProps> = ({ isOpenSearch, onToggle }: SearchBarProps) => {
  const { t } = useTranslation();
  const inputSearch = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputSearch && inputSearch.current && isOpenSearch) {
      inputSearch.current.focus();
    }
  }, [isOpenSearch]);

  return (
    <SearchBarWrapper isOpenSearch={isOpenSearch}>
      <Container>
        <Row>
          <Col>
            <FormWrapper>
              <Form>
                <LabelIcon>
                  <SearchIcon />
                </LabelIcon>
                <input ref={inputSearch} name={t('SEARCH')} type="text" placeholder={t('searchBar.PLACEHOLDER')} />
              </Form>
              <ButtonClose
                type="button"
                onClick={(): void => {
                  onToggle(ToggleHandlerType.SEARCH);
                }}
              >
                <CloseIcon />
              </ButtonClose>
            </FormWrapper>
          </Col>
        </Row>
      </Container>
    </SearchBarWrapper>
  );
};

export default SearchBar;
