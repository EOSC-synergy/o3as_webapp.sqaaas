import React from 'react';
import ReferenceModelSelector from './ReferenceModelSelector';
import { render } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";
import { createTestStore } from '../../../../../store/store';
import { Provider } from "react-redux";

let store;
beforeEach(() => {
  store = createTestStore();
});

it('Component renders without crashing', () => {
    render(<Provider store={store}><ReferenceModelSelector /></Provider>);

});


// Snapshot test
it('renders correctly', () => {
    const { container } = render(<Provider store={store}><ReferenceModelSelector /></Provider>);
    expect(container).toMatchSnapshot();
  });



test.todo('changes the reference model correctly');