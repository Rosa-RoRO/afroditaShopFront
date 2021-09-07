import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private usersService: UsersService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  async onSubmit(pForm: any) {
    const result = await this.usersService.login(pForm.value);
    // aquí tendré que guardar el token en el localstorage para que el resto de mi aplicación sepa que estoy logado
    if (result.token) {
      localStorage.setItem('token', result.token);
      this.router.navigate(['/profile'])
    } else {
      alert('Usuario o contraseña erróneos');
    }
  }

}
