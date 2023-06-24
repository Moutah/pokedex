export class LoginTrainer {
  static readonly type = '[Trainer] Login';

  constructor(public readonly token: string) {}
}
