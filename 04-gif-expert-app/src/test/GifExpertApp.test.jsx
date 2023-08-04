import { render } from "@testing-library/react";
import { GifExpertapp } from "../GifExpertApp";
import { shallow } from "enzyme";

describe('Pruebas en <GifExpertApp/>', () => {
    test('', () => {

        const wrapper = shallow(<GifExpertapp />);
        
        console.log(wrapper);
        //wrapper.instance().onAddCategory('One Punch');
        
    });
});