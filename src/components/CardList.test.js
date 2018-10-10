import { shallow, mount, render } from 'enzyme';
import React from 'react';
import CardList from './CardList';

it('expect to render CardList component', () => {
    const mockRobots = [
        {
            id: 1,
            name: 'John Wick',
            username: 'johnny',
            email: 'johnny@gmail.com'
        }
    ]

    expect(shallow(<CardList robots={mockRobots} />)).toMatchSnapshot();
});

