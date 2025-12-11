import { HttpClient } from '@angular/common/http';
import { Component, signal, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  private http = inject(HttpClient);
  protected readonly title = signal('Dating APP');
  protected members = signal<any[]>([]);


  async ngOnInit() {
    this.members.set(await this.getMembers())
  }

  async getMembers() {
    try {
      return lastValueFrom(this.http.get<any[]>('https://localhost:5001/api/members'));
      
    } catch (error) {
      console.error('There was an error!', error);
      return [];
    }
  }

}
