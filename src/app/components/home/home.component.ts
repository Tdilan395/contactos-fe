import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  // formName: string = '';
  // formEmail: string = '';
  // formPhone: string = '';
  // formAddress: string = '';
  // formCompany: string = '';
  // formNote: string = '';
  formFields = {
    name: '',
    email: '',
    phone: '',
    address: '',
    company: '',
    note: '',
  };

  contacts$: Observable<any> = this.contactService.getContacts();
  get contacts() {
    return [
      {
        name: 'Juan',
        email: 'juan@gmail.com',
        phone: '1234567890',
        address: 'Calle 123',
        company: 'Google',
        note: 'Nota de Juan',
      },
      {
        name: 'Juan',
        email: 'juan@gmail.com',
        phone: '1234567890',
        address: 'Calle 123',
        company: 'Google',
        note: 'Nota de Juan',
      },
      {
        name: 'Juan',
        email: 'juan@gmail.com',
        phone: '1234567890',
        address: 'Calle 123',
        company: 'Google',
        note: 'Nota de Juan',
      },
      {
        name: 'Juan',
        email: 'juan@gmail.com',
        phone: '1234567890',
        address: 'Calle 123',
        company: 'Google',
        note: 'Nota de Juan',
      },
    ];
  }

  constructor(private readonly contactService: ContactService) {}

  onNameChange(event: Event) {
    this.formFields.name = String(event);
  }
  onEmailChange(event: Event) {
    this.formFields.email = String(event);
  }
  onPhoneChange(event: Event) {
    this.formFields.phone = String(event);
  }
  onAddressChange(event: Event) {
    this.formFields.address = String(event);
  }
  onCompanyChange(event: Event) {
    this.formFields.company = String(event);
  }
  onNoteChange(event: Event) {
    this.formFields.note = String(event);
  }

  submit() {
    console.log('Enviando formulario...');

    if (
      !this.formFields.name ||
      !this.formFields.email ||
      !this.formFields.phone
    ) {
      return;
    }

    console.log(this.formFields);

    this.contactService.addContact(this.formFields).subscribe((response) => {
      console.log('Respuesta del servidor:', response);
      this.contactService.getContacts().subscribe((contacts) => {
        console.log('Contactos:', contacts);
      });
    });

    console.log('Formulario enviado');
  }
}
