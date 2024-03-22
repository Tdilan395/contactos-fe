import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  private readonly url: string;

  constructor(private readonly http: HttpClient) {
    this.url = 'https://api.apispreadsheets.com/data/10487/';
  }

  addContact(dataInput: {
    name: string;
    email: string;
    phone: string;
    address: string;
    company: string;
    note: string;
  }) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    return this.http.post(`${this.url}/contacts`, dataInput, httpOptions);
  }

  getContacts() {
    // mock
    return this.http.get(`${this.url}/contacts`);
  }
}
