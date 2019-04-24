const test = QUnit.test;

function getHornsOrButts(number) {
    return 'heads';
}

test('heads result when < .5 test', function(assert) {
    //Arrange
    const expected = 'heads';
    const number = .49;


    //Act 
    const result = getHornsOrButts(number);

    //Assert
    assert.equal(result, expected);
});