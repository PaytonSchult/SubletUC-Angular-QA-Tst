import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Listing } from '../data/listing';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ListingService {
  private baseurl = environment.baseUrl + '/listing/';

  constructor(private http: HttpClient) {}
  
  //When a user will submit a listing or edit a listing
  createOrUpdateListing(listing: Listing): Observable<Listing> {
    return this.http.post<Listing>(this.baseurl + 'CreateListing', listing);
  }

  //view listings page that displays listings
  getAllListings(): Observable<Listing[]> {
    return this.http.get<Listing[]>(this.baseurl + 'GetAllListings');
  }

  //when a particular listing is selected (view listing pages and my listings pages)
  getListingById(id: number): Observable<Listing> {
    const params = new HttpParams().set('id', id.toString());
    return this.http.get<Listing>(`${this.baseurl}GetListing`, { params });
  }

  //delete a listing (only available on my listings area on profile page)
  deleteListing(id: number): Observable<any> {
    const params = new HttpParams().set('id', id.toString());
    return this.http.delete(`${this.baseurl}DeleteListing`, { params });
  }

  //get listings a user has on their account
  getUserListings(userId: number): Observable<Listing[]> {
    const params = new HttpParams().set('userId', userId.toString());
    return this.http.get<Listing[]>(`${this.baseurl}GetUserListings`, { params });
  }

  //get a user's favorited listings
  getFavoritedListings(userId: number): Observable<Listing[]> {
    const params = new HttpParams().set('userId', userId.toString());
    return this.http.get<Listing[]>(`${this.baseurl}GetUserListings`, { params });
  }
}