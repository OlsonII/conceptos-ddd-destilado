export abstract class DomainEvent{

  protected _occurredOn: Date;

  protected constructor(occurredOn: Date) {
    this._occurredOn = occurredOn;
  }

  abstract process(): void;

}