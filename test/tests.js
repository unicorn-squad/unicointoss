const test = QUnit.test;



test('heads result when < .5 test', function(assert) {
    //Arrange
    const expected = 'heads';
    const number = .49;


    //Act 
    const result = getHornsOrButts(number);

    //Assert
    assert.equal(result, expected);
});

test('returns tail for >= .5', function(assert) {
   
    //Arrange
    const expected = 'tails';
    const number = .5;

    //Act
    const result = getHornsOrButts(number);

    //Assert
    assert.equal(result, expected);

});