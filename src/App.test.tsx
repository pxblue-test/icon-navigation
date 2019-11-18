import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, MemoryRouter} from 'react-router-dom';

import App from './App';
import Logout from './pages/logout';
import Products from './pages/products';
import EventLog from './pages/events';
import Settings from './pages/settings';
import Home from './pages/home';

import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter: new Adapter()});

it('renders without crashing', () => {
 const div = document.createElement('div');
 ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, div);
 ReactDOM.unmountComponentAtNode(div);
});

it('defaults to homepage', () => {
    const wrapper = mount(
        <BrowserRouter>
          <App/>
        </BrowserRouter>
      );
      expect(wrapper.find(Home)).toHaveLength(1);
});

it('renders homepage for bad routes', () => {
    const wrapper = mount(
        <MemoryRouter initialEntries={[ '/random' ]}>
          <App/>
        </MemoryRouter>
      );
      expect(wrapper.find(Home)).toHaveLength(1);
});

it('renders correct route', () => {
    let wrapper = mount(
        <MemoryRouter initialEntries={[ '/logout' ]}>
          <App/>
        </MemoryRouter>
      );
      expect(wrapper.find(Logout)).toHaveLength(1);

      wrapper = mount(
        <MemoryRouter initialEntries={[ '/settings' ]}>
          <App/>
        </MemoryRouter>
      );
      expect(wrapper.find(Settings)).toHaveLength(1);

      wrapper = mount(
        <MemoryRouter initialEntries={[ '/eventlog' ]}>
          <App/>
        </MemoryRouter>
      );
      expect(wrapper.find(EventLog)).toHaveLength(1);

      wrapper = mount(
        <MemoryRouter initialEntries={[ '/products' ]}>
          <App/>
        </MemoryRouter>
      );
      expect(wrapper.find(Products)).toHaveLength(1);
});


