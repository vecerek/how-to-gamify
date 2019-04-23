import test from 'ava';
import Feature from './index';

function featureValueMacro(t, input, expected) {
  t.is(new Feature(input).value, expected);
}

featureValueMacro.title = (_title, input, expected) => `feature value ${input.value} translates to a numeric value of ${expected}`;

function featureComparisonMacro(t, inputA, inputB, expected) {
  const featureA = new Feature(inputA);
  const featureB = new Feature(inputB);

  t.is(featureA.compareTo(featureB), expected);
}

featureComparisonMacro.title = (_title, inputA, inputB, expected) => `feature value ${inputA.value} compared to the requested value ${inputB.value} returns ${expected}`;

test('initializes feature correctly', (t) => {
  t.notThrows(() => new Feature({ id: 'someFeature', value: 'E' }));
});

test('throws an error when feature value is invalid', (t) => {
  t.throws(() => new Feature({ id: 'someFeature', value: 'A' }));
});

// Numeric feature value tests
test(featureValueMacro, { id: 'featureA', value: 'E' }, 1);
test(featureValueMacro, { id: 'featureA', value: 'I' }, 0.5);
test(featureValueMacro, { id: 'featureA', value: 'U' }, 0);

// Feature comparison tests
test(featureComparisonMacro, { id: 'featureA', value: 'E' }, { id: 'featureB', value: 'E' }, 1);
test(featureComparisonMacro, { id: 'featureA', value: 'E' }, { id: 'featureB', value: 'I' }, 0.5);
test(featureComparisonMacro, { id: 'featureA', value: 'E' }, { id: 'featureB', value: 'U' }, 0);

test(featureComparisonMacro, { id: 'featureA', value: 'I' }, { id: 'featureB', value: 'E' }, 0.5);
test(featureComparisonMacro, { id: 'featureA', value: 'I' }, { id: 'featureB', value: 'I' }, 1);
test(featureComparisonMacro, { id: 'featureA', value: 'I' }, { id: 'featureB', value: 'U' }, 0.5);

test(featureComparisonMacro, { id: 'featureA', value: 'U' }, { id: 'featureB', value: 'E' }, 0);
test(featureComparisonMacro, { id: 'featureA', value: 'U' }, { id: 'featureB', value: 'I' }, 0);
test(featureComparisonMacro, { id: 'featureA', value: 'U' }, { id: 'featureB', value: 'U' }, 1);
