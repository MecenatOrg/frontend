import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { SearchBarWrapper, LabelIcon, FormWrapper, Form, ButtonClose } from './styles';
import { SearchIcon, CloseIcon } from '../../../icons';

type SearchBarProps = {
  isOpenSearch: boolean;
  onToggle(type: string): void;
};

const SearchBar: React.FC<SearchBarProps> = (props: SearchBarProps) => {
  const onToggleSearchBar = (): void => {
    props.onToggle('search');
  };

  return (
    <SearchBarWrapper className={props.isOpenSearch ? 'active' : 'close'}>
      <Container>
        <Row>
          <Col>
            <FormWrapper>
              <Form>
                <LabelIcon>
                  <SearchIcon width="12px" height="12px" />
                </LabelIcon>
                <input type="text" placeholder="що вас цiкавить?" autoFocus />
              </Form>
              <ButtonClose onClick={onToggleSearchBar}>
                <CloseIcon width="34px" height="34px" />
              </ButtonClose>
            </FormWrapper>
          </Col>
        </Row>
      </Container>
    </SearchBarWrapper>
  );
};

export default SearchBar;
