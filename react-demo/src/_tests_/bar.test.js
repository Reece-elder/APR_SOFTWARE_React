import Bar from "../components/011-testing/components/Bar";

import { create } from "react-test-renderer";

describe(`Bar snapshot test`, () => {

    let testComponent;

    beforeEach(() => {
        const TestInstance = create(<Bar/>);
        testComponent = TestInstance.root;
    });

    it(`Should match the snapshot`, () => {
        const element = create(<Bar/>).toJSON();
        expect(element).toMatchSnapshot();
    })

})