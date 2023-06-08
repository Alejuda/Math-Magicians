import React from 'react';
import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import Screen from '../../components/screen';

describe('The Screen component', () => {
  it('Renders correctly', () => {
    const tree = renderer.create(<Screen />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Dwisplays the correct value', () => {
    render(<Screen render="9" />);
    expect(screen.getByTestId('screen-element')).toHaveTextContent('9');
  });
});
