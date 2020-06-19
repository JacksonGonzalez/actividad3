import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.page.html',
  styleUrls: ['./users.page.scss'],
})
export class UsersPage implements OnInit {

	public usuarios : Array<Object> = [];

  constructor() {
  	this.usuarios = [
  		{
  			"name" : "Discork",
  			"email" : 'discork@email.com',
  			"phone" : '3216547890',
  			"gender" : 'M'
  		},
  		{
  			"name" : "Mega",
  			"email" : 'discork@email.com',
  			"phone" : '3216547890',
  			"gender" : 'F'
  		},
  		{
  			"name" : "Legend",
  			"email" : 'discork@email.com',
  			"phone" : '3216547890',
  			"gender" : 'M'
  		},
  		{
  			"name" : "Pac-Man",
  			"email" : 'discork@email.com',
  			"phone" : '3216547890',
  			"gender" : 'M'
  		},
  		{
  			"name" : "Super",
  			"email" : 'discork@email.com',
  			"phone" : '3216547890',
  			"gender" : 'F'
  		},
  		{
  			"name" : "Mario",
  			"email" : 'discork@email.com',
  			"phone" : '3216547890',
  			"gender" : 'M'
  		},
  		{
  			"name" : "World",
  			"email" : 'discork@email.com',
  			"phone" : '3216547890',
  			"gender" : 'M'
  		},
  		{
  			"name" : "Zelda",
  			"email" : 'discork@email.com',
  			"phone" : '3216547890',
  			"gender" : 'F'
  		},
  		{
  			"name" : "Discork",
  			"email" : 'discork@email.com',
  			"phone" : '3216547890',
  			"gender" : 'F'
  		}
  	];
  }

  ngOnInit() {
  }

}
