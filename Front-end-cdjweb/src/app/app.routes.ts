import { Routes } from '@angular/router';
import { CustumerComponent } from './custumer/custumer.component';
import { GetCustumerComponent } from './custumer/get-custumer/get-custumer.component';
import { Component } from '@angular/core';

export const routes: Routes = [
    { path: 'custumer/post', component: CustumerComponent },
    {path: 'custumer/get', component: GetCustumerComponent}
  ];