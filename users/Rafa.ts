import { SolutionFactory } from '../helpers/Solution';

const rafasSolutionFactory = new SolutionFactory(
  'Raphael',
  'rafac@monsterrg.com'
);

export const rafasSolution = rafasSolutionFactory.createSolution(
  'test',
  (i) => {
    return i + 1;
  }
);
