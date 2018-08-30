import { IFilm } from '@tehsolace/core-sandbox/Generated/client'

export default interface IFilmsApiClient {
	getAll(): Promise<IFilm[]>;
	get(id: number): Promise<IFilm>;
	create(data: IFilm): Promise<IFilm>;
	update(id: number, film: IFilm): Promise<IFilm>;
	delete(id: number): Promise<void>;
}