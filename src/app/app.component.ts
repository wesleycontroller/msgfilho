import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'msgfilho';
  textorecebido: string = `Ainda nao recebido`

  ngOnInit() {
    window.addEventListener('message', this.onMessageReceived.bind(this));
  }

  onMessageReceived(event: MessageEvent) {
    // if (event.origin !== 'http://seu-dominio.com') {
    //   return;
    // }

    this.textorecebido = event.data;
  }
}
