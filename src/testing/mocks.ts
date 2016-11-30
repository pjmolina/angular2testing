import { Observable } from 'rxjs';

export let showServiceStub = {
  getShow(id: number) {
    return Observable.of({ id: 0, name: 'Heidi', cover: 'http://heidi.com', rating: 1 });
  }
}

export class ActivatedRouteMock {
  constructor(public snapshot: any) {}
}

export class RouterStub {
  navigate(commands: any[]) { }
}
