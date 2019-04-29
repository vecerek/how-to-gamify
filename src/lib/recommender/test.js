
import test from 'ava';
import loadData from './utils';
import Recommender from './';

let frameworks;

test.before(async () => {
  frameworks = Object.values(await loadData('frameworks'));
});

test('the score of an identical framework should be 1', (t) => {
  const referenceFramework = {
    id: 'user-defined',
    application_area: ['learning'],
    target: ['educator'],
    features: [
      { id: "objectives", value: "E" },
      { id: "feasibility", value: "E" },
      { id: "risk", value: "E" },
      { id: "investment", value: "U" },
      { id: "stakeholders", value: "U" },
      { id: "engagement_cycle", value: "E" },
      { id: "endgame", value: "E" },
      { id: "onboarding", value: "E" },
      { id: "rules", value: "E" },
      { id: "metrics", value: "E" },
      { id: "analytics", value: "E" },
      { id: "ethics", value: "E" },
      { id: "fun", value: "E" },
      { id: "motivation", value: "E" },
      { id: "social", value: "E" },
      { id: "desired_behaviours", value: "E" },
      { id: "profiling", value: "E" },
      { id: "taxonomy", value: "U" },
      { id: "storytelling", value: "E" },
      { id: "user_experience", value: "E" },
      { id: "technology", value: "E" }
    ]
  };

  const recommendr = new Recommender(frameworks, referenceFramework);
  const results = recommendr.results;
  const bestFit = results[0];

  t.is(bestFit.framework.id, 'mora_2016');
  t.is(bestFit.score, 1);
});
