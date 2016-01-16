
import {expect} from 'chai';
import {Foo} from '../src/Foo';

describe('Foo', () => {

    it('should work', () => {
        expect(Foo).to.be.a('function');
    });

});
