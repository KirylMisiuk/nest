import { Injectable } from '@nestjs/common';
import { CatsRepository } from './cats.repository';
import { Observable } from 'rxjs';

@Injectable()
export class CatsService {
    constructor(private readonly catsRepository: CatsRepository) {}

    findAll(): Observable<any[]> {
        return this.catsRepository.findAll().pipe();
    }
    create(cat): Observable<object> {
        return this.catsRepository.create(cat).pipe();
    }
    update(data): Observable<any[]> {
        return this.catsRepository.update(data).pipe();
    }
    delete(ids): Observable<object[]> {
        return this.catsRepository.delete(ids).pipe();
    }
    findOne(_id): Observable<object> {
        return this.catsRepository.findOne({ _id: _id }).pipe();
    }
}
