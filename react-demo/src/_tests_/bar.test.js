import Bar from "../components/011-testing/components/Bar";

import { create } from "react-test-renderer";

describe(`Bar snapshot test`, () => {

    it(`Should match the snapshot`, () => {
        const element = create(<Bar/>).toJSON();
        expect(element).toMatchSnapshot();
    })

})