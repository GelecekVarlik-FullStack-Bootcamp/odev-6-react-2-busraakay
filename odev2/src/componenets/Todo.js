import React from 'react';
import { InputGroup, FormControl, Row, Col, Dropdown, DropdownButton, Button, ListGroup } from 'react-bootstrap';

function Todo() {
    return (
        <div>
            <Row>
                <Col>
                    <InputGroup className="mb-3">
                        <FormControl
                            aria-label="Default"
                            aria-describedby="inputGroup-sizing-default"
                            placeholder='To do açıklama'
                        />
                    </InputGroup>
                </Col>
                <Col>
                    <DropdownButton id="dropdown-basic-button" title="Kategori">
                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                    </DropdownButton>
                </Col>
                <Col>
                    <DropdownButton id="dropdown-basic-button" title="Durum">
                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                    </DropdownButton>
                </Col>
                <Col><Button variant="primary">Ekle</Button>{' '}</Col>
            </Row>

            <Row>
                <ListGroup>
                    <ListGroup.Item variant="primary">
                        <small>Todo 1 - </small>
                        <small>Kategori - </small>
                        <small>Durum</small>
                        <Button>Güncelle</Button>
                    </ListGroup.Item>
                </ListGroup>
            </Row>

        </div>
    )
}

export default Todo
