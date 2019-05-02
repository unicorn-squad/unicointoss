import getHornsOrButts from '../src/get-horns-or-butts.js';
const test = QUnit.test;



test('heads result when < .5 test', function(assert) {
    //Arrange
    const expected = 'unihead';
    const number = .49;


    //Act 
    const result = getHornsOrButts(number);

    //Assert
    assert.equal(result, expected);
});

test('returns tail for >= .5', function(assert) {
   
    //Arrange
    const expected = 'unibutt';
    const number = .5;

    //Act
    const result = getHornsOrButts(number);

    //Assert
    assert.equal(result, expected);

});