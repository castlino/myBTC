import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Post } from '../models/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private getAllPostsUrl = 'http://mybtc-api.linonico.test/api/posts';  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI2MjJkYjlkYzE5OGJhZTUzYjAxNzdlOTIiLCJqdGkiOiJlYzExMmJkZTdkYzdhZTBiNGM3MGExZTI0NzcxZDA5ODhmNDc1ZmNiMjQzNzdlMWMyMjdjYTMzZmM0Njg5YTJhZjQ1MDIwMDgzZTBkNTdmYyIsImlhdCI6MTY0NzE3NjIyOS45MTE4NDgsIm5iZiI6MTY0NzE3NjIyOS45MTE4NTIsImV4cCI6MTY3ODcxMjIyOS45MDQ0NSwic3ViIjoiNjIyZGI5Yzg3NjU2OGEzOGZkNGJhOTAyIiwic2NvcGVzIjpbXX0.gjcKEiYD2i7tfWDvcPSShzXY1hRjCY3asDKRMyrQwxPgHGzt5ddQsZKn91G0CxF_VDoUxe-stSXVxI78UQgiuNAlx098AD4oezVh06EyRP-ExG7hVrVulYlZe_oF8_0Uu3k3Cd3JvIFo7BHLdxRSywf7dycX5Q_gR-ZU8kpIZBIxdhAIrm_f4j7rGqgoLhjqqNNrLvHsfp5zm1dxv3ZJkyrTXLoJl78sYIDXGTLpj0f1HWyahdmY61ail8wSdhxL2K7LF0ev3AeuA7WFY9j6sPAA1S4DnvAy_LS0iQQDsfGZ6n8ZPbas6p0Y0tUupdoGjU6IAD7gP2u8_aCM88e7-D8oioP-7Pqt-_g40UWjAfJgt6W94kb0SXbVaJHHayk7IqBqsBwRQr7v81AU8cIvqo11DCJ3hkTrW_3Z-JUjfBOle5CSF2KulPkBmjlBJ_AyCYJ14V8GoBwCiTpunVUMi698MCHic6-t2qbGxDSkjjTfC8jga76nM6zuzxFyBz-767uan53Kh9Dr0XOOiC8neFiAmheDnQILeCKhftz69nW8Ilub9duX6kqPZLCtnOu-cKqBWZ_E-XS5SlJALFLrNyfWZ7-0aBfONkhaTeED13ZRGcNb4BMOaYAdCJ2ee847-z3eCp6j-CMPU-GBKga_fW_He2efPFzkq-vvLe3dmpw'
    })
  };

  constructor(
    private http: HttpClient
  ) { }

  getHeroes(): Observable<Post[]> {
    return this.http.get<Post[]>(this.getAllPostsUrl, this.httpOptions)
      .pipe(
        tap(_ => console.log('fetched cases...')),
        //tap(_ => this.log('HeroService: fetched heroes')),
        //catchError(this.handleError<Hero[]>('getHeroes', []))
      );
  }
}
