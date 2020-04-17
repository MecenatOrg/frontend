import React, { useRef, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import classNames from 'classnames';

import { SearchIcon, CloseIcon } from '../../../icons';

import { SearchBarWrapper, LabelIcon, FormWrapper, Form, ButtonClose } from './styles';

type SearchBarProps = {
  isOpenSearch: boolean;
  onToggle(type: string): void;
};

const SearchBar: React.FC<SearchBarProps> = ({ isOpenSearch, onToggle }: SearchBarProps) => {
  const inputSearch = useRef<HTMLInputElement>(null);
  const searchBarClasses = classNames({ active: isOpenSearch });
  useEffect(() => {
    if (inputSearch && inputSearch.current && isOpenSearch) {
      inputSearch.current.focus();
    }
  }, [isOpenSearch]);

  return (
    <SearchBarWrapper className={searchBarClasses}>
      <Container>
        <Row>
          <Col>
            <FormWrapper>
              <Form>
                <LabelIcon>
                  <SearchIcon />
                </LabelIcon>
                <input ref={inputSearch} name="search" type="text" placeholder="що вас цiкавить?" />
              </Form>
              <ButtonClose
                type="button"
                onClick={(): void => {
                  onToggle('search');
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