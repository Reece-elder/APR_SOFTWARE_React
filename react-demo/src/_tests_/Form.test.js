import Form from '../components/011-testing/components/Form'

import { render } from "@testing-library/react";
import {create} from 'react-test-renderer';
import userEvent from "@testing-library/user-event";

describe(`Form testing`,() => {

    describe(`onSubmit test`, () => {

        // Parent level arranging
        const data = "test_name";

        it(`Should update the value of the input (which updates state) when text is typed in`, () => {

            // ? Arrange
            // render(Form) is being deconstructed and saved as 'container'
            const {container} = render(<Form/>);

            const textInput = container.querySelector('#username') // --> ID
            // const textInput = container.querySelector(`[name="username"]`) --> Looking for property / prop
            // const textInput = container.querySelector(`.username`) --> class
            // console.log(textInput);
            expect(textInput.value).toEqual("");

            // ? Act - simulated typing
            userEvent.type(textInput, data);

            // ? Assert
            expect(textInput.value).toEqual(data);

        });

        it(`Should call handleSubmit() when the submit button is clicked`, () => {

            const mockSubmit = jest.fn();

            // Arrange
            const {container} = render(<Form/>);

            const submitButton = container.querySelector('#submitButton');

            // Act
            // submitButton.onClick = mockSubmit();
            userEvent.click(submitButton, mockSubmit())

            // Assert
            expect(mockSubmit).toHaveBeenCalled();

        });

    });

    it(`Should match the snapshot`, () => {
        const instance = create(<Form/>).toJSON();
        expect(instance).toMatchSnapshot();
    })


    
})