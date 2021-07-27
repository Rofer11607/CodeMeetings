const postmarkApiKey = '123009da-bf9e-40cc-a263-f0321fb881b7';

import { questions, question_ } from './questions';
import { SolutionFactory, solution_ } from './Solution';
import * as postmark from 'postmark';
const client = new postmark.ServerClient(postmarkApiKey);
export class QA {
  private currentQuestion: question_;
  private questions = new questions();

  constructor() {}

  validateQuestion(solution: solution_): void {
    //@ts-ignore
    this.currentQuestion = this.questions[solution.for];
    const resolvedValue = solution.exec(this.currentQuestion.input);
    const res = resolvedValue === this.currentQuestion.output;
    if (res) {
      console.log('\x1b[32m', `${this.currentQuestion.name} is correct`);
      client.sendEmail({
        From: 'Notifications@monsterrg.com',
        //@ts-ignore
        To: global['emails'].join(','),
        Subject: `${solution.user} just got a valid solution for ${solution.for}`,
        TextBody: `${solution.exec.toString()}`,
      });
    } else {
      throw new Error(
        `${this.currentQuestion.name} expected ${resolvedValue} to be ${this.currentQuestion.output}`
      );
    }
  }
}
//this is a test
