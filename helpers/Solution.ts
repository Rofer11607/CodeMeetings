import { questions } from './questions';

export type solution_ = {
  user: string;
  exec: callback_;
  for: string;
};

type callback_ = (input: any) => any;

export class SolutionFactory {
  constructor(private owner: string, private email: string) {
    //@ts-ignore
    if (!global['emails']) global['emails'] = [];
    //@ts-ignore
    global['emails'].push(this.email);
    //@ts-ignore
    global['emails'] = Array.from(new Set(global['emails']));
  }

  createSolution(
    questionName: keyof questions,
    callback: callback_
  ): solution_ {
    return {
      user: this.owner,
      for: questionName,
      exec: callback,
    };
  }
}
