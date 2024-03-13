const chai = require('chai');
const expect = chai.expect;

const { handleChange } = require('../index');

describe('NodeDevUp', () => {
  it('should call the callback function when a file changes', () => {
    const callback = sinon.spy();
    const path = 'file.txt';

    handleChange(path, callback);

    // Simulate a file change event.
    fs.emit('change', path);

    expect(callback).to.have.been.calledOnce;
    expect(callback).to.have.been.calledWith(path);
  });
});
