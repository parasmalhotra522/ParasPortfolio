import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { EmailService } from '../services/email.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contactForm!: FormGroup;
  constructor(private _fb:FormBuilder, private _emailService:EmailService) { }

  ngOnInit(): void {
    this.contactForm = this._fb.group({
      name : new FormControl('',[Validators.required]),
      EmailAddress : new FormControl('', Validators.compose([Validators.required, Validators.email])),
      Body: new FormControl('', [Validators.required])
    });

  }
  
  onSubmit(FormData) {
    this._emailService.SendEmail(FormData)
      .subscribe((response) => {
        location.href = 'https://mailthis.to/confirm'
      }, error => {
      console.warn(error.responseText)
      console.log({ error })
    });
  }

}
