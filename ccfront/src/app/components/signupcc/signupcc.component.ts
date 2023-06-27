import { Component } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { USER } from 'src/app/models/users';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-signupcc',
  templateUrl: './signupcc.component.html',
  styleUrls: ['./signupcc.component.css']
})
export class SignupccComponent {
  usersForm: FormGroup;
  regexString = /^[a-zA-Z]+$/;
  regexCorreo = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
  regexAlfaNumerico = /^[a-zA-Z0-9\s]+$/

  constructor(private fb: FormBuilder, private router: Router, private _usuarioService: UserService) {
    this.usersForm = this.fb.group({
      nombre: ['', [Validators.required, Validators.pattern(this.regexString)]],
      apellido: ['', [Validators.required, Validators.pattern(this.regexString)]],
      correo: ['', [Validators.required, Validators.pattern(this.regexCorreo)]],
      password: ['', [Validators.required, Validators.pattern(this.regexAlfaNumerico)]],
      universidad: ['', Validators.required],
    })
  }

  ngOnInit(): void {

  }

  agregarUser() {

    console.log(this.usersForm)

    console.log(this.usersForm.get('nombre')?.value);

    const nombreUser = this.usersForm.get('nombre')?.value;
    const apellidoUser = this.usersForm.get('apellido')?.value;
    const correoUser = this.usersForm.get('correo')?.value;
    const passwordUser = this.usersForm.get('password')?.value;
    const universidadUser = this.usersForm.get('universidad')?.value;

    if (nombreUser && apellidoUser && correoUser && passwordUser && universidadUser) {
      const User: USER = {
        nombre: nombreUser,
        apellido: apellidoUser,
        correo: correoUser,
        password: passwordUser,
        universidad: universidadUser
      }
      console.log(User)


      this._usuarioService.postUser(User).subscribe(data => {
        this.router.navigate(['/']);
        Swal.fire({
          color: '#fff',
          background: 'url(httpsi.gifer.com/5rN.gif) no-repeat center',
          title: 'Éxito!',
          text: 'El registro se creó correctamente',
          icon: 'success',
          confirmButtonText: 'Vale'
        })
      }, error => {
        console.log(error);
      })
    } else {
      Swal.fire({
        color: '#fff',
        background: 'url(httpsi.gifer.com/3tes.gif) no-repeat center',
        title: 'Error',
        text: 'Por favor, completa todos los campos',
        icon: 'error',
        confirmButtonText: 'Entendido'
      })
    }
  }
}
