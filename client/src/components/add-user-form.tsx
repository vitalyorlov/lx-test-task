import React, {Component} from 'react';
import styled from 'react-emotion';
import {EuiButton, EuiFieldText, EuiFlexGroup, EuiFlexItem, EuiFormRow, EuiHealth, EuiSuperSelect} from "@elastic/eui";

interface AddUserFormProps {
    addUser: (a: { variables: { name: string, email: string, status: string } }) => void;
}

interface AddUserFormState {
    name: string,
    email: string,
    status: string
}

export default class AddUserForm extends Component<AddUserFormProps, AddUserFormState> {
    options = [
        {
            value: 'Active',
            inputDisplay: (
                <EuiHealth color="success" style={{lineHeight: 'inherit'}}>
                    Active
                </EuiHealth>
            ),
        },
        {
            value: 'Not Active',
            inputDisplay: (
                <EuiHealth color="warning" style={{lineHeight: 'inherit'}}>
                    Not Active
                </EuiHealth>
            ),
        },
        {
            value: 'Blocked',
            inputDisplay: (
                <EuiHealth color="danger" style={{lineHeight: 'inherit'}}>
                    Blocked
                </EuiHealth>
            ),
        },
    ];
    state = {name: '', email: '', status: this.options[1].value};

    onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target as HTMLInputElement;
        console.log(event.target);
        this.setState({[name]: value} as unknown as AddUserFormState);
    };

    onSubmit = () => {
        this.props.addUser({variables: this.state});
    };

    onSelectChange = (value: string) => {
        this.setState({status: value});
    };

    render() {
        return (
            <Container>
                <EuiFlexGroup style={{width: '100%'}}>
                    <EuiFlexItem>
                        <EuiFormRow label="Name">
                            <EuiFieldText
                                name="name"
                                placeholder="Name"
                                value={this.state.name}
                                onChange={this.onChange}
                                aria-label="Use aria labels when no actual label is in use"
                            />
                        </EuiFormRow>
                    </EuiFlexItem>
                    <EuiFlexItem>
                        <EuiFormRow label="Email">
                            <EuiFieldText
                                name="email"
                                placeholder="Email"
                                value={this.state.email}
                                onChange={this.onChange}
                                aria-label="Use aria labels when no actual label is in use"
                            />
                        </EuiFormRow>
                    </EuiFlexItem>
                    <EuiFlexItem>
                        <EuiFormRow label="Status">
                            <EuiSuperSelect
                                options={this.options}
                                valueOfSelected={this.state.status}
                                onChange={this.onSelectChange}
                            />
                        </EuiFormRow>
                    </EuiFlexItem>
                    <EuiFlexItem grow={false}>
                        <EuiFormRow hasEmptyLabelSpace>
                            <EuiButton fill
                                       onClick={() => this.onSubmit()}>
                                Add User
                            </EuiButton>
                        </EuiFormRow>
                    </EuiFlexItem>
                </EuiFlexGroup>
            </Container>
        );
    }
}

/**
 * STYLED COMPONENTS USED IN THIS FILE ARE BELOW HERE
 */

const Container = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    flexGrow: 1,
    paddingBottom: 20,
    color: 'white',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
});
