import { expect } from 'chai';
import RadialProgress from './RadialProgress'
import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';


describe('react-radial-progress', function () {
    it('it should load without any problems', function () {
        let renderer = ReactTestUtils.createRenderer();
        let props = {
            value: 100
        };
        renderer.render(<RadialProgress ref="app" {...props} />);
        let output = renderer.getRenderOutput();
        //console.log(output)
        expect(output.type).to.be.equal('svg');
    });
});
