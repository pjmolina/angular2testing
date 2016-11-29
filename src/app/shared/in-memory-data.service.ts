import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let shows = [
      {id: 1, name: 'Doctor Who', cover: 'http://www.coverwhiz.com/content/Doctor-Who-Series-5.jpg', rating: 3},
      {id: 2, name: 'Game of Thrones', cover: 'http://www.coverwhiz.com/content/Game-Of-Thrones-Season-1.jpg', rating: 3},
      {id: 3, name: 'Dexter', cover: 'http://www.coverwhiz.com/content/Dexter-Season-8.jpg', rating: 1}
    ];

    return {shows};
  }
}
