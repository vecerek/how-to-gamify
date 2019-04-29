import test from 'ava';
import Framework from '../';
import ReferenceFramework from './';

const reference = {
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

test('creates a reference framework object correctly', (t) => {
  const framework = ReferenceFramework.create(reference);

  t.is(framework.constructor.name, 'ReferenceFramework');
  t.true(ReferenceFramework.prototype instanceof Framework);
  t.is(framework.id, 'reference-framework');
});
