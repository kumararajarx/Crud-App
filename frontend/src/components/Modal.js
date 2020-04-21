import React, { Component } from "react";
    import {
      Button,
      Modal,
      ModalHeader,
      ModalBody,
      ModalFooter,
      Form,
      FormGroup,
      Input,
      Label
    } from "reactstrap";

    export default class CustomModal extends Component {
      constructor(props) {
        super(props);
        this.state = {
          activeItem: this.props.activeItem
        };
      }
      handleChange = e => {
        let { name, value } = e.target;
        if (e.target.type === "checkbox") {
          value = e.target.checked;
        }
        const activeItem = { ...this.state.activeItem, [name]: value };
        this.setState({ activeItem });
      };
      render() {
        const { toggle, onSave } = this.props;
        return (
          <Modal isOpen={true} toggle={toggle}>
            <ModalHeader toggle={toggle}>Add Store</ModalHeader>
            <ModalBody>
              <Form>
                <FormGroup>
                  <Label for="storeName">StoreName</Label>
                  <Input
                    type="text"
                    name="storeName"
                    value={this.state.activeItem.storeName}
                    onChange={this.handleChange}
                    placeholder="Enter the storename"
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="desc">Description</Label>
                  <Input
                    type="text"
                    name="desc"
                    value={this.state.activeItem.desc}
                    onChange={this.handleChange}
                    placeholder="Enter store description"
                  />
                </FormGroup>
                <FormGroup check>
                  <Label for="status">
                    <Input
                      type="checkbox"
                      name="status"
                      checked={this.state.activeItem.status}
                      onChange={this.handleChange}
                    />
                    Inn
                  </Label>
                </FormGroup>
              </Form>
            </ModalBody>
            <ModalFooter>
              <Button color="success" onClick={() => onSave(this.state.activeItem)}>
                Save
              </Button>
            </ModalFooter>
          </Modal>
        );
      }
    }