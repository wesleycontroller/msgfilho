import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  textorecebido: string = `Ainda nao recebido`

  constructor(private router: Router) {}

  ngOnInit() {
    window.addEventListener('message', this.onMessageReceived.bind(this));
  }

  onMessageReceived(event: MessageEvent) {
    // if (event.origin !== 'http://seu-dominio.com') {
    //   return;
    // }

    this.textorecebido = event.data;
  }

  navegar() {
    this.router.navigate(['/rota2'])
  }
}
