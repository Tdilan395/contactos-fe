import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  private readonly url: string;

  constructor(private readonly http: HttpClient) {
    this.url = 'https://localhost:7004';
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
    const data = {
      Nombre: dataInput.name,
      Email: dataInput.email,
      Telefono: dataInput.phone,
      Direccion: dataInput.address,
      Company: dataInput.company,
      Nota: dataInput.note,
    };

    return this.http.post(`${this.url}/Home`, data, httpOptions);
  }

  getContacts() {
    // mock
    return this.http.get(`${this.url}/Home`);
  }
}
