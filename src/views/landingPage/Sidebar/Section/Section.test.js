import React from 'react';
import ReactDOM from 'react-dom';
import Section from './Section';
import renderer from 'react-test-renderer';
import {render, screen} from '@testing-library/react';
import defaultStructure from '../../../../config/defaultConfig.json';
import "@testing-library/jest-dom/extend-expect";

it('Section renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Section />, div);
});

// report error if no components are entered
it('Section reports error if no components are passed to render', () => {
    const reportError = jest.fn();
    const name = "1";
    const div = document.createElement('div');
    ReactDOM.render(<Section reportError={reportError} name={name} />, div);
    expect(reportError).toHaveBeenCalledWith(`Section ${name} was provided with no components`)
})

// report error if invalid components are entered
it('Section reports error if invalid component is entered', () => {
    const reportError = jest.fn();
    const name = "1";
    const compName = "blob";
    const div = document.createElement('div');
    ReactDOM.render(<Section reportError={reportError} components={[compName]} name={name} />, div);
    expect(reportError).toHaveBeenCalledWith(`Section ${name} found no match for an input component ${compName}`)
})

// renders props.name
it('Section renders the given name', () => {
    const name = "Test";
    render(<Section components={["LatitudeBandSelector"]} name={name} />);
    expect(screen.getByTestId('section')).toHaveTextContent(name.toUpperCase());
})


// Snapshot test
it('Section renders correctly from config file', () => {
    for (let section in defaultStructure.sections) {
        const tree = renderer
            .create(<Section name={section.name} reportError={() => {}} components={section.components} />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    }
});