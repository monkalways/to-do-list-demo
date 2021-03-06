var assert = require('assert');
var should = require('chai').should();

describe.skip('Basic Mocha Test', function() {
    it('should deal with objects', function() {
        var obj = {name: 'Jon', gender: 'male'};
        var objB = {name: 'Jon', gender: 'male'};

        obj.should.have.property('name').equal('Jon');
        obj.should.have.property('gender');

        obj.should.deep.equal(objB);
    });

    it('Should allow testing nulls', function() {
        var iAmNull = null;
        should.not.exist(iAmNull);
    });

});

