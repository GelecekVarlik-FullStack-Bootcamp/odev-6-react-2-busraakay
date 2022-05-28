import React from 'react'
import { InputGroup, FormControl, Row, Col, Button, ListGroup, Modal } from 'react-bootstrap';
import { useState } from 'react';
function Category() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div>
            <Row>
                <Col>
                    <InputGroup className="mb-3">
                        <FormControl
                            aria-label="Default"
                            aria-describedby="inputGroup-sizing-default"
                            placeholder='Kategori Başlığı'
                        />
                    </InputGroup>
                </Col>
                <Col>
                    <Button>Ekle</Button>
                </Col>
            </Row>

            <Row>
                <ListGroup>
                    <ListGroup.Item variant="primary">
                        <InputGroup className="mb-3">

                            <FormControl
                                aria-label="Default"
                                aria-describedby="inputGroup-sizing-default"
                            />
                        </InputGroup>
                        <Button onClick={handleShow}>Durumları Gör</Button>
                        <Button>Güncelle</Button>
                        <Modal show={show} onHide={handleClose}>
                            <Modal.Dialog>
                                <Modal.Header closeButton>
                                    <Modal.Title>Kategori 1 - </Modal.Title>
                                    <Modal.Title>Durum</Modal.Title>
                                </Modal.Header>

                                <Modal.Body>
                                    <Row>
                                        <Col>
                                            <InputGroup className="mb-3">
                                                <FormControl
                                                    aria-label="Default"
                                                    aria-describedby="inputGroup-sizing-default"
                                                    placeholder='Durum Başlığı'
                                                />
                                            </InputGroup>
                                        </Col>
                                        <Col>
                                            <InputGroup className="mb-3">
                                                <FormControl
                                                    aria-label="Default"
                                                    aria-describedby="inputGroup-sizing-default"
                                                    placeholder='Renk'
                                                />
                                            </InputGroup>
                                        </Col>
                                        <Col>
                                            <Button>Ekle</Button>
                                        </Col>
                                    </Row>

                                    <Row>
                                        <ListGroup>
                                            <ListGroup.Item variant="primary">
                                                <small>Todo 1 - </small>
                                                <small>Kategori - </small>
                                                <small>Durum</small>
                                                <InputGroup className="mb-3">
                                                    <FormControl
                                                        aria-label="Default"
                                                        aria-describedby="inputGroup-sizing-default"
                                                        placeholder='Renk Gir'
                                                    />
                                                </InputGroup>
                                                <Button>Rengi Değiştir</Button>
                                                <Button>Sil</Button>
                                            </ListGroup.Item>
                                        </ListGroup>
                                    </Row>
                                </Modal.Body>

                                <Modal.Footer>
                                    <Button variant="secondary" onClick={handleClose}>Kapat</Button>
                                </Modal.Footer>
                            </Modal.Dialog>
                        </Modal>
                    </ListGroup.Item>
                </ListGroup>
            </Row>
        </div>
    )
}

export default Category
